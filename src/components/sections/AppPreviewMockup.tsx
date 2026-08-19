import { PortalHome } from "@/components/sections/preview/PortalHome";
import { PortalShell } from "@/components/sections/preview/PortalShell";

export function AppPreviewMockup() {
  return (
    <>
      <img
        src="/preview/portal-home-1600.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width={1120}
        height={800}
        className="block h-auto w-full rounded-sm ring-1 ring-black/10 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.55)] md:hidden"
      />

      {/* scale() leaves the unscaled height in layout: 7.5% = (1 - 0.88) x the 16/10 shell aspect */}
      <div className="hidden origin-top scale-[0.88] -mb-[7.5%] md:block">
        <PortalShell>
          <PortalHome />
        </PortalShell>
      </div>
    </>
  );
}
