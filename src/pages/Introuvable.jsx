import React from 'react'
import { Lien } from '../router'

export default function Introuvable() {
  return (
    <div className="page-tete">
      <h1>Page introuvable</h1>
      <p className="texte">Cette page n'existe pas ou a changé d'adresse.</p>
      <div className="actions"><Lien to="/" className="bouton bouton-plein">Retour au profil</Lien></div>
    </div>
  )
}
