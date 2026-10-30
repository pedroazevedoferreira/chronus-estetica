import { image, team } from '../data/content'
import { BookButton } from './BookButton'

export function About() {
  return <section className="about section" id="sobre">
    <div className="about-inner container">
      <div className="about-intro" data-reveal>
        <p className="eyebrow">Conheça nossas especialistas</p>
        <h2>Profissionais que cuidam <em>de você</em></h2>
        <p>Mais do que procedimentos, oferecemos escuta, orientação e um atendimento humanizado, com foco na sua autoestima e bem-estar.</p>
        <BookButton>Agende com a equipe</BookButton>
      </div>
      <div className="team">
        {team.map((p, i) => <article className={`team-card team-card-${p.key}`} key={p.key} data-reveal style={{ '--delay': `${i * 120}ms` }}>
          <div className="team-photo"><img src={image(p.photo)} alt={`Retrato de ${p.name}`} loading="lazy" decoding="async" width="300" height="460"/></div>
          <div className="team-copy"><h3>{p.name}</h3><p className="person-role">{p.role}{p.reg && <><br/>{p.reg}</>}</p><p>{p.bio}</p></div>
        </article>)}
      </div>
    </div>
  </section>
}
