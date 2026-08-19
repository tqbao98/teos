import { FadeIn } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function Statement() {
  const { statement } = siteContent;

  return (
    <section id="statement" className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="space-y-5 font-[family-name:var(--font-cal)] text-[2.5rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:space-y-6 lg:text-[clamp(2.75rem,4.6vw,4.25rem)] lg:leading-none">
            {statement.lines.map((line) => (
              <span key={line.emphasis} className="block lg:whitespace-nowrap">
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
