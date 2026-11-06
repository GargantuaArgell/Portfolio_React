import React from 'react'
import { Lien, useRoute } from '../router'
import CarteProjet from '../components/CarteProjet'
import PortraitNft from '../components/PortraitNft'

export default function Accueil() {
  const { donnees, t } = useRoute()
  const { personne, preuves, projets } = donnees

  return (
    <>
      <section className="heros">
        <div>
          <p className="statut">{personne.statut}</p>
          <h1>{personne.nom}</h1>
          <p className="accroche">{personne.accroche}</p>
          <div className="actions">
            <Lien to="/projets" className="bouton bouton-plein">{t.voirProjets}</Lien>
            <a href={personne.cv} target="_blank" rel="noopener noreferrer" className="bouton">{t.telechargerCv}</a>
          </div>
          {personne.bio.map((texte) => <p className="texte" key={texte.slice(0, 20)}>{texte}</p>)}
        </div>
        <PortraitNft />
      </section>

      <ul className="preuves" aria-label={t.reperes}>
        {preuves.map((p) => (
          <li key={p.titre}>
            <Lien to={p.lien}><strong>{p.titre}</strong><span>{p.detail}</span></Lien>
          </li>
        ))}
      </ul>

      <section>
        <div className="section-tete">
          <h2>{t.projetsPhares}</h2>
          <Lien to="/projets">{t.tousProjets}</Lien>
        </div>
        <div className="grille">
          {projets.filter((p) => p.phare).map((p) => <CarteProjet key={p.slug} projet={p} />)}
        </div>
      </section>
    </>
  )
}
