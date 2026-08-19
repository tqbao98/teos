import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import posthog, { posthogEnabled } from "@/lib/posthog";
import { cn, scrollToSection } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [inContact, setInContact] = useState(false);
  const scrolledRef = useRef(false);

  const showCta = pastHero && !inContact;

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 12;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "hero") {
            setPastHero(!entry.isIntersecting);
          } else if (entry.target.id === "contact") {
            setInContact(entry.isIntersecting);
          }
        }
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 hidden transition-[background-color,opacity] duration-300 md:block",
        scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Scroll to top"
        >
          <Logo />
        </button>

        <div
          className={cn(
            "transition-opacity duration-300",
            showCta ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <Button
            size="sm"
            className="rounded-md"
            onClick={() => {
              if (posthogEnabled) {
                posthog.capture("demo_request_started", {
                  source: "navbar",
                });
              }
              scrollToSection("contact");
            }}
            tabIndex={showCta ? undefined : -1}
            aria-hidden={!showCta}
          >
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}
