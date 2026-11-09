import { Gem, Instagram, Leaf, ShieldPlus } from 'lucide-react'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../siteConfig'

// Conteúdo marcado com "EXEMPLO" é fictício: substitua pelo real antes de divulgar o site.

// Resolve images in public/images respecting the base path used on GitHub Pages.
export const image = (file) => `${import.meta.env.BASE_URL}images/${file}`

// Invalid number used only in `npm run dev` to preview the WhatsApp look. The published site never uses it.
const DEMO_WHATSAPP = '5521000000000'
const whatsapp = WHATSAPP_NUMBER || (import.meta.env.DEV ? DEMO_WHATSAPP : '')
export const hasWhatsApp = Boolean(whatsapp)

export const bookLink = hasWhatsApp
  ? `https://wa.me/${whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Chronus Estética.')}`
  : INSTAGRAM_URL
export const bookingLabel = hasWhatsApp ? 'Agendar pelo WhatsApp' : 'Fale pelo Instagram'
export const BookingIcon = hasWhatsApp ? WhatsAppIcon : Instagram
export const external = { target: '_blank', rel: 'noreferrer' }
// Add the building number here once confirmed, e.g. 'Av. Ernani do Amaral Peixoto, 123 - Centro, Niterói - RJ'.
export const address = 'Av. Ernani do Amaral Peixoto - Centro, Niterói - RJ'
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`
export { INSTAGRAM_URL }

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'duvidas', label: 'Dúvidas' },
  { id: 'contato', label: 'Contato' },
]

export const benefits = [
  { icon: Gem, text: 'Atendimento personalizado' },
  { icon: ShieldPlus, text: 'Procedimentos seguros' },
  { icon: Leaf, text: 'Beleza natural e harmônica' },
]

// Each treatment also has its own page at #/tratamento/<slug>.
// EXEMPLO: indicações, procedimentos e informações das sessões — revise com a Fernanda.
// Fotos: troque os arquivos em public/images mantendo os nomes (ideal: 1200 px de largura ou mais).
export const treatments = [
  {
    slug: 'estetica-facial',
    title: 'Estética Facial',
    text: 'Cuidados para uma pele mais saudável e radiante.',
    photo: 'treatment-facial.jpg',
    lead: 'Protocolos personalizados para limpar, renovar e hidratar a pele, respeitando o seu tipo de pele e o seu momento.',
    indications: ['Pele opaca ou desidratada', 'Cravos, poros dilatados e oleosidade', 'Preparação da pele para eventos', 'Manutenção da saúde da pele'],
    procedures: ['Limpeza de pele profunda', 'Peeling químico superficial', 'Hidratação e revitalização facial'],
    info: { duration: '60 a 90 min', sessions: 'Mensal ou conforme avaliação', recovery: 'Retorno imediato à rotina' },
  },
  {
    slug: 'harmonizacao-facial',
    title: 'Harmonização Facial',
    text: 'Equilíbrio e naturalidade para o seu rosto.',
    photo: 'treatment-lips.jpg',
    lead: 'Procedimentos minimamente invasivos para realçar os seus traços com equilíbrio e naturalidade, sem exageros.',
    indications: ['Lábios finos ou assimétricos', 'Linhas de expressão', 'Perda de contorno facial', 'Olheiras e sulcos marcados'],
    procedures: ['Preenchimento labial com ácido hialurônico', 'Toxina botulínica', 'Bioestimuladores de colágeno'],
    info: { duration: '30 a 60 min', sessions: 'Conforme o procedimento', recovery: 'No mesmo dia, com cuidados por 24h' },
  },
  {
    slug: 'estetica-corporal',
    title: 'Estética Corporal',
    text: 'Tratamentos para a sua melhor versão.',
    photo: 'treatment-body.jpg',
    lead: 'Tratamentos para contorno, firmeza e bem-estar, com protocolos pensados para o seu corpo e os seus objetivos.',
    indications: ['Gordura localizada', 'Celulite', 'Flacidez de pele', 'Retenção de líquidos'],
    procedures: ['Drenagem linfática', 'Tecnologias para gordura localizada', 'Protocolos para celulite e flacidez'],
    info: { duration: '50 a 60 min', sessions: 'Pacotes de 8 a 10 sessões', recovery: 'Retorno imediato à rotina' },
  },
  {
    slug: 'tratamentos-de-pele',
    title: 'Tratamentos de Pele',
    text: 'Limpeza, rejuvenescimento e muito mais.',
    photo: 'treatment-skin.jpg',
    lead: 'Cuidado direcionado para manchas, acne, textura e sinais do tempo, com técnicas que estimulam a renovação da pele.',
    indications: ['Manchas e melasma', 'Acne e marcas de acne', 'Textura irregular', 'Rugas finas e perda de viço'],
    procedures: ['Microagulhamento', 'Peelings', 'Skinboosters'],
    info: { duration: '45 a 60 min', sessions: '3 a 6 sessões, a cada 30 dias', recovery: 'Pode haver vermelhidão por 24 a 48h' },
  },
]

export const treatmentSteps = [
  { title: 'Avaliação', text: 'Conversa individual para entender seus objetivos e analisar a região a ser tratada.' },
  { title: 'Procedimento', text: 'Realizado com técnica, produtos de qualidade e todo o cuidado com o seu conforto.' },
  { title: 'Acompanhamento', text: 'Orientações de cuidados em casa e retorno para avaliar a evolução do resultado.' },
]

export const specialist = {
  first: 'Fernanda',
  last: 'Cavalcante',
  name: 'Fernanda Cavalcante',
  role: 'Biomédica Esteta',
  reg: 'CRBM 34832',
  photo: 'fernanda-profile.jpg',
  bio: 'Mais do que procedimentos, Fernanda oferece escuta, orientação e um atendimento humanizado, com foco na sua autoestima e bem-estar. Cada tratamento começa com uma avaliação individual.',
  credentials: [
    'Graduação em Biomedicina',
    'Especialização em Estética',
    'Pós-graduação em Ciências Médicas — FCM/UERJ',
  ],
}

export const results = [
  { image: 'result-nose.jpg', alt: 'Antes e depois de procedimento no nariz' },
  { image: 'result-lips.jpg', alt: 'Antes e depois de procedimento nos lábios' },
  { image: 'result-skin.jpg', alt: 'Antes e depois de tratamento de pele' },
]

// EXEMPLO: depoimentos fictícios. Enquanto algum tiver `example: true`, o site mostra
// "Depoimentos ilustrativos". Troque pelos relatos reais (com autorização) e apague `example: true`.
export const testimonials = [
  { name: 'Mariana S.', treatment: 'Harmonização Facial', text: 'Fui muito bem acolhida desde a avaliação. O resultado ficou natural, exatamente como eu queria.', example: true },
  { name: 'Juliana R.', treatment: 'Tratamentos de Pele', text: 'A Fernanda explicou cada etapa com calma e paciência. Minha pele mudou e eu me sinto muito mais confiante.', example: true },
  { name: 'Carla M.', treatment: 'Estética Corporal', text: 'Ambiente lindo e atendimento atencioso. Saio de cada sessão me sentindo renovada.', example: true },
]

// Revise as respostas com a Fernanda.
export const faq = [
  { q: 'Como funciona a avaliação?', a: 'É uma conversa individual com a Fernanda para entender seus objetivos, analisar sua pele ou a região a ser tratada e indicar o protocolo mais adequado. Nenhum procedimento é feito sem essa etapa.' },
  { q: 'Os procedimentos doem?', a: 'A maioria é bem tolerada. Quando necessário, são usados anestésico tópico e técnicas para deixar você confortável durante todo o atendimento.' },
  { q: 'Quanto tempo duram os resultados?', a: 'Depende do procedimento e do organismo de cada pessoa. Na avaliação você recebe uma estimativa realista e as orientações para prolongar os resultados.' },
  { q: 'Quantas sessões vou precisar?', a: 'Alguns tratamentos mostram resultado em uma sessão; outros funcionam melhor em protocolos. O número de sessões é definido na avaliação.' },
  { q: 'Posso voltar à rotina no mesmo dia?', a: 'Na maioria dos casos, sim. Você recebe por escrito as orientações de cuidados para os dias seguintes ao procedimento.' },
  { q: 'Quais são as formas de pagamento?', a: 'As formas de pagamento e as condições de parcelamento são informadas no momento do agendamento.' },
]

export const hours = [
  { days: 'Segunda a sexta', time: '9h às 19h' },
  { days: 'Sábado', time: '9h às 13h' },
]
