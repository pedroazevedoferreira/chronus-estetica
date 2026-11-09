import { Check } from 'lucide-react'
import { specialist } from '../data/content'
import { BookButton } from './BookButton'

// The portrait already opens the page, so this section uses a typographic "signature" card instead of repeating it.
export function About() {
  return <section className="about" id="sobre">
    <div className="about-inner container">
      <div className="about-visual" data-reveal aria-hidden="true">
        <div className="about-card">
          <span className="about-monogram">F</span>
          <span className="about-signature">{specialist.name}</span>
          <span className="about-card-role">{specialist.role}</span>
          <span className="about-card-line"/>
          <span className="about-card-reg">{specialist.reg}</span>
        </div>
      </div>
      <div className="about-copy" data-reveal style={{ '--delay': '120ms' }}>
        <p className="eyebrow">Conheça a especialista</p>
        <h2>{specialist.first} <em>{specialist.last}</em></h2>
        <p className="person-role">{specialist.role} · {specialist.reg}</p>
        <p className="about-bio">{specialist.bio}</p>
        <ul className="credentials">{specialist.credentials.map((c) => <li key={c}><Check size={16} aria-hidden="true"/>{c}</li>)}</ul>
        <BookButton>Agende com a Fernanda</BookButton>
      </div>
    </div>
  </section>
}
