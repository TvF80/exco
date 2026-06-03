// EXCO logo — colored SVG with optional white filter for dark backgrounds
export default function ExcoLogo({ className = '', white = true }) {
  return (
    <img
      src="/brand/exco-logo-kolor.svg"
      alt="EXCO A2A Polska"
      className={className}
      style={{ filter: white ? 'brightness(0) invert(1)' : 'none' }}
    />
  )
}
