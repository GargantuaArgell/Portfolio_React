import React, { useState } from 'react'
import { categories, projets } from '../data/profil'
import CarteProjet from '../components/CarteProjet'
import LionConstellation from '../components/LionConstellation'

export default function Projets() {
  const [filtre, setFiltre] = useState('Tous')
  const visibles = filtre === 'Tous' ? projets : projets.filter((p) => p.categorie === filtre)

  return (
    <>
      <div className="page-tete page-tete-lion">
        <div>
          <h1>Mes projets</h1>
          <p className="texte">{projets.length} réalisations, de la cybersécurité au jeu vidéo.</p>
        </div>
        <LionConstellation />
      </div>

      <div className="filtres" role="group" aria-label="Filtrer par domaine">
        {['Tous', ...categories].map((c) => (
          <button key={c} type="button" aria-pressed={filtre === c} onClick={() => setFiltre(c)}>{c}</button>
        ))}
      </div>

      <p className="sr" aria-live="polite">{visibles.length} projets affichés</p>
      <div className="grille">
        {visibles.map((p) => <CarteProjet key={p.slug} projet={p} />)}
      </div>
    </>
  )
}
