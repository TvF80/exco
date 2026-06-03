import Timeline from '../components/sections/Timeline'
import GlobalNetwork from '../components/sections/GlobalNetwork'
import Contact from '../components/sections/Contact'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const values = [
  {
    title: 'Rzetelność',
    desc: 'Dostarczamy analizy i rekomendacje oparte wyłącznie na faktach i niezależnej ocenie.',
    color: '#1B3A6B',
  },
  {
    title: 'Multidyscyplinarność',
    desc: 'Łączymy ekspertów z różnych dziedzin — razem oferujemy wsparcie 360° dla Twojego biznesu.',
    color: '#2563EB',
  },
  {
    title: 'Partnerstwo',
    desc: 'Traktujemy każdy projekt jak własny biznes — jesteśmy zaangażowani na każdym etapie.',
    color: '#059669',
  },
  {
    title: 'Globalny zasięg',
    desc: 'Jako część sieci EXCO Group otwieramy drzwi do 18 krajów i 140 biur partnerskich.',
    color: '#E8362A',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="pt-24 pb-20"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1B3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-4">
              Kim jesteśmy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
              EXCO A2A Polska
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-8">
              Multidyscyplinarna firma doradcza działająca w Polsce od 1999 roku.
              Jesteśmy częścią Grupy EXCO — szóstej największej sieci doradczej we Francji,
              obecnej w 18 krajach przez 140 biur.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                'Konsulting i restrukturyzacja',
                'Audyt i Due Diligence',
                'Outsourcing finansowo-kadrowy',
                'ESG i raportowanie niefinansowe',
                'Wejście na rynek polski',
                'Usługi prawne',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <CheckCircle size={14} className="text-[#E8362A] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
              Nasze wartości
            </p>
            <h2 className="text-3xl font-bold text-[#1A1A2E]">Co nas wyróżnia</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{ background: '#fff', border: '1px solid #E5E7EB' }}
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4"
                  style={{ background: value.color }}
                />
                <h3 className="font-bold text-lg text-[#1A1A2E] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Timeline />
      <GlobalNetwork />
      <Contact />
    </div>
  )
}
