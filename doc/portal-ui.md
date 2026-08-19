# Management Portal UI — Teos

**Status:** Design spec (Home + shell implemented in the landing-page preview)  
**Audience:** Product, design, frontend  
**Related:** [business-description.md](./business-description.md), [customer-journey.md](./customer-journey.md), [software-architecture.md](./software-architecture.md)  
**Source of truth for chrome + Home:** `src/components/sections/preview/` (`PortalShell`, `PortalHome`) and `siteContent.preview` in `src/data/content.ts`

---

## 1. Product truth

Teos is a sovereign industrial AI platform: wire (PLCs/sensors) → context (asset model) → local agents → operator actions. The Management Portal is an **operator-first console** for plant engineers and operators — not a generic AI chat product and not a cloud admin dashboard.

Sovereignty belongs in chrome: site identity in the top bar, air-gap / no-egress as operational status, “runs on this site.” It is not a floating marketing badge.

### Roles

| Role | Primary surfaces | Default landing after first value |
|------|------------------|-----------------------------------|
| **Admin** | Connect, Models, user menu (settings / license) | Home |
| **OT / Plant engineer** | Connect, Assets, Models, Workflows, Agents | Home |
| **Operator** | Home recommendations + composer, Agents, Workflows | Home |

Engineers configure. Operators monitor, accept recommendations, and ask. Same IA; depth is progressive.

---

## 2. Visual system

**Tone:** Calm control room — light, high-legibility, industrial.

| Token | Value | Use |
|-------|--------|-----|
| Bright snow | `#f6f8f6` | App background, sidebar, panel fills, stat tiles |
| White | `#ffffff` | Main canvas, composer, nested suggestion well |
| Charcoal brown | `#2a2f2a` | Primary text |
| Ebony | `#626c66` | Secondary text, labels, uppercase panel titles |
| Brick red | `#9b2915` | Primary actions, high-severity chips, send button |
| Blush clay | `#f8e6e2` | Active recommendation card; never purple or glow |
| Border | `#e2e8e4` | Rules, table lines, tiles |
| Recommendation ring | `#e2cfc8` | Active recommendation card outline |

**Typography:** Plus Jakarta Sans for all product chrome (`font-cal`). Display serif is marketing-only. Dense but readable sizes for tags, statuses, and timestamps.

**Density:** Medium-dense OT lists and status rows. Home uses a mixed layout: compact KPI tiles, a stacked recommendation card, and clipped list panels — not a full-page card grid.

**Motion:** Live status dot, sparkline trends, stacked queue behind the top recommendation. No decorative glow.

**Chrome:** Persistent left nav + top site bar. No macOS window dots in the product itself.

### Shell (as in preview)

```
┌ Sidebar (14rem, bright snow) ─┬ Main canvas (white) ──────────────┐
│ Logo + Teos                    │ Breadcrumb (site) · Live status   │
│ Search: assets, tags, alerts   │                                  │
│ Nav (Home active)              │ Page content                     │
│ ──                             │                                  │
│ Critical (pinned alerts)       │                                  │
│ Events (recent site events)    │                                  │
│ User (name, role, overflow)    │                                  │
└────────────────────────────────┴──────────────────────────────────┘
```

- **Sidebar header:** mark + product name.
- **Search:** single field, placeholder `Search assets, tags, alerts`.
- **Primary nav (order):** Home · Agents · Assets · Workflows · Models · Connect. Badges on Workflows and Connect when there is a count.
- **Active nav:** zinc fill, not blush clay.
- **Pinned lists below nav:** `Critical` and `Events` — shortcut into open issues and recent site events, not a second IA.
- **User footer:** avatar, name, role (`Plant Engineer` in the preview), overflow menu. Settings / Help live here, not as top-level nav.
- **Top bar:** site breadcrumb (preview: `Windpark Fryslân`) + green **Live** status. No health-legend strip in the bar; service health is on Home tiles and the Live indicator.

---

## 3. Information architecture

```
Portal shell
├── Home
├── Agents
├── Assets
├── Workflows
├── Models
├── Connect
└── User menu          (settings, license, help)
```

| Area | Purpose | Backend |
|------|---------|---------|
| **Home** | Site overview: KPIs, recommendation queue, inline copilot, recent workflows, audit feed | health-service, alert-engine, agent-orchestrator, onboarding state |
| **Agents** | Daily operator workspace: history, grounded chat, HITL suggestions | copilot-service, agent-orchestrator |
| **Assets** | Site → area → asset → tag tree; bindings, normal ranges | semantic-api, timeseries |
| **Workflows** | Agentic runs: state, steps, HITL gates, duration | agent-orchestrator, alert-engine |
| **Models** | Catalog, installed inventory, deploy wizard | catalog-sync, model-registry, runtime |
| **Connect** | Data sources, protocols, live tag preview | connect-gateway, understand-engine |
| **User menu** | Site, users/RBAC, license, retention, diagnostics export, docs | auth, license, site config, health-service |

---

## 4. Screen map

### 4.1 Home

One job: *Is the site healthy, what should I accept, and can I ask the site?*

Implemented in the landing preview as **Site overview**.

**Page header**

- Title: `Site overview`
- Context line: current shift (`Shift B · 06:00-14:00`)
- Actions: secondary `Export diagnostics`, primary `New workflow`

**KPI row (4 tiles)**

