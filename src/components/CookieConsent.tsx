import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { COOKIE_SETTINGS_EVENT } from "@/lib/consent";
import {
  acceptCookies,
  declineCookies,
  getConsentStatus,
} from "@/lib/posthog";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsentStatus() === "pending");
  }, []);

  useEffect(() => {
    const openSettings = () => setVisible(true);

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  function handleAccept() {
    acceptCookies();
    setVisible(false);
  }

  function handleDecline() {
    declineCookies();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      aria-modal="false"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-1">
          <p
            id="cookie-consent-title"
            className="text-sm font-medium text-foreground"
          >
            {siteContent.cookies.title}
          </p>
          <p
            id="cookie-consent-description"
            className="text-xs leading-relaxed text-muted-foreground sm:max-w-2xl"
          >
            {siteContent.cookies.body}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button size="sm" variant="outline" onClick={handleDecline}>
            {siteContent.cookies.declineLabel}
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {siteContent.cookies.acceptLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
