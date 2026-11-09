import { useEffect, useState } from 'react'

// `routeKey` re-attaches the observer when the page changes and the sections are re-rendered.
export function useActiveSection(ids, routeKey) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [ids, routeKey])
  return active
}
