import { useEffect } from 'react'

// Adds .is-visible to every [data-reveal] element the first time it enters the viewport.
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { rootMargin: '0px 0px -6% 0px', threshold: 0.1 })
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
