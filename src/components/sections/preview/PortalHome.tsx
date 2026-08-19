import { ArrowUpRight, ArrowUp, ChevronDown, Mic, Plus } from "lucide-react";

import { siteContent } from "@/data/content";

import { Chip, Panel, Sparkline, StatusDot } from "./panels";

const severityTone = {
  High: "primary",
  Medium: "warning",
  Low: "default",
} as const;

const deltaDirectionClass = {
  up: "text-[11px] font-medium text-emerald-700",
  down: "text-[11px] font-medium text-[#9b2915]",
  neutral: "text-[11px] font-medium text-[#626c66]",
} as const;

const deltaSparklineTone = {
  up: "up",
  down: "down",
  neutral: "neutral",
} as const;

type AgentRecommendation = (typeof siteContent.preview.home.alerts)[number];

function AgentRecommendationCard({ alert }: { alert: AgentRecommendation }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[14px] font-medium text-[#2a2f2a]">
            {alert.title}
          </p>
          <p className="mt-1 truncate text-[11px] text-[#626c66]">
            {alert.agent} · {alert.asset} · {alert.tag} · {alert.timestamp}
          </p>
        </div>
        <Chip tone={severityTone[alert.severity]}>{alert.severity}</Chip>
      </div>
      <div className="mt-2 rounded-md bg-white px-2.5 py-2 ring-1 ring-[#e2cfc8]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#626c66]">
          Suggested action
        </p>
        <p className="mt-1 text-[12px] leading-5 text-[#2a2f2a]">
          {alert.recommendation}
        </p>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {alert.actions.map((action) => (
          <Chip
            key={action}
            tone={action === "Accept" ? "dark" : "default"}
          >
            {action}
          </Chip>
        ))}
      </div>
    </>
  );
}

