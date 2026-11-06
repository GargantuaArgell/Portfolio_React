import React from 'react'
import { useRoute } from '../router'

export default function PiedDePage() {
  const { donnees, langue, t } = useRoute()
  const { personne } = donnees
  const prefixe = langue === 'fr' ? '' : '/en'

  return (
    <footer className="pied">
      <ul className="pied-liens">
        <li><a href={personne.linkedin} target="_blank" rel="noopener noreferrer me">LinkedIn</a></li>
        <li><a href={personne.github} target="_blank" rel="noopener noreferrer me">GitHub</a></li>
        <li><a href={`mailto:${personne.email}`}>{t.email}</a></li>
        <li><a href={personne.cv} target="_blank" rel="noopener noreferrer">{t.cvPdf}</a></li>
        <li><a href={`${prefixe}/cv.md`}>{t.cvTexte}</a></li>
        <li><a href={`${prefixe}/llms.txt`}>llms.txt</a></li>
      </ul>
      <p>© {new Date().getFullYear()} {personne.nom}</p>
    </footer>
  )
}
