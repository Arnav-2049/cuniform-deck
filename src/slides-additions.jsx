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

        <div data-reveal style={{
          marginTop: 36, fontSize: 22, lineHeight: 1.5, color: 'var(--bone-2)',
          maxWidth: 1300, fontStyle: 'italic', fontWeight: 300, opacity: 0.75,
          '--reveal-delay': '900ms',
        }}>
          * The full <span className="serif" style={{ fontStyle: 'italic' }}>12 → 2</span> compression is the three-phase moonshot.
          Phase 1 — what we are raising to build — compresses{' '}
          <span style={{ color: 'var(--amber)', fontWeight: 500, fontStyle: 'normal' }}>12 → 10 months</span>{' '}
          for the architect alone.
        </div>

        <div style={{
          marginTop: 'auto', paddingTop: 56,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, maxWidth: 1620,
        }}>
          <div data-reveal style={{ '--reveal-delay': '1100ms' }}>
            <div style={{ width: 56, height: 2, background: 'var(--bone)', marginBottom: 18 }} />
            <div style={{ fontSize: 28, lineHeight: 1.45, color: 'var(--bone)', fontWeight: 300 }}>
              We are an <span className="serif" style={{ fontStyle: 'italic' }}>AI second-reader</span> that lives inside the 3D modeling software every architect already uses. It checks the building against the code{' '}
              <span style={{ color: 'var(--amber)', fontWeight: 500 }}>as the building is drawn</span> — and flags violations in real time, with citations.
            </div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '1300ms' }}>
            <div style={{ width: 56, height: 2, background: 'var(--amber)', marginBottom: 18 }} />
            <div style={{ fontSize: 28, lineHeight: 1.45, color: 'var(--bone)', fontWeight: 300 }}>
              The value is not just compliance. It is{' '}
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--amber)' }}>time</span>. Every month we remove from pre-construction is{' '}
              <span style={{ color: 'var(--amber)', fontWeight: 500 }}>millions of dollars</span>{' '}
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
  return (
    <Slide index={index} total={TOTAL} section="04 · Insight" label="The Insight" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '170px 120px 130px', display: 'flex', flexDirection: 'column' }}>
        <div className="serif" data-reveal style={{
          fontSize: 24, fontStyle: 'italic', color: 'var(--amber)',
          marginBottom: 28, '--reveal-delay': '100ms',
        }}>
          An observation from forty interviews —
        </div>

        <h2 className="serif" style={{
          fontSize: 108, lineHeight: 1.02, letterSpacing: '-0.02em',
          fontStyle: 'italic', fontWeight: 400, margin: 0, color: 'var(--bone)', maxWidth: 1620,
        }}>
          <span data-wipe style={{ '--reveal-delay': '300ms' }}>Both sides of the hand-off</span><br/>
          <span data-wipe style={{ '--reveal-delay': '700ms' }}>
            are <span style={{ color: 'var(--amber)' }}>losing time.</span>
          </span>
        </h2>

        <div style={{
          marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 40, maxWidth: 1620,
        }}>
          {/* Architect side card */}
          <div data-reveal style={{
            border: '1px solid rgba(242,237,228,0.18)', padding: 36,
            background: 'rgba(255,255,255,0.02)', '--reveal-delay': '1000ms',
          }}>
            <div className="mono" style={{
              fontSize: 13, letterSpacing: '0.3em', color: 'var(--amber)', fontWeight: 700,
            }}>ARCHITECT SIDE</div>
            <div className="serif" style={{
              fontSize: 42, fontStyle: 'italic', color: 'var(--bone)', marginTop: 14, lineHeight: 1.1,
            }}>Work exported, re-imported.</div>
            <div style={{ width: 40, height: 1, background: 'var(--bone-2)', opacity: 0.4, margin: '20px 0' }} />
            <div style={{ fontSize: 22, lineHeight: 1.55, color: 'var(--bone)', fontWeight: 300 }}>
              A competent architect can read the code. What no human can do is hold{' '}
              <span style={{ color: 'var(--amber)', fontWeight: 500 }}>ten thousand conditional rules</span>{' '}
              in their head while drawing. So the work is exported to a consultant, then re-imported as a markup, then redrawn.
              <br/><br/>
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Each translation costs weeks.</span>
            </div>
          </div>

          {/* City side card */}
          <div data-reveal style={{
            border: '1px solid rgba(242,237,228,0.18)', padding: 36,
            background: 'rgba(220,38,38,0.05)', '--reveal-delay': '1250ms',
          }}>
            <div className="mono" style={{
              fontSize: 13, letterSpacing: '0.3em', color: 'var(--amber)', fontWeight: 700,
            }}>CITY SIDE</div>
            <div className="serif" style={{
              fontSize: 42, fontStyle: 'italic', color: 'var(--bone)', marginTop: 14, lineHeight: 1.1,
            }}>Understaffed. Over-backlogged.</div>
            <div style={{ width: 40, height: 1, background: 'var(--bone-2)', opacity: 0.4, margin: '20px 0' }} />
            <div style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 20, rowGap: 14, alignItems: 'baseline',
            }}>
              <div className="serif" style={{ fontSize: 40, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 1 }}>10+ mo</div>
              <div style={{ fontSize: 19, color: 'var(--bone)', lineHeight: 1.3, fontWeight: 300 }}>
                permit backlogs in <span style={{ color: 'var(--bone-2)' }}>Florida, Southern California, major East Coast metros.</span>
              </div>
              <div className="serif" style={{ fontSize: 40, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 1 }}>↓ staff</div>
              <div style={{ fontSize: 19, color: 'var(--bone)', lineHeight: 1.3, fontWeight: 300 }}>
                senior plans examiners <span style={{ color: 'var(--amber)', fontWeight: 500 }}>retiring</span>; hiring has not kept pace.
              </div>
              <div className="serif" style={{ fontSize: 40, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 1 }}>3–4×</div>
              <div style={{ fontSize: 19, color: 'var(--bone)', lineHeight: 1.3, fontWeight: 300 }}>
                every re-submission consumes a new reviewer slot. <span className="serif" style={{ fontStyle: 'italic' }}>The backlog is the re-work.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis ribbon */}
        <div data-reveal style={{
          marginTop: 40, paddingTop: 22, borderTop: '2px solid var(--bone)',
          display: 'flex', alignItems: 'center', gap: 28, '--reveal-delay': '1600ms',
        }}>
          <div className="mono" style={{
            fontSize: 13, letterSpacing: '0.3em', color: 'var(--amber)',
            fontWeight: 700, whiteSpace: 'nowrap',
          }}>THE INSIGHT</div>
          <div className="serif" style={{ fontSize: 30, fontStyle: 'italic', color: 'var(--bone)', lineHeight: 1.35 }}>
            If we can synchronize the two sides, <span style={{ color: 'var(--amber)' }}>both will pay.</span>{' '}
            Architects pay for seats; cities pay to clear the backlog.
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
              The architect is the <span className="serif" style={{ fontStyle: 'italic' }}>top of the funnel</span>.
              Every firm that adopts Cuniform gives us{' '}
              <span style={{ color: 'var(--amber)', fontWeight: 500 }}>the data a city would pay for</span> —
              and every integrated city gives developers a shortcut{' '}
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--amber)' }}>only Cuniform can sell.</span>
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
  const competitors = [
    { name: 'UpCodes',       raised: '$33.5M', stance: 'Code search + reference', workflow: 'Web app · reads code only',     adoption: 'Separate browser tool', why: 'Reads the rule book; never sees the model.' },
    { name: 'CodeComply.Ai', raised: '$2.0M',  stance: 'PDF plan review',         workflow: 'Upload drawings after-the-fact', adoption: 'Post-design audit',     why: 'Reviews the paper, not the pencil.' },
    { name: 'Permitify',     raised: '$500K',  stance: 'City-side permit portal', workflow: 'Municipal workflow tool',         adoption: 'Sells to cities',       why: 'Good for clerks; invisible to architects.' },
    { name: 'Cuniform',      raised: '—',      stance: 'Real-time second reader', workflow: 'Inside the 3D design canvas',     adoption: 'Zero-friction plug-in', why: 'Assist, not just review. Pencil, not paper.', us: true },
  ];
  return (
    <Slide index={index} total={TOTAL} section="11 · Competition" label="Competition" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '150px 120px 110px', display: 'flex', flexDirection: 'column' }}>
        <h2 className="serif" style={{
          fontSize: 76, lineHeight: 1.02, letterSpacing: '-0.02em',
          fontWeight: 400, margin: 0, color: 'var(--bone)', maxWidth: 1620,
        }}>
          <span data-wipe style={{ '--reveal-delay': '100ms' }}>A category of three —</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms' }}>
            none <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>inside the canvas.</span>
          </span>
        </h2>

        <div style={{ marginTop: 36 }}>
          <div data-reveal style={{ '--reveal-delay': '900ms' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1.1fr 0.7fr 1.1fr 1.1fr 1.1fr 1.4fr',
              columnGap: 18, padding: '14px 0',
              borderTop: '2px solid var(--bone)', borderBottom: '1px solid rgba(242,237,228,0.3)',
              fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase',
              color: 'var(--bone)', fontWeight: 700,
            }}>
              <span>Company</span><span>Raised</span><span>Stance</span><span>Workflow</span><span>Adoption</span><span>The limit</span>
            </div>
          </div>

          {competitors.map((c, i) => (
            <div key={c.name} data-reveal style={{ '--reveal-delay': `${1100 + i * 160}ms` }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1.1fr 0.7fr 1.1fr 1.1fr 1.1fr 1.4fr',
                columnGap: 18, padding: c.us ? '16px 22px' : '14px 0',
                borderBottom: '1px solid rgba(242,237,228,0.14)',
                alignItems: 'baseline',
                background: c.us ? 'var(--amber)' : 'transparent',
                color: c.us ? '#0A0A0A' : 'var(--bone)',
                margin: c.us ? '0 -22px' : 0,
              }}>
                <div>
                  <div className="serif" style={{
                    fontSize: 26, fontStyle: c.us ? 'italic' : 'normal',
                    color: c.us ? '#0A0A0A' : 'var(--bone)', lineHeight: 1,
                  }}>{c.name}</div>
                  {c.us && <div className="mono" style={{
                    fontSize: 10, letterSpacing: '0.3em', color: '#0A0A0A',
                    opacity: 0.8, fontWeight: 700, marginTop: 3,
                  }}>US</div>}
                </div>
                <div className="serif" style={{
                  fontSize: 19, fontStyle: 'italic',
                  color: c.us ? '#0A0A0A' : 'var(--bone-2)', opacity: c.us ? 0.85 : 0.7,
                }}>{c.raised}</div>
                <div style={{ fontSize: 17, lineHeight: 1.3, fontWeight: 300 }}>{c.stance}</div>
                <div style={{ fontSize: 17, lineHeight: 1.3, fontWeight: 300 }}>{c.workflow}</div>
                <div style={{ fontSize: 17, lineHeight: 1.3, fontWeight: 300 }}>{c.adoption}</div>
                <div className="serif" style={{
                  fontSize: 17, fontStyle: 'italic', lineHeight: 1.3,
                  color: c.us ? '#0A0A0A' : 'var(--bone-2)',
                }}>{c.why}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiator strip — condensed to a single line of three claims */}
        <div data-reveal style={{
          marginTop: 'auto', paddingTop: 28,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
          borderTop: '1px solid rgba(242,237,228,0.22)',
          '--reveal-delay': '1900ms',
        }}>
          <DiffCardAdd
            k="Ease of adoption"
            v={<>Integrated <span className="serif" style={{ fontStyle: 'italic' }}>in the pen</span>, not the paper.</>}
          />
          <DiffCardAdd red
            k="Assist, not review"
            v={<>GitHub Copilot, <span className="serif" style={{ fontStyle: 'italic' }}>not code-review.</span></>}
          />
          <DiffCardAdd
            k="Cited, not opaque"
            v={<>Every flag links to the <span style={{ color: 'var(--amber)', fontWeight: 500 }}>code line.</span></>}
          />
        </div>
      </div>
    </Slide>
  );
}
function DiffCardAdd({ k, v, red = false }) {
  return (
    <div style={{ paddingTop: 4 }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase',
        color: red ? 'var(--amber)' : 'var(--bone-2)', fontWeight: 700,
      }}>{k}</div>
      <div style={{
        fontSize: 24, color: 'var(--bone)', marginTop: 10, lineHeight: 1.25, fontWeight: 300,
      }}>{v}</div>
    </div>
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
    { n: 'i',   t: 'The code has thickened.',           d: <>Building codes and state overlays have <span style={{ color: 'var(--amber)', fontWeight: 500 }}>quadrupled in volume</span> since 1990. <span className="serif" style={{ fontStyle: 'italic' }}>No unaided human</span> holds it all.</>, Icon: WhyThick },
    { n: 'ii',  t: 'BIM has won.',                      d: <>3D modeling is the <span className="serif" style={{ fontStyle: 'italic' }}>lingua franca</span> of mid-market architecture. A single integration surface reaches <span style={{ color: 'var(--amber)', fontWeight: 500 }}>80% of US firms</span>.</>, Icon: WhyBIM },
    { n: 'iii', t: 'Reasoning AI crossed the line.',    d: <>What was a demo three years ago is <span style={{ color: 'var(--amber)', fontWeight: 500 }}>production-grade</span> for structured, cited reasoning. Compliance is the <span className="serif" style={{ fontStyle: 'italic' }}>ideal first workload</span>.</>, Icon: WhyAI },
    { n: 'iv',  t: 'Consultants are retiring.',         d: <>Code consultants <span style={{ color: 'var(--amber)', fontWeight: 500 }}>retire faster than they are replaced</span>. A succession problem we convert into a <span className="serif" style={{ fontStyle: 'italic' }}>software problem</span>.</>, Icon: WhyRetire },
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
