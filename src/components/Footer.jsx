import { ArrowUp } from 'lucide-react'
import { external, INSTAGRAM_URL, nav } from '../data/content'
import { Brand } from './Brand'

export function Footer() {
  return <footer className="footer">
    <div className="footer-inner container">
      <Brand footer/>
      <nav aria-label="Links do rodapé">{nav.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}<a href={INSTAGRAM_URL} {...external}>Instagram</a></nav>
      <div className="footer-legal"><span>Chronus Estética · Centro, Niterói | RJ</span><span>© {new Date().getFullYear()}. Todos os direitos reservados.</span></div>
    </div>
    <a className="back-top" href="#inicio">Voltar ao topo <ArrowUp size={14} aria-hidden="true"/></a>
  </footer>
}
