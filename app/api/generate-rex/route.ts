import { NextRequest, NextResponse } from "next/server";
import {
  analyzeRexConversation,
  generateManagerEmail,
  generateInterviewGuide,
} from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Authentication
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { rexId } = await req.json();

    if (!rexId) {
      return NextResponse.json(
        { error: "Missing rexId" },
        { status: 400 }
      );
    }

    // 2. Authorization: Verify User & Ownership
    const user = await prisma.user.findUnique({
      where: { clerkId }
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const rex = await prisma.rex.findUnique({
      where: { id: rexId },
    });

    if (!rex) {
      return NextResponse.json(
        { error: "REX not found" },
        { status: 404 }
      );
    }

    // IDOR Protection
    if (rex.managerId !== user.id && user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // Check status
    if (rex.status !== "COMPLETED") {
      // If already analyzed, maybe return existing analysis?
      if (rex.status === "ANALYZED") {
        return NextResponse.json({
          success: true,
          message: "REX already analyzed",
          analysis: rex.analysisData
        });
      }
      return NextResponse.json(
        { error: "REX not ready for analysis" },
        { status: 400 }
      );
    }

    // Use Real Data
    const messages = rex.conversationData as any[];
    // basic validation of messages structure if needed
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "No conversation data found" },
        { status: 400 }
      );
    }

    const collaboratorName = `${rex.collaborateurPrenom} ${rex.collaborateurNom || ''}`.trim();

    // Analyze conversation with OpenAI
    const { analysis } = await analyzeRexConversation(
      messages,
      collaboratorName
    );

    // Generate manager kit if there are key recommendations
    const highPriorityRec = analysis.recommendations?.find(
      (r: any) => r.priority === "high" || r.priority === "medium" // broadened for demo
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

    // Save analysis to database
    await prisma.rex.update({
      where: { id: rexId },
      data: {
        status: "ANALYZED",
        analysisData: { // Schema uses analysisData not analysis
          ...analysis,
          managerKit
        },
        analyzedAt: new Date()
      }
    });

    // Send notification (placeholder)
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
