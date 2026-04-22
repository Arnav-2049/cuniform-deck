/* ──────────────────────────────────────────────────────────────
   Slides 01–05: Cover, Thesis, Problem, Rework Loop, Validation
   ────────────────────────────────────────────────────────────── */

const TOTAL = 20;

/* ============ 01 COVER ============ */
function SlideCover({ index }) {
  const activeIdx = useActiveSlideIndex();
  const isActive = activeIdx === index;
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (isActive) {
      ref.current.removeAttribute('data-active');
      void ref.current.offsetWidth;
      requestAnimationFrame(() => {
        if (ref.current && activeIdx === index) ref.current.setAttribute('data-active', '');
      });
    } else {
      ref.current.removeAttribute('data-active');
    }
  }, [isActive, activeIdx, index]);

  return (
    <section ref={ref} className="slide dark" data-label="Cover">
      {/* Top label */}
      <div style={{ position: 'absolute', top: 56, left: 120, right: 120, display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.24em', '--reveal-delay': '100ms' }}>
          <span style={{ color: 'var(--amber)' }}>●</span>&nbsp;&nbsp;CUNIFORM&nbsp;&nbsp;—&nbsp;&nbsp;PITCH 2026
        </div>
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.24em', '--reveal-delay': '100ms', opacity: 0.6 }}>
          CONFIDENTIAL
        </div>
      </div>

      {/* Hero wordmark */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 40,
      }}>
        <div style={{
          position: 'relative',
          padding: '0 40px',
        }}>
          <span data-reveal style={{ display: 'inline-block', '--reveal-delay': '300ms', '--reveal-y': '80px' }}>
            <img
              src="assets/Cuniform.svg"
              alt="Cuniform"
              style={{ width: 1400, height: 'auto', display: 'block' }}
            />
          </span>
        </div>

        <div
          data-reveal
          style={{
            fontSize: 42,
            letterSpacing: '-0.01em',
            maxWidth: 1100,
            textAlign: 'center',
            lineHeight: 1.25,
            color: 'var(--bone-2)',
            '--reveal-delay': '1400ms',
            fontWeight: 300,
          }}
        >
          Real-time code compliance for everyone who touches a building before it's built.
        </div>

        <div
          data-reveal
          className="mono"
          style={{
            marginTop: 40,
            fontSize: 15,
            letterSpacing: '0.3em',
            color: 'var(--amber)',
            '--reveal-delay': '1800ms',
          }}
        >
          —&nbsp;&nbsp;SEED ROUND · 2026&nbsp;&nbsp;—
        </div>
      </div>

      {/* Bottom (cover uses a bespoke footer, not the editorial running footer) */}
      <div className="cover-footer">
        <span>Yatco · Gallatin · Somani</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
          <Logomark size={20} />
          &nbsp;Cuniform Tech™
        </span>
      </div>

      <div className="grain" />
    </section>
  );
}

/* Small mark — portfolio logomark */
function Logomark({ size = 28 }) {
  return (
    <img
      src="assets/Logomark.svg"
      width={size}
      height={size}
      alt="Cuniform logomark"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}

/* ============ 02 THESIS ============ */
function SlideThesis({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="01 · Thesis" label="Thesis" tone="dark">
      {/* Cuneiform wedge mark — brand watermark, right edge */}
      <svg viewBox="0 0 200 520" style={{
        position: 'absolute', right: 72, top: 44,
        width: 210, height: 546,
        opacity: 0.07, pointerEvents: 'none',
        overflow: 'visible',
      }}>
        <path
          d="M 22 52 Q 100 98 178 52 C 178 210 110 460 105 510 L 100 522 L 95 510 C 90 460 22 210 22 52 Z"
          fill="var(--amber)"
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'grid', gridTemplateColumns: '1.15fr 1fr',
        padding: '160px 120px 120px',
        alignItems: 'center',
        gap: 100,
      }}>
        {/* Left: big statement */}
        <div>
          <div
            className="mono"
            data-reveal
            style={{ fontSize: 16, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 40 }}
          >
            THE CATEGORY TRUTH
          </div>

          <div className="serif" style={{ fontSize: 112, lineHeight: 0.98, letterSpacing: '-0.02em', fontStyle: 'italic' }}>
            <div data-wipe style={{ '--reveal-delay': '200ms' }}>AEC firms</div>
            <div data-wipe style={{ '--reveal-delay': '500ms' }}>don't sell buildings.</div>
            <div data-wipe style={{ '--reveal-delay': '900ms', color: 'var(--amber)' }}>They sell time.</div>
          </div>

          <div
            data-reveal
            style={{
              marginTop: 64,
              fontSize: 32,
              lineHeight: 1.5,
              color: 'var(--bone-2)',
              maxWidth: 700,
              '--reveal-delay': '1500ms',
            }}
          >
            The faster an architect moves from brief to permit, the higher the margin.
            Compliance rework is the single biggest tax on that time.
          </div>
        </div>

        {/* Right: stacked figure — time arbitrage */}
        <TimeArbitrageFigure />
      </div>
    </Slide>
  );
}

