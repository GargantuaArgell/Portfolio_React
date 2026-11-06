import React from 'react'
import { Lien, useRoute } from '../router'
import Visuel from '../components/Visuel'

export default function FicheProjet({ projet }) {
  const { t } = useRoute()

  return (
    <article className="fiche">
      <Lien to="/projets" className="retour">{t.tousProjets}</Lien>
      <p className="surtitre">{projet.categorie}</p>
      <h1>{projet.titre}</h1>
      <p className="accroche">{projet.resume}</p>
      <Visuel projet={projet} grand />

      <dl className="infos">
        {projet.contexte && <div><dt>{t.contexte}</dt><dd>{projet.contexte}</dd></div>}
        {projet.equipe && <div><dt>{t.equipe}</dt><dd>{projet.equipe === 1 ? t.individuel : t.personnes(projet.equipe)}</dd></div>}
      </dl>

      <h2>{t.description}</h2>
      <p className="texte">{projet.description}</p>

      <h2>{t.technologies}</h2>
      <ul className="pastilles">
        {projet.technologies.map((x) => <li key={x}>{x}</li>)}
      </ul>

      {projet.depot && (
        <div className="actions">
          <a href={projet.depot} target="_blank" rel="noopener noreferrer" className="bouton bouton-plein">{t.voirCode}</a>
        </div>
      )}
    </article>
  )
}
