/* Unique SVG/CSS background layers for each section */

/* ── 1. STATS — Trading Terminal ──────────────────────────────── */
export function BgTradingChart() {
  const candles = [
    [120,155,18],[260,138,20],[400,118,22],[540,96,18],[680,76,20],
    [820,58,22],[960,42,18],[1100,28,20],[1260,16,18],[1380,8,16],
  ]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Horizontal price grid */}
      <div style={{
        position:'absolute',inset:0,
        backgroundImage:[
          'linear-gradient(rgba(1,112,185,0.10) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(1,112,185,0.05) 1px, transparent 1px)',
        ].join(','),
        backgroundSize:'100% 25%, 10% 100%',
      }}/>
      {/* Trend lines + candlesticks */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lg-orange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#DA5B15" stopOpacity="0"/>
            <stop offset="10%" stopColor="#DA5B15" stopOpacity="0.40"/>
            <stop offset="90%" stopColor="#DA5B15" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#DA5B15" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="lg-blue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0170b9" stopOpacity="0"/>
            <stop offset="20%" stopColor="#0170b9" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#0170b9" stopOpacity="0.08"/>
          </linearGradient>
          <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DA5B15" stopOpacity="0.14"/>
            <stop offset="100%" stopColor="#DA5B15" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path d="M0 185 C180 175 360 155 560 125 S860 78 1020 58 L1180 36 1440 10 L1440 200 L0 200 Z"
              fill="url(#area-fill)"/>
        {/* Main orange trend */}
        <path d="M0 185 C180 175 360 155 560 125 S860 78 1020 58 L1180 36 1440 10"
              stroke="url(#lg-orange)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Secondary blue */}
        <path d="M0 198 C300 190 600 175 900 160 S1200 145 1440 130"
              stroke="url(#lg-blue)" strokeWidth="1.5" fill="none" strokeDasharray="12 6" strokeLinecap="round"/>
        {/* Candlesticks */}
        {candles.map(([x, y, h], i) => (
          <g key={x} opacity={i % 2 ? 0.55 : 0.45}>
            <line x1={x} y1={y-h*0.5} x2={x} y2={y-h*0.2} stroke={i%3?'#DA5B15':'#0170b9'} strokeWidth="1.2"/>
            <rect x={x-3} y={y-h*0.2} width="6" height={h} fill={i%3?'#DA5B15':'#0170b9'} rx="1.5"/>
            <line x1={x} y1={y+h*0.8} x2={x} y2={y+h*1.1} stroke={i%3?'#DA5B15':'#0170b9'} strokeWidth="1.2"/>
          </g>
        ))}
      </svg>
      {/* Large faded year watermark */}
      <div style={{
        position:'absolute',right:'-1%',top:'50%',transform:'translateY(-55%)',
        fontSize:'35vw',fontWeight:900,lineHeight:1,letterSpacing:'-0.04em',
        color:'rgba(218,91,21,0.04)',fontFamily:'Inter,sans-serif',userSelect:'none',
      }}>27</div>
    </div>
  )
}

/* ── 2. TEAM — Professional Network Graph ─────────────────────── */
export function BgNetwork() {
  const R = 6, C = 8
  const nodes = Array.from({length: R*C}, (_,i) => {
    const r=Math.floor(i/C), c=i%C
    return { id:i, x: 3+c*13.5+(r%2)*6.5, y: 4+r*18 }
  })
  const edges = []
  for (let r=0;r<R;r++) for (let c=0;c<C;c++) {
    const i=r*C+c
    if(c<C-1) edges.push([i,i+1])
    if(r<R-1) edges.push([i,i+C])
    if(r<R-1&&r%2===0&&c<C-1) edges.push([i,i+C+1])
    if(r<R-1&&r%2===1&&c>0) edges.push([i,i+C-1])
  }
  const accent = new Set([2,9,16,22,30,37,44])
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
         viewBox="0 0 100 115" preserveAspectRatio="xMidYMid slice">
      {edges.map(([a,b],i)=>(
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke={i%5===0?'rgba(218,91,21,0.18)':i%7===0?'rgba(1,112,185,0.14)':'rgba(255,255,255,0.05)'}
          strokeWidth={i%5===0?'0.4':'0.25'}
        />
      ))}
      {nodes.map((n,i)=>(
        <g key={i}>
          {accent.has(i) && <circle cx={n.x} cy={n.y} r="2.8" fill="rgba(218,91,21,0.08)"/>}
          <circle cx={n.x} cy={n.y}
            r={accent.has(i)?1.4:i%4===0?0.9:0.6}
            fill={accent.has(i)?'rgba(218,91,21,0.55)':i%4===0?'rgba(1,112,185,0.40)':'rgba(255,255,255,0.18)'}
          />
        </g>
      ))}
    </svg>
  )
}

