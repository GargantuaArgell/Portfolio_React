import { SITE_URL } from './profil.js'
import { contenu } from './contenu.js'
import { LANGUES, analyser, localiser } from '../i18n.js'

const cheminsInternes = () => ['/', '/projets', ...contenu('fr').projets.map((p) => `/projets/${p.slug}`), '/parcours', '/contact']

export const routes = LANGUES.flatMap((langue) => cheminsInternes().map((chemin) => localiser(chemin, langue)))

export const trouverProjet = (chemin, langue = 'fr') => {
  const m = chemin.match(/^\/projets\/([^/]+)$/)
  return m ? contenu(langue).projets.find((p) => p.slug === m[1]) : undefined
}

const absolue = (url) => `${SITE_URL}${url === '/' ? '/' : url}`
const idPersonne = `${SITE_URL}/#felix-grandet`

function personneJsonLd(langue) {
  const { personne, competences, langues } = contenu(langue)
  return {
    '@type': 'Person',
    '@id': idPersonne,
    name: personne.nom,
    url: absolue(localiser('/', langue)),
    image: `${SITE_URL}${personne.photo}`,
    jobTitle: personne.poste,
    description: personne.accroche,
    email: `mailto:${personne.email}`,
    address: { '@type': 'PostalAddress', addressLocality: personne.campus, addressCountry: 'FR' },
    worksFor: { '@type': 'Organization', name: personne.entreprise },
    affiliation: { '@type': 'CollegeOrUniversity', name: personne.ecole },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'IUT2 Grenoble' },
      { '@type': 'CollegeOrUniversity', name: 'Université du Québec à Chicoutimi' },
    ],
    sameAs: [personne.linkedin, personne.github],
    knowsLanguage: langues.map((l) => l.code),
    knowsAbout: competences.flatMap((c) => c.items),
  }
}

function jsonLdPage(chemin, langue, titre, description) {
  const { personne, projets } = contenu(langue)
  const url = absolue(localiser(chemin, langue))
  const projet = trouverProjet(chemin, langue)
  const commun = { '@context': 'https://schema.org', inLanguage: langue, url }
  if (projet) {
    return {
      ...commun,
      '@type': projet.depot ? 'SoftwareSourceCode' : 'CreativeWork',
      name: projet.titre,
      description: projet.resume,
      author: { '@id': idPersonne, '@type': 'Person', name: personne.nom },
      keywords: projet.technologies.join(', '),
      ...(projet.image && { image: `${SITE_URL}${projet.image}` }),
      ...(projet.depot && { codeRepository: projet.depot }),
    }
  }
  if (chemin === '/projets') {
    return {
      ...commun,
      '@type': 'CollectionPage',
      name: titre,
      description,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: projets.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.titre,
          url: absolue(localiser(`/projets/${p.slug}`, langue)),
        })),
      },
    }
  }
  return { ...commun, '@type': 'ProfilePage', name: titre, description, mainEntity: personneJsonLd(langue) }
}

const descriptionsAccueil = {
  fr: (p) => `${p.accroche}. Développement back-end, cybersécurité et projets réalisés à l'IUT2 de Grenoble et à l'UQAC.`,
  en: (p) => `${p.accroche}. Back-end development, cybersecurity and projects from IUT2 Grenoble and UQAC.`,
}

const pagesFixes = {
  fr: {
    '/projets': (p, n) => [`Projets | ${p.nom}`, `${n} projets en cybersécurité, réseau, IA, jeu vidéo et web, avec leurs technologies, par ${p.nom}.`],
    '/parcours': (p) => [`Parcours | ${p.nom}`, `Formation, expériences, compétences et langues de ${p.nom}, de l'IUT2 de Grenoble à IMT Atlantique et ${p.entreprise}.`],
    '/contact': (p) => [`Contact | ${p.nom}`, `Contacter ${p.nom} par e-mail, LinkedIn ou GitHub.`],
  },
  en: {
    '/projets': (p, n) => [`Projects | ${p.nom}`, `${n} projects in cybersecurity, networking, AI, video games and web, with their technologies, by ${p.nom}.`],
    '/parcours': (p) => [`Background | ${p.nom}`, `Education, experience, skills and languages of ${p.nom}, from IUT2 Grenoble to IMT Atlantique and ${p.entreprise}.`],
    '/contact': (p) => [`Contact | ${p.nom}`, `Contact ${p.nom} by email, LinkedIn or GitHub.`],
  },
}

export function meta(url) {
  const { langue, chemin } = analyser(url)
  const { personne, projets } = contenu(langue)
  const projet = trouverProjet(chemin, langue)
  let titre = `${personne.nom} | ${personne.accroche}`
  let description = descriptionsAccueil[langue](personne)
  if (projet) {
    titre = langue === 'fr' ? `${projet.titre} | Projet de ${personne.nom}` : `${projet.titre} | Project by ${personne.nom}`
    description = projet.resume
  } else if (pagesFixes[langue][chemin]) {
    ;[titre, description] = pagesFixes[langue][chemin](personne, projets.length)
  }
  return { titre, description, langue, chemin, canonique: absolue(localiser(chemin, langue)), jsonLd: jsonLdPage(chemin, langue, titre, description) }
}

