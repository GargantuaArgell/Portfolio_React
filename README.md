# Portfolio React - Félix Grandet

This is a modular React portfolio built with TailwindCSS for IUT 2 Grenoble studies.

## 🚀 Live Demo

[Voir le portfolio en live](https://your-portfolio-url.vercel.app) (sera disponible après déploiement)

## Project Structure

```
Portfolio_React/
├── src/
│   ├── components/
│   │   ├── Homepage.jsx      # Page d'accueil principale
│   │   ├── Header.jsx        # En-tête de navigation
│   │   ├── Footer.jsx        # Pied de page
│   │   ├── TreeOfLife.jsx    # Arbre de qualifications
│   │   └── Leaf.jsx          # Composant feuille pour l'arbre
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée React
│   └── index.css            # Imports TailwindCSS
├── index.html               # Template HTML principal
├── package.json             # Dépendances et scripts
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration TailwindCSS
├── postcss.config.js        # Configuration PostCSS
├── vercel.json              # Configuration Vercel
└── .gitignore               # Fichiers à ignorer par Git
```

## 🛠️ Installation et Setup

1. **Cloner le repository:**
```bash
git clone https://github.com/votre-username/portfolio-react.git
cd portfolio-react
```

2. **Installer les dépendances:**
```bash
npm install
```

3. **Démarrer le serveur de développement:**
```bash
npm run dev
```

4. **Builder pour la production:**
```bash
npm run build
```

5. **Prévisualiser le build de production:**
```bash
npm run preview
```

## 📦 Déploiement

### GitHub

1. **Créer un nouveau repository sur GitHub**

2. **Ajouter l'origine remote:**
```bash
git remote add origin https://github.com/votre-username/portfolio-react.git
```

3. **Commit et push:**
```bash
git add .
git commit -m "Initial commit: Portfolio React setup"
git push -u origin main
```

### Vercel (Recommandé)

1. **Via l'interface Vercel:**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Cliquer sur "New Project"
   - Sélectionner votre repository
   - Vercel détectera automatiquement que c'est un projet Vite/React
   - Cliquer sur "Deploy"

2. **Via Vercel CLI:**
```bash
npm install -g vercel
vercel
```

### Netlify (Alternative)

1. **Via l'interface Netlify:**
   - Aller sur [netlify.com](https://netlify.com)
   - Se connecter avec GitHub
   - Cliquer sur "New site from Git"
   - Sélectionner votre repository
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🎨 Technologies Utilisées

- **React 18**: Framework JavaScript moderne
- **Vite**: Outil de build ultra-rapide
- **TailwindCSS**: Framework CSS utilitaire
- **PostCSS**: Outil de transformation CSS
- **ESLint**: Linter pour JavaScript/React

## ✨ Fonctionnalités

- ✅ Design responsive et moderne
- ✅ Arbre de qualifications interactif
- ✅ Animations et effets visuels
- ✅ Configuration optimisée pour le déploiement
- ✅ Structure modulaire et extensible
- ✅ Support des polices Google Fonts
- ✅ Effets de background animés

## 🔧 Configuration

Le projet est configuré avec:
- **Vite** pour le développement et le build
- **TailwindCSS** pour le styling
- **Vercel** pour le déploiement automatique
- **ESLint** pour la qualité du code

## 📝 Scripts Disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Builder pour la production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Vérifier le code avec ESLint

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📞 Contact

Félix Grandet - [votre-email@exemple.com]

Lien du projet: [https://github.com/votre-username/portfolio-react](https://github.com/votre-username/portfolio-react)

## Features

- **Modular Design**: Easy to add/modify components
- **TailwindCSS**: For responsive and modern styling
- **Vite**: Fast development and build tool
- **React 18**: Latest React features

## Current Status

- ✅ Basic React setup with Vite
- ✅ TailwindCSS configuration
- ✅ Homepage with "Hello World" centered
- ✅ Modular component structure
- 🔄 Ready for content addition

## Next Steps

You can now:
1. Add your bio and personal information
2. Create project showcase components
3. Add contact form
4. Implement testimonials section
5. Add case studies
6. Integrate social media links 