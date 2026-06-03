export const questions = [
  {
    id: 'q1',
    text: 'Czego potrzebujesz?',
    options: [
      { label: 'Wyceniam lub sprzedaję firmę', icon: 'TrendingUp', next: 'r-wycena' },
      { label: 'Kupuję firmę lub udziały', icon: 'ShoppingBag', next: 'r-ma' },
      { label: 'Moja firma przeżywa trudności', icon: 'AlertTriangle', next: 'r-restrukturyzacja' },
      { label: 'Sprawdzam firmę przed decyzją', icon: 'Search', next: 'r-dd' },
      { label: 'Chcę usprawnić procesy / kontrolę', icon: 'Settings', next: 'r-audyt' },
      { label: 'Szukam obsługi księgowej', icon: 'BookOpen', next: 'r-ksiegowosc' },
      { label: 'Potrzebuję obsługi kadr i płac', icon: 'Users', next: 'r-kadry' },
      { label: 'Raportowanie ESG / zrównoważony rozwój', icon: 'Leaf', next: 'r-esg' },
      { label: 'Zakładam firmę w Polsce (z zagranicy)', icon: 'Globe', next: 'r-rynek' },
      { label: 'Potrzebuję pomocy prawnej', icon: 'Scale', next: 'r-prawo' },
    ],
  },
]

export const results = {
  'r-wycena': {
    serviceId: 'konsulting',
    subcategory: 'Wycena spółki',
    expertIds: [1, 5],
    message: 'Niezależna, profesjonalna wycena to fundament każdej transakcji. Nasi eksperci przeprowadzili dziesiątki wycen w różnych metodologiach (DCF, mnożniki, majątkowa).',
  },
  'r-ma': {
    serviceId: 'due-diligence',
    subcategory: 'Due Diligence + M&A',
    expertIds: [1, 3, 5],
    message: 'Przed zakupem firmy kluczowa jest rzetelna analiza. Przeprowadzimy pełne due diligence i wesprzemy Cię w negocjacjach transakcyjnych.',
  },
  'r-restrukturyzacja': {
    serviceId: 'konsulting',
    subcategory: 'Restrukturyzacja',
    expertIds: [1],
    message: 'Restrukturyzacja wymaga szybkiej i trafnej diagnozy. Nasi konsultanci mają doświadczenie w prowadzeniu firm przez trudne okresy zmiany.',
  },
  'r-dd': {
    serviceId: 'due-diligence',
    subcategory: 'Due Diligence',
    expertIds: [3, 5],
    message: 'Dogłębna analiza finansowa, prawna i organizacyjna pozwoli Ci podjąć pewną decyzję. Dostarczymy rzetelny raport z rekomendacjami.',
  },
  'r-audyt': {
    serviceId: 'audyt',
    subcategory: 'Audyt wewnętrzny / organizacyjny',
    expertIds: [3, 4],
    message: 'Niezależna ocena procesów i kontroli wewnętrznych to inwestycja w bezpieczeństwo i efektywność Twojej firmy.',
  },
  'r-ksiegowosc': {
    serviceId: 'outsourcing-ksiegowosci',
    subcategory: 'Outsourcing Księgowości',
    expertIds: [2, 8],
    message: 'Kompleksowa obsługa księgowa — od prowadzenia ksiąg po deklaracje podatkowe. Skupiasz się na biznesie, my dbamy o liczby.',
  },
  'r-kadry': {
    serviceId: 'outsourcing-kadr-i-plac',
    subcategory: 'Outsourcing Kadr i Płac',
    expertIds: [2, 6],
    message: 'Pełna administracja kadrowa i payroll — zgodnie z aktualnymi przepisami, bez błędów, na czas.',
  },
  'r-esg': {
    serviceId: 'esg',
    subcategory: 'ESG / CSRD',
    expertIds: [4],
    message: 'ESG to dziś wymóg regulacyjny i przewaga konkurencyjna. Pomożemy Ci przeprowadzić audyt ESG i przygotować się do raportowania CSRD.',
  },
  'r-rynek': {
    serviceId: 'wejscie-na-rynek-polski',
    subcategory: 'Wejście na rynek polski',
    expertIds: [7],
    message: 'Wejście na polski rynek "pod klucz" — od rejestracji spółki, przez obsługę księgową, po wsparcie w codziennym zarządzaniu.',
  },
  'r-prawo': {
    serviceId: 'uslugi-prawne',
    subcategory: 'Prawo gospodarcze',
    expertIds: [7],
    message: 'EXCO Poland Legal zapewnia kompleksową obsługę prawną w zakresie prawa gospodarczego i korporacyjnego.',
  },
}
