export const siteContent = {
  company: {
    name: "Teos",
    tagline: "AI at the corner of the world",
    oneLiner:
      "On-premise AI for industrial operations — from plant data to answers and actions, on your infrastructure.",
    email: "hello@te-os.com",
    linkedin: "https://www.linkedin.com/company/teosai/",
  },
  hero: {
    eyebrow: "On your premises",
    headline: "Intelligence for industrial sites",
    subheadline:
      "On-premise AI for industrial operations — from plant data to answers and actions, on your infrastructure.",
    primaryCta: "Explore",
  },
  statement: {
    lines: [
      { prefix: "Keep plant data on your ", emphasis: "infrastructure" },
      { prefix: "Turn live signals into ", emphasis: "answers" },
      { prefix: "Move from answers to ", emphasis: "approved actions" },
    ],
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
          "Procedure pack imported",
          "Quality note queued",
          "Line 2 checklist signed off",
          "Historian sync completed",
          "New asset binding published",
          "Night backup exported",
        ],
      },
    ],
    topBar: {
      breadcrumb: "North Plant",
      updated: "Updated 12s ago",
      range: "Last 24h",
    },
    user: {
      name: "J. Alvarez",
      role: "Plant Engineer",
      initials: "JA",
    },
    home: {
      header: {
        title: "Site overview",
        subtitle: "Shift B · 06:00-14:00",
        actions: ["Export diagnostics", "New workflow"],
      },
      stats: [
        {
          value: "Line 2",
          label: "Packaging hall",
          delta: "Shift B",
          deltaDirection: "neutral",
          trend: [
            128, 130, 132, 134, 133, 136, 138, 137, 140, 139, 141, 142, 141,
            143, 142, 144, 143, 145, 144, 146, 145, 147, 146, 142,
          ],
        },
        {
          value: "5",
          label: "Live connections",
          delta: "On premises",
          deltaDirection: "neutral",
          trend: [
            3, 3.1, 3.25, 3.4, 3.55, 3.7, 3.85, 4, 4.1, 4.2, 4.35, 4.5, 4.6,
            4.7, 4.8, 4.85, 4.9, 4.92, 4.95, 4.97, 4.98, 4.99, 5, 5,
          ],
        },
        {
          value: "4",
          label: "Open recommendations",
          delta: "1 waiting",
          deltaDirection: "neutral",
          trend: [
            7, 6.75, 6.5, 6.3, 6.1, 5.9, 5.7, 5.5, 5.3, 5.1, 4.9, 4.75, 4.6,
            4.45, 4.3, 4.15, 4.05, 4, 3.95, 4, 3.92, 4, 3.96, 4,
          ],
        },
        {
          value: "Copilot",
          label: "Procedures and live tags",
          delta: "On premises",
          deltaDirection: "neutral",
          trend: [],
        },
      ],
      modelStatusTitle: "On this site",
      modelStatus: [
        {
          name: "Operations Copilot",
          state: "healthy",
          meta: "Procedures and live tags",
        },
        {
          name: "Procedure library",
          state: "healthy",
          meta: "On this site",
        },
        {
          name: "Line 2 watch",
          state: "warning",
          meta: "Awaiting review",
        },
        {
          name: "Shift notes",
          state: "healthy",
          meta: "Local only",
        },
      ],
      alertsTitle: "Recommendations",
      alertsSubtitle:
        "Agents discovered these events and suggested actions. Accept or investigate each recommendation.",
      chatPlaceholder: "Ask about this shift, a procedure, or a tag…",
      chatModel: "On-prem",
      alerts: [
        {
          severity: "High",
          title: "Vibration above band on Pump P-101",
          asset: "Line 2 · Pump P-101",
          tag: "vib_rms",
          timestamp: "06:41:13",
          agent: "Operations Copilot",
          recommendation:
            "The procedure calls for a bearing check before the next shift. Hold the line until an engineer approves.",
          actions: ["Accept", "Investigate"],
        },
        {
          severity: "Medium",
          title: "Zone 3 temperature drifting",
          asset: "Packaging hall · Zone 3",
          tag: "zone3_temp",
          timestamp: "07:02:48",
          agent: "Operations Copilot",
          recommendation:
            "Review the procedure and keep the current setpoint. No change until someone approves.",
          actions: ["Accept", "Investigate"],
        },
        {
          severity: "Low",
          title: "Quality note waiting on sign-off",
          asset: "Line 2 · Checkweigher",
          tag: "pack_weight",
          timestamp: "05:18:09",
          agent: "Operations Copilot",
          recommendation:
            "A note is ready for the shift lead. Nothing is applied until it is accepted.",
          actions: ["Accept", "Investigate"],
        },
        {
          severity: "Low",
          title: "Handover summary ready",
          asset: "Site-wide · Shift B",
          tag: "shift_notes",
          timestamp: "04:56:44",
          agent: "Operations Copilot",
          recommendation:
            "Read the handover and confirm it before the next crew starts.",
          actions: ["Accept", "Investigate"],
        },
      ],
      workflowsTitle: "Workflows",
      workflowsSubtitle: "Recently completed agentic runs across site assets",
      workflows: [
        {
          name: "Vibration triage",
          asset: "Line 2 · Pump P-101",
          state: "healthy",
          detail: "Completed 06:52 · ticket drafted, waiting for approval",
          steps: 5,
          duration: "2m 08s",
          completedAt: "06:52",
        },
        {
          name: "Temperature review",
          asset: "Packaging hall · Zone 3",
          state: "healthy",
          detail: "Completed 06:41 · recommendation queued for approval",
          steps: 4,
          duration: "1m 47s",
          completedAt: "06:41",
        },
        {
          name: "Procedure lookup",
          asset: "Line 2 · Extruder",
          state: "healthy",
          detail: "Completed 05:58 · passage cited for the shift lead",
          steps: 3,
          duration: "58s",
          completedAt: "05:58",
        },
        {
          name: "Quality note",
          asset: "Line 2 · Checkweigher",
          state: "healthy",
          detail: "Completed 05:22 · waiting for sign-off",
          steps: 4,
          duration: "1m 12s",
          completedAt: "05:22",
        },
        {
          name: "Tag stream restored",
          asset: "Site-wide · MQTT broker",
          state: "healthy",
          detail: "Completed 04:18 · live tags flowing again",
          steps: 6,
          duration: "3m 04s",
          completedAt: "04:18",
        },
        {
          name: "Shift handover digest",
          asset: "Site-wide · Shift B",
          state: "healthy",
          detail: "Completed 03:55 · summary ready to confirm",
          steps: 3,
          duration: "41s",
          completedAt: "03:55",
        },
        {
          name: "Setpoint review",
          asset: "Packaging hall · Zone 3",
          state: "warning",
          detail: "Completed 03:12 · no change until approved",
          steps: 7,
          duration: "4m 22s",
          completedAt: "03:12",
        },
      ],
      activityTitle: "Recent activity",
      activity: [
        {
          time: "07:04",
          actor: "J. Alvarez",
          text: "Acknowledged the Pump P-101 vibration note and assigned Line 2 follow-up.",
        },
        {
          time: "06:58",
          actor: "Operations Copilot",
          text: "Explained the Zone 3 drift from the procedure and the live tag. Waiting for approval.",
        },
        {
          time: "06:45",
          actor: "Operations Copilot",
          text: "Recommended a bearing check for Pump P-101. Nothing changes until it is accepted.",
        },
        {
          time: "06:12",
          actor: "M. Chen",
          text: "Imported a signed procedure pack from USB media.",
        },
        {
          time: "05:54",
          actor: "Operations Copilot",
          text: "Finished the temperature review. The setpoint stays until an operator signs off.",
        },
        {
          time: "05:31",
          actor: "health-service",
          text: "Generated a diagnostics bundle after the MQTT broker reconnect on Packaging hall.",
        },
        {
          time: "05:08",
          actor: "Operations Copilot",
          text: "Prepared the handover summary for Shift B and left it for the shift lead to confirm.",
        },
        {
          time: "04:52",
          actor: "J. Alvarez",
          text: "Closed the Line 2 checklist note after reading the copilot's explanation.",
        },
        {
          time: "04:30",
          actor: "J. Alvarez",
          text: "Reviewed open recommendations before shift turnover.",
        },
        {
          time: "04:02",
          actor: "connect-gateway",
          text: "Restored the live tag stream after the broker reconnect finished.",
        },
        {
          time: "03:41",
          actor: "Operations Copilot",
          text: "Published the shift handover digest to the local audit log.",
        },
      ],
    },
  },
  product: {
    title: "Run AI locally. Nothing leaves your premises.",
    titleLine2: "No data training.",
    valuePropositions: [
      {
        id: "on-prem-ai",
        title: "On-premise AI",
        description:
          "All inference, data processing, and management runs on your infrastructure. Zero operational data leaves the premises.",
        visual: "sovereign" as const,
        tone: "cool" as const,
      },
      {
        id: "act",
        title: "Operations Copilot",
        description:
          "Reads procedures and live plant data, explains what it sees, recommends a next step, and acts only with approval.",
        visual: "act" as const,
        tone: "warm" as const,
      },
      {
        id: "connect",
        title: "Connect existing data",
        description:
          "Ingest live data from PLCs, sensors, and controllers via any industrial protocol.",
        visual: "connect" as const,
        tone: "warm" as const,
      },
      {
        id: "understand",
        title: "Understand assets",
        description:
          "Automatically build a real-time, AI-ready model of your plant, line, or facility.",
        visual: "understand" as const,
        tone: "cool" as const,
      },
      {
        id: "manage",
        title: "Manage in one place",
        description:
          "Configure connections, deploy models and agents, and monitor performance from one interface.",
        visual: "manage" as const,
        tone: "warm" as const,
      },
    ],
  },
  direction: {
    eyebrow: "Direction",
    title: "Assisted, then augmented, then autonomous",
    intro:
      "Where the platform is heading. These stages describe the path, not a claim about what is running on a site today.",
    stages: [
      {
        id: "assisted",
        title: "Assisted",
        description:
          "The Operations Copilot reads procedures and live plant data, explains what is happening, and recommends a next step.",
      },
      {
        id: "augmented",
        title: "Augmented",
        description:
          "The copilot prepares the change. It acts only after a person on the site approves it.",
      },
      {
        id: "autonomous",
        title: "Autonomous",
        description:
          "Within limits a site chooses, approved kinds of action can run on their own. That stage comes later.",
      },
    ],
  },
  contact: {
    title: "Book a short call",
    submitLabel: "Send",
    successMessage:
      "Thank you — we've received your request and will be in touch shortly.",
    errorMessage:
      "Something went wrong. Please try again or email us directly.",
  },
  cookies: {
    title: "Cookies",
    body: "We use analytics cookies to understand how the site is used. Decline and your visit is still counted anonymously, without cookies.",
    acceptLabel: "Accept",
    declineLabel: "Decline",
    settingsLabel: "Cookies",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Teos. All rights reserved.`,
    links: [
      { label: "Product", href: "product" },
      { label: "Contact", href: "contact" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
