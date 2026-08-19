import posthog from "posthog-js";

import { clearLegacyConsent, hasLegacyConsent } from "@/lib/consent";

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_POSTHOG_HOST;

export const posthogEnabled = Boolean(posthogKey && posthogHost);

export type ConsentStatus = "granted" | "denied" | "pending";

let initialized = false;

export function initPosthog(): void {
  if (initialized) return;

  if (!posthogKey || !posthogHost) {
    if (import.meta.env.DEV) {
      const missingVariable = !posthogKey
        ? "VITE_POSTHOG_KEY"
        : "VITE_POSTHOG_HOST";

      throw new Error(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
      );
    }
    return;
  }

  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2026-05-30",
    // Every visitor is counted from the first page load using a server-side
    // hash, and only moves onto cookies once they explicitly accept. Requires
    // cookieless server hash mode to be enabled in the PostHog project.
    cookieless_mode: "on_reject",
    opt_out_capturing_by_default: true,
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
  });

  initialized = true;

  if (hasLegacyConsent()) {
    clearLegacyConsent();
    posthog.opt_in_capturing();
  }
}

export function getConsentStatus(): ConsentStatus | null {
  if (!initialized) return null;
  return posthog.get_explicit_consent_status();
}

export function acceptCookies(): void {
  if (!initialized) return;
  posthog.opt_in_capturing();
}

export function declineCookies(): void {
  if (!initialized) return;
  posthog.opt_out_capturing();
}

export function captureEvent(
  event: string,
  properties?: Record<string, unknown>,
): void {
  if (!initialized) return;
  posthog.capture(event, properties);
}

export function identifyUser(
  distinctId: string,
  properties: Record<string, unknown>,
): void {
  // Cookieless visitors have no persistent profile to attach an identity to.
  if (!initialized || getConsentStatus() !== "granted") return;
  posthog.identify(distinctId, properties);
}

export default posthog;