const echapper = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function balisesHead(url) {
  const m = meta(url)
  const image = `${SITE_URL}/og.jpg`
  return [
    `<meta name="description" content="${echapper(m.description)}" />`,
    `<link rel="canonical" href="${m.canonique}" />`,
    ...LANGUES.map((l) => `<link rel="alternate" hreflang="${l}" href="${absolue(localiser(m.chemin, l))}" />`),
    `<link rel="alternate" hreflang="x-default" href="${absolue(m.chemin)}" />`,
    `<meta property="og:type" content="${trouverProjet(m.chemin) ? 'article' : 'profile'}" />`,
    `<meta property="og:locale" content="${m.langue === 'fr' ? 'fr_FR' : 'en_GB'}" />`,
    `<meta property="og:title" content="${echapper(m.titre)}" />`,
    `<meta property="og:description" content="${echapper(m.description)}" />`,
    `<meta property="og:url" content="${m.canonique}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(m.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}

export const sitemapXml = () =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${absolue(r)}</loc></url>`)
    .join('\n')}\n</urlset>\n`

export function llmsTxt(langue) {
  const { personne, projets } = contenu(langue)
  const u = (chemin) => absolue(localiser(chemin, langue))
  const cv = `${SITE_URL}${langue === 'fr' ? '' : '/en'}/cv.md`
  const autre = langue === 'fr' ? `[English version](${SITE_URL}/en/llms.txt)` : `[Version française](${SITE_URL}/llms.txt)`
  const l = langue === 'fr'
    ? { pages: 'Pages', projets: 'Projets', poste: 'Poste actuel', base: 'Basé à', profil: 'présentation et projets phares', liste: 'projets, avec leurs technologies', parcours: 'formation, expériences, compétences et langues', contact: 'e-mail, LinkedIn et GitHub', cv: 'profil complet en texte', nProfil: 'Profil', nParcours: 'Parcours', nCv: 'CV en Markdown' }
    : { pages: 'Pages', projets: 'Projects', poste: 'Current role', base: 'Based in', profil: 'introduction and featured projects', liste: 'projects, with their technologies', parcours: 'education, experience, skills and languages', contact: 'email, LinkedIn and GitHub', cv: 'full profile as text', nProfil: 'Profile', nParcours: 'Background', nCv: 'Résumé in Markdown' }
  return `# ${personne.nom}

> ${personne.accroche}. ${l.base} ${personne.campus}. ${l.poste} : ${personne.poste}.

${autre}

## ${l.pages}

- [${l.nProfil}](${u('/')}) : ${l.profil}
- [${l.projets}](${u('/projets')}) : ${projets.length} ${l.liste}
- [${l.nParcours}](${u('/parcours')}) : ${l.parcours}
- [Contact](${u('/contact')}) : ${l.contact}
- [${l.nCv}](${cv}) : ${l.cv}

## ${l.projets}

${projets.map((p) => `- [${p.titre}](${u(`/projets/${p.slug}`)}) : ${p.resume}`).join('\n')}
`
}

export function cvMd(langue) {
  const { personne, parcours, competences, langues, engagements, projets } = contenu(langue)
  const l = langue === 'fr'
    ? { base: 'Basé à', poste: 'Poste actuel', email: 'E-mail', site: 'Site', parcours: 'Parcours', comp: 'Compétences', langues: 'Langues', eng: 'Engagement', projets: 'Projets', tech: 'Technologies', code: 'Code' }
    : { base: 'Based in', poste: 'Current role', email: 'Email', site: 'Website', parcours: 'Background', comp: 'Skills', langues: 'Languages', eng: 'Involvement', projets: 'Projects', tech: 'Technologies', code: 'Code' }
  return `# ${personne.nom}

${personne.accroche}. ${l.base} ${personne.campus}.

- ${l.poste} : ${personne.poste}, ${personne.entreprise}
- ${l.email} : ${personne.email}
- LinkedIn : ${personne.linkedin}
- GitHub : ${personne.github}
- ${l.site} : ${absolue(localiser('/', langue))}

## ${l.parcours}

${parcours
  .slice(1)
  .map((e) => `### ${e.titre}\n\n${e.lieu}, ${e.periode}\n\n${e.description}`)
  .join('\n\n')}

## ${l.comp}

${competences.map((c) => `- ${c.titre} : ${c.items.join(', ')}`).join('\n')}

## ${l.langues}

${langues.map((x) => `- ${x.nom} : ${x.niveau}`).join('\n')}

## ${l.eng}

${engagements.map((e) => `- ${e}`).join('\n')}

## ${l.projets}

${projets
  .map((p) => `### ${p.titre}\n\n${p.resume}\n\n${l.tech} : ${p.technologies.join(', ')}${p.depot ? `\n\n${l.code} : ${p.depot}` : ''}`)
  .join('\n\n')}
`
}
