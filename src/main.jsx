import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { Routeur } from './router'
import './index.css'

const racine = document.getElementById('root')
const appli = (
  <React.StrictMode>
    <Routeur cheminInitial={window.location.pathname}>
      <App />
    </Routeur>
  </React.StrictMode>
)

if (racine.hasChildNodes()) hydrateRoot(racine, appli)
else createRoot(racine).render(appli)
