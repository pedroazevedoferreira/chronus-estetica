import { ArrowDown, Sparkles } from 'lucide-react'
import { benefits, heroImage } from '../data/content'
import { BookButton } from './BookButton'

export function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Estética facial &amp; corporal · Niterói</p>
      <h1 id="hero-title">Sua beleza,<br/>no seu <em>tempo.</em></h1>
      <p className="hero-description">Cuidado estético com escuta, conhecimento e respeito à beleza que é só sua.</p>
      <div className="hero-actions"><BookButton>Agendar avaliação</BookButton><a className="hero-secondary" href="#tratamentos">Conheça os tratamentos <ArrowDown size={16} aria-hidden="true"/></a></div>
      <ul className="benefits">{benefits.map(({ icon: Icon, text }) => <li key={text}><Icon aria-hidden="true"/>{text}</li>)}</ul>
    </div>

    <figure className="hero-portrait">
      <span className="hero-ring" aria-hidden="true"/>
      <div className="hero-arch"><img src={heroImage.src} srcSet={heroImage.srcSet} sizes="(max-width: 900px) 84vw, 460px" alt={heroImage.alt} width="900" height="600" fetchPriority="high"/></div>
      <figcaption className="hero-name">
        <Sparkles size={20} aria-hidden="true"/>
        <span><strong>Avaliação personalizada</strong>Cada protocolo começa com uma conversa</span>
      </figcaption>
    </figure>
  </section>
}
