import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import ExcoLogo from '../ExcoLogo'

export default function ContactNew() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '', service: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0C0800 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Kontakt</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Porozmawiajmy
          </h2>
          <p className="text-white/50">Odpiszemy w ciągu 24 godzin roboczych.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { Icon: MapPin, color: '#DA5B15', title: 'Siedziba', lines: ['ul. rtm. W. Pileckiego 67/200', '02-781 Warszawa'] },
              { Icon: Phone, color: '#0170b9', title: 'Telefon', lines: ['+48 22 847 61 17'], href: 'tel:+48228476117' },
              { Icon: Mail, color: '#0097bd', title: 'Email', lines: ['war@exco.pl'], href: 'mailto:war@exco.pl' },
            ].map(({ Icon, color, title, lines, href }) => (
              <div
                key={title}
                className="flex gap-4 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: color + '20' }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1">{title}</p>
                  {lines.map((l) =>
                    href ? (
                      <a key={l} href={href} className="block text-sm font-medium text-white hover:text-white/70">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="text-sm text-white">{l}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Logo watermark */}
            <div className="pt-4 flex items-center gap-3">
              <ExcoLogo className="h-7 opacity-30" white />
              <p className="text-white/20 text-xs">
                Część Grupy EXCO · 140 biur w 18 krajach
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(32,164,100,0.2)' }}
                >
                  <CheckCircle size={32} style={{ color: '#20a464' }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Wysłano!</h3>
                <p className="text-white/50 mb-6 text-sm">Odpiszemy do 24h.</p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: '#DA5B15' }}
                >
                  Nowa wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-white/30 mb-1.5 block">Imię i nazwisko</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none focus:ring-1"
                      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', focusRingColor: '#DA5B15' }}
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/30 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/30 mb-1.5 block">Usługa</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <option value="" style={{ background: '#111' }}>Wybierz usługę</option>
                    <option style={{ background: '#111' }}>Konsulting</option>
                    <option style={{ background: '#111' }}>Audyt</option>
                    <option style={{ background: '#111' }}>Due Diligence</option>
                    <option style={{ background: '#111' }}>Outsourcing Księgowości</option>
                    <option style={{ background: '#111' }}>Kadry i Płace</option>
                    <option style={{ background: '#111' }}>ESG / CSR</option>
                    <option style={{ background: '#111' }}>Wejście na rynek PL</option>
                    <option style={{ background: '#111' }}>Usługi Prawne</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-white/30 mb-1.5 block">Wiadomość</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none resize-none"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                    placeholder="Opisz czego potrzebujesz..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-white transition-all active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #DA5B15, #ff7a35)' }}
                >
                  <Send size={16} />
                  Wyślij wiadomość
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
