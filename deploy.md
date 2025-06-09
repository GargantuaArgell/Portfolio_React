# 🚀 Guide de Déploiement - Portfolio Félix

## Étapes pour déployer sur GitHub et Vercel

### 1. Préparer le Repository GitHub

1. **Créer un nouveau repository sur GitHub :**
   - Aller sur [github.com](https://github.com)
   - Cliquer sur "New repository"
   - Nommer le repository (ex: `portfolio-felix`)
   - Laisser public ou privé selon vos préférences
   - **NE PAS** initialiser avec README (on a déjà tout)
   - Cliquer sur "Create repository"

2. **Lier votre projet local au repository GitHub :**
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/portfolio-felix.git
   git branch -M main
   git push -u origin main
   ```

### 2. Vérifier avant le déploiement

1. **Tester le build en local :**
   ```bash
   npm run build
   npm run preview
   ```

2. **Vérifier que tout fonctionne correctement**

### 3. Déployer sur Vercel

#### Option A: Via l'interface web (Recommandé)

1. **Aller sur [vercel.com](https://vercel.com)**
2. **Se connecter avec votre compte GitHub**
3. **Cliquer sur "New Project"**
4. **Sélectionner votre repository `portfolio-felix`**
5. **Vercel détectera automatiquement :**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Cliquer sur "Deploy"**
7. **Attendre le déploiement (2-3 minutes)**
8. **Votre site sera accessible à une URL comme :**
   `https://portfolio-felix-username.vercel.app`

#### Option B: Via Vercel CLI

1. **Installer Vercel CLI :**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter à Vercel :**
   ```bash
   vercel login
   ```

3. **Déployer :**
   ```bash
   vercel
   ```

4. **Suivre les instructions :**
   - Link to existing project? `N`
   - What's your project's name? `portfolio-felix`
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

### 4. Configuration automatique des déploiements

Une fois connecté à GitHub :
- **Chaque push sur la branche `main`** déclenchera automatiquement un redéploiement
- **Les Pull Requests** créeront des previews automatiques
- **Les changements sont en ligne en 1-2 minutes**

### 5. Domaine personnalisé (Optionnel)

1. **Aller dans Settings de votre projet Vercel**
2. **Section "Domains"**
3. **Ajouter votre domaine personnalisé**
4. **Suivre les instructions DNS**

### 6. Variables d'environnement (Si nécessaire)

Si vous avez des clés API ou secrets :
1. **Aller dans Settings > Environment Variables**
2. **Ajouter vos variables**
3. **Redéployer si nécessaire**

---

## ✅ Checklist de déploiement

- [ ] Projet fonctionne en local (`npm run dev`)
- [ ] Build réussit (`npm run build`)
- [ ] Preview fonctionne (`npm run preview`)
- [ ] Repository GitHub créé
- [ ] Code pushé sur GitHub
- [ ] Projet connecté à Vercel
- [ ] Premier déploiement réussi
- [ ] URL de production testée
- [ ] URL mise à jour dans le README

## 🔧 Dépannage

### Erreur de build
- Vérifier que `npm run build` fonctionne en local
- Vérifier les imports/exports manquants
- Vérifier la syntaxe des composants

### Erreur 404 sur les routes
- Le fichier `vercel.json` gère déjà les SPA routes
- Vérifier que le fichier est bien commité

### Problème de polices
- Les polices Google Fonts sont importées dans `index.css`
- Vérifier que l'import est au début du fichier

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifier les logs de build dans Vercel
2. Tester en local d'abord
3. Vérifier la documentation Vercel
4. Contacter le support Vercel si nécessaire 