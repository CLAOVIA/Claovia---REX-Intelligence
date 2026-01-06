export const siteConfig = {
  name: "Claovia",
  description: "Vos collaborateurs parlent. Vos managers agissent.",
  tagline: "Transformez le feedback en plans d'action concrets",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/claovia",
    github: "https://github.com/claovia",
  },
}

export const stats = [
  {
    value: "50%",
    label: "des démissions liées au manager",
    source: "Gallup",
  },
  {
    value: "15%",
    label: "de turnover moyen en France",
    source: "INSEE 2024",
  },
  {
    value: "6-9 mois",
    label: "de salaire = coût d'un départ",
    source: "Deloitte",
  },
  {
    value: "7%",
    label: "de salariés français engagés",
    source: "Gallup 2024",
  },
]

export const thematiques = [
  {
    code: "T1",
    nom: "Relation Manager",
    emoji: "👔",
    description: "Communication, écoute, feedback, confiance, disponibilité",
  },
  {
    code: "T2",
    nom: "Charge & Organisation",
    emoji: "⚖️",
    description: "Volume, équilibre vie pro/perso, priorisation, ressources",
  },
  {
    code: "T3",
    nom: "Objectifs & Clarté",
    emoji: "🎯",
    description: "Clarté des missions, moyens, sens du travail",
  },
  {
    code: "T4",
    nom: "Motivation & Sens",
    emoji: "🔥",
    description: "Engagement, reconnaissance, frustrations, projection",
  },
  {
    code: "T5",
    nom: "Développement",
    emoji: "📈",
    description: "Compétences, formation, évolution, perspectives",
  },
  {
    code: "T6",
    nom: "Équipe & Environnement",
    emoji: "👥",
    description: "Ambiance, collaboration, conditions de travail",
  },
]

export const processSteps = [
  {
    number: 1,
    emoji: "📝",
    title: "Le collaborateur parle à Clao",
    description: "Une IA conversationnelle mène l'entretien REX",
  },
  {
    number: 2,
    emoji: "🔍",
    title: "L'IA analyse les 6 thématiques",
    description: "Analyse approfondie du feedback",
  },
  {
    number: 3,
    emoji: "📄",
    title: "Génération automatique du REX",
    description: "PDFs personnalisés pour le collaborateur et le manager",
  },
  {
    number: 4,
    emoji: "🛠️",
    title: "Le manager reçoit un kit complet",
    description: "Plan d'action, emails, guide réunion prêts à l'emploi",
  },
]

export const benefits = {
  dirigeant: {
    title: "Pour le Dirigeant",
    icon: "🎯",
    items: [
      "Réduire le turnover de 30%+",
      "ROI mesurable sur la rétention",
      "Pilotage QVCT data-driven",
    ],
  },
  drh: {
    title: "Pour le DRH",
    icon: "📊",
    items: [
      "Indicateurs QVCT exploitables",
      "Accompagnement managers simplifié",
      "Marque employeur renforcée",
    ],
  },
  manager: {
    title: "Pour le Manager",
    icon: "⚡",
    items: [
      "Gain de temps : tout est prêt",
      "Savoir exactement quoi faire",
      "Renforcer la relation collaborateur",
    ],
  },
  collaborateur: {
    title: "Pour le Collaborateur",
    icon: "💚",
    items: [
      "Se sentir vraiment écouté",
      "Expression libre et protégée",
      "Actions concrètes du manager",
    ],
  },
}

export const problems = [
  {
    icon: "💬",
    title: "Le feedback se perd",
    description: "Les retours des collaborateurs ne sont pas structurés ni suivis",
  },
  {
    icon: "⏰",
    title: "Les managers n'ont pas le temps",
    description: "Pas d'outils pour transformer le feedback en actions",
  },
  {
    icon: "🚪",
    title: "Les talents partent",
    description: "50% des démissions sont liées au manager (Gallup)",
  },
]

export const testimonials = [
  {
    name: "Marie Dubois",
    role: "DRH, TechCorp",
    content: "Claovia a transformé notre approche du feedback. Nos managers ont enfin des outils concrets.",
    avatar: "/avatars/marie.jpg",
  },
  {
    name: "Thomas Martin",
    role: "CEO, StartupXYZ",
    content: "Notre turnover a baissé de 35% depuis qu'on utilise Claovia. C'est notre meilleur investissement RH.",
    avatar: "/avatars/thomas.jpg",
  },
  {
    name: "Sophie Leroux",
    role: "Manager, BigCo",
    content: "Je gagne 3h par semaine. Les kits manager sont prêts à l'emploi, je peux me concentrer sur l'humain.",
    avatar: "/avatars/sophie.jpg",
  },
]
