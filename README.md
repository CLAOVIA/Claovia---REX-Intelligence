# Claovia - L'Intelligence Managériale

Transformez les feedbacks collaborateurs en plans d'actions managériaux concrets.

## Stack Technique

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Base de données:** PostgreSQL (Supabase) + Prisma ORM
- **Authentication:** Clerk
- **IA:** OpenAI GPT-4o
- **Email:** Resend
- **PDF:** @react-pdf/renderer
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Installation

### 1. Cloner le projet

```bash
git clone <votre-repo>
cd claovia
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
cp .env.example .env.local
```

Remplissez les variables suivantes :

#### Supabase (Database)

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Allez dans Settings > Database
3. Copiez la "Connection string" dans `DATABASE_URL`
4. Copiez la "Direct connection string" dans `DIRECT_URL`

#### Clerk (Authentication)

1. Créez un projet sur [clerk.com](https://clerk.com)
2. Allez dans API Keys
3. Copiez les clés dans `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` et `CLERK_SECRET_KEY`

#### OpenAI (IA)

1. Créez un compte sur [platform.openai.com](https://platform.openai.com)
2. Générez une API key
3. Copiez-la dans `OPENAI_API_KEY`

#### Resend (Email)

1. Créez un compte sur [resend.com](https://resend.com)
2. Ajoutez votre domaine ou utilisez le domaine de test
3. Générez une API key
4. Copiez-la dans `RESEND_API_KEY`

### 4. Initialiser la base de données

```bash
# Générer le client Prisma
npx prisma generate

# Pousser le schéma vers la base de données
npx prisma db push

# (Optionnel) Ouvrir Prisma Studio pour visualiser les données
npx prisma studio
```

### 5. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du Projet

```
claovia/
├── app/
│   ├── api/
│   │   ├── chat/           # API chat avec Clao (OpenAI)
│   │   ├── generate-rex/   # Génération d'analyse REX
│   │   └── generate-pdf/   # Export PDF
│   ├── dashboard/
│   │   ├── page.tsx        # Dashboard manager
│   │   └── rex/
│   │       ├── [id]/       # Détail d'un REX
│   │       └── new/        # Créer un nouveau REX
│   ├── rex/
│   │   └── [token]/        # Chat Clao (collaborateur)
│   ├── sign-in/            # Page de connexion
│   ├── sign-up/            # Page d'inscription
│   └── page.tsx            # Landing page
├── components/
│   └── landing/            # Composants de la landing page
├── lib/
│   ├── prisma.ts           # Client Prisma
│   ├── openai.ts           # Helpers OpenAI
│   ├── email.ts            # Helpers Email (Resend)
│   └── pdf.ts              # Génération PDF
├── prisma/
│   └── schema.prisma       # Schéma de base de données
└── middleware.ts           # Protection des routes (Clerk)
```

## Fonctionnalités

### Pour les Managers

1. **Dashboard**
   - Vue d'ensemble des REX en cours
   - Statistiques (taux de réponse, actions prioritaires)
   - Liste des REX récents

2. **Créer une campagne REX**
   - Ajouter des collaborateurs
   - Définir la durée de la campagne
   - Envoi automatique des invitations

3. **Analyser un REX**
   - Synthèse IA du ressenti collaborateur
   - Détection des signaux d'alerte
   - Recommandations d'actions prioritaires
   - Kit manager (email + guide d'entretien)
   - Export PDF

### Pour les Collaborateurs

1. **Chat Clao**
   - Conversation guidée de 5-10 minutes
   - Interface simple et intuitive
   - 100% confidentiel
   - Questions adaptatives

### Automatisations

- Envoi d'invitations par email
- Génération automatique de l'analyse après complétion du REX
- Notification du manager avec priorité
- Génération du kit manager (email + guide)

## Design System

### Couleurs

```css
--deep: #20372F;      /* Primary text, buttons */
--accent: #3A8577;    /* Highlights, interactions */
--light: #EBF5F3;     /* Subtle backgrounds */
--cream: #F9F9F7;     /* Main background */
```

### Typographie

- **Headings:** Poppins (500, 600, 700)
- **Body:** Inter (400, 500, 600)

### Règles

- **ZÉRO emoji** - Utiliser Lucide React icons
- **Glassmorphism** pour les effets visuels
- **Rounded-3xl** pour les cartes
- **Framer Motion** pour les animations

## Développement

### Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linter ESLint
npx prisma studio    # Interface Prisma
npx prisma db push   # Mettre à jour la DB
```

### Ajouter un modèle Prisma

1. Modifier `prisma/schema.prisma`
2. Exécuter `npx prisma db push`
3. Exécuter `npx prisma generate`

## Déploiement

### Vercel (Recommandé)

1. Push votre code sur GitHub
2. Importez le projet dans [Vercel](https://vercel.com)
3. Ajoutez les variables d'environnement
4. Déployez

### Variables d'environnement en production

Assurez-vous de configurer **toutes** les variables d'environnement dans Vercel :
- `DATABASE_URL` et `DIRECT_URL`
- `CLERK_SECRET_KEY` et `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `OPENAI_API_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_APP_URL` (URL de production)

## Sécurité

- ✅ Authentification Clerk
- ✅ Protection des routes avec middleware
- ✅ Tokens uniques pour les invitations REX
- ✅ Validation des données côté serveur
- ✅ Rate limiting (TODO: à implémenter)
- ✅ Confidentialité des conversations

## Prochaines étapes

- [ ] Implémenter la logique complète de base de données (actuellement en mock)
- [ ] Ajouter le rate limiting pour les APIs
- [ ] Créer les webhooks Clerk pour la gestion des utilisateurs
- [ ] Ajouter la gestion des organisations/teams
- [ ] Implémenter le système de facturation (Stripe)
- [ ] Ajouter des tests (Jest, Playwright)
- [ ] Améliorer l'accessibilité (WCAG 2.1)
- [ ] Ajouter le mode sombre
- [ ] Créer un système d'analytics

## Support

Pour toute question ou problème :
- Email: contact@claovia.com
- Documentation: [docs.claovia.com](https://docs.claovia.com)

## Licence

Propriétaire - Tous droits réservés © 2024 Claovia
