import { NextRequest, NextResponse } from "next/server";
import { sendChatMessage } from "@/lib/openai";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting (Security)
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    // Check if Rate Limit is configured (requires env vars)
    if (process.env.UPSTASH_REDIS_REST_URL) {
      const { ratelimit } = await import("@/lib/ratelimit");
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
    }

    const { token, messages } = await req.json();

    if (!token || !messages) {
      return NextResponse.json(
        { error: "Missing token or messages" },
        { status: 400 }
      );
    }

    // 2. Access Control: Validate token against Database (REX Token)
    const rex = await prisma.rex.findUnique({
      where: { token },
    });

    if (!rex) {
      return NextResponse.json(
        { error: "Invalid REX token" },
        { status: 401 }
      );
    }

    // Optional: Check status if we want to lock completed REXs
    // if (rex.status === "COMPLETED" || rex.status === "ANALYZED") {
    //    // decide if we allow continuation
    // }

    // Send message to OpenAI
    const response = await sendChatMessage(messages);

    // Save interaction to database
    if (response.isComplete) {
      await prisma.rex.update({
        where: { id: rex.id },
        data: {
          status: "COMPLETED",
          conversationData: messages, // Storing messages in conversationData JSON field
          completedAt: new Date()
        }
      });
    } else {
      // Optionally save partial progress (e.g. status IN_PROGRESS)
      await prisma.rex.update({
        where: { id: rex.id },
        data: {
          status: "IN_PROGRESS",
          // conversationData: messages // We could save intermediate state too
        }
      });
    }

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
