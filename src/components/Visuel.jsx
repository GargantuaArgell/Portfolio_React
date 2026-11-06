import React from 'react'
import { useRoute } from '../router'

export default function Visuel({ projet, grand = false }) {
  const { t } = useRoute()
  if (projet.image) {
    return (
      <img
        className={grand ? 'visuel visuel-grand' : 'visuel'}
        src={projet.image}
        alt={t.apercu(projet.titre)}
        loading={grand ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }
  return (
    <div className={grand ? 'visuel visuel-grand visuel-vide' : 'visuel visuel-vide'} aria-hidden="true">
      <svg viewBox="0 0 120 60">
        <path d="M14 42 38 16 62 34 86 12 106 40" />
        <circle cx="14" cy="42" r="2.4" /><circle cx="38" cy="16" r="2.4" /><circle cx="62" cy="34" r="2.4" /><circle cx="86" cy="12" r="2.4" /><circle cx="106" cy="40" r="2.4" />
      </svg>
    </div>
  )
}
