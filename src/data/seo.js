import { SITE_URL, personne, projets, parcours, competences, langues, engagements } from './profil.js'

export const routes = ['/', '/projets', ...projets.map((p) => `/projets/${p.slug}`), '/parcours', '/contact']

export const trouverProjet = (chemin) => {
  const m = chemin.match(/^\/projets\/([^/]+)$/)
  return m ? projets.find((p) => p.slug === m[1]) : undefined
}

const idPersonne = `${SITE_URL}/#felix-grandet`

const personneJsonLd = {
  '@type': 'Person',
  '@id': idPersonne,
  name: personne.nom,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${personne.photo}`,
  jobTitle: personne.poste,
  description: personne.accroche,
  email: `mailto:${personne.email}`,
  address: { '@type': 'PostalAddress', addressLocality: personne.campus, addressCountry: 'FR' },
  worksFor: { '@type': 'Organization', name: personne.entreprise },
  affiliation: { '@type': 'CollegeOrUniversity', name: personne.ecole },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'IUT2 de Grenoble' },
    { '@type': 'CollegeOrUniversity', name: 'Université du Québec à Chicoutimi' },
  ],
  sameAs: [personne.linkedin, personne.github],
  knowsLanguage: langues.map((l) => l.code),
  knowsAbout: competences.flatMap((c) => c.items),
}

function jsonLdPage(chemin, titre, description) {
  const url = `${SITE_URL}${chemin === '/' ? '/' : chemin}`
  const projet = trouverProjet(chemin)
  if (projet) {
    return {
      '@context': 'https://schema.org',
      '@type': projet.depot ? 'SoftwareSourceCode' : 'CreativeWork',
      name: projet.titre,
      description: projet.resume,
      url,
      author: { '@id': idPersonne, '@type': 'Person', name: personne.nom },
      keywords: projet.technologies.join(', '),
      ...(projet.image && { image: `${SITE_URL}${projet.image}` }),
      ...(projet.depot && { codeRepository: projet.depot }),
    }
  }
  if (chemin === '/projets') {
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: titre,
      description,
      url,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: projets.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.titre,
          url: `${SITE_URL}/projets/${p.slug}`,
        })),
      },
    }
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: titre,
    description,
    url,
    mainEntity: personneJsonLd,
  }
}

export function meta(chemin) {
  const projet = trouverProjet(chemin)
  let titre = `${personne.nom} | Élève-ingénieur à IMT Atlantique, alternant chez ${personne.entreprise}`
  let description = `${personne.accroche}. Développement back-end, cybersécurité et projets réalisés à l'IUT2 de Grenoble et à l'UQAC.`
  if (projet) {
    titre = `${projet.titre} | Projet de ${personne.nom}`
    description = projet.resume
  } else if (chemin === '/projets') {
    titre = `Projets | ${personne.nom}`
    description = `${projets.length} projets en cybersécurité, réseau, IA, jeu vidéo et web, avec leurs technologies, par ${personne.nom}.`
  } else if (chemin === '/parcours') {
    titre = `Parcours | ${personne.nom}`
    description = `Formation, expériences, compétences et langues de ${personne.nom}, d'IUT2 Grenoble à IMT Atlantique et ${personne.entreprise}.`
  } else if (chemin === '/contact') {
    titre = `Contact | ${personne.nom}`
    description = `Contacter ${personne.nom} par e-mail, LinkedIn ou GitHub.`
  }
  const canonique = `${SITE_URL}${chemin === '/' ? '/' : chemin}`
  return { titre, description, canonique, jsonLd: jsonLdPage(chemin, titre, description) }
}

const echapper = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function balisesHead(chemin) {
  const m = meta(chemin)
  const image = `${SITE_URL}/og.jpg`
  return [
    `<meta name="description" content="${echapper(m.description)}" />`,
    `<link rel="canonical" href="${m.canonique}" />`,
    `<meta property="og:type" content="${trouverProjet(chemin) ? 'article' : 'profile'}" />`,
    `<meta property="og:locale" content="fr_FR" />`,
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
    .map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '/' : r}</loc></url>`)
    .join('\n')}\n</urlset>\n`

export const llmsTxt = () => `# ${personne.nom}

> ${personne.accroche}. Basé à ${personne.campus}. Poste actuel : ${personne.poste}.

## Pages

- [Profil](${SITE_URL}/) : présentation et projets phares
- [Projets](${SITE_URL}/projets) : ${projets.length} projets, avec leurs technologies
- [Parcours](${SITE_URL}/parcours) : formation, expériences, compétences et langues
- [Contact](${SITE_URL}/contact) : e-mail, LinkedIn et GitHub
- [CV en Markdown](${SITE_URL}/cv.md) : profil complet en texte

## Projets

${projets.map((p) => `- [${p.titre}](${SITE_URL}/projets/${p.slug}) : ${p.resume}`).join('\n')}
`

export const cvMd = () => `# ${personne.nom}

${personne.accroche}. Basé à ${personne.campus}.

- Poste actuel : ${personne.poste}, ${personne.entreprise}
- E-mail : ${personne.email}
- LinkedIn : ${personne.linkedin}
- GitHub : ${personne.github}
- Site : ${SITE_URL}/

## Parcours

${parcours
  .filter((e) => e.titre !== 'Objectifs futurs')
  .map((e) => `### ${e.titre}\n\n${e.lieu}, ${e.periode}\n\n${e.description}`)
  .join('\n\n')}

## Compétences

${competences.map((c) => `- ${c.titre} : ${c.items.join(', ')}`).join('\n')}

## Langues

${langues.map((l) => `- ${l.nom} : ${l.niveau}`).join('\n')}

## Engagement

${engagements.map((e) => `- ${e}`).join('\n')}

## Projets

${projets
  .map((p) => `### ${p.titre}\n\n${p.resume}\n\nTechnologies : ${p.technologies.join(', ')}${p.depot ? `\n\nCode : ${p.depot}` : ''}`)
  .join('\n\n')}
`
