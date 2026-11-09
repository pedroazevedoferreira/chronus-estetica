import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'

export function Testimonials() {
  const hasExamples = testimonials.some((t) => t.example)
  return <section className="testimonials" id="depoimentos">
    <div className="container">
      <div className="center-heading" data-reveal>
        <p className="eyebrow">Depoimentos</p>
        <h2>O que dizem nossas <em>pacientes</em></h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => <figure className="testimonial-card" key={t.name} data-reveal style={{ '--delay': `${i * 100}ms` }}>
          <Quote className="testimonial-quote" aria-hidden="true"/>
          <div className="stars" role="img" aria-label="5 de 5 estrelas">{Array.from({ length: 5 }, (_, s) => <Star key={s} size={16} aria-hidden="true"/>)}</div>
          <blockquote>{t.text}</blockquote>
          <figcaption><strong>{t.name}</strong><span>{t.treatment}</span></figcaption>
        </figure>)}
      </div>
      {hasExamples && <p className="testimonials-note">Depoimentos ilustrativos.</p>}
    </div>
  </section>
}
