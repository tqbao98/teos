import { AppPreviewMockup } from "@/components/sections/AppPreviewMockup";
import { FadeIn } from "@/components/shared/SectionHeader";

export function Preview() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] p-4 sm:p-6 lg:p-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[92rem]">
        <FadeIn>
          <AppPreviewMockup />
        </FadeIn>
      </div>
    </div>
  );
}
