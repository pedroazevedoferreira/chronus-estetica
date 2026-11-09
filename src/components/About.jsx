import { Check } from 'lucide-react'
import { image, specialist } from '../data/content'
import { BookButton } from './BookButton'

export function About() {
  return <section className="about" id="sobre">
    <div className="about-inner container">
      <div className="about-photo" data-reveal>
        <img src={image(specialist.photo)} alt={`Retrato de ${specialist.name}`} loading="lazy" decoding="async" width="305" height="460"/>
        <span className="about-reg">{specialist.reg}</span>
      </div>
      <div className="about-copy" data-reveal style={{ '--delay': '120ms' }}>
        <p className="eyebrow">Conheça a especialista</p>
        <h2>{specialist.first} <em>{specialist.last}</em></h2>
        <p className="person-role">{specialist.role}</p>
        <p className="about-bio">{specialist.bio}</p>
        <ul className="credentials">{specialist.credentials.map((c) => <li key={c}><Check size={16} aria-hidden="true"/>{c}</li>)}</ul>
        <BookButton>Agende com a Fernanda</BookButton>
      </div>
    </div>
  </section>
}
