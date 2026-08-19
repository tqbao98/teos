const CONSENT_KEY = "teos-cookie-consent";
const CONSENT_ACCEPTED = "accepted";

export type CookieConsent = "accepted" | null;

export const COOKIE_SETTINGS_EVENT = "teos-cookie-settings-open";

export function getCookieConsent(): CookieConsent {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === CONSENT_ACCEPTED ? "accepted" : null;
  } catch {
    return null;
  }
}

export function setCookieConsentAccepted(): void {
  try {
    localStorage.setItem(CONSENT_KEY, CONSENT_ACCEPTED);
  } catch {
    // Storage may be unavailable in private browsing or restricted contexts.
  }
}

export function hasAcceptedCookies(): boolean {
  return getCookieConsent() === "accepted";
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
