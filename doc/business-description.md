# Business Description — Draft for Validation

---

## Company Name
Teos

---
## Tagline
AI at the corner of the world

## One-Liner

**On-premise-first AI agents for industrial operations — from wire to intelligence, on your infrastructure.**

---

## The Problem

Industrial companies with automation and control systems (PLCs, EMS, SCADA) face two compounding barriers to adopting AI:

1. **Data fragmentation** — Operational data is trapped across heterogeneous protocols (Modbus, MQTT, CAN bus, OPC-UA, Profinet, S7) with no unified, AI-ready access layer. Existing solutions (OPC-UA servers, historians) are complex to manage and not designed for AI consumption.

2. **AI deployment constraints** — Operations are time-sensitive (sub-second decisions), security-critical, and often subject to data sovereignty requirements. Cloud-based AI introduces unacceptable latency, connectivity dependency, and data exposure risks. Yet deploying AI on-premises today requires stitching together 3-5 separate tools and a dedicated data engineering team.

**The result:** Most industrial companies are stuck between wanting AI and being unable to deploy it without unacceptable complexity, cost, or risk.

---

## The Solution

A **sovereign industrial AI platform** that runs primarily on-premise and delivers:

| Layer | What it does |
|-------|-------------|
| **Connect** | Native multi-protocol ingestion — plugs directly into PLCs, sensors, and controllers via Modbus, MQTT, CAN bus, OPC-UA, Profinet, S7, and more. No middleware stack required. |
| **Understand** | Automatically contextualizes and models operational data — creates a real-time, AI-ready representation of your plant, line, or facility. |
| **Act** | Deploys AI agents that monitor, reason, and act on operational data in real-time. Predictive maintenance, quality optimization, autonomous process adjustments, anomaly detection — running locally with <10ms response times. |
| **Manage** | Simple, operator-friendly interface to configure data connections, deploy AI models/agents, monitor performance, and maintain the system — without requiring data scientists or cloud engineers. |

**One platform. No cloud dependency. No middleware. No vendor lock-in.**

---

## Key Differentiators

| Differentiator | Why it matters |
|----------------|---------------|
| **AI-first, not data-first** | The platform exists to deliver AI-powered operations, not just to move data. Data connectivity is a means, not the product. |
| **Primarily on-premise / sovereign** | All AI inference, data processing, and management runs on your infrastructure. Supports air-gapped, disconnected, and regulated environments. Zero data leaves the premises. |
| **Wire-to-intelligence in one platform** | Connects directly to the physical layer (PLCs, sensors) AND deploys AI agents — no need for separate gateway + historian + data lake + ML platform + deployment tool. |
| **Vendor-neutral** | Works across Siemens, Allen-Bradley, Mitsubishi, ABB, Schneider, Beckhoff, and legacy equipment. Not locked to any automation vendor's ecosystem. |
| **Operator-friendly** | Designed for OT teams and plant engineers, not cloud architects. Low-code/no-code configuration. Deploy AI use cases in days, not months — accessible to SMEs without dedicated AI/IT staff and scalable to enterprise multi-site operations. |

---

## Target Customers

Teos targets **both large enterprises and SMEs** running industrial automation — from multi-site critical infrastructure to single-facility manufacturers. The same sovereign, wire-to-intelligence platform applies; packaging, deployment scope, and sales motion differ by segment.

| Segment | Profile | Why they buy |
|---------|---------|-------------|
| **Large enterprises** | Oil & gas, energy, chemicals, defense, pharma, critical infrastructure (typically 1,000+ employees, complex multi-site operations) | Data sovereignty mandates, air-gapped requirements, real-time operations, heterogeneous legacy equipment, multi-vendor plant floors |
| **SMEs** | Discrete & process manufacturers, utilities, logistics, food & beverage, regional industrials (typically under 500 employees, one to few sites) | Same operational and sovereignty constraints as larger peers, but without budget or staff for Cognite/Siemens-scale deployments or SI-led integrations; need fast time-to-value, predictable pricing, and operator-friendly setup without a dedicated data engineering team |
| **Mid-market** (overlap) | Growing industrials between SME and enterprise scale (roughly 500–1,000 employees) | Often the first expansion site for SME-style adoption or a lighter enterprise rollout before full multi-site standardization |

**Go-to-market by segment:** Enterprise — direct sales, proof-of-concept at one site, then multi-site rollout. SMEs — product-led or channel-assisted deployment, standardized packages (e.g., per-line or per-site), minimal professional services.

---

## Use Cases (AI at the Edge)

