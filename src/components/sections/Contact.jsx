import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Tutaj integracja z backendem
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            Porozmawiajmy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            Skontaktuj się z nami
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Odpiszemy w ciągu 24 godzin. Możesz też zadzwonić lub odwiedzić jedno z naszych biur.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            {[
              {
                icon: MapPin,
                title: 'Siedziba główna',
                lines: ['ul. rtm. Witolda Pileckiego 67/200', '02-781 Warszawa'],
              },
              {
                icon: Phone,
                title: 'Telefon',
                lines: ['+48 22 100 00 00'],
                href: 'tel:+48221000000',
              },
              {
                icon: Mail,
                title: 'Email',
                lines: ['info@exco.pl'],
                href: 'mailto:info@exco.pl',
              },
            ].map(({ icon: Icon, title, lines, href }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl"
                style={{ background: '#fff', border: '1px solid #E5E7EB' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#EEF2FF' }}
                >
                  <Icon size={18} style={{ color: '#1B3A6B' }} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{title}</div>
                  {lines.map((line) =>
                    href ? (
                      <a
                        key={line}
                        href={href}
                        className="block text-sm font-medium text-[#1A1A2E] hover:text-[#1B3A6B]"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-[#1A1A2E]">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Office hours */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: '#1B3A6B' }}
            >
              <h4 className="font-semibold text-white mb-3">Godziny pracy</h4>
              <div className="space-y-1 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Poniedziałek–Piątek</span>
                  <span className="text-white">8:30–17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota–Niedziela</span>
                  <span>Zamknięte</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="md:col-span-3 rounded-3xl p-8"
            style={{ background: '#fff', border: '1px solid #E5E7EB' }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Wiadomość wysłana!</h3>
                <p className="text-gray-500 mb-6">
                  Dziękujemy za kontakt. Odpiszemy w ciągu 24 godzin.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: '#1B3A6B' }}
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-5">Napisz do nas</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2"
                      style={{
                        background: '#F7F8FA',
                        border: '1px solid #E5E7EB',
                        focusRingColor: '#1B3A6B',
                      }}
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                      placeholder="+48 500 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Interesująca usługa
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                    >
                      <option value="">Wybierz usługę</option>
                      <option>Konsulting</option>
                      <option>Audyt</option>
                      <option>Due Diligence</option>
                      <option>Outsourcing Księgowości</option>
                      <option>Kadry i Płace</option>
                      <option>ESG</option>
                      <option>Wejście na rynek polski</option>
                      <option>Usługi Prawne</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Wiadomość *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                    placeholder="Opisz krótko czego potrzebujesz..."
                  />
                </div>

                <p className="text-xs text-gray-400">
                  Przesyłając formularz wyrażasz zgodę na przetwarzanie danych osobowych zgodnie z RODO.
                </p>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-colors"
                  style={{ background: '#E8362A' }}
                >
                  <Send size={16} />
                  Wyślij wiadomość
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
