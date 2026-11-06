import React from 'react'
import { Lien, useRoute } from '../router'

export default function Introuvable() {
  const { t } = useRoute()

  return (
    <div className="page-tete">
      <h1>{t.introuvable}</h1>
      <p className="texte">{t.introuvableTexte}</p>
      <div className="actions"><Lien to="/" className="bouton bouton-plein">{t.retourProfil}</Lien></div>
    </div>
  )
}
