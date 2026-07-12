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
    headline: "AI at the corner of the world",
    subheadline:
      "On-premise-first AI agents for industrial operations — from wire to intelligence, on your infrastructure.",
    primaryCta: "Request a demo",
    secondaryCta: "Explore the platform",
  },
  product: {
    eyebrow: "Platform",
    title: "Wire to intelligence, on your infrastructure",
    description:
      "One sovereign platform that connects to your plant floor, understands operational context, and deploys AI agents — without cloud dependency or middleware stacks.",
    layers: [
      {
        id: "connect",
        title: "Connect",
        description:
          "Native multi-protocol ingestion from PLCs, sensors, and controllers — Modbus, MQTT, OPC-UA, Profinet, S7, CAN bus, and more.",
        icon: "plug",
        span: "large",
      },
      {
        id: "understand",
        title: "Understand",
        description:
          "Automatically contextualizes operational data into a real-time, AI-ready model of your plant, line, or facility.",
        icon: "brain",
        span: "medium",
      },
      {
        id: "act",
        title: "Act",
        description:
          "Deploy AI agents for predictive maintenance, anomaly detection, quality optimization, and autonomous process control — locally with sub-10ms response.",
        icon: "zap",
        span: "medium",
      },
      {
        id: "manage",
        title: "Manage",
        description:
          "Operator-friendly portal to configure connections, deploy models, monitor performance, and maintain the system without data scientists.",
        icon: "settings",
        span: "large",
      },
    ],
    differentiators: [
      {
        title: "Sovereign by design",
        description:
          "All inference, data processing, and management runs on your infrastructure. Zero operational data leaves the premises.",
        icon: "shield",
      },
      {
        title: "Vendor-neutral",
        description:
          "Works across Siemens, Allen-Bradley, ABB, Schneider, Mitsubishi, Beckhoff, and legacy equipment.",
        icon: "layers",
      },
      {
        title: "Operator-friendly",
        description:
          "Built for OT teams and plant engineers. Deploy AI use cases in days, not months — without a dedicated data engineering team.",
        icon: "users",
      },
      {
        title: "AI-first, not data-first",
        description:
          "The platform exists to deliver AI-powered operations. Data connectivity is a means, not the product.",
        icon: "sparkles",
      },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Measurable outcomes for industrial operations",
    description:
      "Teos helps teams move from fragmented OT data to live AI on the plant floor — with results you can quantify.",
    stats: [
      {
        value: "30–50%",
        label: "Reduction in unplanned downtime",
        detail: "Predictive maintenance across multi-protocol sensor data",
      },
      {
        value: "20–40%",
        label: "Less scrap and rework",
        detail: "Real-time quality optimization from live process signals",
      },
      {
        value: "10–25%",
        label: "Energy cost savings",
        detail: "AI balancing production output against consumption",
      },
      {
        value: "<10ms",
        label: "Edge inference latency",
        detail: "Time-sensitive decisions stay on-premises",
      },
    ],
    stories: [
      {
        quote:
          "We connected three legacy PLC lines in a single afternoon and had anomaly detection running locally by end of week — no cloud, no middleware project.",
        role: "OT Lead",
        company: "Regional food & beverage manufacturer",
        industry: "Process manufacturing",
      },
      {
        quote:
          "Our operators finally have one place to see plant health and ask questions in plain language. The copilot runs entirely on our infrastructure.",
        role: "Plant Engineer",
        company: "Multi-site discrete manufacturer",
        industry: "Automotive supply chain",
      },
      {
        quote:
          "Air-gapped deployment was non-negotiable. Teos gave us wire-to-AI without stitching together five different tools.",
        role: "Head of Operations",
        company: "Critical infrastructure operator",
        industry: "Energy & utilities",
      },
    ],
    disclaimer:
      "Customer stories are representative examples for illustration. Replace with verified references as deployments go live.",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "See Teos on your infrastructure",
    description:
      "Tell us about your plant, protocols, and goals. We'll follow up to schedule a tailored demo.",
    submitLabel: "Request demo",
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
