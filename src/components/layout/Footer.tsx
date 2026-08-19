import { siteContent } from "@/data/content";
import { openCookieSettings } from "@/lib/consent";
import { captureEvent } from "@/lib/posthog";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/logo-mark.svg"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 shrink-0"
          />
          <div className="flex min-w-0 flex-col items-start">
            <span className="text-xs text-muted-foreground">
              {siteContent.company.name} - {siteContent.company.tagline}
            </span>
            <a
              href={siteContent.company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-8 items-center text-xs font-medium text-primary hover:underline"
              onClick={() => captureEvent("linkedin_clicked")}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <button
            type="button"
            className="inline-flex min-h-8 items-center text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            onClick={openCookieSettings}
          >
            {siteContent.cookies.settingsLabel}
          </button>
          <p className="text-xs text-muted-foreground md:text-right">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
