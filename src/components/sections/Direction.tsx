import { FadeIn } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function Direction() {
  const { direction } = siteContent;

  return (
    <div className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium text-muted-foreground">
            {direction.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {direction.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {direction.intro}
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {direction.stages.map((stage, index) => (
            <FadeIn key={stage.id} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-border bg-[#f6f8f6] p-6">
                <p className="text-sm font-medium text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
