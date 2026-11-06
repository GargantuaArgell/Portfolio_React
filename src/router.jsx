import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { analyser, localiser, normaliser, textes } from './i18n'
import { contenu } from './data/contenu'

const Contexte = createContext(null)

export function Routeur({ cheminInitial, children }) {
  const [url, setUrl] = useState(normaliser(cheminInitial))

  useEffect(() => {
    const surRetour = () => setUrl(normaliser(window.location.pathname))
    window.addEventListener('popstate', surRetour)
    return () => window.removeEventListener('popstate', surRetour)
  }, [])

  const naviguer = useCallback((cible) => {
    window.history.pushState(null, '', cible)
    setUrl(normaliser(cible))
    window.scrollTo(0, 0)
  }, [])

  const valeur = useMemo(() => {
    const { langue, chemin } = analyser(url)
    return { langue, chemin, naviguer, t: textes[langue], donnees: contenu(langue) }
  }, [url, naviguer])

  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>
}

export const useRoute = () => useContext(Contexte)

// `to` est le chemin interne ; `langue` permet de viser l'autre version d'une page.
export function Lien({ to, langue, onClick, ...props }) {
  const route = useRoute()
  const href = localiser(to, langue ?? route.langue)
  const surClic = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    route.naviguer(href)
  }
  return <a href={href} onClick={surClic} {...props} />
}
