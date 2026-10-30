import { ArrowUpRight, Clock3, Instagram, MapPin } from 'lucide-react'
import { external, hours, image, INSTAGRAM_URL, mapsLink } from '../data/content'
import { BookButton } from './BookButton'

export function Contact() {
  return <section className="contact section" id="contato">
    <div className="contact-inner container">
      <div className="contact-intro" data-reveal>
        <p className="eyebrow">Onde estamos</p>
        <h2>Centro, Niterói <span>| RJ</span></h2>
        <p className="location-line"><MapPin size={18} aria-hidden="true"/> Fácil acesso, em uma localização privilegiada no centro da cidade.</p>
        <BookButton/>
      </div>
      <div className="clinic-image" data-reveal><img src={image('clinic-room.jpg')} alt="Recepção da Chronus Estética" loading="lazy" decoding="async" width="310" height="169"/></div>
      <div className="contact-info" data-reveal>
        <div className="hours">
          <p className="eyebrow">Horário de atendimento</p>
          <div><Clock3 aria-hidden="true"/><dl>{hours.map(({ days, time }) => <div key={days}><dt>{days}</dt><dd>{time}</dd></div>)}</dl></div>
        </div>
        <div className="social"><p className="eyebrow">Nos acompanhe</p><a href={INSTAGRAM_URL} {...external}><Instagram aria-hidden="true"/>@chronus.estetica <ArrowUpRight size={14} aria-hidden="true"/></a></div>
      </div>
      <a href={mapsLink} {...external} className="map-image" data-reveal><img src={image('map-reference.jpg')} alt="" loading="lazy" decoding="async" width="197" height="169"/><span>Abrir no Google Maps <ArrowUpRight size={14} aria-hidden="true"/></span></a>
    </div>
  </section>
}
