# Portfolio de Félix Grandet

Site personnel construit avec React, Vite et TailwindCSS, hébergé sur Vercel.

## Commandes

```bash
npm install
npm run dev      # développement
npm run build    # build et génération du HTML de chaque page
npm run preview  # aperçu du build
```

## Mettre à jour le contenu

Le contenu français se trouve dans `src/data/profil.js` : statut, poste, projets, parcours, compétences.
Sa traduction anglaise se trouve dans `src/data/profil.en.js`, et les textes d'interface dans `src/i18n.js`.
Les pages, le JSON-LD, `sitemap.xml`, `llms.txt` et `cv.md` en sont générés au build.

Pour ajouter un projet, ajoute un objet à `projets`, avec son image dans `public/images`.
Le champ `depot` n'est à renseigner que pour un dépôt public.

## Pages générées

`scripts/prerender.mjs` écrit une page HTML par route dans `dist`.
Les agents et moteurs sans JavaScript lisent ainsi le contenu complet.
