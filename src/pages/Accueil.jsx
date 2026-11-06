import React from 'react'
import { Lien } from '../router'
import { personne, preuves, projets } from '../data/profil'
import CarteProjet from '../components/CarteProjet'

export default function Accueil() {
  return (
    <>
      <section className="heros">
        <div>
          <p className="statut">{personne.statut}</p>
          <h1>{personne.nom}</h1>
          <p className="accroche">{personne.accroche}</p>
          <div className="actions">
            <Lien to="/projets" className="bouton bouton-plein">Voir mes projets</Lien>
            <a href={personne.cv} target="_blank" rel="noopener noreferrer" className="bouton">Télécharger le CV</a>
          </div>
          {personne.bio.map((t) => <p className="texte" key={t.slice(0, 20)}>{t}</p>)}
        </div>
        <img className="portrait" src={personne.photo} alt="Illustration de profil de Félix Grandet" width="320" height="320" />
      </section>

      <ul className="preuves" aria-label="Repères">
        {preuves.map((p) => (
          <li key={p.titre}>
            <Lien to={p.lien}><strong>{p.titre}</strong><span>{p.detail}</span></Lien>
          </li>
        ))}
      </ul>

      <section>
        <div className="section-tete">
          <h2>Projets phares</h2>
          <Lien to="/projets">Tous les projets</Lien>
        </div>
        <div className="grille">
          {projets.filter((p) => p.phare).map((p) => <CarteProjet key={p.slug} projet={p} />)}
        </div>
      </section>
    </>
  )
}
