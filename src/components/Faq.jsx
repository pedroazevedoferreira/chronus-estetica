import { Plus } from 'lucide-react'
import { faq } from '../data/content'
import { BookButton } from './BookButton'

export function Faq() {
  return <section className="faq" id="duvidas">
    <div className="faq-inner container">
      <div className="faq-intro" data-reveal>
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2>Ficou com alguma <em>dúvida?</em></h2>
        <p>Reunimos as perguntas mais comuns. Se a sua não estiver aqui, é só chamar — a Fernanda responde pessoalmente.</p>
        <BookButton>Tirar uma dúvida</BookButton>
      </div>
      <div className="faq-list" data-reveal style={{ '--delay': '120ms' }}>
        {faq.map((item, i) => <details key={item.q} open={i === 0}>
          <summary>{item.q}<Plus size={20} aria-hidden="true"/></summary>
          <p>{item.a}</p>
        </details>)}
      </div>
    </div>
  </section>
}
