# 🤖 PROMPT_RESUME.md - Contexte Claovia

## 🛠️ Tech Stack
-   **Framework** : Next.js 16.1.1 (App Router, Turbopack)
-   **Langage** : TypeScript
-   **Styling** : Tailwind CSS + Framer Motion (Animations complexes)
-   **Auth** : Clerk (`@clerk/nextjs`)
-   **DB** : Supabase (PostgreSQL) + Prisma 7
-   **AI** : OpenAI API (Lazy init)
-   **Hosting** : Vercel (Projet `claovia-app`)

## ⚡ État du Projet (07/01/2026)
-   **Production** : Déployé sur `https://claovia-app.vercel.app`.
-   **Design System** : Style "Premium" (Glassmorphism, gradients `accent` -> `deep`, animations fluides).
-   **Composant Critique** : `ScrollAnimation.tsx` (contient des animations SVG complexes et des transitions scroll-bound).

## 🚨 Points d'Attention Techniques
1.  **Prisma 7** : Ne PAS utiliser `url` dans `schema.prisma`. Le `DATABASE_URL` est passé via le constructeur `PrismaClient` dans `lib/prisma.ts`.
2.  **OpenAI** : Initialiser le client DANS les fonctions (`getOpenAIClient()`), pas en global, pour éviter les erreurs de build Vercel.
3.  **Middleware** : Toujours vérifier `middleware.ts` si ajout de nouvelles pages publiques.

## 🔐 Sécurité API
-   **Rate Limiting** : `Upstash` (Redis) utilisé sur `api/chat`.
-   **Access Control** :
    -   `api/chat` : Token REX requis.
    -   `api/generate-*` : Auth Clerk + Vérification stricte `rex.managerId === user.id`.

## 📝 Dernières Modifications Majeures
-   Audit & Hardening Sécurité API (7/1/2026).
-   Redesign complet section "Comment ça marche" (Flèche SVG animée, Mouse Descent).
-   Fix build Vercel (Prisma/OpenAI).
