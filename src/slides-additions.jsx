/* ──────────────────────────────────────────────────────────────
   Additions ported from reference v2 deck and adapted to the
   current dark / Calibra / #DC2626 system:
     • SlidePitch        (ref 02 — one-sentence thesis)
     • SlideInsight      (ref 06 — both sides lose time)
     • SlideFlywheel     (ref 07 — three-sided flywheel, animated)
     • SlideCompetition  (ref 08 — competitor matrix)
     • WhyNowIcons       (ref 19 — animated infographic icons)
   Plus an upgraded SlideWhyNow that uses those icons.

   Body-copy treatment everywhere mirrors slide 03 (SlideProblem):
   Inter 300 base, key data bumped to amber 500, key feeling words
   swapped to Calibra italic.
   ────────────────────────────────────────────────────────────── */

/* ============ NEW · THE PITCH ============ */
function SlidePitch({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="01 · The Pitch" label="The Pitch" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '180px 120px 140px', display: 'flex', flexDirection: 'column' }}>
        <div className="mono" data-reveal style={{
          fontSize: 16, letterSpacing: '0.3em', color: 'var(--amber)',
          fontWeight: 600, marginBottom: 36, '--reveal-delay': '100ms',
        }}>
          IN ONE SENTENCE
        </div>

        <h1 className="serif" data-reveal style={{
          fontSize: 108, lineHeight: 1.06, letterSpacing: '-0.02em',
          fontWeight: 400, margin: 0, width: 1680, color: 'var(--bone)',
          '--reveal-delay': '300ms',
        }}>
          Cuniform compresses the<br/>
          pre-construction phase of a<br/>
          building from{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>12</span>
          <span className="mono" style={{ fontSize: 56, margin: '0 18px', color: 'var(--bone-2)', verticalAlign: 'middle' }}>→</span>
          <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>2 months</span>.
        </h1>

        <div style={{
          marginTop: 'auto', paddingTop: 56,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, maxWidth: 1620,
        }}>
          <div data-reveal style={{ '--reveal-delay': '1100ms' }}>
            <div style={{ width: 56, height: 2, background: 'var(--bone)', marginBottom: 18 }} />
            <div style={{ fontSize: 28, lineHeight: 1.45, color: 'var(--bone)', fontWeight: 300 }}>
              We are an <span className="serif" style={{ fontStyle: 'italic' }}>AI second-reader</span> that lives inside the 3D modeling software every architect already uses. It checks the building against the code{' '}
              <span style={{ fontWeight: 600 }}>as the building is drawn</span>, flagging violations in real time, with citations.
            </div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '1300ms' }}>
            <div style={{ width: 56, height: 2, background: 'var(--amber)', marginBottom: 18 }} />
            <div style={{ fontSize: 28, lineHeight: 1.45, color: 'var(--bone)', fontWeight: 300 }}>
              The value is not just compliance. It is{' '}
              <span className="serif" style={{ fontStyle: 'italic', fontWeight: 600 }}>time</span>. Every month we remove from pre-construction is{' '}
              <span style={{ fontWeight: 600 }}>millions of dollars</span>{' '}
              in developer financing, returned to the project.
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ NEW · THE INSIGHT ============ */
function SlideInsight({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!isActive) { setShown(false); return; }
    const t = setTimeout(() => setShown(true), 300);
    return () => clearTimeout(t);
  }, [isActive]);

  return (
    <Slide index={index} total={TOTAL} section="04 · Insight" label="The Insight" tone="dark">
      <div ref={innerRef} style={{ display: 'contents' }}>
      <div style={{ position: 'absolute', inset: 0, padding: '150px 120px 110px', display: 'flex', flexDirection: 'column' }}>

        <h2 className="serif" style={{
          fontSize: 108, lineHeight: 1.02, letterSpacing: '-0.02em',
          fontStyle: 'italic', fontWeight: 400, margin: 0, color: 'var(--bone)',
        }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Both sides of the hand-off</span><br/>
          <span data-wipe style={{ '--reveal-delay': '600ms' }}>
            are <span style={{ color: 'var(--amber)' }}>losing time.</span>
          </span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, marginTop: 'auto', paddingTop: 56 }}>

          {/* Architect side */}
          <div data-reveal style={{ '--reveal-delay': '900ms' }}>
            {/* Floor-plan micro animation */}
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" style={{ marginBottom: 16, display: 'block' }}>
              {/* Outer floor-plan rect drawing in */}
              <rect x="2" y="4" width="46" height="40"
                stroke="rgba(242,237,228,0.55)" strokeWidth="1.4"
                strokeDasharray="172" strokeDashoffset={shown ? 0 : 172}
                style={{ transition: 'stroke-dashoffset 900ms cubic-bezier(.4,.7,.3,1) 400ms' }} />
              {/* Interior partition */}
              <line x1="28" y1="4" x2="28" y2="44"
                stroke="rgba(242,237,228,0.38)" strokeWidth="1.2"
                strokeDasharray="40" strokeDashoffset={shown ? 0 : 40}
                style={{ transition: 'stroke-dashoffset 500ms cubic-bezier(.4,.7,.3,1) 1000ms' }} />
              {/* Door arc */}
              <path d="M 28 36 A 10 10 0 0 1 38 36"
                stroke="rgba(242,237,228,0.35)" strokeWidth="1.2" fill="none"
                strokeDasharray="16" strokeDashoffset={shown ? 0 : 16}
                style={{ transition: 'stroke-dashoffset 400ms 1300ms' }} />
              {/* Pencil cursor dashed line */}
              <line x1="56" y1="14" x2="72" y2="14"
                stroke="rgba(242,237,228,0.2)" strokeWidth="1.2"
                strokeDasharray="2 3" />
              {/* Active cursor dot */}
              <circle cx="72" cy="14" r="3"
                fill="rgba(242,237,228,0.55)"
                style={{ opacity: shown ? 1 : 0, transition: 'opacity 300ms 1400ms' }} />
              {/* Red violation flag pops in */}
              <circle cx="50" cy="8" r="6"
                fill="#DC2626"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? 'scale(1)' : 'scale(0)',
                  transformOrigin: '50px 8px',
                  transition: 'opacity 200ms 1600ms, transform 500ms 1600ms cubic-bezier(.2,1.4,.4,1)',
                }} />
              <text x="50" y="12" textAnchor="middle" fontSize="8" fontFamily="Inter" fontWeight="700" fill="white"
                style={{ opacity: shown ? 1 : 0, transition: 'opacity 200ms 1700ms' }}>!</text>
            </svg>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.3em', color: 'var(--amber)', fontWeight: 700, marginBottom: 20 }}>ARCHITECT SIDE</div>
            <div className="serif" style={{ fontSize: 44, fontStyle: 'italic', lineHeight: 1.1, color: 'var(--bone)', marginBottom: 20 }}>
              Work exported, re-imported.
            </div>
            <div style={{ width: 36, height: 1, background: 'var(--bone-2)', opacity: 0.3, marginBottom: 20 }} />
            <div style={{ fontSize: 22, lineHeight: 1.65, color: 'var(--bone-2)', fontWeight: 300 }}>
              A competent architect can read the code. What no human can do is hold{' '}
              <span style={{ fontWeight: 600, color: 'var(--bone)' }}>ten thousand conditional rules</span>{' '}
              in their head while drawing. So the work is exported to a consultant, re-imported as markup, then redrawn.
            </div>
            <div style={{ marginTop: 18, fontSize: 22, fontStyle: 'italic', color: 'var(--bone-2)', opacity: 0.75 }}>
              Each translation costs weeks.
            </div>
          </div>

          {/* City side */}
          <div data-reveal style={{ '--reveal-delay': '1200ms' }}>
            {/* City skyline + clock micro animation */}
            <svg width="100" height="60" viewBox="0 0 100 60" fill="none" style={{ marginBottom: 16, display: 'block' }}>
              {/* Buildings drawing in staggered */}
              {[
                { x: 2,  y: 28, w: 16, h: 32, len: 96  },
                { x: 22, y: 8,  w: 22, h: 52, len: 148 },
                { x: 48, y: 18, w: 16, h: 42, len: 116 },
                { x: 68, y: 24, w: 14, h: 36, len: 100 },
              ].map((b, i) => (
                <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h}
                  stroke="rgba(242,237,228,0.45)" strokeWidth="1.3" fill="none"
                  strokeDasharray={b.len} strokeDashoffset={shown ? 0 : b.len}
                  style={{ transition: `stroke-dashoffset 700ms cubic-bezier(.4,.7,.3,1) ${500 + i * 110}ms` }} />
              ))}
              {/* Clock face on tallest building */}
              <circle cx="33" cy="22" r="7"
                stroke="rgba(242,237,228,0.5)" strokeWidth="1" fill="none"
                style={{ opacity: shown ? 1 : 0, transition: 'opacity 400ms 1050ms' }} />
              <circle cx="33" cy="22" r="1.5" fill="var(--amber)"
                style={{ opacity: shown ? 1 : 0, transition: 'opacity 400ms 1100ms' }} />
              {/* Hour hand fixed */}
              <line x1="33" y1="22" x2="30" y2="17"
                stroke="rgba(242,237,228,0.55)" strokeWidth="1.2" strokeLinecap="round"
                style={{ opacity: shown ? 1 : 0, transition: 'opacity 300ms 1150ms' }} />
              {/* Minute hand sweeps clockwise */}
              <line x1="33" y1="22" x2="33" y2="15"
                stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round"
                style={{
                  opacity: shown ? 1 : 0,
                  transformOrigin: '33px 22px',
                  transform: shown ? 'rotate(270deg)' : 'rotate(0deg)',
                  transition: 'opacity 300ms 1200ms, transform 2400ms 1300ms cubic-bezier(.4,.7,.3,1)',
                }} />
              {/* Backlog queue bars (stacked horizontal lines) */}
              {[0, 1, 2].map(i => (
                <line key={i}
                  x1="70" y1={30 + i * 9} x2="70" y2={30 + i * 9}
                  stroke="rgba(242,237,228,0.28)" strokeWidth="6" strokeLinecap="round"
                  strokeDasharray={`${14 - i * 3} 100`}
                  strokeDashoffset={shown ? -(14 - i * 3) : 0}
                  style={{ transition: `stroke-dashoffset 400ms ${1400 + i * 120}ms` }} />
              ))}
            </svg>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.3em', color: 'var(--amber)', fontWeight: 700, marginBottom: 20 }}>CITY SIDE</div>
            <div className="serif" style={{ fontSize: 44, fontStyle: 'italic', lineHeight: 1.1, color: 'var(--bone)', marginBottom: 32 }}>
              Understaffed. Over-backlogged.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { stat: '10+ mo', desc: 'permit backlogs in Florida, Southern California, major East Coast metros.' },
                { stat: '↓ staff', desc: 'senior plans examiners retiring; hiring has not kept pace.' },
                { stat: '3–4×',   desc: 'every re-submission consumes a new reviewer slot. The backlog is the re-work.' },
              ].map(({ stat, desc }) => (
                <div key={stat} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 24, alignItems: 'baseline' }}>
                  <div className="serif" style={{ fontSize: 42, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontSize: 20, color: 'var(--bone-2)', lineHeight: 1.4, fontWeight: 300 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Synthesis */}
        <div data-reveal style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid rgba(242,237,228,0.2)', display: 'flex', alignItems: 'baseline', gap: 28, '--reveal-delay': '1700ms' }}>
          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.3em', color: 'var(--amber)', fontWeight: 700, whiteSpace: 'nowrap' }}>THE INSIGHT</div>
          <div style={{ fontSize: 26, fontStyle: 'italic', color: 'var(--bone-2)', lineHeight: 1.4 }}>
            If we can synchronize the two sides, <span style={{ fontWeight: 600, color: 'var(--bone)' }}>both will pay.</span>{' '}
            Architects pay for seats; cities pay to clear the backlog.
          </div>
        </div>
      </div>
      </div>
    </Slide>
  );
}

