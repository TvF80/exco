import { motion } from 'framer-motion'
import { timelineEvents } from '../../data/timeline'
import { BgHistory } from '../BgPatterns'

export default function TimelineNew() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#0b0600' }}>
      <BgHistory />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Historia</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            27 lat razem
          </h2>
        </motion.div>

        <div className="relative">
          {/* Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(218,91,21,0.4) 10%, rgba(218,91,21,0.4) 90%, transparent)' }}
          />

          <div className="space-y-6">
            {timelineEvents.map((ev, i) => (
              <TimelineItem key={ev.year} ev={ev} isLeft={i % 2 === 0} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ ev, isLeft, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + Math.min(index * 0.06, 0.4), duration: 0.5 }}
      className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`pl-12 md:pl-0 md:w-[calc(50%-1.5rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div
          className="rounded-2xl p-4"
          style={{
            background: ev.highlight ? 'rgba(218,91,21,0.15)' : 'rgba(255,255,255,0.04)',
            border: ev.highlight ? '1px solid rgba(218,91,21,0.3)' : '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: ev.highlight ? '#DA5B15' : '#0170b9' }}
          >
            {ev.year}
          </div>
          <div className="font-bold text-white mb-1">{ev.title}</div>
          <div className="text-sm text-white/50 leading-relaxed">{ev.desc}</div>
        </div>
      </div>

      {/* Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4">
        <div
          className="w-3 h-3 rounded-full border-2 border-[#0C0800]"
          style={{ background: ev.highlight ? '#DA5B15' : '#0170b9' }}
        />
      </div>

      <div className="hidden md:block md:w-[calc(50%-1.5rem)]" />
    </motion.div>
  )
}
