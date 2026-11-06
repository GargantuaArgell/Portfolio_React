import React from 'react'
import { Lien } from '../router'
import Visuel from './Visuel'

export default function CarteProjet({ projet }) {
  return (
    <article className="carte">
      <Visuel projet={projet} />
      <div className="carte-corps">
        <p className="surtitre">{projet.categorie}</p>
        <h3><Lien to={`/projets/${projet.slug}`} className="carte-lien">{projet.titre}</Lien></h3>
        <p>{projet.resume}</p>
        <ul className="pastilles">
          {projet.technologies.slice(0, 3).map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  )
}
