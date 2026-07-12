import { motion } from "framer-motion";

import { FadeIn } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-background.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(246,174,45,0.12),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <p className="mb-4 inline-flex items-center rounded-full border border-border/80 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
            Sovereign industrial AI
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            {hero.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              {hero.primaryCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("product")}
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </FadeIn>

        <motion.div
          className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          {[
            "On-premise by default",
            "Multi-protocol connectivity",
            "Operator-friendly deployment",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-medium text-foreground backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
