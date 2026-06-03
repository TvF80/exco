import { motion } from 'framer-motion'

const regions = [
  { name: 'Francja', offices: 80, flag: '🇫🇷', x: 22, y: 48 },
  { name: 'Polska', offices: 6, flag: '🇵🇱', x: 52, y: 35, isUs: true },
  { name: 'Niemcy', offices: 12, flag: '🇩🇪', x: 42, y: 40 },
  { name: 'Belgia', offices: 5, flag: '🇧🇪', x: 28, y: 43 },
  { name: 'Szwajcaria', offices: 4, flag: '🇨🇭', x: 38, y: 52 },
  { name: 'Włochy', offices: 8, flag: '🇮🇹', x: 42, y: 60 },
  { name: 'Maroko', offices: 3, flag: '🇲🇦', x: 22, y: 75 },
  { name: 'Tunezja', offices: 2, flag: '🇹🇳', x: 38, y: 75 },
]

export default function GlobalNetwork() {
  return (
    <section
      className="py-24 text-white"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1B3A6B 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-4">
              Globalny zasięg
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Część największej europejskiej sieci doradczej
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              EXCO Group to szósta największa francuska sieć doradcza, obecna w 18 krajach przez 140 biur.
              Jako EXCO A2A Polska jesteśmy Waszym oknem na tę globalną wiedzę i sieć kontaktów.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '140', label: 'biur globalnie' },
                { value: '18', label: 'krajów' },
                { value: '167M €', label: 'obrót roczny' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-xs text-white/50">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {regions.map((r) => (
                <motion.div
                  key={r.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: r.isUs ? '#E8362A' : 'rgba(255,255,255,0.08)',
                    border: r.isUs ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <span>{r.flag}</span>
                  <span className={r.isUs ? 'font-semibold' : 'text-white/80'}>{r.name}</span>
                  <span className="text-white/40 text-xs">{r.offices}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual representation */}
          <div
            className="relative rounded-3xl overflow-hidden h-80"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {/* Connection lines and dots */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {/* Connection lines from Poland */}
              {regions
                .filter((r) => !r.isUs)
                .map((r) => {
                  const poland = regions.find((rr) => rr.isUs)
                  return (
                    <motion.line
                      key={r.name}
                      x1={poland.x}
                      y1={poland.y}
                      x2={r.x}
                      y2={r.y}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  )
                })}

              {/* Dots */}
              {regions.map((r) => (
                <g key={r.name}>
                  {r.isUs && (
                    <motion.circle
                      cx={r.x}
                      cy={r.y}
                      r={6}
                      fill="none"
                      stroke="#E8362A"
                      strokeWidth={0.8}
                      initial={{ r: 2, opacity: 1 }}
                      animate={{ r: 8, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={r.isUs ? 3 : 1.8}
                    fill={r.isUs ? '#E8362A' : 'rgba(255,255,255,0.5)'}
                  />
                  <text
                    x={r.x + 3}
                    y={r.y + 1.5}
                    fontSize="3.5"
                    fill={r.isUs ? '#fff' : 'rgba(255,255,255,0.6)'}
                    fontWeight={r.isUs ? '700' : '400'}
                    fontFamily="Inter, sans-serif"
                  >
                    {r.name}
                  </text>
                </g>
              ))}
            </svg>

            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-xs text-white/30">Sieć EXCO Group w Europie i Afryce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
