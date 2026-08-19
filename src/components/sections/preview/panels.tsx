import type { ReactNode } from "react";

type PanelProps = {
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  trailing?: ReactNode;
};

type PanelHeaderProps = {
  title: string;
  subtitle?: string;
  meta?: ReactNode;
};

type StatusDotProps = {
  state: "healthy" | "warning" | "critical" | "neutral";
};

type ChipProps = {
  children: ReactNode;
  tone?: "default" | "warning" | "danger" | "success" | "dark" | "primary";
};

type SparklineProps = {
  values: readonly number[];
  className?: string;
  tone?: "up" | "down" | "neutral";
};

const statusDotClass = {
  healthy: "bg-emerald-700",
  warning: "bg-amber-600",
  critical: "bg-[#9b2915]",
  neutral: "bg-[#626c66]",
};

const chipClass = {
  default: "bg-white text-[#2a2f2a] ring-[#e2e8e4]",
  warning: "bg-amber-50 text-amber-800 ring-amber-200",
  danger: "bg-[#f8e6e2] text-[#9b2915] ring-[#f1cfc8]",
  success: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  dark: "bg-[#111] text-white ring-[#111]",
  primary: "bg-[#9b2915] text-white ring-[#9b2915]",
};

export function Panel({
  title,
  subtitle,
  meta,
  children,
  className = "",
  bodyClassName = "",
  trailing,
}: PanelProps) {
  return (
    <section
      className={`relative rounded-xl border border-[#e2e8e4] bg-[#f6f8f6] ${className}`.trim()}
    >
      <PanelHeader title={title} subtitle={subtitle} meta={meta} />
      <div className={bodyClassName}>{children}</div>
      {trailing}
    </section>
  );
}

export function PanelHeader({ title, subtitle, meta }: PanelHeaderProps) {
  return (
    <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#e2e8e4] px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#626c66]">
          {title}
        </p>
        {subtitle ? (
          <p className="mt-1 text-xs text-[#626c66]">{subtitle}</p>
        ) : null}
      </div>
      {meta ? (
        <span className="flex shrink-0 items-center text-[#626c66]">{meta}</span>
      ) : null}
    </div>
  );
}

export function StatusDot({ state }: StatusDotProps) {
  return (
    <span
      className={`inline-flex size-2 rounded-full ${statusDotClass[state]}`}
      aria-hidden="true"
    />
  );
}

export function Chip({ children, tone = "default" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium ring-1 ${chipClass[tone]}`}
    >
      {children}
    </span>
  );
}

const sparklineTone = {
  up: {
    stroke: "#15803d",
    fill: "rgba(21, 128, 61, 0.12)",
    grid: "rgba(98, 108, 102, 0.18)",
  },
  down: {
    stroke: "#9b2915",
    fill: "rgba(155, 41, 21, 0.12)",
    grid: "rgba(98, 108, 102, 0.18)",
  },
  neutral: {
    stroke: "#626c66",
    fill: "rgba(98, 108, 102, 0.1)",
    grid: "rgba(98, 108, 102, 0.18)",
  },
};

function buildSmoothPath(coords: { x: number; y: number }[]) {
  if (coords.length === 0) return "";
  if (coords.length === 1) return `M ${coords[0].x},${coords[0].y}`;

  let path = `M ${coords[0].x},${coords[0].y}`;

  for (let index = 0; index < coords.length - 1; index += 1) {
    const point = coords[index];
    const next = coords[index + 1];
    const controlX = (point.x + next.x) / 2;
    path += ` C ${controlX},${point.y} ${controlX},${next.y} ${next.x},${next.y}`;
  }

  return path;
}

export function Sparkline({
  values,
  className = "",
  tone = "neutral",
}: SparklineProps) {
  if (values.length === 0) return null;

  const width = 240;
  const height = 44;
  const padding = 4;
  const plotHeight = height - padding * 2;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const colors = sparklineTone[tone];

  const coords = values.map((value, index) => ({
    x: (index / Math.max(values.length - 1, 1)) * width,
    y:
      height -
      padding -
      ((value - min) / range) * (plotHeight - 2),
  }));

  const linePath = buildSmoothPath(coords);
  const areaPath = `${linePath} L ${width},${height} L 0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={`h-11 w-full ${className}`.trim()}
      aria-hidden="true"
    >
      {[0.25, 0.5, 0.75].map((ratio) => (
        <line
          key={ratio}
          x1="0"
          x2={width}
          y1={padding + plotHeight * ratio}
          y2={padding + plotHeight * ratio}
          stroke={colors.grid}
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}
      <path d={areaPath} fill={colors.fill} />
      <path
        d={linePath}
        fill="none"
        stroke={colors.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
