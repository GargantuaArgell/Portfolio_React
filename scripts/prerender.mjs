// Génère le HTML de chaque page après le build, pour que les moteurs et les agents
// sans JavaScript lisent le contenu. Produit aussi sitemap.xml, llms.txt et cv.md.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const racine = process.cwd()
const dist = path.join(racine, 'dist')
const ssr = path.join(racine, 'dist-ssr')
const entree = pathToFileURL(path.join(ssr, 'entry-server.js')).href
const { render, routes, balisesHead, meta, sitemapXml, llmsTxt, cvMd } = await import(entree)
const gabarit = await readFile(path.join(dist, 'index.html'), 'utf8')

const echapper = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;')

function page(chemin, { noindex = false } = {}) {
  const robots = noindex ? '\n    <meta name="robots" content="noindex" />' : ''
  return gabarit
    .replace(/<title>.*?<\/title>/, () => `<title>${echapper(meta(chemin).titre)}</title>`)
    .replace('</head>', () => `${noindex ? '' : `  ${balisesHead(chemin)}\n  `}${robots}</head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${render(chemin)}</div>`)
}

for (const chemin of routes) {
  const dossier = path.join(dist, chemin)
  await mkdir(dossier, { recursive: true })
  await writeFile(path.join(dossier, 'index.html'), page(chemin))
}

await writeFile(path.join(dist, '404.html'), page('/404', { noindex: true }))
await writeFile(path.join(dist, 'sitemap.xml'), sitemapXml())
await writeFile(path.join(dist, 'llms.txt'), llmsTxt())
await writeFile(path.join(dist, 'cv.md'), cvMd())
await rm(ssr, { recursive: true, force: true })

console.log(`${routes.length} pages générées`)
