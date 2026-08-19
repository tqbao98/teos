import { createContext, useContext, type ReactElement } from "react";
import { cn } from "@/lib/utils";

type VisualType = "connect" | "understand" | "act" | "manage" | "sovereign";
type ToneType = "warm" | "cool";
type CardSize = "featured" | "compact";

interface ValuePropCardProps {
  title: string;
  description: string;
  visual: VisualType;
  tone: ToneType;
  size?: CardSize;
}

const toneStyles: Record<ToneType, string> = {
  warm: "bg-[#FBEDEA] [background-image:repeating-linear-gradient(135deg,transparent,transparent_12px,rgba(155,41,21,0.05)_12px,rgba(155,41,21,0.05)_13px)]",
  cool: "bg-[#F0F1F2] [background-image:repeating-linear-gradient(135deg,transparent,transparent_12px,rgba(100,102,105,0.05)_12px,rgba(100,102,105,0.05)_13px)]",
};

const CardSizeContext = createContext<CardSize>("compact");

function MockupFrame({ children }: { children: React.ReactNode }) {
  const size = useContext(CardSizeContext);

  return (
    <div className="flex h-full w-full items-center justify-center px-6 py-8">
      <div
        className={
          size === "featured" ? "w-full max-w-[340px]" : "w-full max-w-[280px]"
        }
      >
        {children}
      </div>
    </div>
  );
}

