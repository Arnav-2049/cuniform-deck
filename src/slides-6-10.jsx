/* ──────────────────────────────────────────────────────────────
   Slides 06–10: Solution, Why Now, Landscape, Market, ROI
   ────────────────────────────────────────────────────────────── */

/* ============ 06 SOLUTION — product mock ============ */
function SlideSolution({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="05 · Solution" label="Solution" tone="paper">
      <div style={{
        position: 'absolute', inset: 0,
        display: 'grid', gridTemplateColumns: '0.9fr 1.4fr',
        padding: '160px 120px 140px',
        gap: 80, alignItems: 'center',
      }}>
        <div>
          <div className="mono" data-reveal style={{ fontSize: 16, letterSpacing: '0.28em', color: 'var(--amber-deep)', marginBottom: 32 }}>
            THE PRODUCT
          </div>
          <div className="serif" style={{ fontSize: 104, lineHeight: 0.96, letterSpacing: '-0.02em', fontStyle: 'italic', color: 'var(--ink)' }}>
            <div data-wipe style={{ '--reveal-delay': '200ms' }}>Check code</div>
            <div data-wipe style={{ '--reveal-delay': '500ms' }}>
              <span style={{ color: 'var(--amber-deep)' }}>while</span> you design.
            </div>
            <div data-wipe style={{ '--reveal-delay': '900ms', fontSize: 72, opacity: 0.55 }}>Not after.</div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '60px 0 0', display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['Inline', 'flags violations as you draw — in Revit, AutoCAD, Rhino.'],
              ['Linked', 'every flag links to the exact IBC, IECC or local-amendment clause.'],
              ['Verifiable', 'a second model cross-checks every flag before it reaches you — no black box, no false confidence.'],
            ].map(([title, body], i) => (
              <li key={title} data-reveal style={{ '--reveal-delay': `${1200 + i * 200}ms`, display: 'flex', gap: 20, alignItems: 'baseline' }}>
                <span style={{ fontSize: 32, fontStyle: 'italic', fontWeight: 600, color: 'var(--amber-deep)', minWidth: 130 }}>
                  {title}
                </span>
                <span style={{ fontSize: 22, color: 'var(--ink)', opacity: 0.8, lineHeight: 1.4 }}>{body}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: mock Revit with flag */}
        <RevitMock />
      </div>
    </Slide>
  );
}

