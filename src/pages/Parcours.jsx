import React from 'react'
import { Lien } from '../router'
import { competences, engagements, langues, parcours } from '../data/profil'

export default function Parcours() {
  return (
    <>
      <div className="page-tete">
        <h1>Mon parcours</h1>
        <p className="texte">Un arbre qui pousse depuis ses racines : du plus récent, en haut, au plus ancien.</p>
      </div>

      <ol className="arbre">
        {parcours.map((e) => (
          <li key={e.titre}>
            <article className="feuille">
              <p className="periode">{e.periode}</p>
              <h2>{e.titre}</h2>
              <p className="lieu">{e.lieu}</p>
              <p>{e.description}</p>
              <ul className="pastilles">
                {e.competences.map((c) => <li key={c}>{c}</li>)}
              </ul>
              {e.lien && <Lien to={e.lien} className="feuille-lien">Voir la fiche détaillée</Lien>}
            </article>
          </li>
        ))}
      </ol>

      <section>
        <div className="section-tete"><h2>Compétences</h2></div>
        <div className="grille">
          {competences.map((c) => (
            <div className="bloc" key={c.titre}>
              <h3>{c.titre}</h3>
              <ul className="pastilles">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
          <div className="bloc">
            <h3>Langues</h3>
            <ul className="pastilles">{langues.map((l) => <li key={l.nom}>{l.nom} ({l.niveau})</li>)}</ul>
          </div>
          <div className="bloc">
            <h3>Engagement</h3>
            <ul className="liste">{engagements.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
        </div>
      </section>
    </>
  )
}
