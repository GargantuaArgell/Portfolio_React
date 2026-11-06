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

function page(url, { noindex = false } = {}) {
  const robots = noindex ? '\n    <meta name="robots" content="noindex" />' : ''
  const langue = url.startsWith('/en') ? 'en' : 'fr'
  const html = noindex ? '<html lang="fr" data-erreur>' : `<html lang="${langue}">`
  return gabarit
    .replace('<html lang="fr">', () => html)
    .replace(/<title>.*?<\/title>/, () => `<title>${echapper(meta(url).titre)}</title>`)
    .replace('</head>', () => `${noindex ? '' : `  ${balisesHead(url)}\n  `}${robots}</head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${render(url)}</div>`)
}

for (const url of routes) {
  const dossier = path.join(dist, url)
  await mkdir(dossier, { recursive: true })
  await writeFile(path.join(dossier, 'index.html'), page(url))
}

await writeFile(path.join(dist, '404.html'), page('/404', { noindex: true }))
await writeFile(path.join(dist, 'sitemap.xml'), sitemapXml())
await writeFile(path.join(dist, 'llms.txt'), llmsTxt('fr'))
await writeFile(path.join(dist, 'cv.md'), cvMd('fr'))
await writeFile(path.join(dist, 'en', 'llms.txt'), llmsTxt('en'))
await writeFile(path.join(dist, 'en', 'cv.md'), cvMd('en'))
await rm(ssr, { recursive: true, force: true })

console.log(`${routes.length} pages générées`)
