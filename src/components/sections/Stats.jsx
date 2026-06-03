import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 27, suffix: '', label: 'lat na rynku', sublabel: 'działamy od 1999 roku' },
  { value: 6, suffix: '', label: 'biur w Polsce', sublabel: 'Warszawa, Kraków, Gdańsk, Wrocław, Poznań, Radom' },
  { value: 140, suffix: '', label: 'biur globalnie', sublabel: 'w ramach Grupy EXCO' },
  { value: 18, suffix: '', label: 'krajów w sieci', sublabel: 'Europa i świat' },
  { value: 167, suffix: ' mln EUR', label: 'obrót Grupy EXCO', sublabel: 'rocznie' },
  { value: 70, suffix: ' 000+', label: 'klientów globalnie', sublabel: 'obsługiwanych przez sieć EXCO' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            EXCO w liczbach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            27 lat budowania zaufania
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Lokalna wiedza. Globalna sieć. Doświadczenie, które przekłada się na wyniki.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map(({ value, suffix, label, sublabel }) => (
            <div
              key={label}
              className="relative rounded-2xl p-6 text-center group hover:shadow-lg transition-shadow"
              style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
            >
              <div
                className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: '#E8362A' }}
              />
              <div className="text-4xl md:text-5xl font-bold text-[#1B3A6B] leading-none mb-2">
                {inView ? (
                  <CountUp
                    end={value}
                    duration={2.5}
                    separator=" "
                    suffix={suffix}
                    useEasing
                  />
                ) : (
                  <span>0{suffix}</span>
                )}
              </div>
              <div className="font-semibold text-gray-800 mb-1">{label}</div>
              <div className="text-xs text-gray-400">{sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
