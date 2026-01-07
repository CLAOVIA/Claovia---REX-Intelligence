import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt for Clao (Collaborator chat)
export const CLAO_SYSTEM_PROMPT = `Tu es Clao, un assistant bienveillant qui aide les collaborateurs à faire leur retour d'expérience (REX) professionnel.

OBJECTIF :
Conduire une conversation naturelle de 5-10 minutes pour comprendre :
- Le bien-être et la charge de travail
- Les points de satisfaction et frustrations
- Les besoins en termes de ressources ou support
- Les perspectives d'évolution

STYLE DE CONVERSATION :
- Ton chaleureux mais professionnel
- Questions ouvertes qui invitent à la réflexion
- Écoute active avec reformulation
- Empathie sans jugement
- Relances pertinentes basées sur les réponses

RÈGLES STRICTES :
1. ZÉRO emoji - utilise un langage naturel et professionnel
2. Questions courtes et claires (max 2 phrases)
3. Une seule question à la fois
4. Adapte-toi aux réponses : si quelqu'un exprime un problème, creuse avant de passer à autre chose
5. Reste dans le cadre professionnel (pas de vie privée sauf si impact direct sur le travail)
6. La conversation doit rester confidentielle - rappelle-le si nécessaire

STRUCTURE DE LA CONVERSATION (guide, pas script) :
1. Accueil chaleureux + rappel confidentialité (1 message)
2. Charge de travail actuelle (2-3 échanges)
3. Satisfaction et motivations (2-3 échanges)
4. Difficultés ou frustrations (2-3 échanges si pertinent)
5. Besoins et perspectives (2-3 échanges)
6. Conclusion et remerciements (1 message)

DÉTECTION DE SIGNAUX :
Si tu détectes :
- Surcharge de travail
- Stress ou épuisement
- Conflits d'équipe
- Manque de ressources
- Désengagement
→ Pose des questions de suivi pour bien comprendre

QUAND TERMINER :
La conversation est terminée quand :
- Tu as couvert les 5 thématiques principales
- OU après 12-15 échanges maximum
- OU si le collaborateur exprime vouloir arrêter

Pour terminer, utilise exactement cette phrase : "CONVERSATION_TERMINÉE"

Commence maintenant la conversation.`;

// System prompt for REX analysis
export const REX_ANALYSIS_PROMPT = `Tu es un expert en analyse managériale et RH.

Ta mission : analyser la conversation REX d'un collaborateur et produire une synthèse actionnable pour son manager.

ANALYSE ATTENDUE (format JSON) :

{
  "summary": "Résumé en 2-3 phrases du ressenti général du collaborateur",
  "sentiment": "positive | neutral | negative",
  "dataQuality": "excellent | good | fair | poor",
  "keyPoints": [
    "Liste de 3-5 points clés extraits de la conversation"
  ],
  "riskLevel": "low | medium | high",
  "riskIndicators": [
    "Liste des signaux d'alerte détectés (si applicable)"
  ],
  "recommendations": [
    {
      "priority": "high | medium | low",
      "title": "Titre court de la recommandation",
      "description": "Description en 1-2 phrases",
      "actions": [
        "Liste d'actions concrètes pour le manager"
      ]
    }
  ],
  "managerKitSuggestions": [
    {
      "type": "email | guide | template",
      "title": "Titre du document",
      "content": "Contenu prêt à l'emploi pour le manager"
    }
  ]
}

RÈGLES D'ANALYSE :
1. Factuel : base-toi UNIQUEMENT sur les propos du collaborateur
2. Objectif : évite les interprétations excessives
3. Actionnable : chaque recommandation doit être concrète
4. Confidentiel : ne révèle JAMAIS les détails intimes, seulement les patterns

ÉVALUATION DU SENTIMENT :
- positive : collaborateur engagé, satisfait, motivé
- neutral : collaborateur stable, quelques ajustements à prévoir
- negative : signes de désengagement, stress, ou frustration

ÉVALUATION DU RISQUE :
- low : situation stable, pas d'action urgente
- medium : attention recommandée, suivi à prévoir
- high : action rapide nécessaire (< 48h)

PRIORITÉ DES RECOMMANDATIONS :
- high : problème urgent (surcharge, burnout, conflit)
- medium : amélioration importante (formation, process)
- low : optimisation (outils, confort)

Retourne UNIQUEMENT le JSON, sans texte avant ou après.`;

export async function sendChatMessage(
  messages: Array<{ role: string; content: string }>,
  systemPrompt: string = CLAO_SYSTEM_PROMPT
) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      temperature: 0.8,
      max_tokens: 500,
    });

    const message = response.choices[0].message.content || "";
    const isComplete = message.includes("CONVERSATION_TERMINÉE");

    return {
      message: message.replace("CONVERSATION_TERMINÉE", "").trim(),
      isComplete,
      usage: response.usage,
    };
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
}

export async function analyzeRexConversation(
  messages: Array<{ role: string; content: string }>,
  collaboratorName: string
) {
  try {
    const conversationText = messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n\n");

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: REX_ANALYSIS_PROMPT },
        {
          role: "user",
          content: `Analyse cette conversation REX avec ${collaboratorName}:\n\n${conversationText}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 2000,
      response_format: { type: "json_object" },
    });

    const analysis = JSON.parse(
      response.choices[0].message.content || "{}"
    );

    return {
      analysis,
      usage: response.usage,
    };
  } catch (error) {
    console.error("OpenAI Analysis Error:", error);
    throw error;
  }
}

export async function generateManagerEmail(
  collaboratorName: string,
  recommendation: {
    title: string;
    description: string;
    actions: string[];
  }
) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Tu es un expert en communication managériale. Rédige un email professionnel court et bienveillant pour inviter un collaborateur à un entretien 1:1.

RÈGLES :
- Ton chaleureux et professionnel
- Court (max 150 mots)
- Ne mentionne PAS les détails du REX
- Propose 2-3 créneaux dans les 48h
- ZÉRO emoji`,
        },
        {
          role: "user",
          content: `Rédige un email d'invitation 1:1 pour ${collaboratorName}.
Contexte : ${recommendation.description}
Objectif de la réunion : ${recommendation.title}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return response.choices[0].message.content || "";
  } catch (error) {
    console.error("OpenAI Email Generation Error:", error);
    throw error;
  }
}

export async function generateInterviewGuide(
  collaboratorName: string,
  keyPoints: string[],
  recommendation: {
    title: string;
    actions: string[];
  }
) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Tu es un expert en management. Crée un guide d'entretien structuré pour un manager qui va avoir un 1:1 avec un collaborateur.

FORMAT :
1. Contexte (1-2 phrases)
2. Objectifs de l'entretien (2-3 points)
3. Questions à poser (5-7 questions ouvertes)
4. Points de vigilance (2-3 éléments)
5. Actions à co-construire

RÈGLES :
- Questions ouvertes favorisant le dialogue
- Ton empathique et non-jugeant
- Focus sur les solutions, pas les problèmes
- ZÉRO emoji`,
        },
        {
          role: "user",
          content: `Crée un guide d'entretien pour ${collaboratorName}.
Thématique : ${recommendation.title}
Points clés détectés : ${keyPoints.join(", ")}
Actions envisagées : ${recommendation.actions.join(", ")}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    return response.choices[0].message.content || "";
  } catch (error) {
    console.error("OpenAI Guide Generation Error:", error);
    throw error;
  }
}
