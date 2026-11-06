import React from 'react'
import { personne } from '../data/profil'

export default function PiedDePage() {
  return (
    <footer className="pied">
      <ul className="pied-liens">
        <li><a href={personne.linkedin} target="_blank" rel="noopener noreferrer me">LinkedIn</a></li>
        <li><a href={personne.github} target="_blank" rel="noopener noreferrer me">GitHub</a></li>
        <li><a href={`mailto:${personne.email}`}>E-mail</a></li>
        <li><a href={personne.cv} target="_blank" rel="noopener noreferrer">CV (PDF)</a></li>
        <li><a href="/cv.md">CV en texte</a></li>
        <li><a href="/llms.txt">llms.txt</a></li>
      </ul>
      <p>© {new Date().getFullYear()} {personne.nom}</p>
    </footer>
  )
}
