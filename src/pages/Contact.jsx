import React from 'react'
import { personne } from '../data/profil'

export default function Contact() {
  return (
    <>
      <div className="page-tete">
        <h1>Contact</h1>
        <p className="texte">Le plus simple est de m'écrire par e-mail ou sur LinkedIn.</p>
      </div>
      <div className="grille grille-contact">
        <a className="bloc bloc-lien" href={`mailto:${personne.email}`}>
          <h2>E-mail</h2><span>{personne.email}</span>
        </a>
        <a className="bloc bloc-lien" href={personne.linkedin} target="_blank" rel="noopener noreferrer">
          <h2>LinkedIn</h2><span>Félix Grandet</span>
        </a>
        <a className="bloc bloc-lien" href={personne.github} target="_blank" rel="noopener noreferrer">
          <h2>GitHub</h2><span>GargantuaArgell</span>
        </a>
        <div className="bloc">
          <h2>Localisation</h2><span>{personne.ville}</span>
        </div>
        <div className="bloc">
          <h2>Statut</h2><span>{personne.statut}</span>
        </div>
      </div>
    </>
  )
}
