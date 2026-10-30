export function Brand({ footer = false, onClick }) {
  return <a href="#inicio" onClick={onClick} className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Chronus Estética, início">
    <span className="brand-main" aria-hidden="true">CHRONUS</span>
    <span className="brand-script" aria-hidden="true">Estética</span>
  </a>
}
