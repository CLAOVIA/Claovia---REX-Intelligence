import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "./prisma";

/**
 * Verify Clerk authentication and return userId
 * Returns null if not authenticated
 */
export async function verifyAuth(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}

/**
 * Require authentication for API route
 * Returns error response if not authenticated
 */
export async function requireAuth(): Promise<{ userId: string } | NextResponse> {
  const userId = await verifyAuth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized - Authentication required" },
      { status: 401 }
    );
  }

  return { userId };
}

/**
 * Verify token validity for REX chat (token-based auth)
 * @param token - REX token from request
 * @returns Rex object if valid, null otherwise
 */
export async function verifyRexToken(token: string) {
  try {
    const rex = await prisma.rex.findUnique({
      where: { token },
    });

    // Check if REX exists
    if (!rex) {
      return null;
    }

    // Check if REX is still in valid state for chat
    if (!["PENDING", "IN_PROGRESS"].includes(rex.status)) {
      // potentially allow logic here to resume if needed
    }

    return rex;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

/**
 * Verify user owns a specific REX
 * @param rexId - REX ID to check
 * @param userId - User ID from Clerk
 * @returns true if user owns the REX (as manager)
 */
export async function verifyRexOwnership(
  rexId: string,
  userId: string // Clerk ID
): Promise<boolean> {
  try {
    const rex = await prisma.rex.findUnique({
      where: { id: rexId },
    });

    if (!rex) {
      return false;
    }

    // Find the user in our DB using Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return false;
    }

    // Check if user is the manager
    // In future: could also check if user is Admin of the organization
    return rex.managerId === user.id;
  } catch (error) {
    console.error("Ownership verification error:", error);
    return false;
  }
}
