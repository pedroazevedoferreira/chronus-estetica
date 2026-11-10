import { useEffect, useRef } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Results } from './components/Results'
import { Testimonials } from './components/Testimonials'
import { TreatmentPage } from './components/TreatmentPage'
import { Treatments } from './components/Treatments'
import { WhatsAppIcon } from './components/WhatsAppIcon'
import { BookingIcon, bookingLabel, bookLink, external, hasWhatsApp, treatments } from './data/content'
import { useHashRoute } from './hooks/useHashRoute'
import { useScrolled } from './hooks/useScrolled'

const baseTitle = 'Chronus Estética | Você merece a sua melhor versão'

function App() {
  const route = useHashRoute()
  const previousPage = useRef(null)
  const showFloating = useScrolled(520)

  useEffect(() => {
    if (route.page === 'treatment') {
      const item = treatments.find((t) => t.slug === route.slug)
      document.title = item ? `${item.title} | Chronus Estética` : baseTitle
      window.scrollTo(0, 0)
    } else {
      document.title = baseTitle
      // On first load or coming back from a treatment page the section only exists after this render,
      // so the browser's own anchor jump missed it: scroll manually.
      if (previousPage.current !== 'home') {
        const target = route.section && document.getElementById(route.section)
        if (target) target.scrollIntoView()
        else if (previousPage.current === 'treatment') window.scrollTo(0, 0)
      }
    }
    previousPage.current = route.page
  }, [route])

  const skipToContent = (e) => { e.preventDefault(); document.getElementById('conteudo')?.focus() }

  return <>
    <a className="skip-link" href="#conteudo" onClick={skipToContent}>Pular para o conteúdo</a>
    <Header page={route.page}/>
    <main id="conteudo" tabIndex={-1}>
      {route.page === 'treatment'
        ? <TreatmentPage slug={route.slug}/>
        : <>
          <Hero/>
          <Treatments/>
          <About/>
          <Results/>
          <Testimonials/>
          <Faq/>
          <Contact/>
        </>}
    </main>
    <Footer/>
    {hasWhatsApp
      ? <a className="whatsapp-fab" href={bookLink} {...external} aria-label={bookingLabel}><WhatsAppIcon size={30} aria-hidden="true"/></a>
      : <a className={`mobile-book ${showFloating ? 'is-visible' : ''}`} href={bookLink} {...external} tabIndex={showFloating ? 0 : -1} aria-hidden={!showFloating}><BookingIcon size={18} aria-hidden="true"/> {bookingLabel}</a>}
  </>
}

export default App
