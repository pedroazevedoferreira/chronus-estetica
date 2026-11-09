import { ArrowUpRight, Clock3, Instagram, MapPin } from 'lucide-react'
import { external, hours, image, INSTAGRAM_URL, mapEmbed, mapsLink } from '../data/content'
import { BookButton } from './BookButton'

export function Contact() {
  return <section className="contact" id="contato">
    <div className="contact-inner container">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Onde estamos</p>
        <h2>Centro, Niterói <span>| RJ</span></h2>
        <p className="location-line"><MapPin size={22} aria-hidden="true"/><span>Av. Ernani do Amaral Peixoto, Centro.<br/>Fácil acesso, em uma localização privilegiada.</span></p>
        <div className="contact-info">
          <div className="hours">
            <p className="eyebrow">Horário de atendimento</p>
            <div><Clock3 aria-hidden="true"/><dl>{hours.map(({ days, time }) => <div key={days}><dt>{days}</dt><dd>{time}</dd></div>)}</dl></div>
          </div>
          <div className="social">
            <p className="eyebrow">Nos acompanhe</p>
            <a href={INSTAGRAM_URL} {...external}><Instagram aria-hidden="true"/>@chronus.estetica</a>
          </div>
        </div>
        <BookButton/>
      </div>

      <div className="contact-map" data-reveal style={{ '--delay': '120ms' }}>
        <div className="map-embed">
          <iframe src={mapEmbed} title="Mapa: Av. Ernani do Amaral Peixoto, Centro, Niterói" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
        </div>
        <a className="map-directions" href={mapsLink} {...external}>Como chegar <ArrowUpRight size={14} aria-hidden="true"/></a>
        <figure className="clinic-card">
          <img src={image('clinic-room.jpg')} alt="Recepção da Chronus Estética" loading="lazy" decoding="async" width="310" height="169"/>
          <figcaption>Nossa recepção</figcaption>
        </figure>
      </div>
    </div>
  </section>
}
