import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { RexCard } from "@/components/dashboard/RexCard";
import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function RexDetailPage({ params }: { params: { id: string } }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const rex = await prisma.rex.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!rex) {
    notFound();
  }

  // Security check: Only the manager or admin can view
  if (rex.managerId !== userId) {
    // In a real app check for ADMIN role too
    return <div className="p-8 text-center text-red-600">Accès non autorisé</div>;
  }

  // Map DB data to RexCard props
  const rexData = {
    collaborateur: {
      prenom: rex.collaborateurPrenom,
      nom: rex.collaborateurNom || "",
      metier: rex.collaborateurMetier || "Collaborateur",
      date: new Date(rex.createdAt).toLocaleDateString("fr-FR"),
    },
    rex: {
      synthese: rex.prioritePrincipale || "Analyse en cours...", // Fallback or mapping from analysisData
      recommandation: rex.analysisData ? (rex.analysisData as any).recommandation : "En attente...",
      thematiques: rex.analysisData ? (rex.analysisData as any).thematiques || [] : [],
      planAction: rex.analysisData ? (rex.analysisData as any).planAction || { aFaireMaintenant: [], aPlanifier: [] } : { aFaireMaintenant: [], aPlanifier: [] },
      kit: rex.analysisData ? (rex.analysisData as any).kit : undefined,
    },
  };

  // If analysisData exists but is unstructured, we might need a better mapper,
  // but for now assuming the AI generates exactly this structure in `analysisData` column.

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors -ml-2"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </Link>
              <div>
                <span className="text-sm text-gray-400 font-medium">Retour au Dashboard</span>
                <h1 className="text-xl font-head font-bold text-deep leading-none">Détail REX</h1>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-deep hover:bg-deep hover:text-white transition-all group">
              <Download size={18} />
              <span className="font-semibold text-sm hidden sm:inline">Export PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <RexCard data={rexData} />
      </main>
    </div>
  );
}
