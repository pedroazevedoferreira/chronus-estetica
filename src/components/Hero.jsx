import { benefits, image, team } from '../data/content'
import { BookButton } from './BookButton'

export function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Estética com ciência, cuidado e resultados</p>
      <h1 id="hero-title">Você merece<br/>a sua melhor<br/><em>versão.</em></h1>
      <p className="hero-description">Estética facial e corporal com profissionais qualificadas, tecnologia e um atendimento pensado para você.</p>
      <BookButton>Agendar avaliação</BookButton>
      <ul className="benefits">{benefits.map(({ icon: Icon, text }) => <li key={text}><Icon aria-hidden="true"/>{text}</li>)}</ul>
    </div>

    {/* Desktop: the composed portrait from the brand material. Mobile: individual arched portraits. */}
    <figure className="hero-composition">
      <img src={image('hero-composition.jpg')} alt="Fernanda Cavalcante, Biomédica Esteta (CRBM 34832), e Andrea Cavalcante, Esteticista Expert" width="594" height="400" fetchPriority="high"/>
    </figure>
    <div className="hero-people">
      {team.map((p) => <figure className={`hero-person hero-person-${p.key}`} key={p.key}>
        <div className="hero-person-photo"><img src={image(p.photo)} alt="" width="300" height="460"/></div>
        <figcaption><strong>{p.name}</strong><span>{p.role}{p.reg && ` · ${p.reg}`}</span></figcaption>
      </figure>)}
    </div>
  </section>
}
