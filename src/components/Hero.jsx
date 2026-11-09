import { BadgeCheck, Sparkles } from 'lucide-react'
import { benefits, heroImage, specialist } from '../data/content'
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
      <div className="hero-arch"><img src={heroImage.src} srcSet={heroImage.srcSet} sizes="(max-width: 900px) 80vw, 420px" alt={heroImage.alt} width="900" height="600" fetchPriority="high"/></div>
      <figcaption className="hero-name">
        <Sparkles size={20} aria-hidden="true"/>
        <span><strong>Avaliação personalizada</strong>Cada protocolo começa com uma conversa</span>
      </figcaption>
      <span className="hero-badge"><BadgeCheck size={18} aria-hidden="true"/>{specialist.role}<br/>{specialist.reg}</span>
    </figure>
  </section>
}
