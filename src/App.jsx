import React, { useEffect, useRef } from 'react'
import { useRoute } from './router'
import { localiser } from './i18n'
import { meta, trouverProjet } from './data/seo'
import Navigation from './components/Navigation'
import PiedDePage from './components/PiedDePage'
import StarField from './components/StarField'
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'
import FicheProjet from './pages/FicheProjet'
import Parcours from './pages/Parcours'
import Contact from './pages/Contact'
import Introuvable from './pages/Introuvable'

function Page({ chemin, langue }) {
  if (chemin === '/') return <Accueil />
  if (chemin === '/projets') return <Projets />
  if (chemin === '/parcours') return <Parcours />
  if (chemin === '/contact') return <Contact />
  const projet = trouverProjet(chemin, langue)
  return projet ? <FicheProjet projet={projet} /> : <Introuvable />
}

export default function App() {
  const { chemin, langue, t } = useRoute()
  const premierRendu = useRef(true)

  useEffect(() => {
    document.title = meta(localiser(chemin, langue)).titre
    document.documentElement.lang = langue
    if (premierRendu.current) {
      premierRendu.current = false
      return
    }
    document.getElementById('contenu')?.focus({ preventScroll: true })
  }, [chemin, langue])

  return (
    <>
      <a className="evitement" href="#contenu">{t.allerContenu}</a>
      <StarField />
      <Navigation />
      <main id="contenu" tabIndex={-1}>
        <Page key={langue} chemin={chemin} langue={langue} />
      </main>
      <PiedDePage />
    </>
  )
}
