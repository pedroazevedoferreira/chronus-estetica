import { ArrowLeft, ArrowRight, CalendarClock, Check, Clock3, Sparkles } from 'lucide-react'
import { image, specialist, treatments, treatmentSteps } from '../data/content'
import { BookButton } from './BookButton'

export function TreatmentPage({ slug }) {
  const item = treatments.find((t) => t.slug === slug)
  if (!item) return <section className="treatment-missing container">
    <h1>Tratamento não encontrado</h1>
    <a className="text-link" href="#tratamentos"><ArrowLeft size={16}/> Ver todos os tratamentos</a>
  </section>

  const others = treatments.filter((t) => t.slug !== slug)
  const info = [
    { icon: Clock3, label: 'Duração', value: item.info.duration },
    { icon: CalendarClock, label: 'Sessões', value: item.info.sessions },
    { icon: Sparkles, label: 'Recuperação', value: item.info.recovery },
  ]

  return <>
    <section className="tp-hero">
      <div className="tp-hero-inner container">
        <div className="tp-hero-copy">
          <a className="tp-back" href="#tratamentos"><ArrowLeft size={16} aria-hidden="true"/> Todos os tratamentos</a>
          <p className="eyebrow">Tratamentos</p>
          <h1>{item.title}</h1>
          <p className="tp-lead">{item.lead}</p>
          <BookButton>Agendar avaliação</BookButton>
        </div>
        <div className="tp-hero-photo"><img src={image(item.photo)} alt="" width="224" height="115"/></div>
      </div>
      <ul className="tp-info container">{info.map(({ icon: Icon, label, value }) => <li key={label}><Icon aria-hidden="true"/><span>{label}</span><strong>{value}</strong></li>)}</ul>
    </section>

    <section className="tp-details">
      <div className="tp-details-inner container">
        <div data-reveal>
          <h2>Para quem é <em>indicado</em></h2>
          <ul className="credentials">{item.indications.map((x) => <li key={x}><Check size={16} aria-hidden="true"/>{x}</li>)}</ul>
        </div>
        <div data-reveal style={{ '--delay': '100ms' }}>
          <h2>O que <em>fazemos</em></h2>
          <ul className="credentials">{item.procedures.map((x) => <li key={x}><Check size={16} aria-hidden="true"/>{x}</li>)}</ul>
          <p className="tp-note">O protocolo ideal é definido na avaliação, de acordo com a sua pele, o seu corpo e os seus objetivos.</p>
        </div>
      </div>
    </section>

    <section className="tp-steps">
      <div className="container">
        <div className="center-heading" data-reveal><p className="eyebrow">Como funciona</p><h2>Do primeiro contato ao <em>resultado</em></h2></div>
        <ol className="tp-step-list">{treatmentSteps.map((s, i) => <li key={s.title} data-reveal style={{ '--delay': `${i * 100}ms` }}><span>{String(i + 1).padStart(2, '0')}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>
      </div>
    </section>

    <section className="tp-cta">
      <div className="tp-cta-inner container" data-reveal>
        <img src={image(specialist.photo)} alt="" width="305" height="460" loading="lazy"/>
        <div>
          <h2>Agende sua avaliação com a {specialist.first}</h2>
          <p>{specialist.role} · {specialist.reg}</p>
        </div>
        <BookButton/>
      </div>
    </section>

    <section className="tp-others">
      <div className="container">
        <h2 data-reveal>Outros <em>tratamentos</em></h2>
        <div className="tp-other-grid">{others.map((t) => <a key={t.slug} className="tp-other" href={`#/tratamento/${t.slug}`} data-reveal>
          <img src={image(t.photo)} alt="" loading="lazy" width="224" height="115"/>
          <span><strong>{t.title}</strong>{t.text}</span>
          <ArrowRight size={18} aria-hidden="true"/>
        </a>)}</div>
      </div>
    </section>
  </>
}
