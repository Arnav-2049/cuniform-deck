/* ──────────────────────────────────────────────────────────────
   Slides 11–14: Traction, Team, Roadmap, Ask, Thank-you
   ────────────────────────────────────────────────────────────── */

/* ============ 11 TRACTION / DESIGN PARTNERS ============ */
function SlideTraction({ index }) {
  const partners = [
    { name: 'RAMSA', kind: 'Boutique Architecture', stage: 'MOU Signed' },
    { name: 'East Horizon', kind: 'Mid-market Firm', stage: 'Pilot · Q2' },
    { name: 'Studio Nord', kind: 'Civic Practice', stage: 'LOI' },
    { name: 'MeridianDT', kind: 'Digital Twin Consultancy', stage: 'Integration Partner' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="10 · Traction" label="Design Partners" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '140px 120px 120px', display: 'flex', flexDirection: 'column' }}>
        {/* Eyebrow */}
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 28 }}>
          TRACTION · DESIGN PARTNERS
        </div>

        {/* Title */}
        <div className="serif" style={{ fontSize: 96, lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: 1400 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Four firms</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms', color: 'var(--amber)' }}>already building with us.</span>
        </div>

        {/* Partner rows — horizontal strips, clearer than dense cards */}
        <div style={{ marginTop: 72, borderTop: '1px solid rgba(242,237,228,0.14)' }}>
          {partners.map((p, i) => (
            <div
              key={p.name}
              data-reveal
              style={{
                '--reveal-delay': `${900 + i * 140}ms`,
                '--reveal-y': '24px',
                display: 'grid',
                gridTemplateColumns: '60px 1.4fr 1.2fr auto',
                alignItems: 'center',
                gap: 40,
                padding: '28px 0',
                borderBottom: '1px solid rgba(242,237,228,0.14)',
              }}
            >
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.28em', color: 'var(--amber)', opacity: 0.85 }}>
                / {String(i + 1).padStart(2, '0')}
              </div>
              <div className="serif" style={{ fontSize: 48, lineHeight: 1, letterSpacing: '-0.015em' }}>
                {p.name}
              </div>
              <div style={{ fontSize: 20, color: 'var(--bone-2)', opacity: 0.65, fontWeight: 300 }}>
                {p.kind}
              </div>
              <div className="mono" style={{
                fontSize: 12, letterSpacing: '0.2em', color: 'var(--amber)',
                border: '1px solid rgba(220,38,38,0.4)',
                padding: '8px 14px', whiteSpace: 'nowrap',
              }}>
                {p.stage}
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip — pushed to bottom */}
        <div style={{ marginTop: 'auto', paddingTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 60, borderTop: '2px solid rgba(242,237,228,0.18)' }}>
          <TractionStat value="180+" label="Waitlist signups · 90 days" delay={1700} />
          <TractionStat value="62" label="Firms in validation interviews" delay={1900} />
          <TractionStat value="90%" label="MVP complete · 30 days to GA" delay={2100} />
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
      <div style={{ position: 'absolute', inset: 0, padding: '140px 120px 110px' }}>
        <div className="serif" style={{ fontSize: 84, lineHeight: 1.0, letterSpacing: '-0.02em', fontStyle: 'italic', marginBottom: 14 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>An architect, an ML engineer,</span>
          <br/>
          <span data-wipe style={{ '--reveal-delay': '500ms', color: 'var(--amber)' }}>and an enterprise designer.</span>
        </div>
        <div data-reveal style={{ '--reveal-delay': '900ms', fontSize: 22, color: 'var(--bone-2)', opacity: 0.75, maxWidth: 1100, fontWeight: 300 }}>
          The <span style={{ color: 'var(--amber)', fontWeight: 500 }}>three disciplines</span> you need to ship{' '}
          <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--bone)' }}>trustworthy</span>{' '}
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
                width: '70%', aspectRatio: '1', marginBottom: 24,
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

/* ============ 14 ASK ============ */
function SlideAsk({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="13 · Ask" label="The Ask" tone="dark" noChrome>
      {/* Big type ask */}
      <div style={{ position: 'absolute', inset: 0, padding: '100px 120px 90px' }}>
        <div className="chrome-top">
          <div className="chrome-label">
            <span className="dot" />
            13 · THE ASK
          </div>
          <div className="rule" data-reveal style={{ '--reveal-delay': '200ms' }} />
          <div className="chrome-num">13 <span style={{ opacity: 0.45 }}>/ 14</span></div>
        </div>

        <div style={{ marginTop: 80 }}>
          <div className="mono" data-reveal style={{ fontSize: 14, letterSpacing: '0.3em', color: 'var(--amber)', marginBottom: 20 }}>
            RAISING
          </div>

          <div className="serif" style={{ fontSize: 240, lineHeight: 0.9, letterSpacing: '-0.04em', fontStyle: 'italic', color: 'var(--bone)' }}>
            <span data-reveal style={{ '--reveal-delay': '300ms', '--reveal-y': '60px' }}>$1M</span>
          </div>

          <div data-reveal style={{ '--reveal-delay': '1000ms', fontSize: 32, marginTop: 28, color: 'var(--bone-2)', fontWeight: 300 }}>
            SAFE · <span style={{ color: 'var(--amber)' }}>$5M post-money cap</span> · Targeting close by <span className="serif" style={{ fontStyle: 'italic' }}>end of Q2</span>.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 64, marginTop: 60, paddingTop: 32, borderTop: '1px solid rgba(242,237,228,0.15)' }}>
          {[
            { label: 'USE OF FUNDS', rows: [['50%', 'Engineering'], ['30%', 'Go-to-market'], ['20%', 'Ops & legal']] },
            { label: 'BUYS US', rows: [['18 mo', 'Runway'], ['$1M', 'ARR by month 18'], ['Series A', 'At $3M ARR']] },
            { label: 'RESERVED', rows: [['$200K', 'Strategic angel'], ['Open', 'Lead · $500K'], ['Q1', 'First close']] },
          ].map((col, i) => (
            <div key={col.label} data-reveal style={{ '--reveal-delay': `${1300 + i * 200}ms` }}>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.3em', color: 'var(--amber)', marginBottom: 18 }}>
                {col.label}
              </div>
              {col.rows.map(([k, v]) => (
                <div key={k + v} style={{ display: 'flex', gap: 20, padding: '8px 0', borderBottom: '1px solid rgba(242,237,228,0.08)' }}>
                  <div className="serif" style={{ fontSize: 24, fontStyle: 'italic', color: 'var(--bone)', minWidth: 90, letterSpacing: '-0.01em' }}>{k}</div>
                  <div style={{ fontSize: 18, color: 'var(--bone-2)', opacity: 0.75, alignSelf: 'center' }}>{v}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ============ 15 THANK YOU / CONTACT ============ */
function SlideThanks({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="14 · Contact" label="Thank You" tone="dark" noChrome>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Ambient drift */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '-50%', left: 0, right: 0,
            animation: 'slowDrift 90s linear infinite',
            fontFamily: 'JetBrains Mono', fontSize: 14, letterSpacing: '0.18em',
            lineHeight: 2.4, whiteSpace: 'pre', color: 'var(--bone)',
          }}>
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i}>{`· BUILT FOR ARCHITECTS · REAL-TIME · CITED · VERIFIED `.repeat(3)}</div>
            ))}
          </div>
        </div>

        <div className="chrome-top">
          <div className="chrome-label"><span className="dot" />14 · THANK YOU</div>
          <div className="rule" data-reveal style={{ '--reveal-delay': '200ms' }} />
          <div className="chrome-num">14 <span style={{ opacity: 0.45 }}>/ 14</span></div>
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
            <span style={{ color: 'var(--amber)', fontWeight: 500 }}>background process</span>,<br/>
            not a <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--bone)' }}>permit-ending</span> event.
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
  SlideTraction, SlideTeam, SlideRoadmap, SlideAsk, SlideThanks,
});
