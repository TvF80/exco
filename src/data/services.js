// subcategories: { name, desc } — klikalne kafelki z opisem

export const services = [
  {
    id: 'konsulting',
    title: 'Konsulting',
    tagline: 'Strategiczne doradztwo na każdym etapie',
    icon: '📈',
    emoji: '📈',
    color: '#DA5B15',
    bg: 'rgba(218,91,21,0.12)',
    description:
      'Wspieramy zarządy i właścicieli firm w podejmowaniu kluczowych decyzji strategicznych. Nasze analizy opierają się na twardych danych finansowych i 27-letnim doświadczeniu, co pozwala minimalizować ryzyko i maksymalizować wartość przedsiębiorstwa.',
    subcategories: [
      {
        name: 'Restrukturyzacja i optymalizacja przedsiębiorstw',
        desc: 'Analizujemy strukturę operacyjną i finansową firmy, identyfikujemy nieefektywności i wdrażamy plany naprawcze zwiększające rentowność. Nasze programy restrukturyzacyjne przynoszą mierzalne efekty już w ciągu 6–18 miesięcy.',
      },
      {
        name: 'Wycena spółek i aktywów',
        desc: 'Stosujemy metody DCF, porównawczą i majątkową zgodnie ze standardami RICS i MSSF. Raporty wyceny akceptowane są przez banki, fundusze inwestycyjne i organy podatkowe.',
      },
      {
        name: 'Fuzje i przejęcia (M&A)',
        desc: 'Doradzamy po obu stronach transakcji — przy sprzedaży spółki, nabyciu aktywów i fuzjach. Koordynujemy cały proces: od wyceny i due diligence po negocjacje SPA i zamknięcie.',
      },
      {
        name: 'Doradztwo strategiczne dla zarządów',
        desc: 'Pracujemy z zarządami nad definiowaniem celów strategicznych, alokacją zasobów i reakcją na zmiany rynkowe. Warsztaty strategiczne przekładają wizję na konkretne plany działania z KPI.',
      },
      {
        name: 'Analizy rynku i otoczenia konkurencyjnego',
        desc: 'Opracowujemy raporty sektorowe, mapy konkurentów i benchmarki branżowe. Dane z wiarygodnych źródeł pierwotnych uzupełniamy o wywiady eksperckie i analizę trendów makro.',
      },
      {
        name: 'Modele biznesowe i prognozy finansowe',
        desc: 'Budujemy dynamiczne modele finansowe na potrzeby planowania, controllingu i prezentacji inwestorskich. Modele uwzględniają scenariusze ryzyka i są dostosowane do specyfiki branży klienta.',
      },
    ],
    url: 'https://exco.pl/uslugi/konsulting/',
  },
  {
    id: 'audyt',
    title: 'Audyt',
    tagline: 'Niezależna ocena i rzetelna analiza',
    icon: '🔍',
    emoji: '🔍',
    color: '#0170b9',
    bg: 'rgba(1,112,185,0.12)',
    description:
      'Przeprowadzamy audyty wewnętrzne i zewnętrzne dostarczające obiektywnej oceny stanu organizacji, procesów i dokumentacji. Nasze raporty są podstawą do wdrożeń naprawczych i budowania zaufania interesariuszy.',
    subcategories: [
      {
        name: 'Audyt wewnętrzny procesów i kontroli',
        desc: 'Przeglądamy systemy kontroli wewnętrznej w oparciu o standardy IIA, identyfikując luki i ryzyka operacyjne. Rekomendacje zawierają priorytety wdrożeń i szacunek oszczędności.',
      },
      {
        name: 'Audyt kadrowy i płacowy',
        desc: 'Weryfikujemy prawidłowość umów o pracę, naliczania wynagrodzeń i rozliczeń ZUS. Chronimy firmę przed ryzykiem roszczeń pracowniczych i sankcji PIP.',
      },
      {
        name: 'Audyt ksiąg rachunkowych',
        desc: 'Sprawdzamy zapisy księgowe pod kątem zgodności z UoR i MSSF, wykrywając błędy klasyfikacyjne i niezgodności sald. Audyt obejmuje też weryfikację deklaracji VAT i JPK.',
      },
      {
        name: 'Audyt organizacyjny i operacyjny',
        desc: 'Oceniamy efektywność struktury organizacyjnej i przepływu decyzji. Raport zawiera mapę procesów AS-IS, ocenę ryzyk i rekomendowane priorytety optymalizacji.',
      },
      {
        name: 'Audyt ESG i raportowania pozafinansowego',
        desc: 'Weryfikujemy dane środowiskowe, społeczne i ład korporacyjny pod kątem GRI, ESRS i TCFD. Przygotowujemy firmę do obowiązku raportowania wg dyrektywy CSRD.',
      },
      {
        name: 'Przeglądy zgodności (compliance review)',
        desc: 'Badamy zgodność procesów z KSH, Kodeksem Pracy, AML i RODO. Oceniamy ryzyko sankcji regulacyjnych i doradzamy przy wdrożeniu programów compliance.',
      },
    ],
    url: 'https://exco.pl/audyt-corporateduediligence-2/',
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence',
    tagline: 'Pełna analiza przed ważną decyzją',
    icon: '📋',
    emoji: '📋',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.12)',
    description:
      'Kompleksowe badanie due diligence przed transakcją M&A, wejściem inwestycyjnym lub pozyskaniem finansowania. Identyfikujemy ryzyka, weryfikujemy dane finansowe i prawne — dajemy pewność opartą na faktach.',
    subcategories: [
      {
        name: 'Due Diligence finansowe (Financial DD)',
        desc: 'Analizujemy historyczne i prognozowane wyniki, jakość aktywów i EBITDA, identyfikując ryzyka wpływające na cenę transakcji. Standardowy wymóg każdego profesjonalnego procesu M&A.',
      },
      {
        name: 'Due Diligence prawne (Legal DD)',
        desc: 'Weryfikujemy strukturę właścicielską, umowy kluczowe, postępowania sądowe i tytuły prawne do aktywów. Identyfikujemy ryzyka rep & warranties i warunki zamknięcia transakcji (CPs).',
      },
      {
        name: 'Due Diligence podatkowe (Tax DD)',
        desc: 'Badamy historię rozliczeń podatkowych i ryzyko zaległości wobec organów skarbowych. Oceniamy efektywność struktury podatkowej i wskazujemy obszary ryzyka lub optymalizacji.',
      },
      {
        name: 'Due Diligence operacyjne i organizacyjne',
        desc: 'Oceniamy zdolności operacyjne, zasoby ludzkie, systemy IT i łańcuch dostaw target-spółki. Identyfikujemy kluczowe osoby, od których zależy ciągłość biznesu po transakcji.',
      },
      {
        name: 'Due Diligence ESG i środowiskowe',
        desc: 'Analizujemy ryzyka środowiskowe, społeczne i governance w kontekście wymagań ESG inwestorów instytucjonalnych i regulacji UE. Identyfikujemy potencjalne zobowiązania środowiskowe.',
      },
      {
        name: 'Red Flag Review dla szybkich decyzji',
        desc: 'Skrócona wersja DD skoncentrowana na krytycznych ryzykach, dostarczana w 3–5 dni. Idealna do wstępnej oceny przed złożeniem niewiążącej oferty (NBO/LOI).',
      },
    ],
    url: 'https://exco.pl/audyt-corporateduediligence-2/',
  },
  {
    id: 'pozyskanie-finansowania',
    title: 'Pozyskanie Finansowania',
    tagline: 'Finansowanie i dokumentacja projektów inwestycyjnych',
    icon: '💼',
    emoji: '💼',
    color: '#0097bd',
    bg: 'rgba(0,151,189,0.12)',
    description:
      'Pomagamy firmom skutecznie pozyskiwać kapitał — z funduszy UE, banków, funduszy inwestycyjnych i inwestorów prywatnych. Przygotowujemy kompletną dokumentację: biznesplany, modele finansowe, wnioski o dofinansowanie i memoranda informacyjne.',
    subcategories: [
      {
        name: 'Biznesplany i memoranda inwestycyjne',
        desc: 'Tworzymy profesjonalne dokumenty przekonujące banki i inwestorów do finansowania projektu. Każdy biznesplan zawiera analizę rynku, model finansowy, ocenę ryzyka i strategię wyjścia.',
      },
      {
        name: 'Modele finansowe i projekcje wieloletnie',
        desc: 'Budujemy dynamiczne modele (3–10 lat) z analizą scenariuszy, testami wrażliwości i wskaźnikami IRR, NPV, DSCR. Modele spełniają standardy wymagane przez banki i fundusze PE/VC.',
      },
      {
        name: 'Wnioski o dofinansowanie UE (PARP, NCBiR, RPO)',
        desc: 'Przygotowujemy kompletną dokumentację aplikacyjną do programów unijnych — od analizy kwalifikowalności po studium wykonalności. Doświadczenie w PARP, NCBiR, KPO i RPO.',
      },
      {
        name: 'Studia wykonalności (Feasibility Study)',
        desc: 'Kompleksowa analiza techniczna, finansowa i ekonomiczna projektu inwestycyjnego. Wymagana przy wnioskach UE powyżej 1 mln EUR i kredytach projektowych banków.',
      },
      {
        name: 'Przygotowanie do rund inwestycyjnych (Seed, Series A)',
        desc: 'Pomagamy startupom przygotować pitch deck, term sheet i data room. Pośredniczymy w kontaktach z siecią inwestorów EXCO Group w 18 krajach Europy.',
      },
      {
        name: 'Restrukturyzacja zadłużenia i negocjacje z bankami',
        desc: 'Pomagamy firmom w trudnej sytuacji finansowej restrukturyzować zadłużenie i negocjować warunki spłaty. Działamy jako mediator między dłużnikiem a wierzycielami.',
      },
    ],
    url: 'https://exco.pl/uslugi/konsulting/',
  },
  {
    id: 'outsourcing-ksiegowosci',
    title: 'Outsourcing Księgowości',
    tagline: 'Twoje liczby w rękach ekspertów',
    icon: '📚',
    emoji: '📚',
    color: '#0097bd',
    bg: 'rgba(0,151,189,0.12)',
    description:
      'Przejmujemy pełną obsługę księgową — od prowadzenia ksiąg rachunkowych po rozliczenia podatkowe i sprawozdania finansowe. Dzięki nowoczesnym systemom i doświadczonemu zespołowi Twoja firma zawsze jest na bieżąco z obowiązkami podatkowymi.',
    subcategories: [
      {
        name: 'Prowadzenie ksiąg rachunkowych (pełna i uproszczona)',
        desc: 'Prowadzimy pełną księgowość wg UoR i MSSF oraz KPiR dla działalności mniejszej skali. Zapewniamy bieżące ewidencjonowanie zdarzeń gospodarczych i terminowe zamknięcia miesiąca.',
      },
      {
        name: 'Ewidencja VAT, deklaracje i JPK',
        desc: 'Zarządzamy rejestrem VAT, sporządzamy deklaracje VAT-7 i pliki JPK_V7. Monitorujemy zmiany w przepisach VAT i poinformujemy o ryzyku podatkowym z wyprzedzeniem.',
      },
      {
        name: 'Rozliczenia CIT i PIT',
        desc: 'Sporządzamy zeznania roczne CIT-8 i PIT, rozliczamy zaliczki na podatek dochodowy. Optymalizujemy obciążenia podatkowe w granicach obowiązującego prawa.',
      },
      {
        name: 'Sprawozdania finansowe wg UoR i MSSF',
        desc: 'Przygotowujemy roczne sprawozdania finansowe — bilans, rachunek wyników, przepływy pieniężne — zgodnie z UoR lub Międzynarodowymi Standardami Sprawozdawczości Finansowej.',
      },
      {
        name: 'Raportowanie zarządcze (controlling)',
        desc: 'Dostarczamy miesięczne dashboardy zarządcze z kluczowymi wskaźnikami finansowymi (EBITDA, płynność, należności). Raporty dostosowujemy do struktury i potrzeb decyzyjnych zarządu.',
      },
      {
        name: 'Obsługa rozrachunków z kontrahentami',
        desc: 'Ewidencjonujemy faktury zakupu i sprzedaży, monitorujemy należności i zobowiązania. Wspieramy procesy windykacji i potwierdzania sald z kontrahentami.',
      },
    ],
    url: 'https://exco.pl/outsourcing-ksiegowosci/',
  },
  {
    id: 'outsourcing-kadr-i-plac',
    title: 'Kadry i Płace',
    tagline: 'Pełna administracja HR bez stresu',
    icon: '👥',
    emoji: '👥',
    color: '#20a464',
    bg: 'rgba(32,164,100,0.12)',
    description:
      'Kompleksowa obsługa kadrowo-płacowa dla firm każdej wielkości. Zajmujemy się naliczaniem wynagrodzeń, administracją kadrową i pełną zgodnością z przepisami prawa pracy, ZUS i PPK.',
    subcategories: [
      {
        name: 'Naliczanie wynagrodzeń (Payroll)',
        desc: 'Naliczamy wynagrodzenia, premie, nadgodziny i inne świadczenia z uwzględnieniem aktualnych stawek podatkowych i składek. Terminowe przelewy i listy płac bez błędów.',
      },
      {
        name: 'Administracja dokumentacji pracowniczej',
        desc: 'Prowadzimy teczki pracownicze (papierowe i elektroniczne), ewidencję czasu pracy, urlopów i absencji. Pilnujemy terminów badań medycznych i szkoleń BHP.',
      },
      {
        name: 'Rozliczenia ZUS, US i PPK',
        desc: 'Sporządzamy deklaracje ZUS (DRA, RCA, RSA) i odprowadzamy składki na czas. Obsługujemy Program PPK — od rejestracji uczestników po miesięczne wpłaty.',
      },
      {
        name: 'Compliance z Kodeksem Pracy',
        desc: 'Dbamy o zgodność polityki personalnej z Kodeksem Pracy, regulaminami wynagradzania i układami zbiorowymi. Informujemy o zmianach przepisów i ich wpływie na firmę.',
      },
      {
        name: 'RODO w obszarze HR',
        desc: 'Opracowujemy klauzule informacyjne, rejestry czynności przetwarzania i polityki retencji danych pracowniczych. Minimalizujemy ryzyko kar UODO w obszarze kadrowym.',
      },
      {
        name: 'Wsparcie przy kontrolach PIP i ZUS',
        desc: 'Reprezentujemy firmę podczas kontroli Państwowej Inspekcji Pracy i ZUS. Przygotowujemy dokumentację i odpowiedzi na wystąpienia pokontrolne.',
      },
    ],
    url: 'https://exco.pl/outsourcing-plac-kadr-i-hr/',
  },
  {
    id: 'esg',
    title: 'ESG / CSR',
    tagline: 'Zrównoważony rozwój jako przewaga',
    icon: '🌿',
    emoji: '🌿',
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.12)',
    description:
      'Pomagamy firmom wdrożyć strategię ESG i wypełnić obowiązki wynikające z dyrektywy CSRD. Przygotowujemy raporty zrównoważonego rozwoju, audyty ESG oraz szkolenia dla kadry zarządzającej.',
    subcategories: [
      {
        name: 'Audyt i diagnoza ESG',
        desc: 'Oceniamy obecny poziom dojrzałości ESG firmy, identyfikując luki względem oczekiwań regulatorów, inwestorów i kontrahentów. Raport diagnostyczny jest punktem startowym strategii.',
      },
      {
        name: 'Raportowanie CSRD (dyrektywa UE)',
        desc: 'Przygotowujemy raporty zrównoważonego rozwoju zgodne z Europejskimi Standardami Raportowania Zrównoważonego (ESRS). Od 2026 r. raportowanie jest obowiązkowe dla tysięcy polskich firm.',
      },
      {
        name: 'Strategia zrównoważonego rozwoju',
        desc: 'Opracowujemy wieloletnią strategię ESG z celami, wskaźnikami i planem wdrożenia. Integrujemy ESG z modelem biznesowym, budując przewagę konkurencyjną i dostęp do zielonego finansowania.',
      },
      {
        name: 'Ślad węglowy i cele klimatyczne (net-zero)',
        desc: 'Mierzymy emisję CO₂ Scope 1, 2 i 3 zgodnie z GHG Protocol. Pomagamy wyznaczać cele redukcji i ścieżkę dochodzenia do neutralności klimatycznej.',
      },
      {
        name: 'Szkolenia ESG dla zarządów i rad nadzorczych',
        desc: 'Przeprowadzamy warsztaty ESG dla kierownictwa, wyjaśniając obowiązki, ryzyka reputacyjne i szanse biznesowe. Szkolenia dostosowane do branży i profilu firmy.',
      },
      {
        name: 'Wskaźniki GRI, SASB i TCFD',
        desc: 'Zbieramy dane i obliczamy wskaźniki według standardów GRI (Global Reporting Initiative), SASB i TCFD. Zapewniamy porównywalność danych wymaganą przez inwestorów i agencje ratingowe ESG.',
      },
    ],
    url: 'https://exco.pl/csr-esg/',
  },
  {
    id: 'wejscie-na-rynek-polski',
    title: 'Wejście na rynek PL',
    tagline: 'Wchodź do Polski z pewnym przewodnikiem',
    icon: '🌍',
    emoji: '🌍',
    color: '#DC2626',
    bg: 'rgba(220,38,38,0.12)',
    description:
      'Jako część sieci EXCO Group z biurami w 18 krajach, specjalizujemy się w wprowadzaniu zagranicznych firm na rynek polski. Zapewniamy kompleksowe wsparcie — od rejestracji spółki po pełną obsługę operacyjną od pierwszego dnia działalności.',
    subcategories: [
      {
        name: 'Rejestracja spółki (sp. z o.o., S.A., oddział)',
        desc: 'Przeprowadzamy przez cały proces rejestracji spółki w KRS — od wyboru formy prawnej, przez przygotowanie umowy/statutu, po wpis i nadanie NIP, REGON i VAT-EU.',
      },
      {
        name: 'Obsługa prawna i administracyjna startu',
        desc: 'Zapewniamy komplet umów startowych: najmu, pracowniczych, handlowych. Obsługujemy zgłoszenia do ZUS, US, GUS i innych urzędów wymaganych na starcie działalności.',
      },
      {
        name: 'Wirtualne biuro i adres rejestrowy',
        desc: 'Udostępniamy prestiżowy adres w centrum Warszawy lub innych miastach do rejestracji spółki i korespondencji. Obsługujemy korespondencję i przekazujemy dokumenty w czasie rzeczywistym.',
      },
      {
        name: 'Wsparcie kadrowo-finansowe od dnia 1',
        desc: 'Od pierwszego dnia działalności przejmujemy obsługę księgową i kadrowo-płacową. Dzięki temu zagraniczny właściciel może skupić się na biznesie, a nie na polskiej biurokracji.',
      },
      {
        name: 'Doradztwo podatkowe dla podmiotów zagranicznych',
        desc: 'Doradzamy w zakresie umów o unikaniu podwójnego opodatkowania, podatku u źródła (WHT) i strukturyzacji przepływów pieniężnych między spółką polską a zagraniczną.',
      },
      {
        name: 'Transfer pricing i ceny transferowe',
        desc: 'Przygotowujemy politykę cen transferowych i dokumentacje local file / master file wymagane dla transakcji między podmiotami powiązanymi. Chronimy przed ryzykiem sankcji podatkowych.',
      },
    ],
    url: 'https://exco.pl/wejscie-na-rynek-polski/',
  },
  {
    id: 'uslugi-prawne',
    title: 'Usługi Prawne',
    tagline: 'EXCO Poland Legal — prawo gospodarcze',
    icon: '⚖️',
    emoji: '⚖️',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.12)',
    description:
      'EXCO Poland Legal świadczy kompleksową obsługę prawną dla przedsiębiorców. Nasz zespół radców prawnych specjalizuje się w prawie korporacyjnym i gospodarczym, zapewniając bieżące doradztwo i reprezentację w sporach.',
    subcategories: [
      {
        name: 'Prawo korporacyjne i spółek handlowych',
        desc: 'Obsługujemy bieżące potrzeby prawne spółek: uchwały, zmiany umowy/statutu, przekształcenia, likwidacje i wszystkie zdarzenia korporacyjne wymagające aktu notarialnego lub wpisu KRS.',
      },
      {
        name: 'Umowy handlowe i negocjacje',
        desc: 'Przygotowujemy i negocjujemy umowy B2B, NDA, umowy dystrybucyjne i agencyjne. Zabezpieczamy interesy klienta i minimalizujemy ryzyko prawne w relacjach z kontrahentami.',
      },
      {
        name: 'Dokumentacja transakcji M&A',
        desc: 'Tworzymy komplet dokumentów transakcyjnych: LOI, SPA, umowy wspólników (SHA), protokoły closing. Koordynujemy podpisanie i spełnienie warunków zamknięcia transakcji.',
      },
      {
        name: 'Spory korporacyjne i arbitraż',
        desc: 'Reprezentujemy klientów w sporach korporacyjnych przed sądami powszechnymi i sądami arbitrażowymi (SA KIG, ICC). Specjalizujemy się w sporach wspólników i roszczeń z umów handlowych.',
      },
      {
        name: 'Prawo pracy i kontrakty menedżerskie',
        desc: 'Przygotowujemy kontrakty menedżerskie, umowy zakazu konkurencji i regulaminy wynagradzania. Doradzamy w trudnych sprawach pracowniczych i reprezentujemy przed sądem pracy.',
      },
      {
        name: 'Ochrona danych osobowych (RODO)',
        desc: 'Przeprowadzamy audyty RODO, przygotowujemy polityki prywatności, rejestry czynności przetwarzania i umowy powierzenia. Zapewniamy bieżące doradztwo przy nowych projektach i incydentach.',
      },
    ],
    url: 'https://exco.pl/exco-poland-legal/',
  },
]

export const serviceById = (id) => services.find((s) => s.id === id)
