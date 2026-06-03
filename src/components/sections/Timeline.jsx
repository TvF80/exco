import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { timelineEvents } from '../../data/timeline'

export default function Timeline() {
  return (
    <section id="historia" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            Nasza historia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            27 lat na polskim rynku
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Od małego biura w Warszawie do sieci sześciu miast i globalnej rodziny EXCO Group.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, #C7D2FE 10%, #C7D2FE 90%, transparent)' }}
          />

          <div className="space-y-8">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <TimelineItem key={event.year} event={event} isLeft={isLeft} index={i} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ event, isLeft, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`pl-14 md:pl-0 w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
        <div
          className={`inline-block rounded-2xl p-5 ${event.highlight ? 'shadow-lg' : ''}`}
          style={{
            background: event.highlight ? '#1B3A6B' : '#F7F8FA',
            border: event.highlight ? 'none' : '1px solid #E5E7EB',
          }}
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: event.highlight ? '#93C5FD' : '#E8362A' }}
          >
            {event.year}
          </div>
          <div
            className="font-bold text-base mb-1"
            style={{ color: event.highlight ? '#fff' : '#1A1A2E' }}
          >
            {event.title}
          </div>
          <div
            className="text-sm leading-relaxed"
            style={{ color: event.highlight ? 'rgba(255,255,255,0.75)' : '#6B7280' }}
          >
            {event.desc}
          </div>
        </div>
      </div>

      {/* Dot on timeline */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5">
        <div
          className="w-4 h-4 rounded-full border-2 border-white shadow"
          style={{ background: event.highlight ? '#E8362A' : '#C7D2FE' }}
        />
      </div>

      {/* Spacer for opposite side on desktop */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  )
}
