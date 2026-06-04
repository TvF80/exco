# EXCO A2A Polska — Strona firmowa 2026

Interaktywna strona firmowa na walne spotkanie EXCO A2A Polska 2026.  
**Live:** https://excopl.vercel.app

## Stack

- **React 19** + **Vite 8** + **Tailwind CSS v4**
- **Framer Motion** — animacje, modale
- **Lucide React** — ikony
- **canvas-confetti** — efekt powitania w Hero

## Uruchomienie

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # produkcja → dist/
```

## Wdrożenie

```bash
vercel --prod     # wymaga zalogowanego Vercel CLI
```

Auto-deploy przy każdym push na branch `master` (GitHub → Vercel).

## Struktura projektu

```
src/
  App.jsx                        # globalny stan, lazy loading sekcji
  components/
    BgPatterns.jsx               # SVG tła sekcji (6 wzorów)
    SeminarModal.jsx             # modal PDF seminarium
    TeamMemberModal.jsx          # modal profilu pracownika
    layout/NavbarNew.jsx
    sections/
      HeroNew.jsx                # confetti, particles, kafelek seminarium
      StatsNew.jsx               # 7 animowanych liczb
      TeamGrid.jsx               # siatka 20 foto + filtry + kafelek rekrutacji
      ServicesNew.jsx            # 9 usług, zakładki Opis/Zakres/Eksperci
      OfficeMapNew.jsx           # SVG mapa Polski + 6 biur + 3 planowane
      TimelineNew.jsx            # 27 lat historii
      ContactNew.jsx             # formularz kontaktowy
  data/
    team.js                      # 20 pracowników
    services.js                  # 9 usług
    offices.js                   # 6 biur (SVG coords: x=7.9*lon-101.4, y=(54.9-lat)*13.56+5)
    timeline.js
public/
  team/                          # zdjęcia pracowników
  seminarium-2026.pdf            # program seminarium
```

## Edycja danych

| Co | Plik |
|---|---|
| Pracownicy (bio, email, usługi) | `src/data/team.js` |
| Usługi (opis, zakres, eksperci) | `src/data/services.js` |
| Biura (adres, telefon, SVG pos) | `src/data/offices.js` |
| Historia (27 lat) | `src/data/timeline.js` |
| PDF seminarium | `public/seminarium-2026.pdf` |

## Mapa Polski — formuła SVG

```
x = 7.9 * longitude - 101.4
y = (54.9 - latitude) * 13.56 + 5
viewBox: "8 0 84 92"
```

## Tła sekcji (src/components/BgPatterns.jsx)

| Sekcja | Wzór |
|---|---|
| StatsNew | `BgTradingChart` — siatka + linie trendu + świece |
| TeamGrid | `BgNetwork` — sieć węzłów 6×8 |
| ServicesNew | `BgCircuit` — płytka drukowana |
| OfficeMapNew | `BgGeoRings` — pierścienie geograficzne |
| TimelineNew | `BgHistory` — 27 słupków wzrostu |
| ContactNew | `BgSignal` — fale sygnału |
