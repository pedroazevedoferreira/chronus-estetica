import { Check } from 'lucide-react'
import { image, specialist } from '../data/content'
import { BookButton } from './BookButton'

export function About() {
  return <section className="about" id="sobre">
    <div className="about-inner container">
      <div className="about-visual">
        <figure className="about-card">
          <img src={image(specialist.photo)} alt={`Retrato de ${specialist.name}`} loading="lazy" decoding="async" width="305" height="460"/>
          <figcaption aria-hidden="true">
            <span className="about-signature">{specialist.name}</span>
            <span className="about-card-role">{specialist.role}</span>
          </figcaption>
        </figure>
      </div>
      <div className="about-copy">
        <p className="eyebrow">Conheça a especialista</p>
        <h2>{specialist.name}</h2>
        <p className="person-role">{specialist.role}, {specialist.reg}</p>
        <p className="about-bio">{specialist.bio}</p>
        <ul className="credentials">{specialist.credentials.map((c) => <li key={c}><Check size={16} aria-hidden="true"/>{c}</li>)}</ul>
        <BookButton>Agende com a Fernanda</BookButton>
      </div>
    </div>
  </section>
}