/* ============ NEW · THE FLYWHEEL (animated) ============ */
function SlideFlywheel({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!isActive) { setShown(false); return; }
    const t = setTimeout(() => setShown(true), 300);
    return () => clearTimeout(t);
  }, [isActive]);

  return (
    <Slide index={index} total={TOTAL} section="08 · Flywheel" label="The Flywheel" tone="dark">
      <div ref={innerRef} style={{ display: 'contents' }}>
      <div style={{ position: 'absolute', inset: 0, padding: '170px 120px 130px' }}>
        {/* Left column — narrative + steps */}
        <div style={{ position: 'absolute', left: 120, top: 190, width: 760 }}>
          <h2 className="serif" style={{
            fontSize: 68, lineHeight: 1.02, letterSpacing: '-0.02em',
            fontWeight: 400, margin: 0, color: 'var(--bone)',
          }}>
            <span data-wipe style={{ '--reveal-delay': '100ms' }}>Architects activate</span><br/>
            <span data-wipe style={{ '--reveal-delay': '500ms' }}>cities. Cities activate</span><br/>
            <span data-wipe style={{ '--reveal-delay': '900ms', fontStyle: 'italic', color: 'var(--amber)' }}>
              developers.
            </span>
          </h2>

          <div data-reveal style={{ '--reveal-delay': '1300ms' }}>
            <div style={{ width: 56, height: 2, background: 'var(--amber)', margin: '26px 0 18px' }} />
            <div style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--bone)', fontWeight: 300, maxWidth: 660 }}>
              The architect is the <span style={{ fontStyle: 'italic' }}>top of the funnel</span>.
              Every firm that adopts Cuniform gives us{' '}
              <span style={{ fontWeight: 600 }}>the data a city would pay for</span>,
              and every integrated city gives developers a shortcut{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 600 }}>only Cuniform can sell.</span>
            </div>
          </div>

          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: 14, columnGap: 22 }}>
            {[
              ['01', 'Architect adopts Cuniform', 'Seat subscription. Compliance data generated.'],
              ['02', 'Data flows to the city', 'Pre-compliant submissions. Backlog shrinks.'],
              ['03', 'City endorses the submissions', '"Pre-cleared" status. Developers demand it.'],
              ['04', 'Developers select Cuniform firms', 'The top of the funnel widens again.'],
            ].map(([n, t, d], i) => (
              <React.Fragment key={n}>
                <div data-reveal style={{ '--reveal-delay': `${1500 + i * 160}ms` }}>
                  <div className="serif" style={{ fontSize: 28, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 1 }}>{n}</div>
                </div>
                <div data-reveal style={{ '--reveal-delay': `${1500 + i * 160}ms` }}>
                  <div style={{ fontSize: 18, color: 'var(--bone)', lineHeight: 1.25, fontWeight: 400 }}>{t}</div>
                  <div style={{ fontSize: 13, color: 'var(--bone-2)', opacity: 0.65, marginTop: 3 }}>{d}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Timeline compression chart */}
          <div data-reveal style={{ '--reveal-delay': '2200ms', marginTop: 36, paddingTop: 24, borderTop: '1px solid rgba(242,237,228,0.12)' }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: '0.26em', color: 'rgba(242,237,228,0.38)', marginBottom: 14 }}>
              PRE-CONSTRUCTION TIMELINE, PHASE BY PHASE
            </div>
            {[
              { phase: '00', label: 'Existing',  mo: 12, barPx: 560, current: false },
              { phase: '01', label: 'Architect', mo: 10, barPx: 467, current: true  },
              { phase: '02', label: 'City',      mo: 6,  barPx: 280, current: false },
              { phase: '03', label: 'Developer', mo: 2,  barPx: 93,  current: false },
            ].map((row, i) => (
              <div key={row.phase} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div className="mono" style={{ width: 130, fontSize: 12, flexShrink: 0, color: row.current ? '#DC2626' : 'rgba(242,237,228,0.5)' }}>
                  <span style={{ opacity: 0.5 }}>{row.phase}</span>{'  '}{row.label}
                </div>
                {/* two-segment bar: solid left + faint right to 560px */}
                <div style={{ position: 'relative', width: 560, height: 8, flexShrink: 0 }}>
                  {/* full track ghost */}
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(242,237,228,0.07)', borderRadius: 2 }} />
                  {/* filled portion */}
                  <div
                    className="fw-bar"
                    style={{
                      '--fw-w': `${row.barPx}px`,
                      '--fw-delay': `${2400 + i * 180}ms`,
                      position: 'absolute', left: 0, top: 0, height: '100%',
                      background: row.current ? '#DC2626' : 'rgba(242,237,228,0.28)',
                      borderRadius: 2,
                    }}
                  />
                  {/* inner solid accent (left 30%) */}
                  <div
                    className="fw-bar-accent"
                    style={{
                      '--fw-w': `${Math.round(row.barPx * 0.32)}px`,
                      '--fw-delay': `${2500 + i * 180}ms`,
                      position: 'absolute', left: 0, top: 0, height: '100%',
                      background: row.current ? '#991B1B' : 'rgba(242,237,228,0.55)',
                      borderRadius: 2,
                    }}
                  />
                </div>
                <div className="mono" style={{ fontSize: 12, color: row.current ? '#DC2626' : 'rgba(242,237,228,0.45)', flexShrink: 0 }}>
                  {row.mo} mo
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — animated flywheel SVG */}
        <div style={{ position: 'absolute', right: 120, top: 200, width: 820, height: 720 }}>
          <svg viewBox="0 0 820 720" width="100%" height="100%">
            <defs>
              <marker id="fwArrowAdd" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="9" markerHeight="9" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--amber)" />
              </marker>
            </defs>

            {/* hub rings */}
            <circle cx="410" cy="360" r="120" fill="none" stroke="rgba(242,237,228,0.18)" strokeWidth="1" strokeDasharray="3 5"
              style={{ opacity: shown ? 1 : 0, transition: 'opacity 900ms 700ms' }} />
            <circle cx="410" cy="360" r="240" fill="none" stroke="rgba(242,237,228,0.14)" strokeWidth="1" strokeDasharray="3 5"
              style={{ opacity: shown ? 1 : 0, transition: 'opacity 900ms 900ms' }} />

            {/* clockwise arcs */}
            {[
              { d: 'M 305 215 A 240 240 0 0 0 215 480', delay: 1100 },
              { d: 'M 240 540 A 240 240 0 0 0 580 540', delay: 1400 },
              { d: 'M 605 480 A 240 240 0 0 0 515 215', delay: 1700 },
            ].map((arc, i) => (
              <path key={i} d={arc.d} fill="none" stroke="var(--amber)" strokeWidth="2"
                markerEnd="url(#fwArrowAdd)"
                strokeDasharray="460" strokeDashoffset={shown ? 0 : 460}
                style={{ transition: `stroke-dashoffset 1100ms cubic-bezier(.4,.7,.3,1) ${arc.delay}ms` }} />
            ))}

            {/* arc labels */}
            <g style={{ opacity: shown ? 1 : 0, transition: 'opacity 500ms 2000ms' }}>
              <text x="200" y="350" textAnchor="middle" fontFamily="Inter" fontSize="11" letterSpacing="2.4" fontWeight="700" fill="var(--amber)">COMPLIANCE DATA</text>
              <text x="410" y="640" textAnchor="middle" fontFamily="Inter" fontSize="11" letterSpacing="2.4" fontWeight="700" fill="var(--amber)">ENDORSEMENT</text>
              <text x="615" y="350" textAnchor="middle" fontFamily="Inter" fontSize="11" letterSpacing="2.4" fontWeight="700" fill="var(--amber)">DEMAND</text>
            </g>

            {/* three nodes */}
            <FwNodeAdd cx={410} cy={185} label="ARCHITECTS" kicker="Top of funnel"      sub="Phase 1 · today"  tone="bone"    delay={500}  shown={shown} />
            <FwNodeAdd cx={210} cy={530} label="CITIES"     kicker="Integrated review" sub="Phase 2"          tone="amber"   delay={800}  shown={shown} />
            <FwNodeAdd cx={610} cy={530} label="DEVELOPERS" kicker="Generative"        sub="Phase 3"          tone="outline" delay={1100} shown={shown} />

            {/* hub label */}
            <g style={{ opacity: shown ? 1 : 0, transition: 'opacity 700ms 2300ms' }}>
              <text x="410" y="346" textAnchor="middle" fontFamily="Inter" fontSize="11" letterSpacing="3" fontWeight="700" fill="var(--bone-2)">THE FLYWHEEL</text>
              <text x="410" y="378" textAnchor="middle" fontFamily="'CalibraText-Regular','Calibra','Times New Roman',serif" fontStyle="italic" fontSize="24" fill="var(--amber)">each activates</text>
              <text x="410" y="406" textAnchor="middle" fontFamily="'CalibraText-Regular','Calibra','Times New Roman',serif" fontStyle="italic" fontSize="24" fill="var(--amber)">the next</text>
            </g>
          </svg>
        </div>
      </div>
      </div>
    </Slide>
  );
}
function FwNodeAdd({ cx, cy, label, kicker, sub, tone, delay, shown }) {
  const fill = tone === 'amber' ? 'var(--amber)' : (tone === 'bone' ? 'var(--bone)' : 'transparent');
  const stroke = tone === 'outline' ? 'var(--bone)' : fill;
  const txt = (tone === 'amber' || tone === 'bone') ? '#0A0A0A' : 'var(--bone)';
  return (
    <g style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(14px)',
      transition: `opacity 700ms ${delay}ms, transform 700ms ${delay}ms`,
    }}>
      <circle cx={cx} cy={cy} r="80" fill={fill} stroke={stroke} strokeWidth="1.4" />
      <text x={cx} y={cy - 8} textAnchor="middle" fontFamily="Inter" fontSize="13" letterSpacing="3" fontWeight="700" fill={txt}>{label}</text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontFamily="'CalibraText-Regular','Calibra','Times New Roman',serif" fontStyle="italic" fontSize="16" fill={txt} opacity="0.92">{kicker}</text>
      <text x={cx} y={cy + 40} textAnchor="middle" fontFamily="Inter" fontSize="9" letterSpacing="2" fontWeight="600" fill={txt} opacity="0.65">{sub}</text>
    </g>
  );
}

