import { NextRequest, NextResponse } from "next/server";
import { sendChatMessage } from "@/lib/openai";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { token, messages } = await req.json();

    if (!token || !messages) {
      return NextResponse.json(
        { error: "Missing token or messages" },
        { status: 400 }
      );
    }

    // TODO: Validate token and get REX from database
    // const invitation = await prisma.invitation.findUnique({
    //   where: { token },
    //   include: { rex: true }
    // });

    // if (!invitation || invitation.status === "EXPIRED") {
    //   return NextResponse.json(
    //     { error: "Invalid or expired invitation" },
    //     { status: 404 }
    //   );
    // }

    // Send message to OpenAI
    const response = await sendChatMessage(messages);

    // TODO: Save messages to database
    // if (response.isComplete) {
    //   await prisma.rex.update({
    //     where: { id: invitation.rexId },
    //     data: {
    //       status: "COMPLETED",
    //       messages: messages,
    //       completedAt: new Date()
    //     }
    //   });
    // }

    return NextResponse.json({
      message: response.message,
      isComplete: response.isComplete,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
