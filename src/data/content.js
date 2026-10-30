import { Gem, Instagram, Leaf, MessageCircle, ShieldPlus } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../siteConfig'

// Resolve images in public/images respecting the base path used on GitHub Pages.
export const image = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const bookLink = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Chronus Estética.')}`
  : INSTAGRAM_URL
export const bookingLabel = WHATSAPP_NUMBER ? 'Agendar pelo WhatsApp' : 'Fale pelo Instagram'
export const BookingIcon = WHATSAPP_NUMBER ? MessageCircle : Instagram
export const external = { target: '_blank', rel: 'noreferrer' }
export const mapsLink = 'https://maps.google.com/?q=Centro,+Niter%C3%B3i,+RJ'
export { INSTAGRAM_URL }

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'contato', label: 'Contato' },
]

export const benefits = [
  { icon: Gem, text: 'Atendimento personalizado' },
  { icon: ShieldPlus, text: 'Procedimentos seguros' },
  { icon: Leaf, text: 'Beleza natural e harmônica' },
]

export const treatments = [
  { title: 'Estética Facial', text: 'Cuidados para uma pele mais saudável e radiante.', photo: 'treatment-facial.jpg' },
  { title: 'Harmonização Facial', text: 'Equilíbrio e naturalidade para o seu rosto.', photo: 'treatment-lips.jpg' },
  { title: 'Estética Corporal', text: 'Tratamentos para a sua melhor versão.', photo: 'treatment-body.jpg' },
  { title: 'Tratamentos de Pele', text: 'Limpeza, rejuvenescimento e muito mais.', photo: 'treatment-skin.jpg' },
]

export const team = [
  { key: 'fernanda', name: 'Fernanda Cavalcante', role: 'Biomédica Esteta', reg: 'CRBM 34832', photo: 'fernanda-profile.jpg', bio: 'Formação em Biomedicina com especialização em Estética e Pós-graduação em Ciências Médicas pela FCM/UERJ.' },
  { key: 'andrea', name: 'Andrea Cavalcante', role: 'Esteticista Expert', photo: 'andrea-profile.jpg', bio: 'Mais de 3 anos de atuação na área da beleza, especialista em tratamentos estéticos faciais e corporais não invasivos.' },
]

export const results = [
  { image: 'result-nose.jpg', alt: 'Antes e depois de procedimento no nariz' },
  { image: 'result-lips.jpg', alt: 'Antes e depois de procedimento nos lábios' },
  { image: 'result-skin.jpg', alt: 'Antes e depois de tratamento de pele' },
]

export const hours = [
  { days: 'Segunda a sexta', time: '9h às 19h' },
  { days: 'Sábado', time: '9h às 13h' },
]
