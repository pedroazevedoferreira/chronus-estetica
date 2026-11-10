import { Plus } from 'lucide-react'
import { faq } from '../data/content'
import { BookButton } from './BookButton'

export function Faq() {
  return <section className="faq" id="duvidas">
    <div className="faq-inner container">
      <div className="faq-intro">
        <h2>Dúvidas frequentes</h2>
        <p>As perguntas que mais recebemos. Se a sua não estiver aqui, é só chamar: a Fernanda responde pessoalmente.</p>
        <BookButton>Tirar uma dúvida</BookButton>
      </div>
      <div className="faq-list">
        {faq.map((item, i) => <details key={item.q} open={i === 0}>
          <summary>{item.q}<Plus size={20} aria-hidden="true"/></summary>
          <p>{item.a}</p>
        </details>)}
      </div>
    </div>
  </section>
}
