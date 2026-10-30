import { ArrowRight } from 'lucide-react'
import { benefits, image, team } from '../data/content'
import { BookButton } from './BookButton'

export function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-inner container">
      <div className="hero-copy">
        <p className="eyebrow">Estética com ciência, cuidado e resultados</p>
        <h1 id="hero-title">Você merece<br/>a sua melhor <em>versão.</em></h1>
        <p className="hero-description">Estética facial e corporal com profissionais qualificadas, tecnologia e um atendimento pensado para você.</p>
        <div className="hero-actions">
          <BookButton/>
          <a className="text-link" href="#tratamentos">Ver tratamentos <ArrowRight size={15} aria-hidden="true"/></a>
        </div>
        <ul className="benefits">{benefits.map(({ icon: Icon, text }) => <li key={text}><Icon aria-hidden="true"/>{text}</li>)}</ul>
      </div>
      <div className="hero-people">
        {team.map((p) => <figure className={`hero-person hero-person-${p.key}`} key={p.key}>
          <div className="hero-person-photo"><img src={image(p.photo)} alt={p.name} width="300" height="460" fetchPriority="high"/></div>
          <figcaption><strong>{p.name}</strong><span>{p.role}{p.reg && ` · ${p.reg}`}</span></figcaption>
        </figure>)}
      </div>
    </div>
  </section>
}
