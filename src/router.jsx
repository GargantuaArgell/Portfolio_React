import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

const Contexte = createContext({ chemin: '/', naviguer: () => {} })

export const normaliser = (chemin) => (chemin.length > 1 ? chemin.replace(/\/+$/, '') : chemin) || '/'

export function Routeur({ cheminInitial, children }) {
  const [chemin, setChemin] = useState(normaliser(cheminInitial))

  useEffect(() => {
    const surRetour = () => setChemin(normaliser(window.location.pathname))
    window.addEventListener('popstate', surRetour)
    return () => window.removeEventListener('popstate', surRetour)
  }, [])

  const naviguer = useCallback((cible) => {
    window.history.pushState(null, '', cible)
    setChemin(normaliser(cible))
    window.scrollTo(0, 0)
  }, [])

  return <Contexte.Provider value={{ chemin, naviguer }}>{children}</Contexte.Provider>
}

export const useRoute = () => useContext(Contexte)

export function Lien({ to, onClick, ...props }) {
  const { naviguer } = useRoute()
  const surClic = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    naviguer(to)
  }
  return <a href={to} onClick={surClic} {...props} />
}
