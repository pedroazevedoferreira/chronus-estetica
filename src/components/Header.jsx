import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BookingIcon, bookingLabel, bookLink, external, nav } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { BookButton } from './BookButton'
import { Brand } from './Brand'

const sectionIds = nav.map(({ id }) => id)

export function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(10)
  const activeSection = useActiveSection(sectionIds, page)
  const active = page === 'treatment' ? 'tratamentos' : activeSection
  const toggleRef = useRef(null)
  const close = () => setMenuOpen(false)

  useEffect(() => {
    document.body.classList.toggle('menu-locked', menuOpen)
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') { close(); toggleRef.current?.focus() } }
    const onResize = () => window.innerWidth > 860 && close()
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize) }
  }, [menuOpen])

  return <header className={`header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
    <div className="header-inner container">
      <button ref={toggleRef} className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
      <Brand onClick={close}/>
      <nav id="primary-nav" className="nav" aria-label="Navegação principal">
        {nav.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={close} className={active === id ? 'is-active' : undefined} aria-current={active === id ? 'true' : undefined}>{label}</a>)}
        <BookButton className="primary-button nav-book"/>
      </nav>
      <a className="header-book" href={bookLink} {...external} aria-label={bookingLabel}><BookingIcon size={16} aria-hidden="true"/><span>Agendar avaliação</span></a>
    </div>
  </header>
}
