import { BadgeCheck } from 'lucide-react'
import { benefits, image, specialist } from '../data/content'
import { BookButton } from './BookButton'

export function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Estética com ciência, cuidado e resultados</p>
      <h1 id="hero-title">Você merece<br/>a sua melhor<br/><em>versão.</em></h1>
      <p className="hero-description">Estética facial e corporal com uma biomédica esteta especializada, tecnologia e um atendimento pensado para você.</p>
      <BookButton>Agendar avaliação</BookButton>
      <ul className="benefits">{benefits.map(({ icon: Icon, text }) => <li key={text}><Icon aria-hidden="true"/>{text}</li>)}</ul>
    </div>

    <figure className="hero-portrait">
      <span className="hero-ring" aria-hidden="true"/>
      <div className="hero-arch"><img src={image(specialist.photo)} alt={`${specialist.name}, ${specialist.role}`} width="305" height="460" fetchPriority="high"/></div>
      <figcaption className="hero-name">
        <strong>{specialist.name}</strong>
        <span>{specialist.role} · {specialist.reg}</span>
      </figcaption>
      <span className="hero-badge"><BadgeCheck size={18} aria-hidden="true"/>Pós-graduada pela<br/>FCM/UERJ</span>
    </figure>
  </section>
}
