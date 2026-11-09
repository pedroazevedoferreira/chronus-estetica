import { useEffect } from 'react'

// Adds .is-visible to every [data-reveal] element the first time it enters the viewport.
// `routeKey` re-scans the page after navigating between the home and a treatment page.
export function useReveal(routeKey) {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { rootMargin: '0px 0px -6% 0px', threshold: 0.1 })
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [routeKey])
}
