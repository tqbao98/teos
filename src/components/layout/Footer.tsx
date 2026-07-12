import { Logo } from "@/components/shared/Logo";
import { siteContent } from "@/data/content";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-3">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {siteContent.company.tagline}
          </p>
          <a
            href={`mailto:${siteContent.company.email}`}
            className="inline-block text-sm font-medium text-primary hover:underline"
          >
            {siteContent.company.email}
          </a>
        </div>

        <nav
          className="flex flex-wrap gap-x-8 gap-y-3"
          aria-label="Footer navigation"
        >
          {siteContent.footer.links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