function RevitMock() {
  return (
    <div
      data-scale-in
      style={{
        '--reveal-delay': '600ms',
        background: '#1C1C1C',
        borderRadius: 12,
        boxShadow: '0 30px 80px -30px rgba(10,10,10,0.5), 0 0 0 1px rgba(10,10,10,0.08)',
        overflow: 'hidden',
        aspectRatio: '16 / 10',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Titlebar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#141414', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
        <span style={{ flex: 1, textAlign: 'center', fontFamily: 'JetBrains Mono', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 2 }}>
          MUSEUM_WING — LEVEL 02 — REVIT 2026
        </span>
      </div>

      {/* Canvas */}
      <div style={{ position: 'relative', padding: 24, background: 'radial-gradient(ellipse at 30% 40%, #2A2A2A 0%, #0F0F0F 70%)', flex: 1, height: 'calc(100% - 42px)' }}>
        {/* Floor plan SVG */}
        <svg viewBox="0 0 900 520" style={{ width: '100%', height: '100%' }}>
          <defs>
            <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Outer walls */}
          <rect x="60" y="60" width="780" height="400" fill="url(#hatch)" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
          {/* Inner partitions */}
          <line x1="60" y1="230" x2="500" y2="230" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          <line x1="500" y1="60" x2="500" y2="460" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          <line x1="680" y1="230" x2="840" y2="230" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          {/* Door swings */}
          <path d="M 220 230 A 40 40 0 0 1 260 270" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
          <path d="M 600 230 A 40 40 0 0 1 640 270" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

          {/* Dimensioning */}
          <g stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="rgba(255,255,255,0.45)" fontFamily="JetBrains Mono" fontSize="11">
            <line x1="60" y1="40" x2="500" y2="40" />
            <text x="280" y="30" textAnchor="middle">62'-4"</text>
            <line x1="500" y1="40" x2="840" y2="40" />
            <text x="670" y="30" textAnchor="middle">48'-0"</text>
          </g>

          {/* Room labels */}
          <text x="280" y="150" fontFamily="Instrument Serif" fontSize="18" fill="rgba(255,255,255,0.7)" fontStyle="italic">Gallery A</text>
          <text x="280" y="350" fontFamily="Instrument Serif" fontSize="18" fill="rgba(255,255,255,0.7)" fontStyle="italic">Lobby</text>
          <text x="670" y="250" fontFamily="Instrument Serif" fontSize="18" fill="rgba(255,255,255,0.7)" fontStyle="italic">Back of House</text>

          {/* Violation highlight — door clearance */}
          <g data-reveal style={{ '--reveal-delay': '1400ms' }}>
            <rect x="580" y="200" width="90" height="80" fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="625" cy="240" r="14" fill="#DC2626" />
            <text x="625" y="245" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fontWeight="700" fill="#0A0A0A">!</text>
          </g>

          {/* Callout line */}
          <g data-reveal style={{ '--reveal-delay': '1700ms' }}>
            <path d="M 639 240 L 780 150" stroke="#DC2626" strokeWidth="1.5" fill="none" />
            <circle cx="780" cy="150" r="3" fill="#DC2626" />
          </g>
        </svg>

        {/* Flag card */}
        <div
          data-reveal
          style={{
            '--reveal-delay': '1900ms',
            position: 'absolute',
            top: '14%',
            right: '4%',
            width: 340,
            background: '#0A0A0A',
            border: '1px solid rgba(255,122,26,0.5)',
            borderRadius: 10,
            padding: 20,
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)',
            fontFamily: 'Geist, -apple-system, sans-serif',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#DC2626' }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#DC2626', letterSpacing: 2 }}>EGRESS · IBC §1005.3.2</span>
          </div>
          <div style={{ fontSize: 18, color: '#F2EDE4', lineHeight: 1.35, marginBottom: 10 }}>
            Door clear width <strong style={{ color: '#DC2626' }}>32"</strong> below the 44" minimum for occupant load <strong>187</strong>.
          </div>
          <div style={{ fontSize: 12, color: 'rgba(242,237,228,0.55)', fontStyle: 'italic', marginBottom: 14, lineHeight: 1.4 }}>
            "Means of egress shall provide a minimum clear width…" — IBC 2021
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', padding: '6px 10px', borderRadius: 4, background: '#DC2626', color: '#0A0A0A', letterSpacing: 1 }}>FIX</span>
            <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', padding: '6px 10px', borderRadius: 4, background: 'rgba(242,237,228,0.08)', color: '#F2EDE4', letterSpacing: 1 }}>CITE</span>
            <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', padding: '6px 10px', borderRadius: 4, background: 'rgba(242,237,228,0.08)', color: '#F2EDE4', letterSpacing: 1 }}>DISMISS</span>
          </div>
        </div>

        {/* Side panel */}
        <div style={{
          position: 'absolute', left: 24, bottom: 24,
          fontFamily: 'JetBrains Mono', fontSize: 10, color: 'rgba(242,237,228,0.4)',
          letterSpacing: 2, lineHeight: 1.8,
        }}>
          <div>CUNIFORM · LIVE</div>
          <div style={{ color: '#DC2626' }}>● 1 VIOLATION · 3 WARNINGS</div>
        </div>
      </div>
    </div>
  );
}

/* ============ 07 WHY NOW ============ */
function SlideWhyNow({ index }) {
  const forces = [
    { n: '01', t: 'Reasoning models', b: 'LLMs are finally good enough to parse the 1,200 pages of the IBC — plus local amendments — with citations.' },
    { n: '02', t: 'BIM is open', b: 'Revit, Rhino and AutoCAD all ship stable APIs. We live inside the tool architects already use.' },
    { n: '03', t: 'Permit gridlock', b: 'Post-2023 backlogs stretch review cycles to 8–12 weeks. Firms are desperate for anything that buys speed.' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="06 · Why Now" label="Why Now" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px' }}>
        <div className="serif" style={{ fontSize: 128, lineHeight: 0.95, letterSpacing: '-0.02em', fontStyle: 'italic' }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Three forces</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms', color: 'var(--amber)' }}>converged</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '800ms' }}>in the last 18 months.</span>
        </div>

        {/* Two-panel illustration: architect ↔ city */}
        <div data-reveal style={{ '--reveal-delay': '300ms', marginTop: 48 }}>
          <svg width="100%" height="90" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* ── LEFT PANEL: Architect floor plan ── */}
            {/* Outer rectangle */}
            <rect data-draw style={{ '--draw-len': '700', '--reveal-delay': '400ms' }} x="40" y="12" width="280" height="64" stroke="rgba(242,237,228,0.55)" strokeWidth="2" fill="none" />
            {/* Interior partition */}
            <line data-draw style={{ '--draw-len': '700', '--reveal-delay': '400ms' }} x1="180" y1="12" x2="180" y2="76" stroke="rgba(242,237,228,0.55)" strokeWidth="1.5" />
            {/* Door arc */}
            <path d="M 180 76 A 28 28 0 0 1 208 76" stroke="rgba(242,237,228,0.35)" strokeWidth="1" fill="none" />
            {/* Dimension line */}
            <line x1="40" y1="84" x2="320" y2="84" stroke="rgba(242,237,228,0.2)" strokeWidth="1" />
            <line x1="40" y1="80" x2="40" y2="88" stroke="rgba(242,237,228,0.2)" strokeWidth="1" />
            <line x1="320" y1="80" x2="320" y2="88" stroke="rgba(242,237,228,0.2)" strokeWidth="1" />
            {/* Amber cursor */}
            <g data-reveal style={{ '--reveal-delay': '1600ms' }}>
              <circle cx="220" cy="34" r="5" fill="var(--amber)" />
              <line x1="213" y1="34" x2="227" y2="34" stroke="rgba(255,122,26,0.4)" strokeWidth="1.5" />
              <line x1="220" y1="27" x2="220" y2="41" stroke="rgba(255,122,26,0.4)" strokeWidth="1.5" />
            </g>
            {/* Left label */}
            <text x="40" y="88" fontFamily="'JetBrains Mono', monospace" fontSize="10" letterSpacing="2" fill="rgba(242,237,228,0.35)">ARCHITECT STUDIO</text>

            {/* ── CENTER: Amber bridge ── */}
            <line data-reveal style={{ '--reveal-delay': '800ms' }} x1="720" y1="8" x2="720" y2="82" stroke="var(--amber)" strokeWidth="1" opacity="0.5" />
            <text data-reveal style={{ '--reveal-delay': '900ms' }} x="720" y="52" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fill="var(--amber)" opacity="0.7">→</text>

            {/* ── RIGHT PANEL: City / permit side ── */}
            <g data-reveal style={{ '--reveal-delay': '1000ms', '--reveal-y': '10px' }}>
              {/* Building A */}
              <rect x="900" y="28" width="80" height="52" stroke="rgba(242,237,228,0.55)" strokeWidth="2" fill="none" />
              {/* Building B (tallest, center) */}
              <rect x="1000" y="8" width="120" height="72" stroke="rgba(242,237,228,0.55)" strokeWidth="2" fill="none" />
              {/* Window grid on Bldg B: 3 cols × 4 rows, 8×8 rects, start x=1012 y=18, gap 24h 18v */}
              {[0,1,2].map(col => [0,1,2,3].map(row => (
                <rect key={`w-${col}-${row}`} x={1012 + col * 24} y={18 + row * 18} width="8" height="8" stroke="rgba(242,237,228,0.2)" strokeWidth="1" fill="none" />
              )))}
              {/* Building C */}
              <rect x="1140" y="36" width="80" height="44" stroke="rgba(242,237,228,0.55)" strokeWidth="2" fill="none" />
              {/* Permit stamp on Bldg B top-right */}
              <circle cx="1130" cy="16" r="14" stroke="var(--amber)" strokeWidth="1.5" fill="none" />
              {/* Clock hand 12h */}
              <line x1="1130" y1="16" x2="1130" y2="6" stroke="var(--amber)" strokeWidth="1.5" />
              {/* Clock hand 3h */}
              <line x1="1130" y1="16" x2="1140" y2="16" stroke="var(--amber)" strokeWidth="1.5" />
              {/* Right label */}
              <text x="1020" y="88" fontFamily="'JetBrains Mono', monospace" fontSize="10" letterSpacing="2" fill="rgba(242,237,228,0.35)">PERMIT AUTHORITY</text>
            </g>

          </svg>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginTop: 64 }}>
          {forces.map((f, i) => (
            <div
              key={f.n}
              data-reveal
              style={{ '--reveal-delay': `${1200 + i * 250}ms`, '--reveal-y': '48px' }}
            >
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.3em', color: 'var(--amber)', marginBottom: 24 }}>
                / {f.n}
              </div>
              <div className="serif" style={{ fontSize: 64, lineHeight: 1.0, fontStyle: 'italic', marginBottom: 28, letterSpacing: '-0.015em' }}>
                {f.t}
              </div>
              <div style={{ fontSize: 24, lineHeight: 1.45, color: 'var(--bone-2)', opacity: 0.8, fontWeight: 300 }}>
                {f.b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ============ 08 LANDSCAPE — 2x2 matrix ============ */
function SlideLandscape({ index }) {
  const competitors = [
    { name: 'UpCodes', raised: '$7.6M', x: 0.22, y: 0.78, desc: 'Searchable code DB' },
    { name: 'CodeComply.Ai', raised: '$2M', x: 0.68, y: 0.72, desc: 'PDF plan review' },
    { name: 'Permitify', raised: '$0.5M', x: 0.80, y: 0.60, desc: 'Building-dept review' },
    { name: 'Cuniform', raised: '', x: 0.28, y: 0.22, desc: 'Real-time, inside BIM', isUs: true },
  ];

  return (
    <Slide index={index} total={TOTAL} section="07 · Landscape" label="Landscape" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80 }}>
        <div style={{ alignSelf: 'center' }}>
          <div className="mono" data-reveal style={{ fontSize: 16, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 30 }}>
            POSITIONING
          </div>
          <div className="serif" style={{ fontSize: 96, lineHeight: 0.96, letterSpacing: '-0.02em', fontStyle: 'italic' }}>
            <div data-wipe style={{ '--reveal-delay': '200ms' }}>The category</div>
            <div data-wipe style={{ '--reveal-delay': '500ms', color: 'var(--amber)' }}>is validated.</div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '900ms', fontSize: 28, lineHeight: 1.4, marginTop: 48, color: 'var(--bone-2)', maxWidth: 520, fontWeight: 300 }}>
            Everyone else checks code <em className="serif" style={{ color: 'var(--amber)' }}>after</em> design is complete.
            We're the only one native to the drafting loop.
          </div>
        </div>

        {/* Matrix */}
        <div style={{ position: 'relative', aspectRatio: '1.4', alignSelf: 'center', marginTop: 20 }}>
          <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(242,237,228,0.18)' }}>
            {/* Axis lines */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, borderLeft: '1px dashed rgba(242,237,228,0.15)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px dashed rgba(242,237,228,0.15)' }} />

            {/* Axis labels */}
            <div className="mono" style={{ position: 'absolute', left: 16, top: -28, fontSize: 12, letterSpacing: 3, opacity: 0.5 }}>← SEARCH</div>
            <div className="mono" style={{ position: 'absolute', right: 16, top: -28, fontSize: 12, letterSpacing: 3, opacity: 0.5 }}>AUTOMATED →</div>
            <div style={{ position: 'absolute', left: -32, top: 16, width: 32 }}>
              <div className="mono" style={{ position: 'absolute', left: 0, transform: 'rotate(-90deg)', transformOrigin: 'center center', fontSize: 12, letterSpacing: 3, opacity: 0.5 }}>REALTIME ↑</div>
            </div>
            <div style={{ position: 'absolute', left: -32, bottom: 14, width: 32 }}>
              <div className="mono" style={{ position: 'absolute', left: 0, transform: 'rotate(-90deg)', transformOrigin: 'center center', fontSize: 12, letterSpacing: 3, opacity: 0.5 }}>↓ AFTER DESIGN</div>
            </div>

            {/* Quadrant labels */}
            <div style={{ position: 'absolute', left: '2%', bottom: '52%', fontFamily: 'Instrument Serif', fontStyle: 'italic', fontSize: 18, color: 'rgba(242,237,228,0.25)' }}>during · manual</div>
            <div style={{ position: 'absolute', right: '2%', bottom: '52%', fontFamily: 'Instrument Serif', fontStyle: 'italic', fontSize: 18, color: 'var(--amber)', opacity: 0.8 }}>during · automated</div>
            <div style={{ position: 'absolute', left: '2%', top: '52%', fontFamily: 'Instrument Serif', fontStyle: 'italic', fontSize: 18, color: 'rgba(242,237,228,0.25)' }}>after · manual</div>
            <div style={{ position: 'absolute', right: '2%', top: '52%', fontFamily: 'Instrument Serif', fontStyle: 'italic', fontSize: 18, color: 'rgba(242,237,228,0.25)' }}>after · automated</div>

            {competitors.map((c, i) => (
              <div
                key={c.name}
                data-reveal
                style={{
                  position: 'absolute',
                  left: `${c.x * 100}%`,
                  top: `${c.y * 100}%`,
                  transform: 'translate(-50%, 0)',
                  '--reveal-delay': `${1200 + i * 250}ms`,
                  '--reveal-y': '12px',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: c.isUs ? 64 : 18,
                  height: c.isUs ? 64 : 18,
                  borderRadius: '50%',
                  background: c.isUs ? 'var(--amber)' : 'rgba(242,237,228,0.8)',
                  margin: '0 auto 14px',
                  boxShadow: c.isUs ? '0 0 0 6px rgba(255,122,26,0.18), 0 0 60px rgba(255,122,26,0.6)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {c.isUs && <Logomark size={28} color="#0A0A0A" />}
                </div>
                <div className="serif" style={{ fontSize: c.isUs ? 28 : 20, lineHeight: 1, fontStyle: 'italic', color: c.isUs ? 'var(--amber)' : 'var(--bone)', fontWeight: 400 }}>
                  {c.name}
                </div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.55, marginTop: 4 }}>
                  {c.desc}{c.raised && ` · ${c.raised}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 09 MARKET ============ */
function SlideMarket({ index }) {
  const activeIdx = useActiveSlideIndex();
  const isActive = activeIdx === index;

  return (
    <Slide index={index} total={TOTAL} section="08 · Market" label="Market" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px' }}>
        <div className="serif" data-wipe style={{ fontSize: 104, lineHeight: 0.98, letterSpacing: '-0.02em', fontStyle: 'italic', '--reveal-delay': '200ms' }}>
          A $8.2M <span style={{ color: 'var(--amber)' }}>wedge</span>. A 3× path to expand.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 64, marginTop: 100 }}>
          {[
            { tier: 'SOM', label: '10% of US architects', value: 8.2, unit: 'M', sub: 'Y1 beachhead · $59/seat/mo', color: 'var(--amber)', delay: 600 },
            { tier: 'SAM', label: '+ civil engineers & GCs', value: 48, unit: 'M', sub: '~820K licensed seats in US', color: 'var(--bone)', delay: 900 },
            { tier: 'TAM', label: 'Global AEC software', value: 2.1, unit: 'B', sub: 'All design + review tooling', color: 'var(--bone)', opacity: 0.55, delay: 1200 },
          ].map((m, i) => (
            <div
              key={m.tier}
              data-reveal
              style={{
                '--reveal-delay': `${m.delay}ms`,
                '--reveal-y': '48px',
                paddingTop: 32,
                borderTop: `2px solid ${m.color}`,
                opacity: m.opacity || 1,
              }}
            >
              <div className="mono" style={{ fontSize: 16, letterSpacing: '0.3em', color: m.color, marginBottom: 20 }}>
                {m.tier}
              </div>
              <div className="serif" style={{ fontSize: 160, lineHeight: 0.9, letterSpacing: '-0.03em', fontStyle: 'italic', color: m.color }}>
                ${isActive ? <Counter to={m.value} duration={1400} delay={m.delay} active={isActive} format={(n) => n.toFixed(m.value < 10 ? 1 : 0)} /> : m.value}
                <span style={{ fontSize: 80 }}>{m.unit}</span>
              </div>
              <div style={{ fontSize: 28, marginTop: 24, color: m.color, opacity: 0.9 }}>
                {m.label}
              </div>
              <div className="mono" style={{ fontSize: 13, letterSpacing: 2.5, marginTop: 10, opacity: 0.55 }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        <div data-reveal style={{ '--reveal-delay': '1800ms', marginTop: 80, fontSize: 26, color: 'var(--bone-2)', opacity: 0.7, maxWidth: 1200, fontWeight: 300 }}>
          Architects are the beachhead. Civil engineers{' '}
          <span style={{ fontStyle: 'italic' }}>triple</span>{' '}
          the seats. Contractors add{' '}
          <span style={{ fontWeight: 600 }}>700K</span> more.
        </div>
      </div>
    </Slide>
  );
}

/* ============ 10 ROI ============ */
function SlideROI({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="09 · ROI" label="ROI" tone="amber">
      <div style={{ position: 'absolute', inset: 0, padding: '140px 120px 120px', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.28em', marginBottom: 28, opacity: 0.75 }}>
          THE UNIT ECONOMICS, FROM THE CUSTOMER'S SIDE
        </div>

        <div className="serif" style={{ fontSize: 128, lineHeight: 1.0, letterSpacing: '-0.025em', color: 'var(--ink)', flex: '0 0 auto' }}>
          <div data-wipe style={{ '--reveal-delay': '200ms' }}>One rejection avoided</div>
          <div data-wipe style={{ '--reveal-delay': '700ms' }}>pays for <span style={{ textDecoration: 'underline', textDecorationThickness: 5, textUnderlineOffset: 12 }}>28 seats</span></div>
          <div data-wipe style={{ '--reveal-delay': '1100ms' }}>for a year.</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 60, marginTop: 'auto', paddingTop: 40, borderTop: '2px solid rgba(10,10,10,0.25)' }}>
          {[
            { k: '$59 / mo', v: 'Cuniform Professional seat' },
            { k: '$20,000', v: 'Avg. cost of a single code rejection' },
            { k: '1 week', v: 'Payback period, conservative case' },
          ].map((r, i) => (
            <div key={r.k} data-reveal style={{ '--reveal-delay': `${1500 + i * 200}ms` }}>
              <div className="serif" style={{ fontSize: 60, lineHeight: 1, letterSpacing: '-0.02em' }}>
                {r.k}
              </div>
              <div style={{ marginTop: 14, fontSize: 20, opacity: 0.75, fontWeight: 500, lineHeight: 1.35 }}>
                {r.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

Object.assign(window, {
  SlideSolution, SlideWhyNow, SlideLandscape, SlideMarket, SlideROI,
});
