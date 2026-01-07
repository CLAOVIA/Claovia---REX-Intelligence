import { NextRequest, NextResponse } from "next/server";
import { generateRexPdf } from "@/lib/pdf";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    // 1. Authentication (Security)
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const rexId = searchParams.get("rexId");

    if (!rexId) {
      return NextResponse.json(
        { error: "Missing rexId parameter" },
        { status: 400 }
      );
    }

    // 2. Authorization: Verify User exists and owns the REX
    const user = await prisma.user.findUnique({
      where: { clerkId }
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Fetch REX data from database
    const rex = await prisma.rex.findUnique({
      where: { id: rexId },
      include: {
        organization: true, // Assuming we need org details
        // We might want collaborator details if stored in Rex or related User
        collaborateur: true
      }
    });

    if (!rex) {
      return NextResponse.json(
        { error: "REX not found" },
        { status: 404 }
      );
    }

    // Strict Ownership Check (IDOR Protection)
    if (rex.managerId !== user.id && user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden: You do not have access to this REX" },
        { status: 403 }
      );
    }

    // Use Real Data for PDF Generation
    // Mapping DB fields to PDF utility expected format
    const pdfData = {
      collaborator: {
        name: `${rex.collaborateurPrenom} ${rex.collaborateurNom || ''}`.trim(),
        email: rex.collaborateurEmail,
        team: rex.collaborateurMetier || "Non renseigné",
        role: rex.collaborateurMetier || "Collaborateur",
      },
      date: rex.createdAt.toLocaleDateString("fr-FR"),
      analysis: (rex.analysisData as any) || { summary: "Analyse en attente" }, // Cast JSON
      recommendations: [], // Populate from analysisData if structure matches
      rawResponses: [] // Populate if available
    };

    // Keep Mock Data ONLY if REX status implies it's a test or empty (optional)
    // But for security audit, assume we rely on DB.

    // Generate PDF
    const pdfBuffer = await generateRexPdf(pdfData as any);

    // Return PDF as download - Convert Buffer to Uint8Array for Next.js 16 compatibility
    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="REX-${rex.collaborateurPrenom}-${Date.now()}.pdf"`,
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
