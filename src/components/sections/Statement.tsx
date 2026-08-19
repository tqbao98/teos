import { FadeIn } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function Statement() {
  const { statement } = siteContent;

  return (
    <section id="statement" className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="space-y-4 font-[family-name:var(--font-cal)] text-[clamp(1.05rem,4.6vw,4.25rem)] font-bold leading-none tracking-tight text-foreground sm:space-y-5 lg:space-y-6">
            {statement.lines.map((line) => (
              <span key={line.emphasis} className="block whitespace-nowrap">
                {line.prefix}
                <em className="italic text-primary">{line.emphasis}</em>
              </span>
            ))}
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}
