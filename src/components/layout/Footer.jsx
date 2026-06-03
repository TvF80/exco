import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react'

const serviceLinks = [
  { to: '/uslugi/konsulting', label: 'Konsulting' },
  { to: '/uslugi/audyt', label: 'Audyt' },
  { to: '/uslugi/due-diligence', label: 'Due Diligence' },
  { to: '/uslugi/outsourcing-ksiegowosci', label: 'Outsourcing Księgowości' },
  { to: '/uslugi/outsourcing-kadr-i-plac', label: 'Kadry i Płace' },
  { to: '/uslugi/esg', label: 'ESG' },
  { to: '/uslugi/wejscie-na-rynek-polski', label: 'Wejście na rynek PL' },
  { to: '/uslugi/uslugi-prawne', label: 'Usługi Prawne' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0f2347' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-[#E8362A] flex items-center justify-center text-white font-bold">
                E
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">EXCO A2A</div>
                <div className="text-xs text-white/60">Polska Sp. z o.o.</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Multidyscyplinarna firma doradcza działająca w Polsce od 1999 roku.
              Część Grupy EXCO — sieci 140 biur w 18 krajach.
            </p>
            <a
              href="https://exco.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Globe size={14} />
              exco.pl
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Usługi
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Firma
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/o-nas', label: 'O nas' },
                { to: '/zespol', label: 'Nasz zespół' },
                { to: '/o-nas#historia', label: 'Historia' },
                { to: '/o-nas#siec-globalna', label: 'Sieć EXCO' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white/40" />
                ul. rtm. Witolda Pileckiego 67/200<br />
                02-781 Warszawa
              </li>
              <li>
                <a
                  href="tel:+48221000000"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-white/40" />
                  +48 22 100 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@exco.pl"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-white/40" />
                  info@exco.pl
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 EXCO A2A Polska Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-white/30">
            NIP: 1181471955 | Część Grupy EXCO (Francja)
          </p>
        </div>
      </div>
    </footer>
  )
}
