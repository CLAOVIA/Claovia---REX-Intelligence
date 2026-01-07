import { NextRequest, NextResponse } from "next/server";
import { generateRexPdf } from "@/lib/pdf";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const rexId = searchParams.get("rexId");

    if (!rexId) {
      return NextResponse.json(
        { error: "Missing rexId parameter" },
        { status: 400 }
      );
    }

    // TODO: Fetch REX data from database
    // const rex = await prisma.rex.findUnique({
    //   where: { id: rexId },
    //   include: {
    //     invitation: {
    //       include: {
    //         user: true
    //       }
    //     }
    //   }
    // });

    // if (!rex || rex.status !== "ANALYZED") {
    //   return NextResponse.json(
    //     { error: "REX not found or not analyzed" },
    //     { status: 404 }
    //   );
    // }

    // Mock data for development
    const mockData = {
      collaborator: {
        name: "Sophie Martin",
        email: "sophie.martin@company.com",
        team: "Produit",
        role: "Product Manager",
      },
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      analysis: {
        summary:
          "Les réponses de Sophie indiquent une surcharge cognitive importante sur le projet Alpha. Le sentiment global est en baisse comparé au trimestre dernier (-15%). Des signaux d'alerte concernant l'équilibre vie pro/perso ont été détectés.",
        sentiment: "negative",
        dataQuality: "excellent",
        keyPoints: [
          "Surcharge de travail sur le projet Alpha (mention récurrente)",
          "Difficulté à déléguer certaines tâches",
          "Frustration liée aux changements de priorités fréquents",
          "Besoin de clarification sur les objectifs à moyen terme",
        ],
        riskLevel: "high",
        riskIndicators: [
          "Mention de stress 3 fois dans les réponses",
          "Score d'engagement en baisse de 15%",
          "Temps de travail hebdomadaire estimé >50h",
        ],
      },
      recommendations: [
        {
          priority: "high",
          title: "Organiser un point de décharge sous 48h",
          description:
            "Planifier une réunion 1:1 pour identifier les tâches qui peuvent être redistribuées ou reportées.",
          actions: [
            "Identifier 2-3 tâches à déléguer immédiatement",
            "Revoir les priorités du projet Alpha",
            "Établir des limites claires sur les horaires de travail",
          ],
        },
        {
          priority: "medium",
          title: "Clarifier la roadmap produit",
          description:
            "Organiser une session de planification pour réduire l'incertitude et les changements de priorités.",
          actions: [
            "Présenter la vision à 3 mois",
            "Définir les critères de priorisation",
            "Mettre en place un processus de validation des changements",
          ],
        },
      ],
      rawResponses: [
        {
          question: "Comment évalues-tu ta charge de travail actuelle ?",
          answer:
            "Honnêtement, c'est très intense. Le projet Alpha monopolise beaucoup de temps et les priorités changent souvent.",
        },
        {
          question: "Qu'est-ce qui te motive le plus dans ton travail ?",
          answer:
            "J'adore créer de nouveaux produits et travailler avec l'équipe, mais j'ai moins de temps pour ça en ce moment.",
        },
        {
          question:
            "As-tu les ressources nécessaires pour atteindre tes objectifs ?",
          answer:
            "Globalement oui, mais je manque de clarté sur les priorités à moyen terme.",
        },
      ],
    };

    // Generate PDF
    const pdfBuffer = await generateRexPdf(mockData);

    // Return PDF as download - Convert Buffer to Uint8Array for Next.js 16 compatibility
    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="REX-${mockData.collaborator.name.replace(
          / /g,
          "-"
        )}-${Date.now()}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
