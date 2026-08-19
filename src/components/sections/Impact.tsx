import { FadeIn } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function Impact() {
  const { impact } = siteContent;

  return (
    <section id="impact" className="bg-gradient-to-b from-white to-background pt-12 pb-24 sm:pt-14 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {impact.title}
            <br />
            {impact.titleLine2}
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-20 lg:grid-cols-4">
          {impact.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.06}>
              <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {stat.detail}
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {impact.results.map((result, index) => (
            <FadeIn key={result.company} delay={0.1 + index * 0.08}>
              <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-xl bg-[var(--charcoal-brown)] p-6">
                <img
                  src={result.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--charcoal-brown)]/90 via-transparent to-[var(--charcoal-brown)]/90"
                />
                <div className="relative">
                  <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {result.value}
                  </p>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-white/70">
                    {result.caption}
                  </p>
                </div>
                <div className="relative space-y-3">
                  <blockquote className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm italic leading-relaxed text-white/80">
                      &ldquo;{result.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="space-y-1.5">
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-white">
                        {result.company}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-white/50">
                        {result.industry}
                      </p>
                    </div>
                    <p className="text-xs text-white/50">
                      {result.attribution}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
