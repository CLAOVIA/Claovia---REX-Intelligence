# 🚀 CLAOVIA - Guide de démarrage

## ✅ Projet créé avec succès !

Votre projet CLAOVIA est prêt à être utilisé. Voici comment démarrer :

---

## 📂 Emplacement du projet

```
/Users/rodriguegarniera/.gemini/antigravity/playground/spectral-feynman/claovia
```

---

## 🎯 Étapes pour voir le rendu

### 1. Ouvrir le terminal dans le dossier du projet

```bash
cd /Users/rodriguegarniera/.gemini/antigravity/playground/spectral-feynman/claovia
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

### 3. Ouvrir votre navigateur

Allez sur : **http://localhost:3000**

Vous verrez la landing page Claovia avec :
- ✅ Hero section
- ✅ Stats bar (4 statistiques clés)
- ✅ Section problème
- ✅ Section solution (4 étapes)
- ✅ Bénéfices par persona
- ✅ CTA final
- ✅ Footer

### 4. Tester l'authentification

- Connexion : **http://localhost:3000/sign-in**
- Inscription : **http://localhost:3000/sign-up**

---

## 🐙 Créer le dépôt GitHub

### Option 1 : Via l'interface GitHub (Recommandé)

1. **Aller sur GitHub** : https://github.com/new

2. **Créer un nouveau repository** :
   - Nom : `claovia`
   - Description : "Vos collaborateurs parlent. Vos managers agissent. - SaaS de feedback managérial"
   - Visibilité : Privé (recommandé) ou Public
   - **NE PAS** initialiser avec README, .gitignore ou license

3. **Copier l'URL du repo** (exemple : `https://github.com/votre-username/claovia.git`)

4. **Dans votre terminal** :

```bash
# Se placer dans le dossier du projet
cd /Users/rodriguegarniera/.gemini/antigravity/playground/spectral-feynman/claovia

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE-USERNAME/claovia.git

# Pousser le code
git branch -M main
git push -u origin main
```

### Option 2 : Via la ligne de commande GitHub (gh CLI)

Si vous avez GitHub CLI installé :

```bash
# Se placer dans le dossier du projet
cd /Users/rodriguegarniera/.gemini/antigravity/playground/spectral-feynman/claovia

# Créer le repo et pousser
gh repo create claovia --private --source=. --remote=origin --push
```

---

## 📦 Ce qui a été créé

### ✅ Structure complète
- Next.js 14 avec App Router
- TypeScript configuré
- Tailwind CSS avec couleurs Claovia
- Prisma avec schéma complet
- Clerk pour l'authentification
- Configuration OpenAI et Resend

### ✅ Pages créées
- `/` - Landing page complète
- `/sign-in` - Connexion
- `/sign-up` - Inscription

### ✅ Fichiers de configuration
- `config/site.ts` - Configuration du site (stats, thématiques, etc.)
- `config/prompts.ts` - Prompts IA pour Clao et l'analyse REX
- `prisma/schema.prisma` - Schéma de base de données
- `.env.local` - Variables d'environnement (déjà configurées)
- `middleware.ts` - Protection des routes avec Clerk

### ✅ Librairies installées
- `@clerk/nextjs` - Authentification
- `@prisma/client` - ORM
- `openai` - API OpenAI
- `resend` - Email
- `@react-pdf/renderer` - Génération PDF
- `zod` - Validation
- `lucide-react` - Icônes

---

## 🔧 Prochaines étapes de développement

Pour compléter le projet, vous devrez créer :

### 1. Dashboard Manager (priorité haute)
```bash
# Créer ces routes :
app/dashboard/page.tsx           # Vue d'ensemble
app/dashboard/rex/page.tsx       # Liste des REX
app/dashboard/rex/new/page.tsx   # Créer un REX
app/dashboard/rex/[id]/page.tsx  # Détail d'un REX
```

### 2. Interface Chat Clao (priorité haute)
```bash
# Créer ces routes :
app/rex/[token]/page.tsx         # Formulaire REX avec chat
app/api/chat/route.ts            # API streaming chat
```

### 3. APIs de génération (priorité haute)
```bash
app/api/generate-rex/route.ts    # Génération analyse IA
app/api/generate-pdf/route.ts    # Génération PDF
app/api/send-emails/route.ts     # Envoi emails
```

### 4. Composants UI
```bash
# Installer les composants shadcn/ui manquants
npx shadcn@latest add button card input badge avatar dialog
```

### 5. Base de données
```bash
# Pousser le schéma Prisma vers Supabase
npx prisma db push

# Générer le client Prisma
npx prisma generate
```

---

## 🎨 Personnalisation

### Changer les couleurs
Modifier `app/globals.css` :
```css
--claovia-dark: #0E3C26;
--claovia-main: #058247;
--claovia-light: #10B981;
```

### Modifier les textes
Modifier `config/site.ts` :
- Stats
- Thématiques
- Étapes du processus
- Bénéfices

### Modifier les prompts IA
Modifier `config/prompts.ts` :
- `CLAO_SYSTEM_PROMPT` - Comportement de Clao
- `ANALYSIS_SYSTEM_PROMPT` - Génération du REX

---

## 📚 Documentation

- **Next.js** : https://nextjs.org/docs
- **Clerk** : https://clerk.com/docs
- **Prisma** : https://www.prisma.io/docs
- **Tailwind CSS** : https://tailwindcss.com/docs
- **OpenAI** : https://platform.openai.com/docs

---

## 🆘 Aide

En cas de problème :

1. **Erreur de compilation** : Vérifier les imports et les types TypeScript
2. **Erreur Prisma** : Vérifier DATABASE_URL dans .env.local
3. **Erreur Clerk** : Vérifier les clés dans .env.local
4. **Port déjà utilisé** : Changer le port avec `npm run dev -- -p 3001`

---

## 📝 Git - Commandes utiles

```bash
# Voir le statut
git status

# Créer une nouvelle branche
git checkout -b feature/nom-feature

# Commit des changements
git add .
git commit -m "Message du commit"

# Pousser vers GitHub
git push origin main

# Voir l'historique
git log --oneline
```

---

**Bon développement ! 🚀**

*Projet généré avec Claude Code*
