import React from 'react'
import { useRoute } from '../router'

export default function Contact() {
  const { donnees, t } = useRoute()
  const { personne } = donnees

  return (
    <>
      <div className="page-tete">
        <h1>{t.contact}</h1>
        <p className="texte">{t.introContact}</p>
      </div>
      <div className="grille grille-contact">
        <a className="bloc bloc-lien" href={`mailto:${personne.email}`}>
          <h2>{t.email}</h2><span>{personne.email}</span>
        </a>
        <a className="bloc bloc-lien" href={personne.linkedin} target="_blank" rel="noopener noreferrer">
          <h2>LinkedIn</h2><span>{personne.nom}</span>
        </a>
        <a className="bloc bloc-lien" href={personne.github} target="_blank" rel="noopener noreferrer">
          <h2>GitHub</h2><span>GargantuaArgell</span>
        </a>
        <div className="bloc">
          <h2>{t.localisation}</h2><span>{personne.ville}</span>
        </div>
        <div className="bloc">
          <h2>{t.statut}</h2><span>{personne.statut}</span>
        </div>
      </div>
    </>
  )
}
