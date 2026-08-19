export const siteContent = {
  company: {
    name: "Teos",
    tagline: "AI at the corner of the world",
    oneLiner:
      "On-premise-first AI agents for industrial operations — from wire to intelligence, on your infrastructure.",
    email: "hello@teos.ai",
  },
  nav: [
    { label: "Product", href: "product" },
    { label: "Impact", href: "impact" },
    { label: "Contact", href: "contact" },
  ],
  hero: {
    eyebrow: "Flagship AI/ML platform running on your premise",
    headline: "Intelligence for industrial sites",
    subheadline:
      "On-premise AI platform for industrial operations — from wire to intelligence, on your infrastructure.",
    primaryCta: "Book a demo",
  },
  preview: {
    siteName: "North Plant",
    siteStatus: "On-prem",
    health: "All services healthy",
    searchPlaceholder: "Search assets, tags, alerts",
    nav: [
      { id: "home", label: "Home" },
      { id: "agents", label: "Agents" },
      { id: "asset", label: "Assets" },
      { id: "workflows", label: "Workflows", badge: "4" },
      { id: "models", label: "Models" },
      { id: "connect", label: "Connect", badge: "6" },
    ],
    activeNav: "home",
    sidebarSections: [
      {
        title: "Critical",
        items: [
          "EX-204 vibration alarm",
          "Zone 3 temperature drift",
          "MQTT broker reconnect",
        ],
      },
      {
        title: "Events",
        items: [
          "Shift handover completed",
          "USB model import verified",
          "Quality recommendation queued",
          "Line 2 checklist signed off",
          "Historian sync completed",
          "New asset binding published",
          "Night backup exported",
        ],
      },
    ],
    system: {
      mode: "On-prem",
      network: "Air-gapped · no egress",
      license: "Licensed · 3 nodes",
      version: "v1.4.2",
      node: "edge-node-01",
    },
    topBar: {
      breadcrumb: "Windpark Fryslân",
      updated: "Updated 12s ago",
      range: "Last 24h",
    },
    user: {
      name: "A. Reyes",
      role: "Plant Engineer",
      initials: "AR",
    },
    home: {
      header: {
        title: "Site overview",
        subtitle: "Shift B · 06:00-14:00",
        actions: ["Export diagnostics", "New workflow"],
      },
      stats: [
        {
          value: "142 MW",
          label: "Export output",
          delta: "+6 MW vs forecast",
          deltaDirection: "up",
          trend: [
            128, 130, 132, 134, 133, 136, 138, 137, 140, 139, 141, 142, 141,
            143, 142, 144, 143, 145, 144, 146, 145, 147, 146, 142,
          ],
        },
        {
          value: "5",
          label: "Active agents",
          delta: "+1 since shift",
          deltaDirection: "up",
          trend: [
            3, 3.1, 3.25, 3.4, 3.55, 3.7, 3.85, 4, 4.1, 4.2, 4.35, 4.5, 4.6,
            4.7, 4.8, 4.85, 4.9, 4.92, 4.95, 4.97, 4.98, 4.99, 5, 5,
          ],
        },
        {
          value: "4",
          label: "Open recommendations",
          delta: "1 high",
          deltaDirection: "neutral",
          trend: [
            7, 6.75, 6.5, 6.3, 6.1, 5.9, 5.7, 5.5, 5.3, 5.1, 4.9, 4.75, 4.6,
            4.45, 4.3, 4.15, 4.05, 4, 3.95, 4, 3.92, 4, 3.96, 4,
          ],
        },
        {
          value: "Model status",
          label: "Installed models and AI services",
          delta: "5 active",
          deltaDirection: "neutral",
          trend: [],
        },
      ],
      modelStatusTitle: "Deployed models",
      modelStatus: [
        {
          name: "Gwen 3.8",
          state: "healthy",
          meta: "Local RAG agent",
        },
        {
          name: "Llama 3.1",
          state: "healthy",
          meta: "Isolation Forest",
        },
        {
          name: "WFY-PWR-221",
          state: "warning",
          meta: "Needs recalibration",
        },
        {
          name: "WFY-RUL-078",
          state: "healthy",
          meta: "6m forecast",
        },
      ],
      alertsTitle: "Recommendations",
      alertsSubtitle:
        "Agents discovered these events and suggested actions. Accept or investigate each recommendation.",
      chatPlaceholder: "Ask about turbines, alerts, or site health…",
      chatModel: "Gwen 3.8",
      alerts: [
        {
          severity: "High",
          title: "Vibration above band on Turbine T-07",
          asset: "T-07 · Nacelle",
          tag: "vib_rms_x",
          timestamp: "06:41:13",
          agent: "Turbine health agent",
          recommendation:
            "Schedule bearing inspection within 48h and reduce load to 85% until cleared.",
          actions: ["Accept", "Investigate"],
        },
        {
          severity: "Medium",
          title: "Grid export headroom narrowing",
          asset: "Grid tie-in · Export meter",
          tag: "export_headroom_mw",
          timestamp: "07:02:48",
          agent: "Power export agent",
          recommendation:
            "Shift two turbines to derated mode for the next 30 minutes to avoid curtailment.",
          actions: ["Accept", "Investigate"],
        },
        {
          severity: "Low",
          title: "Blade inspection anomaly flagged",
          asset: "T-12 · Blade B",
          tag: "blade_img_delta",
          timestamp: "05:18:09",
          agent: "Maintenance copilot",
          recommendation:
            "Queue drone rescan at next low-wind window and hold maintenance ticket open.",
          actions: ["Accept", "Investigate"],
        },
        {
          severity: "Low",
          title: "Wind ramp expected in 90 minutes",
          asset: "Offshore array · Met mast",
          tag: "wind_speed_10m",
          timestamp: "04:56:44",
          agent: "Weather response agent",
          recommendation:
            "Pre-position yaw systems and notify shift lead before gust front arrival.",
          actions: ["Accept", "Investigate"],
        },
      ],
      workflowsTitle: "Workflows",
      workflowsSubtitle: "Recently completed agentic runs across site assets",
      workflows: [
        {
          name: "Vibration triage",
          asset: "T-07 · Nacelle",
          state: "healthy",
          detail: "Completed 06:52 · 5 steps · ticket drafted",
          steps: 5,
          duration: "2m 08s",
          completedAt: "06:52",
        },
        {
          name: "Export derate sequence",
          asset: "Grid tie-in · Export meter",
          state: "healthy",
          detail: "Completed 06:41 · 4 steps · HITL sign-off pending",
          steps: 4,
          duration: "1m 47s",
          completedAt: "06:41",
        },
        {
          name: "Blade inspection ingest",
          asset: "T-12 · Blade B",
          state: "healthy",
          detail: "Completed 05:58 · 3 steps · rescan window queued",
          steps: 3,
          duration: "58s",
          completedAt: "05:58",
        },
        {
          name: "Weather ramp prep",
          asset: "Offshore array · Met mast",
          state: "healthy",
          detail: "Completed 05:22 · 4 steps · yaw systems staged",
          steps: 4,
          duration: "1m 12s",
          completedAt: "05:22",
        },
        {
          name: "SCADA reconnect recovery",
          asset: "Site-wide · MQTT broker",
          state: "healthy",
          detail: "Completed 04:18 · 6 steps · tag stream restored",
          steps: 6,
          duration: "3m 04s",
          completedAt: "04:18",
        },
        {
          name: "Shift handover digest",
          asset: "Site-wide · Shift B",
          state: "healthy",
          detail: "Completed 03:55 · 3 steps · summary published",
          steps: 3,
          duration: "41s",
          completedAt: "03:55",
        },
        {
          name: "Anomaly model recalibration",
          asset: "Cluster A · WFY-PWR-221",
          state: "warning",
          detail: "Completed 03:12 · 7 steps · threshold update pending review",
          steps: 7,
          duration: "4m 22s",
          completedAt: "03:12",
        },
      ],
      activityTitle: "Recent activity",
      activity: [
        {
          time: "07:04",
          actor: "A. Reyes",
          text: "Acknowledged EX-204 vibration above band and assigned Line 2 follow-up.",
        },
        {
          time: "06:58",
          actor: "Quality optimization agent",
          text: "Published HITL recommendation to lower Zone 3 setpoint by 1.5 C.",
        },
        {
          time: "06:45",
          actor: "Turbine health agent",
          text: "Accepted vibration triage workflow for T-07 and queued bearing inspection.",
        },
        {
          time: "06:12",
          actor: "M. Chen",
          text: "Imported `quality-copilot-v2.1.0.teosmodel` from signed USB media.",
        },
        {
          time: "05:54",
          actor: "Power export agent",
          text: "Completed export derate sequence; awaiting operator sign-off on setpoints.",
        },
        {
          time: "05:31",
          actor: "health-service",
          text: "Generated diagnostics bundle after MQTT broker reconnect on Packaging hall.",
        },
        {
          time: "05:08",
          actor: "Weather response agent",
          text: "Staged yaw prep workflow ahead of forecast gust front at 07:30.",
        },
        {
          time: "04:52",
          actor: "Maintenance copilot",
          text: "Closed blade inspection ingest workflow and scheduled drone rescan window.",
        },
        {
          time: "04:30",
          actor: "A. Reyes",
          text: "Reviewed export headroom dashboard snapshot before shift turnover.",
        },
        {
          time: "04:02",
          actor: "connect-gateway",
          text: "Restored live tag stream after SCADA reconnect recovery workflow finished.",
        },
        {
          time: "03:41",
          actor: "agent-orchestrator",
          text: "Published shift handover digest to local audit log for Shift A.",
        },
      ],
    },
  },
  product: {
    title: "Run AI locally",
    titleLine2: "Nothing leaves your premises.",
    valuePropositions: [
      {
        id: "on-prem-ai",
        eyebrow: "Sovereignty",
        title: "On-prem AI",
        description:
          "All inference, data processing, and management runs on your infrastructure. Zero operational data leaves the premises.",
        visual: "sovereign" as const,
        tone: "cool" as const,
      },
      {
        id: "act",
        eyebrow: "Autonomy",
        title: "Act",
        description:
          "Deploy AI agents for predictive maintenance, anomaly detection, quality optimization, and autonomous process control — locally with sub-10ms response.",
        visual: "act" as const,
        tone: "warm" as const,
      },
      {
        id: "connect",
        eyebrow: "Connectivity",
        title: "Connect",
        description:
          "Ingest live data from PLCs, sensors, and controllers via any industrial protocol — bring every signal on your plant floor into one real-time stream.",
        visual: "connect" as const,
        tone: "warm" as const,
      },
      {
        id: "understand",
        eyebrow: "Context",
        title: "Understand",
        description:
          "Automatically build a real-time, AI-ready model of your plant, line, or facility — turning raw signals into structured context.",
        visual: "understand" as const,
        tone: "cool" as const,
      },
      {
        id: "manage",
        eyebrow: "Operations",
        title: "Manage",
        description:
          "Configure connections, deploy models and agents, and monitor performance from one operator-friendly interface — no data scientists or cloud engineers required.",
        visual: "manage" as const,
        tone: "warm" as const,
      },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Measurable outcomes",
    titleLine2: "for industrial operations",
    stats: [
      {
        value: "10–20%",
        label: "Higher equipment uptime",
        detail: "Predictive maintenance across multi-protocol sensor data",
      },
      {
        value: "15–30%",
        label: "Less scrap and rework",
        detail: "Real-time quality optimization from live process signals",
      },
      {
        value: "4–8%",
        label: "Energy cost savings",
        detail: "AI balancing production output against consumption",
      },
      {
        value: "<10 ms",
        label: "Anomaly detection latency",
        detail: "Time-sensitive inference stays on-premises at the edge",
      },
    ],
    results: [
      {
        value: "6 days",
        caption: "from installation to live anomaly alert",
        quote:
          "We had alerts on a line we thought was too old to instrument — and nothing left the plant.",
        attribution: "M. van der Berg, Head of Operations",
        company: "Nordvale Dairy Group",
        industry: "Process manufacturing",
        image: "/impact/story-dairy.jpg",
      },
      {
        value: "17%",
        caption: "fewer unplanned line stops",
        quote:
          "Our engineers ask the copilot why a cell flagged — and get an answer tied to the actual tag, not a dashboard hunt.",
        attribution: "S. Keller, Plant Engineering Lead",
        company: "Kessler Präzision GmbH",
        industry: "Automotive supply chain",
        image: "/impact/story-precision.jpg",
      },
      {
        value: "9%",
        caption: "lower O&M cost per MWh",
        quote:
          "Predictive work happens before the heavy-lift window closes. The grid data never leaves Friesland.",
        attribution: "A. Reyes, Site Engineer",
        company: "Fryslân Wind Collective",
        industry: "Energy & utilities",
        image: "/impact/story-wind.jpg",
      },
    ],
  },
  compliance: {
    title: "Complied with",
    standards: [
      "IEC 62443",
      "ISO/IEC 27001",
      "GDPR",
      "NIS2",
      "EU AI Act",
    ],
  },
  contact: {
    title: "Watch a live demo",
    submitLabel: "Send",
    successMessage:
      "Thank you — we've received your request and will be in touch shortly.",
    errorMessage:
      "Something went wrong. Please try again or email us directly.",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Teos. All rights reserved.`,
    links: [
      { label: "Product", href: "product" },
      { label: "Impact", href: "impact" },
      { label: "Contact", href: "contact" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
