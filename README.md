# sefosa85

Application React construite avec Vite et TypeScript.

## Développement local

```bash
npm install
npm run dev
```

## Tests

```bash
npm run test
npm run lint
```

## Déploiement sur GitHub Pages

Le dépôt contient un workflow GitHub Actions (`.github/workflows/gh-pages.yml`) qui publie automatiquement le site sur GitHub Pages.

1. Assurez-vous que la branche par défaut de votre dépôt est `main` (ou adaptez l'évènement `on.push.branches` du workflow si nécessaire).
2. Dans les paramètres du dépôt, section **Pages**, sélectionnez la source "GitHub Actions".
3. Poussez vos modifications sur `main`. Le workflow va :
   - installer les dépendances via `npm ci` ;
   - construire l'application avec `npm run build` (les fichiers statiques sont générés dans `dist/`) ;
   - publier l'artefact généré sur la branche `gh-pages` gérée par GitHub Pages.

### Gestion du chemin de base

La configuration Vite détecte automatiquement le nom du dépôt lorsque le build s'exécute sur GitHub Actions :

- pour un site utilisateur ou organisation (`<utilisateur>.github.io`), l'application est servie à la racine (`/`) ;
- pour un dépôt projet (`<utilisateur>/<nom-du-projet>`), le chemin de base est défini sur `/<nom-du-projet>/`.

En local, ou en dehors de GitHub Actions, le chemin de base reste `/`, ce qui permet de continuer à utiliser `npm run dev` et `npm run build` sans configuration supplémentaire.

Après le premier déploiement, l'URL publique du site est fournie dans l'onglet **Deployments > github-pages** du dépôt.
