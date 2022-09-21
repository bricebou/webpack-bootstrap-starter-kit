# Bootstrap with Webpack, SASS, Autoprefixer and PurgeCSS

Pour lancer la compilation en mode développement, donc sans PurgeCSS ni minification du CSS final :

```
npm run-script build:dev
```

Pour lancer la compilation en mode production, avec PurgeCSS et minification du CSS produit :

```
npm run-script build:prod
```

Pour lancer la compilation en mode développement dès lors qu'un fichier est édité :

```
npm run-script watch
```