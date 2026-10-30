import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Results } from './components/Results'
import { Treatments } from './components/Treatments'
import { BookingIcon, bookingLabel, bookLink, external } from './data/content'
import { useReveal } from './hooks/useReveal'
import { useScrolled } from './hooks/useScrolled'

function App() {
  useReveal()
  const showMobileBook = useScrolled(520)
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header/>
    <main id="conteudo">
      <Hero/>
      <Treatments/>
      <About/>
      <Results/>
      <Contact/>
    </main>
    <Footer/>
    <a className={`mobile-book ${showMobileBook ? 'is-visible' : ''}`} href={bookLink} {...external} tabIndex={showMobileBook ? 0 : -1} aria-hidden={!showMobileBook}><BookingIcon size={18} aria-hidden="true"/> {bookingLabel}</a>
  </>
}

export default App