/* ── 3. SERVICES — Circuit Board ─────────────────────────────── */
export function BgCircuit() {
  const traces = [
    "M0,15 H30 V30 H55 V15 H80 V30 H100",
    "M0,50 H20 V38 H45 V50 H65 V38 H88 V50 H100",
    "M0,70 H15 V82 H40 V70 H60 V82 H85 V70 H100",
    "M10,0 V15","M10,30 V50","M10,50 V70","M10,82 V100",
    "M30,0 V15","M30,30 V38",
    "M45,38 V50","M45,50 V70",
    "M55,0 V15","M55,30 V38",
    "M65,50 V70","M65,38 V50",
    "M80,0 V15","M80,30 V38",
    "M88,50 V70","M85,82 V100",
    "M40,70 V82","M60,70 V82","M40,82 V100","M60,82 V100",
  ]
  const vias = [
    [30,15],[55,15],[80,15],[10,15],[20,38],[45,38],[65,38],[88,38],
    [20,50],[45,50],[65,50],[88,50],[15,70],[40,70],[60,70],[85,70],
    [15,82],[40,82],[60,82],[85,82],[10,30],[10,50],[10,70],
  ]
  const hot = new Set([0,3,8,14,19])
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
         viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {traces.map((d,i)=>(
        <path key={i} d={d} fill="none"
          stroke={hot.has(i)?'rgba(218,91,21,0.28)':'rgba(1,112,185,0.14)'}
          strokeWidth={hot.has(i)?'0.7':'0.45'}
        />
      ))}
      {vias.map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r="1.8"
            fill="none"
            stroke={i%5===0?'rgba(218,91,21,0.35)':'rgba(1,112,185,0.22)'}
            strokeWidth="0.5"
          />
          <circle cx={x} cy={y} r="0.7"
            fill={i%5===0?'rgba(218,91,21,0.40)':'rgba(1,112,185,0.28)'}
          />
        </g>
      ))}
    </svg>
  )
}

/* ── 4. OFFICES — Concentric Geographic Rings ────────────────── */
export function BgGeoRings() {
  const rings = [
    "M50,50 C80,38 95,55 85,72 C75,88 52,90 35,80 C18,70 12,50 22,35 C32,20 38,18 50,50Z",
    "M50,50 C85,32 105,52 92,75 C80,96 52,100 28,87 C5,74 2,48 15,30 C28,12 30,8 50,50Z",
    "M50,50 C90,25 115,48 98,78 C85,105 52,110 22,95 C-8,80 -8,45 8,24 C24,3 22,-2 50,50Z",
    "M50,50 C95,18 126,44 105,82 C90,114 52,120 16,102 C-20,85 -18,42 1,18 C20,-6 14,-12 50,50Z",
    "M50,50 C100,10 136,40 112,86 C95,122 52,130 10,110 C-32,90 -28,38 -6,12 C16,-14 5,-20 50,50Z",
  ]
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
         viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {rings.map((d,i)=>(
        <path key={i} d={d} fill="none"
          stroke={`rgba(1,112,185,${0.10-i*0.016})`}
          strokeWidth={0.5-i*0.06}
          strokeDasharray={i%2?'2 3':'none'}
        />
      ))}
      <circle cx="50" cy="50" r="2" fill="rgba(218,91,21,0.3)"/>
      <circle cx="50" cy="50" r="5" fill="none" stroke="rgba(218,91,21,0.15)" strokeWidth="0.5"/>
    </svg>
  )
}

/* ── 5. TIMELINE — Historical Growth Bars ────────────────────── */
export function BgHistory() {
  const years = Array.from({length:27},(_,i)=>i)
  const heights = [8,10,9,12,14,13,16,18,17,20,22,21,24,26,28,27,30,33,35,38,40,44,48,52,56,62,70]
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
         viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DA5B15" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#DA5B15" stopOpacity="0.04"/>
        </linearGradient>
      </defs>
      {years.map((y,i)=>{
        const h=heights[i], x=i*(100/27), w=(100/27)*0.7
        return(
          <rect key={i} x={x+w*0.15} y={100-h} width={w} height={h}
            fill="url(#bar-grad)" rx="0.5"/>
        )
      })}
      {/* Trend overlay line */}
      <polyline
        points={years.map((y,i)=>`${i*(100/27)+1.7},${100-heights[i]}`).join(' ')}
        fill="none" stroke="rgba(218,91,21,0.30)" strokeWidth="0.6" strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── 6. CONTACT — Signal Waves ───────────────────────────────── */
export function BgSignal() {
  const arcs = [12,24,36,48,60,72,84,96,108,120]
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
         viewBox="0 0 200 120" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0170b9" stopOpacity="0"/>
          <stop offset="30%" stopColor="#0170b9" stopOpacity="0.22"/>
          <stop offset="70%" stopColor="#0170b9" stopOpacity="0.22"/>
          <stop offset="100%" stopColor="#0170b9" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {arcs.map((r,i)=>(
        <ellipse key={i}
          cx="100" cy="120" rx={r*1.6} ry={r*0.7}
          fill="none"
          stroke={i%3===0?'rgba(218,91,21,0.18)':'rgba(1,112,185,0.12)'}
          strokeWidth={i===0?1:0.5}
          opacity={1-i*0.08}
          strokeDasharray={i%2?'3 4':undefined}
        />
      ))}
      {/* Center dot */}
      <circle cx="100" cy="120" r="3" fill="rgba(218,91,21,0.5)"/>
      <circle cx="100" cy="120" r="6" fill="none" stroke="rgba(218,91,21,0.25)" strokeWidth="0.8"/>
    </svg>
  )
}
