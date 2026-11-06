import React, { useEffect, useRef, useState } from 'react'
import { Lien, useRoute } from '../router'
import { LANGUES, NOMS_LANGUES, enregistrerChoix } from '../i18n'

export default function MenuLangue() {
  const { chemin, langue, t } = useRoute()
  const [ouvert, setOuvert] = useState(false)
  const zone = useRef(null)
  const bouton = useRef(null)

  useEffect(() => {
    if (!ouvert) return undefined
    const surClic = (e) => {
      if (!zone.current?.contains(e.target)) setOuvert(false)
    }
    const surTouche = (e) => {
      if (e.key === 'Escape') {
        setOuvert(false)
        bouton.current?.focus()
      }
    }
    document.addEventListener('pointerdown', surClic)
    document.addEventListener('keydown', surTouche)
    return () => {
      document.removeEventListener('pointerdown', surClic)
      document.removeEventListener('keydown', surTouche)
    }
  }, [ouvert])

  return (
    <div className="langue" ref={zone}>
      <button
        ref={bouton}
        type="button"
        className="langue-bouton"
        aria-label={t.changerLangue}
        aria-expanded={ouvert}
        aria-controls="liste-langues"
        onClick={() => setOuvert((v) => !v)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" />
          <ellipse cx="12" cy="12" rx="4.3" ry="9.5" />
          <path d="M2.5 12h19M4 7h16M4 17h16" />
        </svg>
      </button>
      <ul id="liste-langues" className="langue-liste" hidden={!ouvert}>
        {LANGUES.map((l) => (
          <li key={l}>
            <Lien
              to={chemin}
              langue={l}
              lang={l}
              hrefLang={l}
              aria-current={l === langue ? 'true' : undefined}
              onClick={() => {
                enregistrerChoix(l)
                setOuvert(false)
              }}
            >
              {NOMS_LANGUES[l]}
            </Lien>
          </li>
        ))}
      </ul>
    </div>
  )
}
