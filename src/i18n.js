export const LANGUES = ['fr', 'en']
export const NOMS_LANGUES = { fr: 'Français', en: 'English' }

const SEGMENTS_EN = { projets: 'projects', parcours: 'background' }
const SEGMENTS_FR = Object.fromEntries(Object.entries(SEGMENTS_EN).map(([fr, en]) => [en, fr]))

export const normaliser = (chemin) => (chemin.length > 1 ? chemin.replace(/\/+$/, '') : chemin) || '/'

// Transforme une URL publique en langue + chemin interne (toujours la forme française).
export function analyser(url) {
  const propre = normaliser(url)
  if (propre !== '/en' && !propre.startsWith('/en/')) return { langue: 'fr', chemin: propre }
  const [premier, ...suite] = propre.slice(4).split('/')
  const segment = SEGMENTS_FR[premier] ?? premier
  return { langue: 'en', chemin: normaliser(`/${[segment, ...suite].join('/')}`) }
}

export function localiser(chemin, langue) {
  if (langue === 'fr') return chemin
  if (chemin === '/') return '/en'
  const [, premier, ...suite] = chemin.split('/')
  return `/en/${[SEGMENTS_EN[premier] ?? premier, ...suite].join('/')}`
}

const CLE_CHOIX = 'langue-choisie'

export function lireChoix() {
  try {
    const choix = window.localStorage.getItem(CLE_CHOIX)
    return LANGUES.includes(choix) ? choix : null
  } catch {
    return null
  }
}

export function enregistrerChoix(langue) {
  try {
    window.localStorage.setItem(CLE_CHOIX, langue)
  } catch {
    // Le choix reste valable pendant la navigation grâce à l'URL.
  }
}

export const langueNavigateur = () => (window.navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en')

export const textes = {
  fr: {
    allerContenu: 'Aller au contenu',
    navigation: 'Navigation principale',
    profil: 'Profil',
    projets: 'Projets',
    parcours: 'Parcours',
    contact: 'Contact',
    changerLangue: 'Changer de langue',
    email: 'E-mail',
    cvPdf: 'CV (PDF)',
    cvTexte: 'CV en texte',
    voirProjets: 'Voir mes projets',
    telechargerCv: 'Télécharger le CV',
    reperes: 'Repères',
    projetsPhares: 'Projets phares',
    tousProjets: 'Tous les projets',
    mesProjets: 'Mes projets',
    realisations: (n) => `${n} réalisations, de la cybersécurité au jeu vidéo.`,
    filtrer: 'Filtrer par domaine',
    tous: 'Tous',
    affiches: (n) => `${n} projets affichés`,
    apercu: (titre) => `Aperçu du projet ${titre}`,
    contexte: 'Contexte',
    equipe: 'Équipe',
    individuel: 'Projet individuel',
    personnes: (n) => `${n} personnes`,
    description: 'Description',
    technologies: 'Outils',
    voirCode: 'Voir le code sur GitHub',
    monParcours: 'Mon parcours',
    introParcours: 'Un arbre qui pousse depuis ses racines : du plus récent, en haut, au plus ancien.',
    voirFiche: 'Voir la fiche détaillée',
    competences: 'Compétences',
    langues: 'Langues',
    engagement: 'Engagement',
    introContact: "Le plus simple est de m'écrire par e-mail ou sur LinkedIn.",
    localisation: 'Localisation',
    statut: 'Statut',
    introuvable: 'Page introuvable',
    introuvableTexte: "Cette page n'existe pas ou a changé d'adresse.",
    retourProfil: 'Retour au profil',
  },
  en: {
    allerContenu: 'Skip to content',
    navigation: 'Main navigation',
    profil: 'Profile',
    projets: 'Projects',
    parcours: 'Background',
    contact: 'Contact',
    changerLangue: 'Change language',
    email: 'Email',
    cvPdf: 'Résumé (PDF)',
    cvTexte: 'Text résumé',
    voirProjets: 'See my projects',
    telechargerCv: 'Download résumé',
    reperes: 'Highlights',
    projetsPhares: 'Featured projects',
    tousProjets: 'All projects',
    mesProjets: 'My projects',
    realisations: (n) => `${n} projects, from cybersecurity to video games.`,
    filtrer: 'Filter by field',
    tous: 'All',
    affiches: (n) => `${n} projects shown`,
    apercu: (titre) => `Preview of the ${titre} project`,
    contexte: 'Context',
    equipe: 'Team',
    individuel: 'Solo project',
    personnes: (n) => `${n} people`,
    description: 'Description',
    technologies: 'Tools',
    voirCode: 'View the code on GitHub',
    monParcours: 'My background',
    introParcours: 'A tree growing from its roots: most recent at the top, earliest at the bottom.',
    voirFiche: 'See the full project page',
    competences: 'Skills',
    langues: 'Languages',
    engagement: 'Involvement',
    introContact: 'The easiest way to reach me is by email or on LinkedIn.',
    localisation: 'Location',
    statut: 'Status',
    introuvable: 'Page not found',
    introuvableTexte: 'This page does not exist or has moved.',
    retourProfil: 'Back to profile',
  },
}
