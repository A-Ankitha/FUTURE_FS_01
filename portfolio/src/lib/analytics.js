// Future-ready: analytics.
// A single place to swap in a real analytics provider (Plausible, GA4,
// PostHog, etc.) later without touching component code. Right now every
// call is a no-op that just logs in dev, so it's safe to call from
// anywhere (e.g. onClick handlers on the resume/CTA buttons).
//
// To enable e.g. Plausible: add its <script> tag to index.html, then
// replace the console.log below with `window.plausible?.(name, { props })`.
const isDev = import.meta.env.DEV;

export function trackEvent(name, props = {}) {
  if (isDev) {
    console.log("[analytics:dev]", name, props);
  }
  // window.plausible?.(name, { props });
}

export function trackPageview(path) {
  trackEvent("pageview", { path });
}
