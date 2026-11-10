import { BookingIcon, bookingLabel, bookLink, external } from '../data/content'

export function BookButton({ className = 'primary-button', children = bookingLabel }) {
  return <a className={className} href={bookLink} {...external}>
    <BookingIcon size={18} aria-hidden="true"/> <span>{children}</span>
  </a>
}
