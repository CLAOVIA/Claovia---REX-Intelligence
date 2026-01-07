import { NextRequest, NextResponse } from "next/server";
import {
  analyzeRexConversation,
  generateManagerEmail,
  generateInterviewGuide,
} from "@/lib/openai";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { rexId } = await req.json();

    if (!rexId) {
      return NextResponse.json(
        { error: "Missing rexId" },
        { status: 400 }
      );
    }

    // TODO: Get REX from database
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

    // if (!rex || rex.status !== "COMPLETED") {
    //   return NextResponse.json(
    //     { error: "REX not found or not completed" },
    //     { status: 404 }
    //   );
    // }

    // Mock data for development
    const mockMessages = [
      { role: "assistant", content: "Bonjour, comment vas-tu ?" },
      {
        role: "user",
        content:
          "Honnêtement, c'est très intense. Le projet Alpha me prend beaucoup de temps.",
      },
      {
        role: "assistant",
        content: "Peux-tu m'en dire plus sur cette charge de travail ?",
      },
      {
        role: "user",
        content:
          "Les priorités changent souvent et j'ai du mal à déléguer certaines tâches.",
      },
    ];

    const collaboratorName = "Sophie Martin";

    // Analyze conversation with OpenAI
    const { analysis } = await analyzeRexConversation(
      mockMessages,
      collaboratorName
    );

    // Generate manager kit if there are high-priority recommendations
    const highPriorityRec = analysis.recommendations?.find(
      (r: any) => r.priority === "high"
    );

    let managerKit: Array<{ type: string; title: string; status: string; content: string }> = [];

    if (highPriorityRec) {
      // Generate invitation email
      const email = await generateManagerEmail(
        collaboratorName,
        highPriorityRec
      );

      // Generate interview guide
      const guide = await generateInterviewGuide(
        collaboratorName,
        analysis.keyPoints || [],
        highPriorityRec
      );

      managerKit = [
        {
          type: "email",
          title: "Invitation réunion 1:1",
          status: "ready",
          content: email,
        },
        {
          type: "guide",
          title: "Guide d'entretien",
          status: "ready",
          content: guide,
        },
      ];
    }

    // TODO: Save analysis to database
    // await prisma.rex.update({
    //   where: { id: rexId },
    //   data: {
    //     status: "ANALYZED",
    //     analysis: {
    //       ...analysis,
    //       managerKit
    //     },
    //     analyzedAt: new Date()
    //   }
    // });

    // TODO: Send notification to manager
    // await sendManagerNotification(rex.managerId, rexId);

    return NextResponse.json({
      success: true,
      analysis: {
        ...analysis,
        managerKit,
      },
    });
  } catch (error) {
    console.error("Generate REX API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