1. Operational metric with sparkline (preview: export output + vs-forecast delta)
2. Active agents (count + sparkline)
3. Open recommendations (count + severity hint, e.g. `1 high`)
4. **Deployed models** — not a number tile. Compact list of installed models / local LLMs with a status dot (healthy / warning). Preview includes local models (e.g. Gwen, Llama) and site models with a warning state when recalibration is due.

Deltas: emerald for up, brick red for down, ebony for neutral. Sparklines match that tone.

**Main grid (2 + 1)**

Left column (~2/3):

- **Recommendations** — agent-discovered events with suggested actions. The top item is a stacked card (blush clay, severity chip). Each card shows:
  - Title
  - `agent · asset · tag · timestamp`
  - Suggested action copy
  - HITL chips: **Accept** (dark) and **Investigate**
  - Queue overflow: `+N more in queue` with faded cards stacked behind the top item
- **Inline copilot composer** pinned to the bottom of the left column:
  - Placeholder (`Ask about turbines, alerts, or site health…`)
  - Attach (`+`), on-site model picker (preview: `Gwen 3.8`), voice, brick-red send
  - This is the operator ask path on Home; full history lives under **Agents**

Right column (~1/3):

- **Workflows** — recently completed agentic runs. Three rows visible (name, asset, detail, status). Overflow as `+N more` on the panel edge. Row links out to the Workflows area.
- **Recent activity** — operator and system audit feed (time, actor, text). Panel is clipped at the canvas edge to imply a longer log. Includes human acks, agent publications, USB model import, diagnostics.

Live operational numbers only — no marketing stats.

### 4.2 Connect — add / edit connection

Wizard, not a form wall:

1. Protocol + vendor template
2. Endpoint (host, port, auth, poll/subscribe)
3. Discover / map tags (table with live sample values)
4. Assign to assets
5. Test → Activate

Split view: config left, **live value preview** right. Healthy = stable sample stream, not a toast. Nav badge reflects connection count.

### 4.3 Assets — asset model

Master–detail (formerly Plant):

- Left: searchable hierarchy
- Right: bound tags, recent values, linked agents, open alerts
- Engineer: rename, regroup, units, normal range
- Operator: read-only + “Ask about this asset” (opens composer / Agents with asset context)

### 4.4 Models

- **Catalog:** cards only where they aid choice (use case, inputs, hardware, latency)
- **Installed:** inventory table (version, signature, size, status) — same objects as the Home deployed-models tile
- **Deploy:** scope → bind tags → thresholds / HITL gates → shadow vs active → start

Air-gapped import (`.teosmodel` / USB) is a first-class path, not an error state. It also appears in Home activity when completed.

### 4.5 Workflows

Operations table of agentic runs: state, steps, duration, last completion, HITL pending. Detail drawer: logs, restart, rollback, cited assets/tags. Alerts and recommendations are the same objects Home and Agents cite. Nav badge reflects in-flight / pending-review count.

### 4.6 Agents (Operations Copilot)

Hero product surface for conversation history and longer sessions. Home keeps a **composer only**; Agents is the full workspace.

| Region | Content |
|--------|---------|
| Left | Site-local history; pinned plant topics (e.g. Line 2 Extruder) |
| Center | Chat with **grounded answers**: citations (asset ID, tag, timestamp), inline mini-chart or link to Assets / Workflows |
| Composer | Same control pattern as Home: attach, on-site model, voice, send. Suggested plant questions; “on this site / no cloud” |
| Right rail (optional) | Related recommendation, asset, running model |

**Trust UI (required):**

- Answers cite tag IDs, timestamps, asset IDs
- Control suggestions gated by role + policy; never one-click closed-loop
- Recommendations use Accept / Investigate (HITL), matching Home
- Low confidence → escalate copy, not a confident guess
- Queries and responses logged locally (surfaced on Home activity)

### 4.7 First-run wizard

Full-screen, four steps: site metadata → license → users → checklist CTA into Connect. Until Connect is healthy and one model is Running, Home still shows operational chrome (KPIs, empty-or-checklist recommendations) rather than a blank canvas.

---

## 5. Design principles

1. One job per screen; Home’s job is attention + ask, not configuration.
2. Live data and health always visible when configuring or chatting.
3. Citations and HITL gates are UI features, not footnotes.
4. Air-gapped workflows (USB import, offline license) are first-class.
5. SME simplicity; enterprise depth behind advanced panels, same IA.
6. Agents and models are first-class nav; chat is a tool on Home, not the product frame.

---

## 6. Landing-page preview

The `#preview` mock is the current Home + shell, not a generic LLM console. Generic chrome (Spaces, Personas, Artifacts) is out of product.

**Shown today**

- Sidebar: Teos, search, six-item nav (Home selected), Critical, Events, user `A. Reyes`
- Top bar: `Windpark Fryslân` · Live
- Home: site overview, four KPI tiles including deployed models, stacked recommendations with Accept / Investigate, inline composer (on-site model), workflows list with overflow, clipped activity feed

**Mobile (below `md`)**

The live mock is replaced by a static screenshot of the main canvas — top bar, Site overview, KPI row, recommendations, workflows, activity, composer — with the sidebar cropped out (`public/preview/portal-home-1600.webp`). Dropping the sidebar keeps the desktop layout intact at a narrower frame (1120×800 captured at 2x, desktop breakpoints still active), so type stays readable on a phone. Recapture whenever the shell or Home changes.

**Not shown in the mock (still specified above)**

- Agents, Assets, Workflows, Models, and Connect canvases
- First-run wizard
- Settings / Help as dedicated pages