function ConnectMockup() {
  const sources = [
    { protocol: "Modbus TCP", tags: "248", online: true },
    { protocol: "OPC UA", tags: "1,024", online: true },
    { protocol: "CAN bus", tags: "512", online: true },
    { protocol: "MQTT", tags: "96", online: true },
  ];

  return (
    <MockupFrame>
      <div className="overflow-hidden rounded-xl border border-white/80 bg-white/90 shadow-sm">
        <div className="flex items-center justify-between gap-2 border-b border-border/60 px-4 py-2.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Protocol gateway
          </span>
          <span className="flex shrink-0 items-center gap-1 text-[10px] font-medium text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <div className="px-4 py-3">
          <p className="mb-2 text-[10px] font-medium text-muted-foreground">
            Data sources
          </p>
          <div className="space-y-1.5">
            {sources.map((source) => (
              <div
                key={source.protocol}
                className="flex items-center justify-between gap-2 rounded-lg bg-muted/60 px-2.5 py-1.5"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${source.online ? "bg-emerald-500" : "bg-border"}`}
                  />
                  <span className="truncate text-xs font-medium text-foreground">
                    {source.protocol}
                  </span>
                </span>
                <span className="shrink-0 text-[10px] text-muted-foreground">
                  {source.tags} tags
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-border/40 px-4 py-2.5">
          <span className="text-[10px] text-muted-foreground">
            Ingesting
          </span>
          <span className="text-xs font-semibold text-foreground">
            1,880 tags
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}

function UnderstandMockup() {
  const nodes = [
    { label: "Packaging Hall", level: 0 },
    { label: "Line 2 — Extruder", level: 1 },
    { label: "Temperature · 72.4 °C", level: 2, active: true },
    { label: "Motor Load · 61%", level: 2 },
  ];

  return (
    <MockupFrame>
      <div className="overflow-hidden rounded-xl border border-white/80 bg-white/90 shadow-sm">
        <div className="border-b border-border/60 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          AI-ready asset model
        </div>

        <div className="px-4 py-3">
          <p className="mb-2 text-[10px] font-medium text-muted-foreground">
            Plant hierarchy
          </p>
          <div className="space-y-1.5">
            {nodes.map((node) => (
              <div
                key={node.label}
                className="flex items-center gap-2"
                style={{ paddingLeft: `${node.level * 10}px` }}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${node.active ? "bg-primary" : "bg-border"}`}
                />
                <span
                  className={`truncate text-xs ${node.active ? "font-medium text-foreground" : "text-muted-foreground"}`}
                >
                  {node.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/40 px-4 py-3">
          <div className="rounded-lg bg-muted/60 px-2.5 py-2">
            <p className="text-[10px] font-medium text-muted-foreground">
              Context
            </p>
            <p className="mt-1 text-xs leading-snug text-foreground">
              Line 2 extruder running 3.4 °C above setpoint.
            </p>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function ActMockup() {
  return (
    <MockupFrame>
      <div className="rounded-xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Anomaly agent
          </span>
          <span className="shrink-0 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
            &lt;10ms
          </span>
        </div>
        <div className="mt-2 rounded-lg bg-amber-50 px-2.5 py-2 text-xs text-amber-900">
          Vibration spike on Pump P-101
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Running", "Shadow", "Active"].map((chip, i) => (
            <span
              key={chip}
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                i === 0
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

function ManageMockup() {
  const agents = [
    { name: "Predictive Maintenance", health: 98, status: "healthy" as const },
    { name: "Quality Optimizer", health: 94, status: "healthy" as const },
    { name: "Energy Balancer", health: 71, status: "warn" as const },
  ];

  return (
    <MockupFrame>
      <div className="overflow-hidden rounded-xl border border-white/80 bg-white/90 shadow-sm">
        <div className="flex items-center justify-between gap-2 border-b border-border/60 px-4 py-2.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Control center
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 px-4 py-3">
          <div className="rounded-lg bg-muted/60 px-2.5 py-2">
            <p className="text-sm font-semibold text-foreground">12</p>
            <p className="text-[10px] text-muted-foreground">Agents deployed</p>
          </div>
          <div className="rounded-lg bg-muted/60 px-2.5 py-2">
            <p className="text-sm font-semibold text-foreground">99.9%</p>
            <p className="text-[10px] text-muted-foreground">Uptime</p>
          </div>
        </div>

        <div className="border-t border-border/40 px-4 py-3">
          <p className="mb-2 text-[10px] font-medium text-muted-foreground">
            Deployed agents
          </p>
          <div className="space-y-2">
            {agents.map((agent) => (
              <div key={agent.name} className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-xs font-medium text-foreground">
                    {agent.name}
                  </span>
                  <span className="shrink-0 text-[10px] text-muted-foreground">
                    {agent.health}%
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-border/60">
                  <div
                    className={`h-full rounded-full ${agent.status === "healthy" ? "bg-emerald-500" : "bg-amber-500"}`}
                    style={{ width: `${agent.health}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function SovereignMockup() {
  type ModelStatus = "running" | "install";
  type ModelLogoId = "llama" | "qwen" | "mistral" | "deepseek";

  const models = [
    {
      name: "Llama 4",
      version: "8B",
      size: "4.8 GB",
      status: "running" as const,
      logo: "llama" as const,
    },
    {
      name: "Qwen 3.6",
      version: "7B",
      size: "4.1 GB",
      status: "install" as const,
      logo: "qwen" as const,
    },
    {
      name: "Mistral 4",
      version: "12B",
      size: "6.2 GB",
      status: "running" as const,
      logo: "mistral" as const,
    },
    {
      name: "DeepSeek 4",
      version: "7B",
      size: "4.5 GB",
      status: "install" as const,
      logo: "deepseek" as const,
    },
  ];

  const modelLogoSrc: Record<ModelLogoId, string> = {
    llama: "/logos/llama.svg",
    qwen: "/logos/qwen.svg",
    mistral: "/logos/mistral.svg",
    deepseek: "/logos/deepseek.svg",
  };

  function ModelLogo({ id }: { id: ModelLogoId }) {
    return (
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-white p-1"
        aria-hidden="true"
      >
        <img
          src={modelLogoSrc[id]}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  function ActionButton({ status }: { status: ModelStatus }) {
    if (status === "running") {
      return (
        <button
          type="button"
          tabIndex={-1}
          className="flex shrink-0 items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Running
        </button>
      );
    }

    return (
      <button
        type="button"
        tabIndex={-1}
        className="shrink-0 rounded-md bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground shadow-sm"
      >
        Install
      </button>
    );
  }

  function ModelRow({
    name,
    version,
    size,
    status,
    logo,
  }: {
    name: string;
    version: string;
    size: string;
    status: ModelStatus;
    logo: ModelLogoId;
  }) {
    return (
      <div className="flex items-center gap-2.5 px-3 py-2.5 transition-colors hover:bg-muted/40">
        <ModelLogo id={logo} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-foreground">{name}</p>
          <p className="truncate text-[10px] text-muted-foreground">
            {version} · {size}
          </p>
        </div>
        <ActionButton status={status} />
      </div>
    );
  }

  return (
    <MockupFrame>
      <div className="relative w-full">
        <div className="overflow-hidden rounded-xl border border-border/80 bg-[#f4f5f6] shadow-md">
          <div className="flex items-center gap-2 border-b border-border/60 bg-white px-3 py-2">
            <div className="flex gap-1" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            <p className="text-[10px] font-medium text-foreground">Model catalog</p>
          </div>

          <div className="border-b border-border/60 bg-white px-3 py-2">
            <div className="flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-2 py-1.5">
              <svg
                viewBox="0 0 16 16"
                className="h-3 w-3 shrink-0 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="7" cy="7" r="4.5" />
                <path d="M11 11l3 3" />
              </svg>
              <span className="text-[10px] text-muted-foreground">Search models...</span>
            </div>
          </div>

          <div className="divide-y divide-border/40 bg-white pb-4">
            {models.map((model) => (
              <ModelRow
                key={model.name}
                name={model.name}
                version={model.version}
                size={model.size}
                status={model.status}
                logo={model.logo}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          tabIndex={-1}
          aria-label="View more models"
          className="absolute bottom-0 left-1/2 flex h-8 w-8 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-md"
        >
          <svg
            viewBox="0 0 16 16"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5l4 4 4-4" />
            <path d="M4 9l4 4 4-4" />
          </svg>
        </button>
      </div>
    </MockupFrame>
  );
}

const mockupMap: Record<VisualType, () => ReactElement> = {
  connect: ConnectMockup,
  understand: UnderstandMockup,
  act: ActMockup,
  manage: ManageMockup,
  sovereign: SovereignMockup,
};

export function ValuePropCard({
  title,
  description,
  visual,
  tone,
  size = "compact",
}: ValuePropCardProps) {
  const Mockup = mockupMap[visual];

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div
        className={cn(
          "flex w-full flex-1 overflow-hidden",
          size === "featured" ? "min-h-[356px]" : "min-h-[300px]",
          toneStyles[tone],
        )}
      >
        <CardSizeContext.Provider value={size}>
          <Mockup />
        </CardSizeContext.Provider>
      </div>
      <div className="flex shrink-0 flex-col px-6 pb-6 pt-5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed text-muted-foreground",
            size === "compact" && "line-clamp-3",
          )}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
