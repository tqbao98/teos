const LEGACY_CONSENT_KEY = "teos-cookie-consent";

export const COOKIE_SETTINGS_EVENT = "teos-cookie-settings-open";

/**
 * Consent was stored here before PostHog became the source of truth. Visitors
 * who already accepted under the previous banner should not be asked again.
 */
export function hasLegacyConsent(): boolean {
  try {
    return localStorage.getItem(LEGACY_CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function clearLegacyConsent(): void {
  try {
    localStorage.removeItem(LEGACY_CONSENT_KEY);
  } catch {
    // Storage may be unavailable in private browsing or restricted contexts.
  }
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