function TimeArbitrageFigure() {
  return (
    <div style={{ position: 'relative', height: 720, width: '100%' }}>
      {/* Bar stack */}
      <svg viewBox="0 0 600 720" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="barFade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#F2EDE4" stopOpacity="0.15" />
            <stop offset="1" stopColor="#F2EDE4" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Column: fixed project fee */}
        <g>
          <rect x="80" y="80" width="180" height="560" fill="url(#barFade)" stroke="rgba(242,237,228,0.25)" />
          <text x="170" y="60" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="16" letterSpacing="3" fill="#F2EDE4" opacity="0.55">FEE</text>
          <text x="170" y="660" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" letterSpacing="2" fill="#F2EDE4" opacity="0.4">FIXED</text>
        </g>

        {/* Column: time burned */}
        <g>
          <rect x="340" y="80" width="180" height="560" fill="none" stroke="rgba(242,237,228,0.25)" />
          {/* Overhead */}
          <rect
            x="340" y="80" width="180" height="200"
            fill="#F2EDE4" opacity="0.15"
            data-reveal style={{ '--reveal-delay': '1200ms', '--reveal-y': '-40px' }}
          />
          <text x="430" y="180" textAnchor="middle" fontFamily="Instrument Serif" fontSize="22" fontStyle="italic" fill="#F2EDE4"
                data-reveal style={{ '--reveal-delay': '1400ms' }}>
            overhead
          </text>

          {/* Compliance — highlighted amber */}
          <rect
            x="340" y="280" width="180" height="220"
            fill="#DC2626" opacity="0.9"
            data-reveal style={{ '--reveal-delay': '1600ms', '--reveal-y': '40px' }}
          />
          <text x="430" y="400" textAnchor="middle" fontFamily="Instrument Serif" fontSize="34" fontStyle="italic" fill="#0A0A0A"
                data-reveal style={{ '--reveal-delay': '1800ms' }}>
            rework
          </text>

          {/* Margin */}
          <rect
            x="340" y="500" width="180" height="140"
            fill="#F2EDE4" opacity="0.85"
            data-reveal style={{ '--reveal-delay': '2000ms', '--reveal-y': '80px' }}
          />
          <text x="430" y="580" textAnchor="middle" fontFamily="Instrument Serif" fontSize="26" fontStyle="italic" fill="#0A0A0A"
                data-reveal style={{ '--reveal-delay': '2200ms' }}>
            margin
          </text>

          <text x="430" y="60" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="16" letterSpacing="3" fill="#F2EDE4" opacity="0.55">TIME</text>
          <text x="430" y="660" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" letterSpacing="2" fill="#F2EDE4" opacity="0.4">VARIABLE</text>
        </g>

        {/* Connector brace */}
        <g data-reveal style={{ '--reveal-delay': '2400ms' }}>
          <path d="M 270 280 L 325 280 L 325 500 L 270 500" stroke="#DC2626" strokeWidth="1.5" fill="none" />
          <text x="305" y="395" textAnchor="end" fontFamily="Instrument Serif" fontStyle="italic" fontSize="20" fill="#DC2626">
            the tax
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ============ 03 PROBLEM / INDUSTRY FIGURES ============ */
function SlideProblem({ index }) {
  const stats = [
    {
      fig: 'I', label: 'SPEND', delay: 800,
      figure: <>$2.1<span className="serif" style={{ fontSize: '0.38em', letterSpacing: 0, marginLeft: '0.12em' }}>trillion</span></>,
      desc: 'United States annual construction spend.',
    },
    {
      fig: 'II', label: 'DURATION', delay: 1000,
      figure: <span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>12<span style={{ fontSize: '0.42em', marginLeft: '0.12em' }}>months</span></span>,
      desc: 'Typical pre-construction, design to city approval.',
    },
    {
      fig: 'III', label: 'CONSULTANT', delay: 1200,
      figure: <>$10–<br/>15K</>,
      annotation: 'recurring',
      desc: 'Paid to a code consultant, every project, every time, over ~12 weeks.',
    },
    {
      fig: 'IV', label: 'REWORK', delay: 1400,
      figure: <>3–4<span style={{ fontSize: '0.5em', fontStyle: 'normal' }}>×</span></>,
      annotation: 'loops',
      desc: 'Review cycles between architect, consultant, and city before approval.',
    },
  ];

  return (
    <Slide index={index} total={TOTAL} section="02 · Industry" label="The Industry" tone="paper">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column' }}>
        <h2 className="serif" style={{
          fontSize: 96, lineHeight: 1.04, letterSpacing: '-0.02em',
          fontWeight: 400, margin: 0, color: 'var(--ink)',
        }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Four figures that</span><br/>
          <span data-wipe style={{ '--reveal-delay': '500ms' }}>describe the problem.</span>
        </h2>

        <div style={{
          marginTop: 'auto', paddingTop: 32,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }}>
          {stats.map(({ fig, label, delay, figure, annotation, desc }) => (
            <div key={fig} data-reveal style={{ '--reveal-delay': `${delay}ms`, '--reveal-y': '32px' }}>

              {/* ── Per-figure illustration ── */}

              {/* FIG I · SPEND — bars grow up from baseline */}
              {fig === 'I' && (
                <svg style={{ marginBottom: 16, display: 'block' }} width="96" height="56" viewBox="0 0 96 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="54" x2="96" y2="54" stroke="rgba(10,10,10,0.2)" strokeWidth="1" />
                  <line data-draw style={{ '--draw-len': '20', '--reveal-delay': `${delay - 300}ms` }} x1="10" y1="54" x2="10" y2="34" stroke="rgba(10,10,10,0.65)" strokeWidth="6" strokeLinecap="square" />
                  <line data-draw style={{ '--draw-len': '34', '--reveal-delay': `${delay - 180}ms` }} x1="26" y1="54" x2="26" y2="20" stroke="rgba(10,10,10,0.65)" strokeWidth="6" strokeLinecap="square" />
                  <line data-draw style={{ '--draw-len': '50', '--reveal-delay': `${delay - 60}ms` }}  x1="48" y1="54" x2="48" y2="4"  stroke="rgba(10,10,10,0.65)" strokeWidth="6" strokeLinecap="square" />
                  <line data-draw style={{ '--draw-len': '38', '--reveal-delay': `${delay + 60}ms` }}  x1="70" y1="54" x2="70" y2="16" stroke="rgba(10,10,10,0.65)" strokeWidth="6" strokeLinecap="square" />
                  <line data-draw style={{ '--draw-len': '26', '--reveal-delay': `${delay + 180}ms` }} x1="86" y1="54" x2="86" y2="28" stroke="rgba(10,10,10,0.65)" strokeWidth="6" strokeLinecap="square" />
                  <line data-reveal style={{ '--reveal-delay': `${delay + 400}ms` }} x1="45" y1="4" x2="51" y2="4" stroke="rgba(10,10,10,0.9)" strokeWidth="2" />
                </svg>
              )}

              {/* FIG II · DURATION — clock strokes itself, hands sweep in, red pulse */}
              {fig === 'II' && (
                <svg style={{ marginBottom: 16, display: 'block' }} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle data-draw style={{ '--draw-len': '151', '--reveal-delay': `${delay - 300}ms` }} cx="28" cy="28" r="24" stroke="rgba(10,10,10,0.5)" strokeWidth="1.5" />
                  <circle data-reveal style={{ '--reveal-delay': `${delay + 500}ms` }} cx="28" cy="28" r="2" fill="rgba(10,10,10,0.7)" stroke="none" />
                  <line  data-reveal style={{ '--reveal-delay': `${delay + 600}ms` }} x1="28" y1="28" x2="16" y2="14" stroke="rgba(10,10,10,0.8)" strokeWidth="2"   strokeLinecap="round" />
                  <line  data-reveal style={{ '--reveal-delay': `${delay + 600}ms` }} x1="28" y1="28" x2="28" y2="8"  stroke="rgba(10,10,10,0.6)" strokeWidth="1.5" strokeLinecap="round" />
                  <circle data-reveal style={{ '--reveal-delay': `${delay + 800}ms` }} cx="28" cy="5" r="3" fill="#DC2626" stroke="none" />
                </svg>
              )}

              {/* FIG III · CONSULTANT — invoice lines draw, then loop arrow strokes */}
              {fig === 'III' && (
                <svg style={{ marginBottom: 16, display: 'block' }} width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line data-draw style={{ '--draw-len': '64', '--reveal-delay': `${delay - 300}ms` }} x1="0" y1="14" x2="64" y2="14" stroke="rgba(10,10,10,0.65)" strokeWidth="2" />
                  <line data-draw style={{ '--draw-len': '58', '--reveal-delay': `${delay - 100}ms` }} x1="0" y1="26" x2="58" y2="26" stroke="rgba(10,10,10,0.65)" strokeWidth="2" />
                  <line data-draw style={{ '--draw-len': '68', '--reveal-delay': `${delay + 100}ms` }} x1="0" y1="38" x2="68" y2="38" stroke="rgba(10,10,10,0.65)" strokeWidth="2" />
                  {[14, 26, 38].map((y, li) => [16, 32, 48].map(x => (
                    <line key={`${li}-${x}`} data-reveal style={{ '--reveal-delay': `${delay - 150 + li * 200}ms` }}
                      x1={x} y1={y - 3} x2={x} y2={y + 3} stroke="rgba(10,10,10,0.65)" strokeWidth="1" opacity="0.35" />
                  )))}
                  <path data-draw style={{ '--draw-len': '120', '--reveal-delay': `${delay + 350}ms` }}
                    d="M 68 38 C 84 38 84 8 64 8 L 0 8"
                    stroke="rgba(10,10,10,0.5)" strokeWidth="1.5" fill="none" />
                  <polyline data-reveal style={{ '--reveal-delay': `${delay + 550}ms` }}
                    points="6,4 0,8 6,12" stroke="rgba(10,10,10,0.65)" strokeWidth="1.5" fill="none" />
                </svg>
              )}

              {/* FIG IV · REWORK — nodes appear, edges stroke in sequence, ×3 closes loop */}
              {fig === 'IV' && (
                <svg style={{ marginBottom: 16, display: 'block' }} width="88" height="76" viewBox="0 0 88 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Nodes */}
                  <circle data-reveal style={{ '--reveal-delay': `${delay - 300}ms` }} cx="44" cy="8"  r="5" fill="rgba(10,10,10,0.7)" stroke="none" />
                  <circle data-reveal style={{ '--reveal-delay': `${delay - 150}ms` }} cx="8"  cy="66" r="5" fill="rgba(10,10,10,0.7)" stroke="none" />
                  <circle data-reveal style={{ '--reveal-delay': `${delay + 0}ms` }}   cx="80" cy="66" r="5" fill="rgba(10,10,10,0.7)" stroke="none" />
                  {/* Labels */}
                  <text data-reveal style={{ '--reveal-delay': `${delay - 300}ms` }} x="44" y="2"  textAnchor="middle" fontSize="7" fontFamily="'JetBrains Mono', monospace" fill="rgba(10,10,10,0.45)" stroke="none">ARCH</text>
                  <text data-reveal style={{ '--reveal-delay': `${delay - 150}ms` }} x="8"  y="76" textAnchor="middle" fontSize="7" fontFamily="'JetBrains Mono', monospace" fill="rgba(10,10,10,0.45)" stroke="none">CITY</text>
                  <text data-reveal style={{ '--reveal-delay': `${delay + 0}ms` }}   x="80" y="76" textAnchor="middle" fontSize="7" fontFamily="'JetBrains Mono', monospace" fill="rgba(10,10,10,0.45)" stroke="none">CONSULT</text>
                  {/* Edge: Arch → City */}
                  <line data-draw style={{ '--draw-len': '60', '--reveal-delay': `${delay + 100}ms` }} x1="40" y1="12" x2="12" y2="62" stroke="rgba(10,10,10,0.65)" strokeWidth="1.5" />
                  <polyline data-reveal style={{ '--reveal-delay': `${delay + 260}ms` }} points="8,55 12,62 18,57" stroke="rgba(10,10,10,0.65)" strokeWidth="1.5" fill="none" />
                  {/* Edge: City → Consult */}
                  <line data-draw style={{ '--draw-len': '60', '--reveal-delay': `${delay + 300}ms` }} x1="14" y1="66" x2="74" y2="66" stroke="rgba(10,10,10,0.65)" strokeWidth="1.5" />
                  <polyline data-reveal style={{ '--reveal-delay': `${delay + 460}ms` }} points="68,62 74,66 68,70" stroke="rgba(10,10,10,0.65)" strokeWidth="1.5" fill="none" />
                  {/* Edge: Consult → Arch */}
                  <line data-draw style={{ '--draw-len': '60', '--reveal-delay': `${delay + 500}ms` }} x1="76" y1="62" x2="48" y2="12" stroke="rgba(10,10,10,0.65)" strokeWidth="1.5" />
                  <polyline data-reveal style={{ '--reveal-delay': `${delay + 660}ms` }} points="52,18 48,12 44,18" stroke="rgba(10,10,10,0.65)" strokeWidth="1.5" fill="none" />
                  {/* ×3 closes the loop */}
                  <text data-reveal style={{ '--reveal-delay': `${delay + 800}ms` }} x="44" y="44" textAnchor="middle" fontFamily="'Instrument Serif', Georgia, serif" fontStyle="italic" fontSize="18" fill="rgba(10,10,10,0.6)" stroke="none">×3</text>
                </svg>
              )}

              <div style={{ borderTop: '1px solid rgba(10,10,10,0.2)', paddingTop: 18 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  marginBottom: 20,
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase',
                  color: 'var(--ink)', opacity: 0.5,
                }}>
                  <span>FIG.</span>
                  <span>{fig} · {label}</span>
                </div>
                <div className="serif" style={{
                  fontSize: 110, lineHeight: 0.88, letterSpacing: '-0.04em',
                  fontWeight: 400, color: 'var(--ink)',
                }}>
                  {figure}
                </div>
                {annotation && (
                  <div className="serif" style={{
                    fontSize: 34, fontStyle: 'italic', color: 'var(--ink)',
                    opacity: 0.55, marginTop: 8, letterSpacing: '-0.01em',
                  }}>
                    {annotation}
                  </div>
                )}
                <div style={{
                  marginTop: 24, fontSize: 19, lineHeight: 1.45,
                  color: 'var(--ink)', fontWeight: 300, opacity: 0.8,
                }}>
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ============ 04 REWORK LOOP ============ */
function SlideReworkLoop({ index }) {
  const steps = [
    { label: 'Design', sub: 'weeks of drafting' },
    { label: 'Submit', sub: 'package to jurisdiction' },
    { label: 'Wait', sub: '4–8 weeks' },
    { label: 'Reject', sub: 'cited violations' },
    { label: 'Rework', sub: 'redraw, re-coordinate' },
    { label: 'Resubmit', sub: 'back in the queue' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="03 · The Loop" label="The Rework Loop" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 32, marginBottom: 28 }}>
          <h2 className="serif" style={{
            fontSize: 120, lineHeight: 1, letterSpacing: '-0.02em',
            fontStyle: 'italic', margin: 0,
          }}>
            <span data-wipe style={{ '--reveal-delay': '200ms' }}>A six-step loop,</span>
            <br />
            <span data-wipe style={{ '--reveal-delay': '600ms', color: 'var(--amber)' }}>designed to burn time.</span>
          </h2>
        </div>

        {/* 6 steps connected by arrow path */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', marginTop: 80 }}>
          {/* Connecting path behind */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
               viewBox="0 0 1680 400" preserveAspectRatio="none">
            <path
              d="M 80 200 L 1600 200"
              stroke="var(--amber)" strokeWidth="2" fill="none"
              strokeDasharray="8 10"
              data-draw style={{ '--draw-len': 1600, '--reveal-delay': '1000ms' }}
            />
            {/* Loop back arc */}
            <path
              d="M 1600 200 Q 1680 200 1680 280 Q 1680 380 1600 380 L 80 380 Q 0 380 0 280 Q 0 200 80 200"
              stroke="var(--amber)" strokeWidth="2" fill="none" strokeDasharray="8 10"
              opacity="0.5"
              data-draw style={{ '--draw-len': 3400, '--reveal-delay': '2400ms' }}
            />
          </svg>

          {steps.map((step, i) => (
            <div
              key={i}
              data-reveal
              style={{
                flex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                position: 'relative', zIndex: 2,
                '--reveal-delay': `${1100 + i * 200}ms`,
              }}
            >
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: i === 3 ? 'var(--amber)' : 'var(--ink)',
                border: `2px solid var(--amber)`,
                marginBottom: 28,
              }} />
              <div className="serif" style={{
                fontSize: 54, fontStyle: 'italic', letterSpacing: '-0.01em',
                color: i === 3 ? 'var(--amber)' : 'var(--bone)',
              }}>
                {step.label}
              </div>
              <div style={{
                marginTop: 12, fontSize: 20,
                color: 'var(--bone-2)', opacity: 0.65,
                textAlign: 'center', maxWidth: 180, lineHeight: 1.3,
              }}>
                {step.sub}
              </div>
            </div>
          ))}
        </div>

        <div
          data-reveal
          style={{
            marginTop: 60,
            fontSize: 28,
            color: 'var(--bone-2)',
            opacity: 0.75,
            '--reveal-delay': '2800ms',
            fontWeight: 300,
            maxWidth: 1400,
          }}
        >
          Compliance isn't checked until <em className="serif" style={{ color: 'var(--amber)', fontStyle: 'italic', fontWeight: 400 }}>after</em> the design is done.
          Every rejection sends the whole package back to step one.
        </div>
      </div>
    </Slide>
  );
}

/* ============ 05 VALIDATION ============ */
function SlideValidation({ index }) {
  const activeIdx = useActiveSlideIndex();
  const isActive = activeIdx === index;

  const quotes = [
    '"The tool would have to be quickly verified for accuracy."',
    '"Liability implications mean it must be close to 100% accurate."',
    '"Codes like the IBC change regularly — it has to keep up."',
    '"Data security. We work under NDA for most clients."',
    '"Must have judgment. Like an architect with decades of experience."',
  ];

  return (
    <Slide index={index} total={TOTAL} section="04 · Validation" label="Validation" tone="dark">
      <div style={{
        position: 'absolute', inset: 0,
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        padding: '160px 120px 140px',
        gap: 80,
      }}>
        <div>
          <div className="mono" data-reveal style={{ fontSize: 16, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 32 }}>
            WE ASKED 40+ ARCHITECTS & DECISION-MAKERS
          </div>

          <div className="serif" style={{ fontSize: 130, lineHeight: 0.95, letterSpacing: '-0.02em', fontStyle: 'italic' }}>
            <div data-wipe style={{ '--reveal-delay': '200ms' }}>
              <Counter to={72} duration={1400} delay={300} active={isActive} format={(n) => Math.round(n)} suffix="%" />
            </div>
            <div data-reveal style={{ '--reveal-delay': '800ms', fontSize: 64, marginTop: 24, color: 'var(--bone-2)' }}>
              want this tool.
            </div>
            <div data-reveal style={{ '--reveal-delay': '1200ms', fontSize: 48, marginTop: 12, color: 'var(--bone-2)', opacity: 0.7 }}>
              48% say <em style={{ fontWeight: 600 }}>very useful.</em>
            </div>
          </div>

          <div
            data-reveal
            style={{
              marginTop: 70, paddingTop: 40,
              borderTop: '1px solid rgba(242,237,228,0.2)',
              fontSize: 30, lineHeight: 1.4, color: 'var(--bone)',
              '--reveal-delay': '1600ms', maxWidth: 640, fontWeight: 300,
            }}
          >
            One objection blocked adoption — every time:
          </div>
          <div
            data-reveal className="serif"
            style={{
              fontSize: 96, fontStyle: 'italic', marginTop: 16,
              color: 'var(--amber)', letterSpacing: '-0.02em',
              '--reveal-delay': '1900ms',
            }}
          >
            Accuracy.
          </div>
          <div
            data-reveal
            style={{
              marginTop: 48, paddingTop: 32,
              borderTop: '1px solid rgba(242,237,228,0.15)',
              fontSize: 22, lineHeight: 1.5, color: 'var(--bone-2)',
              fontWeight: 300, maxWidth: 640, opacity: 0.8,
              '--reveal-delay': '2400ms',
            }}
          >
            So we built accuracy in from the start — not as a feature, but as the foundation. Every flag Cuniform surfaces is cross-referenced, clause-linked, and checked by a second model before you ever see it.
          </div>
        </div>

        {/* Quote column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 40 }}>
          {quotes.map((q, i) => (
            <div
              key={i}
              data-reveal
              style={{
                fontSize: 24, lineHeight: 1.4, fontStyle: 'italic',
                color: 'var(--bone)',
                padding: '18px 24px',
                background: 'rgba(242,237,228,0.04)',
                borderLeft: '2px solid var(--amber)',
                '--reveal-delay': `${1400 + i * 200}ms`,
                '--reveal-y': '20px',
              }}
            >
              {q}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

Object.assign(window, {
  SlideCover, SlideThesis, SlideProblem, SlideReworkLoop, SlideValidation, Logomark, TOTAL,
});
