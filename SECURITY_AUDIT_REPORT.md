# 🔒 RAPPORT D'AUDIT SÉCURITÉ - CLAOVIA API

**Date**: 2026-01-07
**Auditeur**: Expert Cybersécurité & Backend Senior
**Scope**: Routes API (`/api/*`)

---

## 🚨 RÉSUMÉ EXÉCUTIF

**Niveau de risque global**: 🔴 **CRITIQUE**

L'application présente **13 failles de sécurité majeures** réparties sur 3 routes API. Aucune protection n'est actuellement en place, exposant l'application à :
- Appels API non authentifiés (accès aux données sensibles)
- Attaques DDoS et abus (pas de rate limiting)
- Coûts OpenAI incontrôlés (pas de quotas)
- Pas de protection HTTPS/Headers sécurisés

**Urgence**: 🔥 Déploiement de correctifs **IMMÉDIAT** requis avant mise en production.

---

## 📋 FAILLES IDENTIFIÉES PAR ROUTE

### 1. `/api/chat` (POST) - 🔴 CRITIQUE

**Fonction**: Chat collaborateur avec IA Clao

#### Failles détectées :
| # | Faille | Sévérité | Impact |
|---|--------|----------|--------|
| 1.1 | ❌ Aucune authentification | 🔴 Critique | N'importe qui peut envoyer des messages |
| 1.2 | ❌ Validation token commentée (TODO) | 🔴 Critique | Token non vérifié en DB |
| 1.3 | ❌ Pas de rate limiting | 🟠 Élevé | Abus OpenAI = facture illimitée |
| 1.4 | ⚠️ Pas de validation schema messages | 🟡 Moyen | Injection de prompts malveillants |

**Scénario d'attaque**:
```bash
# Un attaquant peut spammer OpenAI sans limite
for i in {1..10000}; do
  curl -X POST https://claovia-app.vercel.app/api/chat \
    -H "Content-Type: application/json" \
    -d '{"token":"fake","messages":[{"role":"user","content":"test"}]}'
done
# Résultat : Facture OpenAI de plusieurs milliers d'euros
```

---

### 2. `/api/generate-pdf` (GET) - 🔴 CRITIQUE

**Fonction**: Génération PDF du REX pour le manager

#### Failles détectées :
| # | Faille | Sévérité | Impact |
|---|--------|----------|--------|
| 2.1 | ❌ Aucune authentification | 🔴 Critique | N'importe qui accède aux PDFs |
| 2.2 | ❌ Validation rexId commentée (TODO) | 🔴 Critique | Pas de vérification propriété |
| 2.3 | ❌ Pas de rate limiting | 🟠 Élevé | Génération PDF massive = CPU spike |
| 2.4 | ❌ IDOR possible | 🔴 Critique | Énumération de rexId par brute-force |
| 2.5 | ⚠️ Données sensibles non chiffrées | 🟡 Moyen | PDF contient infos RH sensibles |

**Scénario d'attaque**:
```bash
# Énumération de tous les REX existants
for i in {1..100000}; do
  curl "https://claovia-app.vercel.app/api/generate-pdf?rexId=$i" -o "rex_$i.pdf"
done
# Résultat : Vol massif de données RH confidentielles
```

---

### 3. `/api/generate-rex` (POST) - 🔴 CRITIQUE

**Fonction**: Analyse IA du REX + génération kit manager

#### Failles détectées :
| # | Faille | Sévérité | Impact |
|---|--------|----------|--------|
| 3.1 | ❌ Aucune authentification | 🔴 Critique | N'importe qui peut analyser |
| 3.2 | ❌ Validation rexId commentée (TODO) | 🔴 Critique | Pas de vérification propriété |
| 3.3 | ❌ Pas de rate limiting | 🟠 Élevé | 3 appels OpenAI = coût x3 |
| 3.4 | ⚠️ Pas de validation input | 🟡 Moyen | Injection dans prompts OpenAI |

**Scénario d'attaque**:
```bash
# Attaquant spam l'analyse (3 appels OpenAI par requête)
curl -X POST https://claovia-app.vercel.app/api/generate-rex \
  -H "Content-Type: application/json" \
  -d '{"rexId":"malicious"}' -k
# Répété 1000 fois = 3000 appels OpenAI en quelques secondes
```

---

## 🛡️ ANALYSE PAR CRITÈRE DE SÉCURITÉ

### A. HTTPS Enforcement

**Status**: ⚠️ **PARTIELLEMENT CONFORME**

**Constat**:
- ✅ Vercel force HTTPS automatiquement en production
- ❌ Pas de headers de sécurité (HSTS, CSP, etc.)
- ❌ Pas de vérification protocole en développement

**Risques**:
- Attaque Man-in-the-Middle en dev/staging
- Pas de protection contre le downgrade HTTP

---

### B. Contrôle d'Accès (Routes Privées)

**Status**: 🔴 **NON CONFORME**

