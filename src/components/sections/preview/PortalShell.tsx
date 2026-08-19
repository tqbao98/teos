import {
  Activity,
  BookOpen,
  Box,
  Cable,
  Factory,
  Home,
  MessageSquare,
  MoreHorizontal,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { siteContent } from "@/data/content";

import { StatusDot } from "./panels";

const navIcons: Record<string, LucideIcon> = {
  home: Home,
  connect: Cable,
  asset: Factory,
  models: Box,
  workflows: Activity,
  agents: MessageSquare,
};

export function PortalShell({ children }: { children: ReactNode }) {
  const { company, preview } = siteContent;

  return (
    <div
      className="font-cal flex aspect-[3/5] overflow-hidden rounded-xl bg-[#f6f8f6] shadow-[0_40px_120px_-24px_rgba(0,0,0,0.85)] ring-1 ring-black/10 sm:aspect-[16/10]"
      aria-hidden="true"
    >
      <aside className="hidden w-[14rem] shrink-0 flex-col overflow-hidden border-r border-[#e2e8e4] bg-[#f6f8f6] md:flex">
        <div className="flex shrink-0 items-center gap-2 px-3.5 py-3">
          <img src="/logo-mark.svg" alt="" className="size-4 shrink-0" />
          <span className="text-[13px] font-semibold tracking-tight text-[#2a2f2a]">
            {company.name}
          </span>
        </div>

        <div className="shrink-0 px-3">
          <div className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] text-[#626c66] ring-1 ring-[#e2e8e4]">
            <Search className="size-3.5 shrink-0" />
            <span>{preview.searchPlaceholder}</span>
          </div>
        </div>

        <nav className="mt-3 flex min-h-0 flex-1 flex-col overflow-hidden px-2">
          <ul className="space-y-0.5">
            {preview.nav.slice(0, 6).map((item) => {
              const Icon = navIcons[item.id] ?? BookOpen;
              const isActive = item.id === preview.activeNav;
              return (
                <li key={item.id}>
                  <div
                    className={
                      isActive
                        ? "flex items-center gap-2 rounded-md bg-zinc-200 px-2 py-1.5 text-[13px] font-medium text-[#2a2f2a]"
                        : "flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-[#2a2f2a]/80"
                    }
                  >
                    <Icon className="size-3.5 shrink-0 text-[#626c66]" />
                    <span className="min-w-0 flex-1">{item.label}</span>
                    {"badge" in item && item.badge ? (
                      <span className="px-1.5 py-0.5 text-[10px] text-[#626c66]">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 border-t border-[#e2e8e4] pt-4">
            <div className="space-y-4 px-2">
              {preview.sidebarSections.map((section) => (
                <div key={section.title}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#626c66]">
                    {section.title}
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="truncate rounded-md px-2 py-1.5 text-[12px] text-[#2a2f2a]/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </nav>

        <div className="flex shrink-0 items-center gap-2 px-3 py-2.5">
          <img
            src="/avatar-engineer.svg"
            alt=""
            className="size-7 shrink-0 rounded-full object-cover ring-1 ring-[#e2e8e4]"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium text-[#2a2f2a]">
              {preview.user.name}
            </p>
            <p className="text-[10px] text-[#626c66]">{preview.user.role}</p>
          </div>
          <MoreHorizontal className="size-3.5 text-[#626c66]" />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col bg-white">
        <header className="flex h-11 shrink-0 items-center gap-3 border-b border-[#e2e8e4] px-4">
          <p className="min-w-0 truncate text-[13px] font-medium text-[#2a2f2a]">
            {preview.topBar.breadcrumb}
          </p>
          <span className="hidden h-3.5 w-px bg-[#e2e8e4] sm:block" />
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#2a2f2a]">
            <StatusDot state="healthy" />
            Live
          </span>
        </header>

        <div className="min-h-0 flex-1 overflow-hidden pb-0 pt-4 px-4 sm:px-5 sm:pt-5 lg:px-6">
          {children}
        </div>
      </div>
    </div>
  );
}