/* ============ NEW · COMPETITION ============ */
function SlideCompetition({ index }) {
  const COL_W = '180px 90px 190px 260px 200px 1fr';
  const cols = ['COMPANY','RAISED','STANCE','WORKFLOW','ADOPTION','THE LIMIT'];
  const rows = [
    { name: 'UpCodes',       raised: '$33.5M', stance: 'Code search + reference',  workflow: 'Web app · reads code only',     adoption: 'Separate browser tool',  limit: 'Reads the rule book; never sees the model.' },
    { name: 'CodeComply.Ai', raised: '$2.0M',  stance: 'PDF plan review',          workflow: 'Upload drawings after-the-fact', adoption: 'Post-design audit',       limit: 'Reviews the paper, not the pencil.' },
    { name: 'Permitify',     raised: '$500K',  stance: 'City-side permit portal',  workflow: 'Municipal workflow tool',        adoption: 'Sells to cities',          limit: 'Good for clerks; invisible to architects.' },
  ];
  const us = { name: 'Cuniform', raised: '—', stance: 'Real-time second reader', workflow: 'Inside the 3D design canvas', adoption: 'Zero-friction plug-in', limit: 'Assist, not just review. Pencil, not paper.' };
  const callouts = [
    { tag: 'EASE OF ADOPTION',  title: 'Integrated in the pen, not the paper.', body: 'No new file format, no second window, no parallel workflow. The plug-in lives inside the 3D software architects already open every morning.' },
    { tag: 'ASSIST, NOT REVIEW', title: 'GitHub Copilot, not code-review.', body: "Flags appear while the model is being drawn. Not weeks later in a markup returned from a consultant. Fix it while it's cheap to fix.", accent: true },
    { tag: 'CITED, NOT OPAQUE',  title: 'Every flag links to the code line.', body: 'Architects can read, argue, override. No black box; no false confidence. Competitors either do not cite, or cannot.' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="11 · Competition" label="Competition" tone="paper">
      <div style={{ position: 'absolute', inset: 0, padding: '100px 120px 90px', display: 'flex', flexDirection: 'column' }}>

        <h2 className="serif" style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.02em', fontWeight: 400, margin: '0 0 32px', color: 'var(--ink)' }}>
          <span data-wipe style={{ '--reveal-delay': '100ms' }}>A category of three —</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms' }}>none <span style={{ fontStyle: 'italic', color: '#DC2626' }}>inside the canvas.</span></span>
        </h2>

        {/* Table */}
        <div data-reveal style={{ '--reveal-delay': '700ms' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: COL_W, gap: 16, paddingBottom: 10, borderBottom: '1.5px solid var(--ink)' }}>
            {cols.map(c => (
              <div key={c} className="mono" style={{ fontSize: 10, letterSpacing: '0.24em', color: 'rgba(10,10,10,0.38)', fontWeight: 600 }}>{c}</div>
            ))}
          </div>

          {/* Competitor rows */}
          {rows.map((r, i) => (
            <div key={r.name} data-reveal style={{ '--reveal-delay': `${800 + i * 110}ms`, display: 'grid', gridTemplateColumns: COL_W, gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(10,10,10,0.1)', alignItems: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 500, color: 'var(--ink)' }}>{r.name}</div>
              <div className="serif" style={{ fontSize: 17, fontStyle: 'italic', color: 'rgba(10,10,10,0.45)' }}>{r.raised}</div>
              <div style={{ fontSize: 15, color: 'var(--ink)', fontWeight: 300 }}>{r.stance}</div>
              <div style={{ fontSize: 15, color: 'var(--ink)', fontWeight: 300 }}>{r.workflow}</div>
              <div style={{ fontSize: 15, color: 'var(--ink)', fontWeight: 300 }}>{r.adoption}</div>
              <div style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(10,10,10,0.5)', fontWeight: 300 }}>{r.limit}</div>
            </div>
          ))}

          {/* Cuniform row — dark */}
          <div data-reveal style={{ '--reveal-delay': '1130ms', display: 'grid', gridTemplateColumns: COL_W, gap: 16, padding: '16px 20px', margin: '0 -20px', alignItems: 'center', background: 'var(--ink)' }}>
            <div>
              <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', color: '#DC2626' }}>{us.name}</div>
              <div className="mono" style={{ fontSize: 8, letterSpacing: '0.24em', color: 'rgba(242,237,228,0.35)', marginTop: 3 }}>US</div>
            </div>
            <div className="serif" style={{ fontSize: 17, fontStyle: 'italic', color: 'rgba(242,237,228,0.35)' }}>{us.raised}</div>
            <div style={{ fontSize: 15, color: 'var(--bone)', fontWeight: 300 }}>{us.stance}</div>
            <div style={{ fontSize: 15, color: 'var(--bone)', fontWeight: 300 }}>{us.workflow}</div>
            <div style={{ fontSize: 15, color: 'var(--bone)', fontWeight: 300 }}>{us.adoption}</div>
            <div style={{ fontSize: 15, fontStyle: 'italic', color: '#DC2626', fontWeight: 400 }}>{us.limit}</div>
          </div>
        </div>

        {/* Three callout cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 'auto', paddingTop: 20 }}>
          {callouts.map((c, i) => (
            <div key={c.tag} data-reveal style={{
              '--reveal-delay': `${1350 + i * 130}ms`,
              border: c.accent ? '1.5px solid #DC2626' : '1px solid rgba(10,10,10,0.12)',
              padding: '24px 24px',
              background: c.accent ? 'rgba(220,38,38,0.04)' : 'transparent',
            }}>
              <div className="mono" style={{ fontSize: 9, letterSpacing: '0.26em', color: c.accent ? '#DC2626' : 'rgba(10,10,10,0.38)', marginBottom: 12, fontWeight: 700 }}>{c.tag}</div>
              <div className="serif" style={{ fontSize: 24, fontStyle: 'italic', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 12 }}>{c.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(10,10,10,0.55)', fontWeight: 300 }}>{c.body}</div>
            </div>
          ))}
        </div>

      </div>
    </Slide>
  );
}

/* ============ NEW · WHY-NOW INFOGRAPHIC ICONS (ref slide 19) ============ */
function WhyThick({ delay = 0, active }) {
  const [s, setS] = useState(false);
  useEffect(() => {
    if (!active) { setS(false); return; }
    const t = setTimeout(() => setS(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  return (
    <svg width="92" height="72" viewBox="0 0 92 72">
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={6 + i * 3} y={s ? 44 - i * 8 : 44} width="42" height="20"
          fill={i === 4 ? 'var(--amber)' : 'rgba(242,237,228,0.10)'}
          stroke="rgba(242,237,228,0.35)" strokeWidth="0.8"
          style={{ transition: `y 700ms cubic-bezier(.2,.7,.2,1) ${i * 110}ms` }} />
      ))}
      <text x="74" y={s ? 24 : 50} textAnchor="middle"
        fontFamily="'CalibraText-Regular','Calibra',serif" fontStyle="italic" fontSize="22" fill="var(--amber)"
        style={{ transition: 'y 900ms 700ms' }}>4×</text>
    </svg>
  );
}
function WhyBIM({ delay = 0, active }) {
  const [s, setS] = useState(false);
  useEffect(() => {
    if (!active) { setS(false); return; }
    const t = setTimeout(() => setS(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  return (
    <svg width="84" height="72" viewBox="0 0 84 72">
      <g fill="none" stroke="var(--bone)" strokeWidth="1.2"
        strokeDasharray="220" strokeDashoffset={s ? 0 : 220}
        style={{ transition: 'stroke-dashoffset 1400ms' }}>
        <path d="M14 22 L42 8 L70 22 L70 54 L42 68 L14 54 Z" />
        <path d="M14 22 L42 36 L70 22" />
        <path d="M42 36 L42 68" />
      </g>
      <circle cx="60" cy="26" r={s ? 5 : 0} fill="var(--amber)" style={{ transition: 'r 400ms 1400ms' }} />
    </svg>
  );
}
function WhyAI({ delay = 0, active }) {
  const [s, setS] = useState(false);
  useEffect(() => {
    if (!active) { setS(false); return; }
    const t = setTimeout(() => setS(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  return (
    <svg width="92" height="72" viewBox="0 0 92 72">
      <line x1="0" y1="36" x2="92" y2="36" stroke="rgba(242,237,228,0.35)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="2" y="32" fontFamily="Inter" fontSize="8" fill="var(--bone-2)" opacity="0.7">PROD-READY</text>
      <path d="M4 64 L24 60 L42 50 L60 26 L86 8" fill="none" stroke="var(--amber)" strokeWidth="2"
        strokeDasharray="140" strokeDashoffset={s ? 0 : 140}
        style={{ transition: 'stroke-dashoffset 1600ms' }} />
      <circle cx="86" cy="8" r={s ? 5 : 0} fill="var(--amber)" style={{ transition: 'r 400ms 1500ms' }} />
    </svg>
  );
}
function WhyRetire({ delay = 0, active }) {
  const [s, setS] = useState(false);
  useEffect(() => {
    if (!active) { setS(false); return; }
    const t = setTimeout(() => setS(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  return (
    <svg width="92" height="72" viewBox="0 0 92 72">
      {[0,1,2,3].map(i => (
        <g key={i} style={{
          opacity: s ? (i < 2 ? 0.22 : 1) : 1,
          transition: `opacity 600ms ${i * 150}ms`,
        }}>
          <circle cx={14 + i * 20} cy={26} r="6" fill="none" stroke={i < 2 ? 'rgba(242,237,228,0.5)' : 'var(--bone)'} strokeWidth="1.2" />
          <path d={`M${8 + i * 20} 44 Q${14 + i * 20} 36 ${20 + i * 20} 44 L${20 + i * 20} 60 L${8 + i * 20} 60 Z`} fill="none" stroke={i < 2 ? 'rgba(242,237,228,0.5)' : 'var(--bone)'} strokeWidth="1.2" />
        </g>
      ))}
      <text x="46" y="70" textAnchor="middle" fontFamily="Inter" fontSize="8" fill="var(--amber)" fontWeight="700" letterSpacing="1.5"
        style={{ opacity: s ? 1 : 0, transition: 'opacity 500ms 900ms' }}>RETIRING →</text>
    </svg>
  );
}

/* ============ UPGRADED · WHY NOW (uses new icons) ============ */
function SlideWhyNowV2({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);
  const items = [
    { n: 'i',   t: 'The code has thickened.',           d: <>Building codes and state overlays have <span style={{ fontWeight: 600 }}>quadrupled in volume</span> since 1990. <span style={{ fontStyle: 'italic' }}>No unaided human</span> holds it all.</>, Icon: WhyThick },
    { n: 'ii',  t: 'BIM has won.',                      d: <>3D modeling is the <span style={{ fontStyle: 'italic' }}>lingua franca</span> of mid-market architecture. A single integration surface reaches <span style={{ fontWeight: 600 }}>80% of US firms</span>.</>, Icon: WhyBIM },
    { n: 'iii', t: 'Reasoning AI crossed the line.',    d: <>What was a demo three years ago is <span style={{ fontWeight: 600 }}>production-grade</span> for structured, cited reasoning. Compliance is the <span style={{ fontStyle: 'italic' }}>ideal first workload</span>.</>, Icon: WhyAI },
    { n: 'iv',  t: 'Consultants are retiring.',         d: <>Code consultants <span style={{ fontWeight: 600 }}>retire faster than they are replaced</span>. A succession problem we convert into a <span style={{ fontStyle: 'italic' }}>software problem</span>.</>, Icon: WhyRetire },
  ];
  return (
    <Slide index={index} total={TOTAL} section="07 · Why Now" label="Why Now" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '170px 120px 130px', display: 'flex', flexDirection: 'column' }}>
        <h2 className="serif" style={{
          fontSize: 100, lineHeight: 1.02, letterSpacing: '-0.02em',
          fontWeight: 400, margin: 0, color: 'var(--bone)', maxWidth: 1620,
        }}>
          <span data-wipe style={{ '--reveal-delay': '100ms' }}>Four forces,</span><br/>
          <span data-wipe style={{ '--reveal-delay': '500ms' }}>arriving at the <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>same hour</span>.</span>
        </h2>

        <div style={{
          marginTop: 'auto', paddingTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36,
        }}>
          {items.map((x, i) => (
            <div key={x.n} data-reveal style={{ '--reveal-delay': `${800 + i * 220}ms` }}>
              <div style={{ borderTop: '1px solid var(--bone)', paddingTop: 22 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minHeight: 80 }}>
                  <div className="serif" style={{ fontSize: 36, fontStyle: 'italic', color: 'var(--amber)' }}>{x.n}.</div>
                  <x.Icon delay={1000 + i * 220} active={isActive} />
                </div>
                <div className="serif" style={{ fontSize: 34, lineHeight: 1.18, color: 'var(--bone)', marginTop: 16 }}>{x.t}</div>
                <div style={{ width: 32, height: 1, background: 'var(--bone-2)', opacity: 0.4, margin: '16px 0' }} />
                <div style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--bone-2)', fontWeight: 300 }}>{x.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

Object.assign(window, {
  SlidePitch, SlideInsight, SlideFlywheel, SlideCompetition, SlideWhyNowV2,
});
