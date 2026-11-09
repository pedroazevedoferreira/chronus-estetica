import { useEffect, useState } from 'react'

// "#/tratamento/<slug>" opens a treatment page; any other hash is a section of the home page.
function parse(hash) {
  const match = hash.match(/^#\/tratamento\/([\w-]+)/)
  if (match) return { page: 'treatment', slug: match[1] }
  return { page: 'home', section: hash.slice(1) }
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
