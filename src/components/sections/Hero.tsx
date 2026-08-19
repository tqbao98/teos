import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { Meteors } from "@/components/ui/meteors";
import { siteContent } from "@/data/content";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const { hero } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [meteorsPaused, setMeteorsPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setMeteorsPaused(!entry.isIntersecting),
      { threshold: 0.05, rootMargin: "80px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-svh overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Meteors number={30} paused={meteorsPaused} />
      </div>

      <div className="absolute inset-x-0 top-[42%] z-20 flex -translate-y-1/2 flex-col items-center px-4 text-center sm:top-[38%] sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-muted-foreground sm:text-base">
          {hero.eyebrow}
        </p>

        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-cal)] text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground sm:mt-4 lg:max-w-none lg:whitespace-nowrap">
          Intelligence for <em className="italic">industrial plants</em>
        </h1>

        <div className="mt-5 sm:mt-7">
          <Button
            size="sm"
            className="rounded-md bg-[#111] text-white hover:bg-black hover:text-white"
            onClick={() => scrollToSection("contact")}
          >
            {hero.primaryCta}
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-[58%] overflow-hidden sm:h-[62%]">
        <Globe className="absolute -top-6 left-1/2 aspect-square w-[min(1400px,170%)] max-w-none -translate-x-1/2 sm:-top-8" />
      </div>
    </section>
  );
}
