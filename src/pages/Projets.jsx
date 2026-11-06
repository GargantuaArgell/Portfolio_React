import React, { useState } from 'react'
import { useRoute } from '../router'
import CarteProjet from '../components/CarteProjet'
import LionConstellation from '../components/LionConstellation'

export default function Projets() {
  const { donnees, t } = useRoute()
  const { categories, projets } = donnees
  const [filtre, setFiltre] = useState(null)
  const visibles = filtre ? projets.filter((p) => p.categorie === filtre) : projets

  return (
    <>
      <div className="page-tete page-tete-lion">
        <div>
          <h1>{t.mesProjets}</h1>
          <p className="texte">{t.realisations(projets.length)}</p>
        </div>
        <LionConstellation />
      </div>

      <div className="filtres" role="group" aria-label={t.filtrer}>
        <button type="button" aria-pressed={filtre === null} onClick={() => setFiltre(null)}>{t.tous}</button>
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={filtre === c} onClick={() => setFiltre(c)}>{c}</button>
        ))}
      </div>

      <p className="sr" aria-live="polite">{t.affiches(visibles.length)}</p>
      <div className="grille">
        {visibles.map((p) => <CarteProjet key={p.slug} projet={p} />)}
      </div>
    </>
  )
}
