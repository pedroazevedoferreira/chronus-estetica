import { ArrowRight } from 'lucide-react'
import { bookLink, external, image, treatments } from '../data/content'

export function Treatments() {
  return <section className="treatments section" id="tratamentos">
    <div className="container">
      <div className="center-heading" data-reveal>
        <p className="eyebrow">Nossos tratamentos</p>
        <h2>Estética completa para realçar a sua beleza</h2>
        <p>Procedimentos faciais e corporais com avaliação personalizada, tecnologia e técnicas modernas.</p>
      </div>
      <div className="treatment-grid">
        {treatments.map((item, i) => <a className="treatment-card" href={bookLink} {...external} key={item.title} data-reveal style={{ '--delay': `${i * 80}ms` }}>
          <div className="treatment-photo"><img src={image(item.photo)} alt="" loading="lazy" decoding="async" width="224" height="115"/></div>
          <div className="treatment-content"><h3>{item.title}</h3><p>{item.text}</p><span className="treatment-link">Conheça <ArrowRight size={14} aria-hidden="true"/></span></div>
        </a>)}
      </div>
    </div>
  </section>
}
