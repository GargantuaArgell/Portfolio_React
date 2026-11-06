import { categories, competences, engagements, langues, parcours, personne, preuves, projets } from './profil.js'
import {
  categoriesEn,
  competencesEn,
  engagementsEn,
  languesEn,
  parcoursEn,
  personneEn,
  preuvesEn,
  projetsEn,
  technologiesEn,
} from './profil.en.js'

const fr = { personne, preuves, categories, projets, parcours, competences, langues, engagements }

const en = {
  personne: { ...personne, ...personneEn },
  preuves: preuvesEn,
  categories: categories.map((c) => categoriesEn[c]),
  projets: projets.map((p) => ({
    ...p,
    ...projetsEn[p.slug],
    categorie: categoriesEn[p.categorie],
    technologies: p.technologies.map((t) => technologiesEn[t] ?? t),
  })),
  parcours: parcoursEn,
  competences: competencesEn,
  langues: languesEn,
  engagements: engagementsEn,
}

export const contenu = (langue) => (langue === 'en' ? en : fr)
