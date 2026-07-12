import { FadeIn, SectionHeader } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function Impact() {
  const { impact } = siteContent;

  return (
    <section id="impact" className="bg-card py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={impact.eyebrow}
          title={impact.title}
          description={impact.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impact.stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.06}
              className="rounded-3xl border border-border bg-background p-6"
            >
              <p className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.detail}
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {impact.stories.map((story, index) => (
            <FadeIn
              key={story.company}
              delay={0.1 + index * 0.08}
              className="flex flex-col rounded-3xl border border-border bg-background p-6 shadow-sm"
            >
              <blockquote className="flex-1 text-pretty text-base leading-relaxed text-foreground">
                “{story.quote}”
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{story.role}</p>
                <p className="text-sm text-muted-foreground">{story.company}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-primary">
                  {story.industry}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            {impact.disclaimer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
