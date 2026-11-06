import React, { useEffect, useState } from 'react'
import { useRoute } from '../router'

export default function PortraitNft() {
  const { donnees } = useRoute()
  const { nft, photo } = donnees.personne
  const [ouvert, setOuvert] = useState(false)

  useEffect(() => {
    if (!ouvert) return undefined
    const fermer = () => setOuvert(false)
    const surTouche = (e) => e.key === 'Escape' && fermer()
    document.addEventListener('keydown', surTouche)
    document.addEventListener('scroll', fermer, { passive: true })
    return () => {
      document.removeEventListener('keydown', surTouche)
      document.removeEventListener('scroll', fermer)
    }
  }, [ouvert])

  return (
    <div className={ouvert ? 'nft nft-ouvert' : 'nft'}>
      <button
        type="button"
        className="nft-bouton"
        aria-expanded={ouvert}
        aria-describedby="infobulle-nft"
        onClick={() => setOuvert((v) => !v)}
        onBlur={() => setOuvert(false)}
      >
        <img className="portrait" src={photo} alt={nft.alt} width="320" height="320" />
      </button>
      <div id="infobulle-nft" role="tooltip" className="nft-infobulle">
        <strong>{nft.titre}</strong>
        <span>{nft.texte}</span>
      </div>
    </div>
  )
}
