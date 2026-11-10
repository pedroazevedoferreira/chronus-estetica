import { testimonials } from '../data/content'

export function Testimonials() {
  const hasExamples = testimonials.some((t) => t.example)
  return <section className="testimonials" id="depoimentos">
    <div className="container">
      <h2 className="testimonials-title">O que dizem as pacientes</h2>
      <div className="testimonial-grid">
        {testimonials.map((t) => <figure className="testimonial" key={t.name}>
          <blockquote>{t.text}</blockquote>
          <figcaption><strong>{t.name}</strong><span>{t.treatment}</span></figcaption>
        </figure>)}
      </div>
      {hasExamples && <p className="testimonials-note">Depoimentos ilustrativos.</p>}
    </div>
  </section>
}