**Constat**:
- ❌ **AUCUNE** route API n'est protégée
- ⚠️ Middleware Clerk configuré UNIQUEMENT pour les pages
- ❌ Validation commentée avec "TODO" dans les 3 routes
- ❌ Aucune vérification de propriété des ressources

**Routes devant être privées**:
| Route | Niveau requis | Statut actuel |
|-------|---------------|---------------|
| `/api/chat` | Token validation | ❌ Public |
| `/api/generate-pdf` | Auth + ownership | ❌ Public |
| `/api/generate-rex` | Auth + ownership | ❌ Public |

---

### C. Rate Limiting (Routes Publiques)

**Status**: 🔴 **NON CONFORME**

**Constat**:
- ❌ Aucun rate limiting implémenté
- ❌ Aucune API key requise
- ❌ Aucun quota défini
- ❌ Aucune protection DDoS

**Impact financier estimé** (si attaque):
```
Scénario : Spam de /api/chat pendant 1h
- 10 req/s x 3600s = 36,000 requêtes
- Coût OpenAI : 36,000 x $0.002 = $72/heure
- Sur 24h = $1,728
- Sur 1 semaine = $12,096
```

---

## 🔧 CORRECTIFS REQUIS

### Niveau 1: URGENT (Déploiement < 24h)

#### 1.1 Implémenter Rate Limiting avec Upstash Redis

**Fichier**: `lib/rate-limit.ts` (à créer)

#### 1.2 Protéger `/api/chat` avec validation token

**Fichier**: `app/api/chat/route.ts` (modifier)

#### 1.3 Protéger `/api/generate-pdf` avec auth Clerk

**Fichier**: `app/api/generate-pdf/route.ts` (modifier)

#### 1.4 Protéger `/api/generate-rex` avec auth Clerk

**Fichier**: `app/api/generate-rex/route.ts` (modifier)

---

### Niveau 2: IMPORTANT (Déploiement < 7 jours)

#### 2.1 Ajouter headers de sécurité HTTP

**Fichier**: `middleware.ts` (modifier)

#### 2.2 Implémenter validation de schéma avec Zod

**Fichier**: `lib/validators.ts` (à créer)

#### 2.3 Logging et monitoring des API calls

**Fichier**: `lib/logger.ts` (à créer)

---

## 📊 MÉTRIQUES DE SÉCURITÉ

### Avant correctifs:
- ✅ Routes publiques protégées: **0/3** (0%)
- ✅ Rate limiting actif: **0/3** (0%)
- ✅ Authentication implémentée: **0/3** (0%)
- ✅ Validation input: **0/3** (0%)
- **Score global**: 🔴 **0/100**

### Après correctifs (cible):
- ✅ Routes publiques protégées: **3/3** (100%)
- ✅ Rate limiting actif: **3/3** (100%)
- ✅ Authentication implémentée: **3/3** (100%)
- ✅ Validation input: **3/3** (100%)
- **Score global**: 🟢 **95/100**

---

## 🚀 PLAN D'ACTION

### Phase 1: Sécurisation immédiate (Jour 1)
1. ✅ Installer Upstash Redis
2. ✅ Créer `lib/rate-limit.ts`
3. ✅ Créer `lib/auth.ts` (helpers auth)
4. ✅ Sécuriser `/api/chat`
5. ✅ Sécuriser `/api/generate-pdf`
6. ✅ Sécuriser `/api/generate-rex`
7. ✅ Tester en local
8. ✅ Déployer en production

### Phase 2: Renforcement (Semaine 1)
1. ⏳ Headers sécurisés (HSTS, CSP, etc.)
2. ⏳ Validation Zod sur tous les inputs
3. ⏳ Logging structuré (Datadog/Sentry)
4. ⏳ Monitoring alertes (rate limit dépassé)

### Phase 3: Conformité (Semaine 2)
1. ⏳ Audit de conformité RGPD
2. ⏳ Chiffrement des PDFs
3. ⏳ Rotation des tokens
4. ⏳ Pentest externe

---

## 📚 ANNEXES

### A. Stack technique recommandée

```bash
# Rate Limiting
npm install @upstash/redis @upstash/ratelimit

# Validation
npm install zod

# Security Headers
# (intégré dans middleware.ts)
```

### B. Variables d'environnement requises

```env
# Upstash Redis (Rate Limiting)
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token

# Déjà présentes
CLERK_SECRET_KEY=sk_...
OPENAI_API_KEY=sk-proj-...
```

### C. Références

- [OWASP API Security Top 10](https://owasp.org/API-Security/)
- [Clerk Server-Side Auth](https://clerk.com/docs/references/nextjs/auth)
- [Upstash Rate Limiting](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview)
- [Next.js Security Headers](https://nextjs.org/docs/app/api-reference/next-config-js/headers)

---

**Signature**
Expert Cybersécurité
2026-01-07

---

**CLASSIFICATION**: 🔴 CONFIDENTIEL - Diffusion restreinte
