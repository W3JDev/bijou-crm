# Bijou CRM

> **WhatsApp AI dashboard for Malaysian and GCC SMEs.**
> Built on top of [wacrm](https://github.com/ArnasDon/wacrm) (MIT) — open-source CRM template by Arnas Donauskas.
> Bijou customisations: Deep Green + Gold brand identity, Manglish AI replies, TRACE empathy pipeline, multi-tier WhatsApp adapter.

[![Brand](https://img.shields.io/badge/brand-Deep%20Green%20%2B%20Gold-%230d3d3d?labelColor=0d3d3d&color=d4af37)](https://mybijou.xyz)
[![Stack](https://img.shields.io/badge/stack-Next.js%2016%20%2B%20Supabase-%230d3d3d?labelColor=0d3d3d&color=d4af37)](https://nextjs.org)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## What is Bijou CRM?

Bijou CRM is the customer-facing dashboard for [Bijou AI](https://mybijou.xyz). It gives SME customers:

- **Shared WhatsApp inbox** — unified across team members
- **Contacts & deals** — CRM pipeline for leads and customers
- **Broadcasts** — bulk WhatsApp campaigns with scheduling
- **No-code automations** — trigger + action flows including Bijou AI replies
- **AI-powered responses** — TRACE empathy pipeline (ASI → Humanizer → ERS → routing)

### Tier gating

| Tier | Price | WhatsApp path |
|---|---|---|
| **Pro** (SME) | RM 299/mo | GOWA Bridge (no-WABA flat rate) |
| **Enterprise** | RM 999/mo | Official Meta WABA (Cloud API) |

Same UI. Same AI brain. Different WhatsApp adapter.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 + React 19 |
| Styling | Tailwind v4 + shadcn/ui (base-nova) |
| Fonts | Inter (sans) + Crimson Pro (display) |
| Data | Supabase Postgres + Auth + RLS |
| WhatsApp | Meta Cloud API (Enterprise) / GOWA Bridge (Pro) |
| Toasts | sonner — Manglish copy via `src/lib/toast.ts` |

### Brand tokens

```css
--bijou-green:     #0d3d3d  /* primary — buttons, sidebar, focus rings */
--bijou-green-2:   #0a2e2e  /* hover/deep */
--bijou-gold:      #d4af37  /* CTAs, accents, badges, charts */
--bijou-gold-soft: #e8c860  /* hover gold */
--bijou-cream:     #faf7f0  /* light surface tint */
```

---

## Getting Started

```bash
git clone https://github.com/W3JDev/bijou-crm.git
cd bijou-crm
npm install
cp .env.local.example .env.local
# Fill in your Supabase + WhatsApp credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Development

```bash
npm run dev          # Next.js dev server
npm run build        # Production build
npm run typecheck    # TypeScript check
npm run test         # Vitest unit tests
npm run lint         # ESLint
```

### Toast / error messages

Use `bijouToast` and the presets in `src/lib/toast.ts` — **not** raw `sonner` calls. This keeps all user-facing strings Manglish-voiced and consistently styled.

```ts
import { toastError, toastSuccess } from "@/lib/toast";

// Instead of: toast.error("Something went wrong")
toastError.serverHiccup(); // "Aiyo, server hiccup. Try again boss?"

// Instead of: toast.success("Saved")
toastSuccess.saved();      // "Saved already! Boleh!"
```

---

## Attribution

This project is a fork of **[wacrm](https://github.com/ArnasDon/wacrm)** by **Arnas Donauskas**, released under the MIT license. The original wacrm provides the CRM scaffolding (inbox, contacts, deals, broadcasts, automations). Bijou's additions are layered on top: brand identity, AI pipeline, multi-tier WhatsApp adapter, and Manglish voice.

The MIT `LICENSE` file is preserved unmodified. Feature PRs belong in this fork per the upstream author's stated intent.

---

## Deployment

The production dashboard is targeted at `app.mybijou.xyz`. See `BIJOU-CRM-INTEGRATION-PLAN.md` in [bijou-agent-swarm](https://github.com/W3JDev/bijou-agent-swarm) for the full phased rollout plan.

> **G3 gate**: Production deploys require Jewel approval. Do not push directly to production without sign-off.
