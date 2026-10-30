import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { external, image, INSTAGRAM_URL, results } from '../data/content'

export function Results() {
  const windowRef = useRef(null)
  const [edge, setEdge] = useState({ start: true, end: false, scrollable: false })

  const updateEdges = () => {
    const el = windowRef.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4, scrollable: el.scrollWidth > el.clientWidth + 4 })
  }
  useEffect(() => { updateEdges(); window.addEventListener('resize', updateEdges); return () => window.removeEventListener('resize', updateEdges) }, [])
  const move = (dir) => {
    const el = windowRef.current
    const card = el?.querySelector('.result-card')
    if (card) el.scrollBy({ left: dir * (card.offsetWidth + 14), behavior: 'smooth' })
  }

  return <section className="results" id="resultados">
    <div className="results-inner container">
      <div className="results-copy" data-reveal>
        <p className="eyebrow">Resultados reais</p>
        <h2>A beleza<br/>começa no cuidado.</h2>
        <p>Confira alguns dos resultados dos nossos procedimentos e descubra como a estética pode transformar a sua autoestima.</p>
        <a className="result-button" href={INSTAGRAM_URL} {...external}>Ver mais resultados <ArrowRight size={14} aria-hidden="true"/></a>
      </div>
      <div className={`result-gallery ${edge.scrollable ? 'is-scrollable' : ''}`} data-reveal>
        <button type="button" className="gallery-arrow gallery-prev" aria-label="Resultado anterior" onClick={() => move(-1)} disabled={edge.start}><ChevronLeft size={30} strokeWidth={1.4}/></button>
        <div className="gallery-window" ref={windowRef} onScroll={updateEdges} tabIndex={0} aria-label="Galeria de antes e depois">
          {results.map((item) => <figure className="result-card" key={item.image}><img src={image(item.image)} alt={item.alt} loading="lazy" decoding="async" width="204" height="156"/></figure>)}
        </div>
        <button type="button" className="gallery-arrow gallery-next" aria-label="Próximo resultado" onClick={() => move(1)} disabled={edge.end}><ChevronRight size={30} strokeWidth={1.4}/></button>
      </div>
    </div>
    <p className="results-note container">Resultados variam de pessoa para pessoa. A indicação é feita após avaliação individual.</p>
  </section>
}
