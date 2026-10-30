import { ArrowRight } from 'lucide-react'
import { BookingIcon, bookingLabel, bookLink, external } from '../data/content'

export function BookButton({ className = 'primary-button', children = bookingLabel, arrow = true }) {
  return <a className={className} href={bookLink} {...external}>
    <BookingIcon size={17} aria-hidden="true"/> <span>{children}</span>
    {arrow && <ArrowRight size={16} aria-hidden="true"/>}
  </a>
}
