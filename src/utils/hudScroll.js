/** Snappy HUD-style scroll: short duration, sharp ease-out (“locks on”). */

let scrollGen = 0;
const DEFAULT_MS = 280;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function easeOutQuart(t) {
  return 1 - (1 - t) ** 4;
}

/** Scroll window to pixel Y with cancellable RAF animation */
export function hudScrollToY(targetY, durationMs = DEFAULT_MS) {
  const maxY = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const y = Math.max(0, Math.min(targetY, maxY));

  if (prefersReducedMotion()) {
    window.scrollTo(0, y);
    return Promise.resolve();
  }

  scrollGen += 1;
  const gen = scrollGen;
  const start = window.scrollY;
  const delta = y - start;
  if (Math.abs(delta) < 0.5) {
    window.scrollTo(0, y);
    return Promise.resolve();
  }

  const t0 = performance.now();

  return new Promise((resolve) => {
    function step(now) {
      if (gen !== scrollGen) {
        resolve();
        return;
      }
      const t = Math.min(1, (now - t0) / durationMs);
      const eased = easeOutQuart(t);
      window.scrollTo(0, start + delta * eased);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }
    requestAnimationFrame(step);
  });
}

/** Scroll element to top respecting scroll-margin-* (HUD clearance). */
export function hudScrollToHashTarget(element, durationMs = DEFAULT_MS) {
  if (!element) return Promise.resolve();
  const style = window.getComputedStyle(element);
  const marginTop = parseFloat(style.scrollMarginTop) || 0;
  const top =
    element.getBoundingClientRect().top + window.scrollY - marginTop;
  return hudScrollToY(top, durationMs);
}

/** Scroll to element id; no-op when missing */
export function hudScrollToHashId(id, durationMs = DEFAULT_MS) {
  if (!id) return Promise.resolve();
  const el = document.getElementById(id);
  if (!el) return Promise.resolve();
  return hudScrollToHashTarget(el, durationMs);
}

/**
 * In-page anchors: fast HUD scroll instead of sluggish native smooth.
 * @param {() => boolean} getReady – e.g. when main portfolio is mounted (not project overlay).
 */
export function attachHudAnchorScroll(getReady) {
  function onCaptureClick(event) {
    if (!event.target.closest || !getReady()) return;

    const a = event.target.closest('a[href^="#"]');
    if (!a) return;

    const hrefAttr = a.getAttribute("href");
    if (
      !hrefAttr ||
      hrefAttr === "#" ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const id = decodeURIComponent(hrefAttr.slice(1));
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    try {
      if (window.history.replaceState) {
        const url = `${window.location.pathname}${window.location.search}#${encodeURIComponent(id)}`;
        window.history.replaceState(null, "", url);
      }
    } catch {
      window.location.hash = id;
    }

    void hudScrollToHashTarget(target);
  }

  document.addEventListener("click", onCaptureClick, true);
  return () => document.removeEventListener("click", onCaptureClick, true);
}
