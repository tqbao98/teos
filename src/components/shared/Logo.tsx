import { siteContent } from "@/data/content";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo-mark.svg"
        alt=""
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        {siteContent.company.name}
      </span>
    </div>
  );
}