| Use case | What the AI does | Value |
|----------|------------------|-------|
| **Predictive maintenance** | Detects equipment degradation patterns from vibration, temperature, pressure, and current data across multiple protocols | Reduce unplanned downtime by 30-50% |
| **Quality optimization** | AI agents continuously adjust process parameters based on real-time sensor fusion | Reduce scrap/rework by 20-40% |
| **Anomaly detection** | Identifies deviations from normal operation across thousands of data points simultaneously | Catch failures minutes/hours before they cascade |
| **Energy optimization** | AI balances production output against energy consumption in real-time | Reduce energy costs by 10-25% |
| **Autonomous process control** | AI agents make real-time adjustments to production parameters (with human-in-the-loop governance) | Operate closer to optimal set-points than manual control |
| **Operations copilot** | Natural language interface for operators to query plant state, get recommendations, and understand root causes | Reduce operator decision time, accelerate troubleshooting |

---

## How It's Different From Alternatives

| Alternative | What they offer | What we offer that they don't |
|-------------|----------------|------------------------------|
| **Cognite (Schneider)** | Best-in-class data contextualization + cloud AI agents | Primarily on-prem AI (their AI runs in cloud); direct protocol connectivity (they need extractors); faster deployment (they need implementation partners) |
| **XMPro** | Sovereign agentic AI + digital twins | Integrated protocol layer (they need partners for OT connectivity); simpler deployment (they target very large enterprises with complex implementations) |
| **Siemens Industrial Edge** | On-prem edge AI within Siemens ecosystem | Vendor-neutral (works across all PLCs, not just Siemens); no cloud dependency for AI training; simpler UX |
| **Litmus Edge** | Broad protocol connectivity + emerging ML at edge | Deeper AI (agentic, not just ML models); sovereign AI positioning; natural language operations copilot |
| **deviceWISE (Telit)** | Protocol connectivity + active intelligence | Broader AI agent capability; stronger sovereignty/air-gap story; open architecture vs. proprietary stack |
| **Cloud platforms (AWS/Azure)** | Powerful AI/ML + some edge deployment | Primarily on-prem (they're cloud-first with edge extensions); OT-native UX (they're built for IT/developers); no cloud bills or dependency |

---

## Business Model Options (to validate)

| Model | Description | Pros | Cons |
|-------|-------------|------|------|
| **Subscription (per-node/per-site)** | Annual license based on number of connected devices or sites; tiered entry packages for SMEs, volume/site-based pricing for enterprise | Predictable revenue, scales with customer growth; lower barrier for SMEs | Requires ongoing value delivery; tier design must avoid enterprise-only complexity |
| **Platform + use-case packages** | Base platform fee + paid AI use-case modules (predictive maintenance, quality, energy, etc.); SME bundles with fixed scope | Upsell path, modular adoption; SMEs can start with one use case | Complexity in packaging across segment needs |
| **Outcome-based** | Pricing tied to measurable results (e.g., % downtime reduction) | Aligns incentives, reduces buyer risk | Hard to attribute causality, complex contracts |

---

## Key Assumptions to Validate

| # | Assumption | Risk if wrong |
|---|-----------|---------------|
| 1 | Both large enterprises and SMEs will buy AI from a new vendor (not just incumbents) | Enterprise deals stall without credibility; SME deals stall without clear ROI and simple onboarding |
| 2 | On-prem AI mandate is a hard requirement (not just a preference that can be negotiated away) | Cloud-first solutions capture the market anyway |
| 3 | Integrated "wire-to-AI" is valued over best-of-breed tools | Customers prefer mixing specialist tools (gateway + separate AI platform) |
| 4 | "Easy to deploy and manage" resonates across segments — especially SMEs — more than "most powerful/sophisticated" | Enterprise buyers may prioritize depth over simplicity; SME buyers may still churn if packaging feels enterprise-only |
| 5 | The market window is still open (not already captured by XMPro, deviceWISE, Litmus) | Late entry with insufficient differentiation |

---

## What's Not Yet Decided (Open Questions)

- **Go-to-market:** Dual motion for enterprise (direct) vs. SMEs (product-led, channel, automation distributors)? Same brand or distinct packaging?
- **First vertical:** Oil & gas? Discrete manufacturing? Energy/utilities? Defense?
- **AI model approach:** Pre-built models? Customer-trained? Foundation model (SLM) on-prem?
- **Hardware:** Software-only (runs on customer's servers)? Pre-configured appliance? Both?
- **Open-source vs. proprietary:** Open-source core (UMH model) vs. fully commercial?
- **First beachhead customer:** Who gives you the first lighthouse deployment?
