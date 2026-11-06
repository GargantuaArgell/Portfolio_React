import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { Routeur } from './router'
import { analyser, langueNavigateur, lireChoix, localiser } from './i18n'
import './index.css'

const { langue, chemin } = analyser(window.location.pathname)
const choix = lireChoix()
const estErreur = 'erreur' in document.documentElement.dataset

// Un lien /en reste en anglais. Les pages françaises s'adaptent au navigateur,
// sauf si le visiteur a choisi sa langue dans le menu.
const voulue = choix ?? (langue === 'fr' ? langueNavigateur() : langue)

if (voulue !== langue && !estErreur) {
  window.location.replace(localiser(chemin, voulue) + window.location.hash)
} else {
  const racine = document.getElementById('root')
  const appli = (
    <React.StrictMode>
      <Routeur cheminInitial={window.location.pathname}>
        <App />
      </Routeur>
    </React.StrictMode>
  )
  // La page 404 unique est générée en français : elle est recalculée pour /en.
  if (racine.hasChildNodes() && !estErreur) hydrateRoot(racine, appli)
  else createRoot(racine).render(appli)
}
