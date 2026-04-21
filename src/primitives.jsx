/* ──────────────────────────────────────────────────────────────
   Shared slide primitives — chrome, reveals, mono counter
   Globals: React hooks, React
   ────────────────────────────────────────────────────────────── */

const { useState, useEffect, useRef, useMemo } = React;

/**
 * ChromeTop — section label + rule
 */
function ChromeTop({ label, num, total, accent = 'var(--amber)', showDot = true }) {
  return (
    <div className="chrome-top">
      <div className="chrome-label">
        {showDot && <span className="dot" style={{ background: accent }} />}
        {label}
      </div>
      <div className="rule" data-reveal style={{ '--reveal-delay': '200ms', transformOrigin: 'left' }} />
      <div className="chrome-num">
        {String(num).padStart(2, '0')} <span style={{ opacity: 0.45 }}>/ {String(total).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

/**
 * ChromeBottom — editorial running footer
 * Left: NN / TT slide counter (tabular figures)
 * Center: section name, small-caps
 * Right: CUNIFORM — SERIES A 2026 (amber)
 */
function ChromeBottom({ index, total, section, left, right }) {
  // Strip "01 · " style prefix from section labels for a cleaner center mark.
  const sectionName = section ? section.replace(/^\s*\d+\s*·\s*/, '') : '';
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <div className="chrome-bottom">
      <div className="chrome-bottom__rule" aria-hidden="true" />
      <div className="chrome-bottom__row">
        <span className="chrome-bottom__left tnum">
          {left || (typeof index === 'number' && typeof total === 'number'
            ? <>{pad(index + 1)} <span className="sep">/</span> {pad(total)}</>
            : '—')}
        </span>
        <span className="chrome-bottom__center">{sectionName}</span>
        <span className="chrome-bottom__right">
          {right || <>CUNIFORM <span className="em-dash">—</span> SERIES A 2026</>}
        </span>
      </div>
    </div>
  );
}

/**
 * Counter — animates from 0 → target when the slide becomes active.
 * Respects the slidechange event via `active` prop fed by parent slide.
 */
function Counter({ to, duration = 1600, delay = 0, format = (n) => Math.round(n).toLocaleString(), active, prefix = '', suffix = '' }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef();
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active) {
      setVal(0);
      startedRef.current = false;
      return;
    }
    if (startedRef.current) return;
    startedRef.current = true;

    const start = performance.now() + delay;
    const tick = (t) => {
      const p = Math.max(0, Math.min(1, (t - start) / duration));
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, to, duration, delay]);

  return (
    <span className="tnum">{prefix}{format(val)}{suffix}</span>
  );
}

/**
 * SplitChars — splits text into chars for per-char stagger
 */
function SplitChars({ text, baseDelay = 0, perChar = 18, className = '' }) {
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={i}
          data-reveal
          style={{
            display: 'inline-block',
            whiteSpace: ch === ' ' ? 'pre' : 'normal',
            '--reveal-delay': `${baseDelay + i * perChar}ms`,
            '--reveal-y': '40px',
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/**
 * Hook: listen to deck-stage slidechange and return the active slide element.
 * Each <Slide> reads this to decide whether it's "active" (for motion triggers).
 */
function useActiveSlideIndex() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const handler = (e) => setIdx(e.detail.index);
    // Wait for deck-stage to mount
    const find = () => {
      const stage = document.querySelector('deck-stage');
      if (stage) {
        stage.addEventListener('slidechange', handler);
      } else {
        setTimeout(find, 50);
      }
    };
    find();
    return () => {
      const stage = document.querySelector('deck-stage');
      if (stage) stage.removeEventListener('slidechange', handler);
    };
  }, []);
  return idx;
}

/**
 * Slide wrapper — mirrors `data-deck-active` (set synchronously by deck-stage)
 * onto `data-active` via MutationObserver so CSS transitions fire even when
 * React state updates are throttled (e.g. in a backgrounded preview tab).
 */
function Slide({ index, total, section, label, tone = 'dark', children, noChrome = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () => {
      if (el.hasAttribute('data-deck-active')) {
        // replay: remove → reflow → re-add so CSS transitions restart
        el.removeAttribute('data-active');
        void el.offsetWidth;
        el.setAttribute('data-active', '');
      } else {
        el.removeAttribute('data-active');
      }
    };
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(el, { attributes: true, attributeFilter: ['data-deck-active'] });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`slide ${tone}`}
      data-label={label}
    >
      {!noChrome && <ChromeTop label={section} num={index + 1} total={total} />}
      {children}
      {!noChrome && <ChromeBottom index={index} total={total} section={section} />}
      <div className="grain" />
    </section>
  );
}

/**
 * useSlideActive — returns whether the nearest ancestor .slide has
 * `data-deck-active`, via MutationObserver. Robust to React state throttling.
 * Pass a ref that points to an element inside the slide.
 */
function useSlideActive(innerRef) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const slide = el.closest('.slide');
    if (!slide) return;
    const sync = () => setActive(slide.hasAttribute('data-deck-active'));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(slide, { attributes: true, attributeFilter: ['data-deck-active'] });
    return () => obs.disconnect();
  }, []);
  return active;
}

// Export to window for other babel scripts
Object.assign(window, {
  ChromeTop, ChromeBottom, Counter, SplitChars, Slide, useActiveSlideIndex, useSlideActive,
});
