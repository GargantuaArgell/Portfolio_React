import React from 'react'
import { Lien } from '../router'
import Visuel from '../components/Visuel'

export default function FicheProjet({ projet }) {
  return (
    <article className="fiche">
      <Lien to="/projets" className="retour">Tous les projets</Lien>
      <p className="surtitre">{projet.categorie}</p>
      <h1>{projet.titre}</h1>
      <p className="accroche">{projet.resume}</p>
      <Visuel projet={projet} grand />

      <dl className="infos">
        {projet.contexte && <div><dt>Contexte</dt><dd>{projet.contexte}</dd></div>}
        {projet.equipe && <div><dt>Équipe</dt><dd>{projet.equipe === 1 ? 'Projet individuel' : `${projet.equipe} personnes`}</dd></div>}
      </dl>

      <h2>Description</h2>
      <p className="texte">{projet.description}</p>

      <h2>Technologies</h2>
      <ul className="pastilles">
        {projet.technologies.map((t) => <li key={t}>{t}</li>)}
      </ul>

      {projet.depot && (
        <div className="actions">
          <a href={projet.depot} target="_blank" rel="noopener noreferrer" className="bouton bouton-plein">Voir le code sur GitHub</a>
        </div>
      )}
    </article>
  )
}
