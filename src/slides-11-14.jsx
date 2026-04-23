/* ──────────────────────────────────────────────────────────────
   Slides 11–14: Traction, Team, Roadmap, Ask, Thank-you
   ────────────────────────────────────────────────────────────── */

/* ============ 11 TRACTION / DESIGN PARTNERS ============ */
function SlideTraction({ index }) {
  const partners = [
    { name: 'RAMSA',          kind: 'Global Architecture Firm', stage: 'MOU Signed' },
    { name: 'Hart Howerton',  kind: 'Global Architecture Firm', stage: 'MOU Signed' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="10 · Traction" label="Design Partners" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px', display: 'flex', flexDirection: 'column' }}>
        {/* Eyebrow */}
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 28 }}>
          TRACTION · DESIGN PARTNERS
        </div>

        {/* Title */}
        <div className="serif" style={{ fontSize: 96, lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: 1400 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Two firms.</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms', color: 'var(--amber)' }}>Already signed.</span>
        </div>

        {/* Partner cards — 2-up grid */}
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 900 }}>
          {partners.map((p, i) => (
            <div
              key={p.name}
              data-reveal
              style={{
                '--reveal-delay': `${800 + i * 160}ms`,
                '--reveal-y': '24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(242,237,228,0.12)',
                padding: '32px 28px',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}
            >
              <div className="serif" style={{ fontSize: 44, lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--bone)' }}>
                {p.name}
              </div>
              <div style={{ fontSize: 18, color: 'var(--bone-2)', fontWeight: 300 }}>
                {p.kind}
              </div>
              <div className="mono" style={{
                fontSize: 11, letterSpacing: '0.22em', color: 'var(--amber)',
                border: '1px solid rgba(220,38,38,0.4)',
                padding: '6px 12px', alignSelf: 'flex-start', marginTop: 8,
              }}>
                {p.stage}
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip — pushed to bottom */}
        <div style={{ marginTop: 'auto', paddingTop: 40, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 60, maxWidth: 900, borderTop: '2px solid rgba(242,237,228,0.18)' }}>
          <TractionStat value="60" label="Waitlist signups · 90 days" delay={1400} />
          <TractionStat value="100%" label="MVP complete · 30 days to GA" delay={1600} />
        </div>
      </div>
    </Slide>
  );
}

function TractionStat({ value, label, delay }) {
  return (
    <div data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
      <div className="serif" style={{ fontSize: 72, lineHeight: 1, letterSpacing: '-0.02em' }}>
        {value}
      </div>
      <div className="mono" style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--bone-2)', opacity: 0.7, marginTop: 14 }}>
        {label}
      </div>
    </div>
  );
}

/* ============ 12 TEAM ============ */
function SlideTeam({ index }) {
  const founders = [
    {
      name: 'Joe Yatco',
      role: 'CEO',
      bio: '10+ years in architecture. Felt the code-compliance pain across 80+ projects at RAMSA and East Horizon.',
      proof: 'RAMSA · East Horizon',
    },
    {
      name: 'Kyle Gallatin',
      role: 'CTO',
      bio: '10 years building production ML. Tech Lead for ML Infra at Handshake. Author, "Machine Learning in Production."',
      proof: 'Pfizer · Etsy · Handshake',
    },
    {
      name: 'Arnav Somani',
      role: 'CDO',
      bio: 'Led design at Smartmedia Tech. Shipped enterprise tools used by 1M+ customers across Visa, Nike, IOC.',
      proof: 'Visa · Nike · Olympics',
    },
  ];

  return (
    <Slide index={index} total={TOTAL} section="11 · Team" label="Team" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '130px 120px 100px' }}>
        <div className="serif" style={{ fontSize: 72, lineHeight: 1.0, letterSpacing: '-0.02em', fontStyle: 'italic', marginBottom: 12 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>An architect, an ML engineer,</span>
          <br/>
          <span data-wipe style={{ '--reveal-delay': '500ms', color: 'var(--amber)' }}>and an enterprise designer.</span>
        </div>
        <div data-reveal style={{ '--reveal-delay': '900ms', fontSize: 22, color: 'var(--bone-2)', opacity: 0.75, maxWidth: 1100, fontWeight: 300 }}>
          The <span style={{ fontWeight: 600 }}>three disciplines</span> you need to ship{' '}
          <span style={{ fontStyle: 'italic' }}>trustworthy</span>{' '}
          AI into a regulated drafting workflow.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, marginTop: 48 }}>
          {founders.map((f, i) => (
            <div
              key={f.name}
              data-reveal
              style={{
                '--reveal-delay': `${1300 + i * 220}ms`,
                '--reveal-y': '48px',
                paddingTop: 24,
                borderTop: '2px solid var(--amber)',
              }}
            >
              {/* Portrait placeholder */}
              <div style={{
                width: '55%', aspectRatio: '1', marginBottom: 16,
                background: `linear-gradient(135deg, #1C1C1C, #0A0A0A)`,
                border: '1px solid rgba(242,237,228,0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Initials as placeholder */}
                <div className="serif" style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 180, fontStyle: 'italic', color: 'var(--amber)',
                  opacity: 0.2, letterSpacing: '-0.04em',
                }}>
                  {f.name.split(' ').map(s => s[0]).join('')}
                </div>
                <div className="mono" style={{ position: 'absolute', bottom: 16, left: 20, fontSize: 11, letterSpacing: 2.5, color: 'var(--bone-2)', opacity: 0.4 }}>
                  PORTRAIT · PLACEHOLDER
                </div>
              </div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 10 }}>
                {f.role}
              </div>
              <div className="serif" style={{ fontSize: 44, lineHeight: 1, fontStyle: 'italic', letterSpacing: '-0.015em', marginBottom: 16 }}>
                {f.name}
              </div>
              <div style={{ fontSize: 18, lineHeight: 1.4, color: 'var(--bone)', marginBottom: 14, fontWeight: 300 }}>
                {f.bio}
              </div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--bone-2)', opacity: 0.55 }}>
                {f.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ============ 13 ROADMAP ============ */
function SlideRoadmap({ index }) {
  const phases = [
    { month: '3m', phase: 'Development', product: 'MVP → Firm DT', team: '3 eng', rev: '—', burn: '$175K' },
    { month: '6m', phase: 'Development', product: 'GA launch', team: '5 eng', rev: 'Fremium', burn: '$74K' },
    { month: '9m', phase: 'Growth', product: 'First 5 firms', team: '+ Sales', rev: '$45K', burn: '$330K' },
    { month: '12m', phase: 'Growth', product: 'Cash neutral', team: '10 cust.', rev: '$148K', burn: '$480K' },
    { month: '15m', phase: 'Growth', product: 'ARR conversion', team: '+ Product', rev: '$248K', burn: '$720K' },
    { month: '18m', phase: 'Growth', product: '$1M ARR', team: '30 cust.', rev: '$1M', burn: '$935K' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="12 · Roadmap" label="Roadmap" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px' }}>
        <div className="serif" style={{ fontSize: 112, lineHeight: 0.98, letterSpacing: '-0.02em', fontStyle: 'italic', marginBottom: 60 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>18 months</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms', color: 'var(--amber)' }}>to $1M ARR.</span>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', left: 0, right: 0, top: 40, height: 2, width: '100%' }} viewBox="0 0 1600 2" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="1600" y2="1" stroke="var(--amber)" strokeWidth="2"
                  data-draw style={{ '--draw-len': 1600, '--reveal-delay': '900ms' }} />
          </svg>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 20, position: 'relative', paddingTop: 80 }}>
            {phases.map((p, i) => (
              <div
                key={p.month}
                data-reveal
                style={{
                  '--reveal-delay': `${1200 + i * 150}ms`,
                  '--reveal-y': '32px',
                  position: 'relative',
                }}
              >
                {/* Node on timeline */}
                <div style={{
                  position: 'absolute', top: -120, left: 0,
                  width: 14, height: 14, borderRadius: '50%',
                  background: i === 5 ? 'var(--amber)' : 'var(--ink)',
                  border: '2px solid var(--amber)',
                }} />
                <div className="mono" style={{ fontSize: 14, letterSpacing: 3, color: 'var(--amber)', marginBottom: 16 }}>
                  {p.month}
                </div>
                <div className="serif" style={{ fontSize: 32, fontStyle: 'italic', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.01em' }}>
                  {p.product}
                </div>
                <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--bone-2)', opacity: 0.7 }}>
                  <div><span style={{ opacity: 0.5 }}>Team</span>&nbsp;&nbsp;{p.team}</div>
                  <div><span style={{ opacity: 0.5 }}>Rev</span>&nbsp;&nbsp;{p.rev}</div>
                  <div><span style={{ opacity: 0.5 }}>Burn</span>&nbsp;&nbsp;{p.burn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase bracket */}
        <div data-reveal style={{ '--reveal-delay': '2200ms', display: 'flex', marginTop: 60, fontSize: 16, letterSpacing: 3, fontFamily: 'JetBrains Mono', textTransform: 'uppercase', color: 'var(--bone-2)', opacity: 0.6 }}>
          <div style={{ flex: 2, borderTop: '1px solid var(--bone-2)', paddingTop: 14 }}>
            ← Development · $1M seed
          </div>
          <div style={{ flex: 4, borderTop: '1px solid var(--amber)', paddingTop: 14, color: 'var(--amber)' }}>
            Growth · to Series A at $1M ARR →
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 13 GO TO MARKET ============ */
function SlideGoToMarket({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="13 · Go To Market" label="Go To Market" tone="paper">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px', display: 'flex', flexDirection: 'column' }}>

        {/* Headline */}
        <div className="serif" style={{ fontSize: 112, lineHeight: 1.0, letterSpacing: '-0.02em', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)' }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>One beachhead.</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms', color: '#DC2626' }}>Three expanding markets.</span>
        </div>

        {/* Subhead */}
        <div data-reveal style={{ '--reveal-delay': '900ms', fontSize: 26, fontWeight: 300, maxWidth: 900, marginTop: 32, color: 'rgba(10,10,10,0.65)', lineHeight: 1.5 }}>
          Founder-led through Phase 1. No paid acquisition. Every dollar of CAC returns as a named firm in a closed network.
        </div>

        {/* Three-column phase grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, marginTop: 60 }}>

          {/* Column 1 — Land */}
          <div data-reveal style={{ '--reveal-delay': '1100ms', '--reveal-y': '32px', borderTop: '2px solid rgba(10,10,10,0.8)', paddingTop: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: '#DC2626' }}>i.  PHASE 1 · ARCHITECTS</div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', opacity: 0.4 }}>MOVE</div>
            </div>
            <div className="serif" style={{ fontSize: 56, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: 16, color: 'var(--ink)' }}>Land</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', opacity: 0.5, marginBottom: 12 }}>TARGET · BIM MANAGERS AT 15–100 ARCHITECT FIRMS</div>
            <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', fontWeight: 600, marginBottom: 12, color: 'var(--ink)' }}>Dead-project pilots.</div>
            <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.7, fontWeight: 300, color: 'var(--ink)' }}>
              Run Cuniform on a completed, permitted project. Every missed violation becomes cost-equivalent proof in the Principal review. Zero risk to them. Maximum signal to us.
            </div>
          </div>

          {/* Column 2 — Expand */}
          <div data-reveal style={{ '--reveal-delay': '1300ms', '--reveal-y': '32px', borderTop: '2px solid rgba(10,10,10,0.4)', paddingTop: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(10,10,10,0.6)' }}>ii.  PHASE 1 · ARCHITECTS</div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', opacity: 0.4 }}>MOVE</div>
            </div>
            <div className="serif" style={{ fontSize: 56, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: 16, color: 'var(--ink)' }}>Expand</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', opacity: 0.5, marginBottom: 12 }}>TARGET · PRINCIPALS AND STUDIO DIRECTORS</div>
            <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', fontWeight: 600, marginBottom: 12, color: 'var(--ink)' }}>Firm-wide standardization.</div>
            <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.7, fontWeight: 300, color: 'var(--ink)' }}>
              One pilot becomes fifteen seats. The Principal sees the missed-violation report and buys insurance against rejections, not a plug-in. Price accordingly: this is a liability tool, not a productivity app.
            </div>
          </div>

          {/* Column 3 — Compound */}
          <div data-reveal style={{ '--reveal-delay': '1500ms', '--reveal-y': '32px', borderTop: '2px solid rgba(10,10,10,0.4)', paddingTop: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(10,10,10,0.6)' }}>iii.  PHASE 1 · ARCHITECTS</div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', opacity: 0.4 }}>MOVE</div>
            </div>
            <div className="serif" style={{ fontSize: 56, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: 16, color: 'var(--ink)' }}>Compound</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', opacity: 0.5, marginBottom: 12 }}>TARGET · AIA CHAPTERS · USER GROUPS · REFERRALS</div>
            <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', fontWeight: 600, marginBottom: 12, color: 'var(--ink)' }}>Architects trust architects.</div>
            <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.7, fontWeight: 300, color: 'var(--ink)' }}>
              Every case study is one Principal quoting numbers to another. AEC runs on professional trust: one named firm in your portfolio unlocks the next ten. Community-led growth replaces paid acquisition entirely.
            </div>
          </div>
        </div>

        {/* Bottom two-column: Phase 2 & 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(10,10,10,0.12)' }}>
          <div data-reveal style={{ '--reveal-delay': '1800ms' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.45, marginBottom: 10 }}>PHASE 2 · CITIES</div>
            <div style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.5, opacity: 0.65, color: 'var(--ink)' }}>
              Free pilots to backlog-crushed municipalities: NYC, LA, Florida metros. Convert to per-submission fees once backlogs clear. Cities become a distribution channel, not just a market.
            </div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '1900ms' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.45, marginBottom: 10 }}>PHASE 3 · DEVELOPERS</div>
            <div style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.5, opacity: 0.65, color: 'var(--ink)' }}>
              Design partners among GCs building repeat typologies: multi-family, self-storage, healthcare. Sold on time-to-break-ground, not compliance. The same engine, a different buyer.
            </div>
          </div>
        </div>

        <ChromeBottom left="© Cuniform Tech 2026" right="Confidential" />
      </div>
    </Slide>
  );
}

/* ============ 14 ASK ============ */
function SlideAsk({ index }) {
  const funds = [
    { label: 'Engineering · product',    pct: 55, delay: 1400 },
    { label: 'Go-to-market · sales',     pct: 25, delay: 1550 },
    { label: 'Pilots · design partners', pct: 12, delay: 1700 },
    { label: 'G&A · reserve',            pct:  8, delay: 1850 },
  ];
  const milestones = [
    { tag: 'MILESTONE · M9',  text: '10 firms · $100K ARR' },
    { tag: 'MILESTONE · M15', text: '$500K ARR · City beta' },
    { tag: 'MILESTONE · M18', text: 'Path to $1M ARR · Series A ready' },
    { tag: 'RUNWAY',          text: '18 months with buffer' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="14 · Ask" label="The Ask" tone="dark" noChrome>
      <div style={{ position: 'absolute', inset: 0, padding: '100px 120px 90px' }}>
        <div className="chrome-top">
          <div className="chrome-label"><span className="dot" />14 · THE ASK</div>
          <div className="rule" data-reveal style={{ '--reveal-delay': '200ms' }} />
          <div className="chrome-num">14 <span style={{ opacity: 0.45 }}>/ 15</span></div>
        </div>

        {/* Hero amount */}
        <div style={{ marginTop: 80 }}>
          <div className="mono" data-reveal style={{ fontSize: 14, letterSpacing: '0.3em', color: 'var(--amber)', marginBottom: 20 }}>
            RAISING A SEED FOR EIGHTEEN MONTHS OF RUNWAY
          </div>

          <div className="serif" style={{ fontSize: 240, lineHeight: 0.9, letterSpacing: '-0.04em', fontStyle: 'italic', color: 'var(--bone)' }}>
            <span data-reveal style={{ '--reveal-delay': '300ms', '--reveal-y': '60px' }}>$2M</span>
          </div>

          <div data-reveal style={{ '--reveal-delay': '700ms', fontSize: 28, marginTop: 24, color: 'var(--bone-2)', fontWeight: 300 }}>
            SAFE · <span style={{ color: 'var(--amber)' }}>$10M post-money</span>
          </div>

          <div className="mono" data-reveal style={{ '--reveal-delay': '800ms', fontSize: 11, letterSpacing: 2, opacity: 0.5, marginTop: 8 }}>
            MEDIAN SEED VALUATION · AI SAAS 2025 · $14–17M · WE ARE DELIBERATELY FOUNDER-FRIENDLY
          </div>

          <div data-reveal style={{ '--reveal-delay': '1000ms', fontSize: 22, marginTop: 28, color: 'var(--bone-2)', fontWeight: 300, maxWidth: 900, lineHeight: 1.5 }}>
            Sized for three founders, two senior engineers, and a design-partner budget that carries us to 25 paying firms, $500K ARR, and the first city pilot — with three months of buffer.
          </div>
        </div>

        {/* Two-column lower section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(242,237,228,0.12)' }}>

          {/* Use of funds bars */}
          <div>
            <div className="mono" data-reveal style={{ '--reveal-delay': '1300ms', fontSize: 12, letterSpacing: '0.3em', color: 'var(--amber)', marginBottom: 24 }}>
              USE OF FUNDS
            </div>
            {funds.map(({ label, pct, delay }) => (
              <div key={label} data-reveal style={{ '--reveal-delay': `${delay}ms`, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ fontSize: 15, color: 'var(--bone-2)', fontWeight: 300 }}>{label}</div>
                  <div className="mono" style={{ fontSize: 13, color: 'var(--amber)', opacity: 0.8 }}>{pct}%</div>
                </div>
                <div style={{ height: 4, background: 'rgba(242,237,228,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                  <div
                    className="bar-with"
                    style={{ '--bar-w': `${pct}%`, '--bar-delay': `${delay}ms`, height: '100%', background: 'var(--amber)', borderRadius: 2 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Milestones */}
          <div>
            <div className="mono" data-reveal style={{ '--reveal-delay': '1300ms', fontSize: 12, letterSpacing: '0.3em', color: 'var(--amber)', marginBottom: 24 }}>
              THIS GETS US TO
            </div>
            {milestones.map(({ tag, text }, i) => (
              <div key={tag} data-reveal style={{ '--reveal-delay': `${1400 + i * 150}ms`, display: 'flex', gap: 20, padding: '12px 0', borderBottom: '1px solid rgba(242,237,228,0.08)' }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: 1.5, color: 'var(--amber)', opacity: 0.7, minWidth: 140, paddingTop: 3 }}>{tag}</div>
                <div style={{ fontSize: 18, color: 'var(--bone)', fontWeight: 400 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 15 THANK YOU / CONTACT ============ */
function SlideThanks({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="15 · Contact" label="Thank You" tone="dark" noChrome>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div className="chrome-top">
          <div className="chrome-label"><span className="dot" />15 · THANK YOU</div>
          <div className="rule" data-reveal style={{ '--reveal-delay': '200ms' }} />
          <div className="chrome-num">15 <span style={{ opacity: 0.45 }}>/ 15</span></div>
        </div>

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 40, padding: '0 120px',
        }}>
          <div data-reveal style={{ '--reveal-delay': '200ms' }}>
            <Logomark size={72} />
          </div>
          <div className="serif" data-reveal style={{ fontSize: 220, lineHeight: 0.95, letterSpacing: '-0.04em', fontStyle: 'italic', textAlign: 'center', '--reveal-delay': '500ms', '--reveal-y': '60px', padding: '0 40px' }}>
            Let's build.
          </div>
          <div data-reveal style={{ '--reveal-delay': '1200ms', fontSize: 28, color: 'var(--bone-2)', textAlign: 'center', maxWidth: 1100, fontWeight: 300 }}>
            Code checking should be a{' '}
            <span style={{ fontWeight: 600 }}>background process</span>,<br/>
            not a <span style={{ fontStyle: 'italic' }}>permit-ending</span> event.
          </div>

          <div data-reveal style={{ '--reveal-delay': '1600ms', display: 'flex', gap: 64, marginTop: 24 }}>
            <ContactBlock label="EMAIL" value="joe@cuniform.tech" />
            <ContactBlock label="DEMO" value="cuniform.tech/demo" />
            <ContactBlock label="DECK" value="cuniform.tech/2026" />
          </div>
        </div>

        <ChromeBottom left="© Cuniform Tech 2026" right="Confidential" />
      </div>
    </Slide>
  );
}

function ContactBlock({ label, value }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="mono" style={{ fontSize: 12, letterSpacing: '0.3em', color: 'var(--amber)', marginBottom: 14 }}>
        {label}
      </div>
      <div className="serif" style={{ fontSize: 36, fontStyle: 'italic', color: 'var(--bone)', letterSpacing: '-0.01em' }}>
        {value}
      </div>
    </div>
  );
}

Object.assign(window, {
  SlideTraction, SlideTeam, SlideRoadmap, SlideGoToMarket, SlideAsk, SlideThanks,
});
