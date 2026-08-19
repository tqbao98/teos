import { PortalHome } from "@/components/sections/preview/PortalHome";
import { PortalShell } from "@/components/sections/preview/PortalShell";

export function AppPreviewMockup() {
  return (
    <PortalShell>
      <PortalHome />
    </PortalShell>
  );
}
