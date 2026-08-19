import posthog from "posthog-js";

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_POSTHOG_HOST;

export const posthogEnabled = Boolean(posthogKey && posthogHost);

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
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
  });

  initialized = true;
}

export function captureEvent(
  event: string,
  properties?: Record<string, unknown>,
): void {
  if (!posthogEnabled || !initialized) return;
  posthog.capture(event, properties);
}

export function identifyUser(
  distinctId: string,
  properties: Record<string, unknown>,
): void {
  if (!posthogEnabled || !initialized) return;
  posthog.identify(distinctId, properties);
}

export default posthog;