function MoreOnEdgeBadge({ count }: { count: number }) {
  if (count <= 0) return null;

  return (
    <span className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 rounded-full border border-[#e2e8e4] bg-[#f6f8f6] px-2.5 py-0.5 text-[11px] font-medium text-[#626c66]">
      +{count} more
    </span>
  );
}

function PortalChatComposer() {
  const { home } = siteContent.preview;

  return (
    <div className="flex min-h-[5.5rem] flex-col justify-between rounded-2xl border border-[#e2e8e4] bg-white px-4 pb-4 pt-3.5">
      <p className="text-[13px] text-[#626c66]">{home.chatPlaceholder}</p>
      <div className="flex items-end justify-between gap-3 pt-2">
        <span className="inline-flex shrink-0 translate-y-0.5 text-[#2a2f2a]">
          <Plus className="size-4" aria-hidden="true" />
        </span>
        <div className="ml-auto flex items-center gap-3">
          <span className="inline-flex items-center gap-0.5 text-[12px] font-medium text-[#2a2f2a]">
            {home.chatModel}
            <ChevronDown className="size-3.5" aria-hidden="true" />
          </span>
          <Mic className="size-4 shrink-0 text-[#2a2f2a]" aria-hidden="true" />
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#9b2915] text-white">
            <ArrowUp className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function PortalHome() {
  const { preview } = siteContent;
  const { home } = preview;
  const topRecommendation = home.alerts[0];
  const stackedRecommendations = home.alerts.slice(1);
  const visibleWorkflows = home.workflows.slice(0, 3);
  const hiddenWorkflowsCount = home.workflows.length - visibleWorkflows.length;

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xl font-semibold tracking-tight text-[#2a2f2a]">
            {home.header.title}
          </p>
          <p className="mt-1 text-xs text-[#626c66]">{home.header.subtitle}</p>
        </div>
        <div className="hidden items-center gap-2 xl:flex">
          {home.header.actions.map((action, index) => (
            <span
              key={action}
              className={
                index === home.header.actions.length - 1
                  ? "rounded-md bg-[#9b2915] px-3 py-1.5 text-[11px] font-medium text-white"
                  : "rounded-md bg-[#f6f8f6] px-3 py-1.5 text-[11px] font-medium text-[#2a2f2a] ring-1 ring-[#e2e8e4]"
              }
            >
              {action}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
        {home.stats.map((stat, index) =>
          index === home.stats.length - 1 ? (
            <div
              key={stat.label}
              className="rounded-xl border border-[#e2e8e4] bg-[#f6f8f6] px-4 py-3"
            >
              <p className="text-[11px] font-medium text-[#626c66]">
                {home.modelStatusTitle}
              </p>
              <div className="mt-2 space-y-2">
                {home.modelStatus.map((model) => (
                  <div
                    key={model.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <p className="truncate text-[11px] font-medium text-[#2a2f2a]">
                      {model.name}
                    </p>
                    <StatusDot
                      state={model.state === "warning" ? "warning" : "healthy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              key={stat.label}
              className="rounded-xl border border-[#e2e8e4] bg-[#f6f8f6] px-4 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-2xl font-semibold tabular-nums tracking-tight text-[#2a2f2a]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] text-[#626c66]">{stat.label}</p>
                </div>
                <span className={deltaDirectionClass[stat.deltaDirection]}>
                  {stat.delta}
                </span>
              </div>
              <div className="-mx-1 mt-3">
                <Sparkline
                  values={stat.trend}
                  tone={deltaSparklineTone[stat.deltaDirection]}
                />
              </div>
            </div>
          ),
        )}
      </div>

      <div className="mt-4 min-h-0 flex-1">
        <div className="grid h-full min-h-0 grid-cols-1 gap-3 md:grid-cols-3">
          <div className="flex min-h-0 flex-col gap-3 md:col-span-2">
            <Panel
              title={home.alertsTitle}
              subtitle={home.alertsSubtitle}
              className="shrink-0"
            >
              {topRecommendation ? (
                <div className="isolate px-4 py-4 pb-5">
                  <div className="relative">
                    {stackedRecommendations.slice(0, 2).map((alert, index) => (
                      <div
                        key={`${alert.asset}-${alert.timestamp}`}
                        className="pointer-events-none absolute inset-x-0 rounded-xl border border-[#e2e8e4] bg-[#f6f8f6]"
                        style={{
                          top: 0,
                          bottom: 0,
                          transform: `translateY(-${(index + 1) * 8}px)`,
                          opacity: index === 0 ? 0.72 : 0.45,
                          zIndex: index + 1,
                        }}
                        aria-hidden="true"
                      />
                    ))}
                    <article className="relative z-10 rounded-xl border border-[#e2cfc8] bg-[#f8e6e2] px-4 py-3">
                      <AgentRecommendationCard alert={topRecommendation} />
                    </article>
                  </div>
                  {stackedRecommendations.length > 0 ? (
                    <p className="relative z-10 mt-3 text-center text-[11px] text-[#626c66]">
                      +{stackedRecommendations.length} more in queue
                    </p>
                  ) : null}
                </div>
              ) : null}
            </Panel>

            <div className="mt-auto shrink-0 pb-4">
              <PortalChatComposer />
            </div>
          </div>

          <div className="flex min-h-0 flex-col gap-3 md:col-span-1">
            <Panel
              title={home.workflowsTitle}
              subtitle={home.workflowsSubtitle}
              className={`shrink-0${hiddenWorkflowsCount > 0 ? " mb-2 pb-3" : ""}`}
              trailing={<MoreOnEdgeBadge count={hiddenWorkflowsCount} />}
              meta={
                <ArrowUpRight
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
              }
            >
              <ul className="divide-y divide-[#e2e8e4]">
                {visibleWorkflows.map((workflow) => (
                  <li
                    key={`${workflow.name}-${workflow.completedAt}`}
                    className="flex items-start justify-between gap-3 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-[#2a2f2a]">
                        {workflow.name}
                      </p>
                      <p className="mt-1 truncate text-[11px] text-[#626c66]">
                        {workflow.asset}
                      </p>
                      <p className="mt-1 truncate text-[11px] text-[#626c66]">
                        {workflow.detail}
                      </p>
                    </div>
                    <StatusDot state={workflow.state} />
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel
              title={home.activityTitle}
              subtitle="Operator and system audit feed"
              className="shrink-0 rounded-b-none border-b-0"
              meta={
                <ArrowUpRight
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
              }
            >
              <ul className="divide-y divide-[#e2e8e4]">
                {home.activity.map((item) => (
                  <li
                    key={`${item.time}-${item.actor}`}
                    className="flex items-start gap-3 px-4 py-3"
                  >
                    <span className="mt-0.5 shrink-0 text-[11px] font-medium text-[#626c66]">
                      {item.time}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium text-[#2a2f2a]">
                        {item.actor}
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-[#626c66]">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
