import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { Routeur } from './router'

export { routes, balisesHead, meta, sitemapXml, llmsTxt, cvMd } from './data/seo.js'

export const render = (url) =>
  renderToString(
    <Routeur cheminInitial={url}>
      <App />
    </Routeur>,
  )
