import { siteContent } from "@/data/content";
import { openCookieSettings } from "@/lib/consent";
import { captureEvent } from "@/lib/posthog";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/logo-mark.svg"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 shrink-0"
          />
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">
              {siteContent.company.name} - {siteContent.company.tagline}
            </span>
            <a
              href={`mailto:${siteContent.company.email}`}
              className="mt-1 text-xs font-medium text-primary hover:underline"
              onClick={() => captureEvent("contact_email_clicked")}
            >
              {siteContent.company.email}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <button
            type="button"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
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
