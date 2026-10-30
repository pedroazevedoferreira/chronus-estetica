import { Clock3, Instagram, MapPin } from 'lucide-react'
import { external, hours, image, INSTAGRAM_URL, mapsLink } from '../data/content'
import { BookButton } from './BookButton'

export function Contact() {
  return <section className="contact" id="contato">
    <div className="contact-intro" data-reveal>
      <p className="eyebrow">Onde estamos</p>
      <h2>Centro, Niterói | RJ</h2>
      <p className="location-line"><MapPin size={22} aria-hidden="true"/> Fácil acesso, em uma localização privilegiada no centro da cidade.</p>
      <BookButton/>
    </div>
    <div className="clinic-image" data-reveal><img src={image('clinic-room.jpg')} alt="Recepção da Chronus Estética" loading="lazy" decoding="async" width="310" height="169"/></div>
    <div className="contact-info" data-reveal>
      <div className="hours">
        <p className="eyebrow">Horário de atendimento</p>
        <div><Clock3 aria-hidden="true"/><dl>{hours.map(({ days, time }) => <div key={days}><dt>{days}</dt><dd>{time}</dd></div>)}</dl></div>
      </div>
      <div className="social">
        <p className="eyebrow">Nos acompanhe</p>
        <a href={INSTAGRAM_URL} {...external}><Instagram aria-hidden="true"/>@chronus.estetica</a>
      </div>
    </div>
    <a href={mapsLink} {...external} className="map-image" aria-label="Abrir localização no Google Maps"><img src={image('map-reference.jpg')} alt="" loading="lazy" decoding="async" width="197" height="169"/></a>
  </section>
}
