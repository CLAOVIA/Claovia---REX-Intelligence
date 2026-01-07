import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { DashboardClient } from "./DashboardClient";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/sign-in");
  }

  // Fetch REXs for this manager
  // In a real app we might verify if the DB user exists or sync it
  const rexs = await prisma.rex.findMany({
    where: {
      managerId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const userName = user ? `${user.firstName} ${user.lastName}` : "Manager";

  return <DashboardClient rexs={rexs} userName={userName} />;
}
