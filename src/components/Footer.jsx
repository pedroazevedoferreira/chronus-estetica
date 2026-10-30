import { nav } from '../data/content'
import { Brand } from './Brand'

export function Footer() {
  return <footer className="footer">
    <div className="footer-inner container">
      <Brand footer/>
      <nav aria-label="Links do rodapé">{nav.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <div className="footer-legal"><span>Chronus Estética</span><span>Centro, Niterói | RJ</span><span>© {new Date().getFullYear()}. Todos os direitos reservados.</span></div>
    </div>
  </footer>
}
