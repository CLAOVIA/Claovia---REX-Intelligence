# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Production server
npm run start

# Linting
npm run lint

# Database operations
npx prisma generate          # Generate Prisma client (runs automatically on npm install)
npx prisma db push          # Push schema changes to database
npx prisma studio           # Open Prisma Studio GUI
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 16.1.1 with App Router and Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom design system
- **Database**: PostgreSQL via Prisma ORM
- **Authentication**: Clerk (@clerk/nextjs)
- **AI**: OpenAI GPT-4o with Vercel AI SDK
- **Email**: Resend
- **PDF Generation**: @react-pdf/renderer
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Application Domain

Claovia is an HR SaaS platform for manager-employee feedback (REX - Retour d'Expérience):
1. **Employee flow**: Chat with "Clao" AI assistant to provide feedback via conversational interface
2. **AI Analysis**: GPT-4o analyzes employee responses and generates manager action plans
3. **Manager flow**: Dashboard to view analyzed feedback with actionable recommendations
4. **Outputs**: PDF reports for both employee and manager, automated email notifications

### Key Database Models

The Prisma schema defines a multi-tenant B2B structure:

- **Organization**: Top-level entity (companies using Claovia)
  - Has plan tiers (FREE, STARTER, PRO, ENTERPRISE)
  - Contains users, REX, and invitations

- **User**: Both managers and employees
  - Linked to Clerk authentication via `clerkId`
  - Has hierarchical manager-employee relationship (`managerId` self-reference)
  - Roles: COLLABORATEUR, MANAGER, HR, ADMIN

- **Rex**: Core feedback entity
  - Stores conversation data (`conversationData` JSON) and AI analysis (`analysisData` JSON)
  - Tracks 6 theme scores (t1-t6): Relation, Charge, Objectifs, Motivation, Développement, Équipe
  - Status lifecycle: PENDING → IN_PROGRESS → COMPLETED → ANALYZING → ANALYZED → SENT → VIEWED → ACTIONED
  - Supports anonymous feedback (`isAnonymous`)
  - Multiple sources: TYPEBOT (external), PORTAL (internal), API

- **Invitation**: For inviting new users to organizations

### Route Protection (middleware.ts)

Clerk middleware protects all routes except:
- Public marketing pages: `/`, `/fonctionnalites`, `/mon-histoire`, `/contact`
- Authentication: `/sign-in`, `/sign-up`
- REX chat interface: `/rex/:token` (uses unique token, not authentication)
- Webhooks: `/api/webhook/*`

Protected routes (require Clerk authentication):
- `/dashboard/*` - Manager interface
- `/api/*` (except webhooks)

### Design System

**Color Palette** (defined in `app/globals.css`):
```css
--deep: #0F172A        /* Slate 900 - Primary text */
--deep-light: #1E293B  /* Slate 800 - Secondary text */
--accent: #0EA5E9      /* Sky 500 - Primary accent (changed from green) */
--accent-dark: #0284C7 /* Sky 600 - Accent hover */
--light: #F1F5F9       /* Slate 100 - Light backgrounds */
--cream: #FFFFFF       /* Pure white */
```

**Important Design Rules**:
- NO emojis in UI (use Lucide icons instead)
- Glassmorphism effects via `.glass-panel` utility class
- Primary border radius: `rounded-3xl` for cards
- Typography: Inter font family with font feature settings enabled
- Use Framer Motion for animations with `AnimatePresence` for enter/exit

### React Hooks Rules (CRITICAL)

**This codebase has had hooks violations**. Always follow:
1. All hooks (useState, useEffect, etc.) MUST be at the top of components
2. Never call hooks after conditional returns
3. Example violation (manager-doc.tsx was fixed):
   ```tsx
   // ❌ WRONG
   function Component() {
     const [step, setStep] = useState(0);
     if (step === 0) return <View1 />;
     const [docStep, setDocStep] = useState(0); // ❌ Called after conditional!
   }

   // ✅ CORRECT
   function Component() {
     const [step, setStep] = useState(0);
     const [docStep, setDocStep] = useState(0); // ✅ All hooks at top
     if (step === 0) return <View1 />;
   }
   ```

### Landing Page Components

Located in `components/landing/`:
- `navbar.tsx`: Responsive navbar with mobile menu, scroll effects
- `collab-chat.tsx`: Animated demo of employee chat (links to external Typebot)
- `manager-doc.tsx`: Animated demo showing manager notification → analysis flow (3 states)

These components use staged animations with setTimeout/useEffect to create sequential reveals.

### File Structure

```
app/
├── api/              # API routes
├── dashboard/        # Manager dashboard (protected)
├── rex/
│   └── [token]/      # Employee chat interface (public with token)
├── sign-in/          # Clerk auth
├── sign-up/          # Clerk auth
├── fonctionnalites/  # Marketing page
├── mon-histoire/     # Marketing page
├── contact/          # Marketing page
├── layout.tsx        # Root layout with Clerk provider
├── page.tsx          # Landing page
└── globals.css       # Design system CSS

components/
├── landing/          # Landing page components
└── ui/               # shadcn/ui components (if added)

lib/                  # Utilities (prisma.ts, openai.ts, email.ts, pdf.ts)
prisma/
└── schema.prisma     # Database schema
```

### Development Notes

1. **Database**: Run `npx prisma generate` after any schema changes. The `postinstall` script does this automatically.

2. **Environment Variables**: Requires `.env.local` with:
   - `DATABASE_URL` and `DIRECT_URL` (PostgreSQL)
   - Clerk keys: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
   - `OPENAI_API_KEY`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_APP_URL`

3. **Clerk Integration**: The app uses Clerk's `clerkMiddleware` (new v6 API, not legacy `authMiddleware`)

4. **Animation Patterns**: Landing page components use timed sequences. When modifying, maintain delay coordination between related animations.

5. **Color Migration**: The codebase was recently refactored from green (#3A8577) to sky blue (#0EA5E9). Some references to "claovia-main" or green might exist in older documentation.

6. **External Integration**: Employee feedback can come from Typebot (external conversational forms) - see `typebot-export-claovia-rex-clao-ia-05gi2vb.json`

7. **Turbopack**: Next.js runs with Turbopack by default in this project for faster dev builds

## Common Patterns

### Adding a new protected route
1. Create route in `app/` directory
2. No changes needed to middleware (defaults to protected unless in `isPublicRoute` matcher)

### Adding a new public route
1. Create route in `app/` directory
2. Add pattern to `isPublicRoute` matcher in `middleware.ts`

### Working with Prisma
1. Modify `prisma/schema.prisma`
2. Run `npx prisma db push` (development) or `npx prisma migrate dev` (with migrations)
3. Client regenerates automatically via `postinstall` hook
