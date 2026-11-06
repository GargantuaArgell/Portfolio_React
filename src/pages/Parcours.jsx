import React from 'react'
import { Lien, useRoute } from '../router'

export default function Parcours() {
  const { donnees, t } = useRoute()
  const { competences, engagements, langues, parcours } = donnees

  return (
    <>
      <div className="page-tete">
        <h1>{t.monParcours}</h1>
        <p className="texte">{t.introParcours}</p>
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
              {e.lien && <Lien to={e.lien} className="feuille-lien">{t.voirFiche}</Lien>}
            </article>
          </li>
        ))}
      </ol>

      <section>
        <div className="section-tete"><h2>{t.competences}</h2></div>
        <div className="grille">
          {competences.map((c) => (
            <div className="bloc" key={c.titre}>
              <h3>{c.titre}</h3>
              <ul className="pastilles">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
          <div className="bloc">
            <h3>{t.langues}</h3>
            <ul className="pastilles">{langues.map((l) => <li key={l.nom}>{l.nom} ({l.niveau})</li>)}</ul>
          </div>
          <div className="bloc">
            <h3>{t.engagement}</h3>
            <ul className="liste">{engagements.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
        </div>
      </section>
    </>
  )
}
