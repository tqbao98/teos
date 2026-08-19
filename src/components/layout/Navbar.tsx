import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { cn, scrollToSection } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [inContact, setInContact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const showCta = pastHero && !inContact;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
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

        <nav
          className={cn(
            "absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 transition-opacity duration-300 md:flex",
            scrolled
              ? "pointer-events-none opacity-0"
              : "opacity-100",
          )}
          aria-label="Primary"
          aria-hidden={scrolled}
        >
          {siteContent.nav.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              tabIndex={scrolled ? -1 : undefined}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div
          className={cn(
            "hidden transition-opacity duration-300 md:block",
            showCta ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <Button
            size="sm"
            className="rounded-md"
            onClick={() => handleNavClick("contact")}
            tabIndex={showCta ? undefined : -1}
            aria-hidden={!showCta}
          >
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {siteContent.nav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </button>
            ))}
            {showCta ? (
              <Button
                size="sm"
                className="mt-2 w-full rounded-md"
                onClick={() => handleNavClick("contact")}
              >
                Book a demo
              </Button>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
