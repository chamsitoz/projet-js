### Projet Sihem/Chams  

## Movie-Land


## Présentation du projet 

Ce projet a été réalisé dans le cadre du Mini-Projet : Cinéma.
Un cinéma d’un petit village isolé souhaite attirer davantage de jeunes en proposant une application web permettant de visualiser les films à l’affiche, de rechercher des films et de consulter les détails complets d’un film.
L’application utilise les données fournies par OMDb (The Open Movie Database) via une API.

## les objectifs 
Utiliser une API externe (OMDb)
Manipuler le DOM en JavaScript
Gérer des requêtes asynchrones (fetch)
Structurer un projet web avec plusieurs pages
Respecter un cahier des charges précis
Travailler avec Git et GitHub

## les fonctionnalités 
index.html – Page d’accueil/ Affichage de films 
Pour chaque film on a :
- Poster
- Titre
- Lien vers la page de détails (movie.html)
- résumé court du film (si disponible)
- Bouton "Charger plus" pour afficher d’autres films

search.html – Page de recherche 
Barre de recherche
- Recherche en temps réel
- Bouton "Charger plus" pour afficher plus de résultats
- Pour chaque résultat affiché :
- Poster du film
- Titre du film
- Lien vers la page movie.html

movie.html – Page de détails

- Titre du film
- Poster du film
- Résumé complet
- Genre(s)
- Acteurs principaux
- Notes du film
- Date de sortie DVD formatée en français 

## Technologies utilisées
HTML5 – Structure des pages
CSS3 – Design 
JavaScript  – Logique applicative
API OMDb – Données des films

## Structure du projet
projet-JS/
│
├── index.html          # Page d'accueil 
├── search.html         # Page de recherche
├── movie.html          # Page détails d’un film
│
├── css/
│   └── style.css       # Styles du site
│
├── js/
│   ├── api.js          # Clé API et logique partagée
│   ├── index.js        # JS page accueil
│   ├── search.js       # JS page recherche
│   └── movie.js        # JS page détails
│
├── assets/
│   └── img/
│       ├── logo.png
│       
│
└── README.md
Configuration de l’API OMDb
On Créer un compte sur : https://www.omdbapi.com/
On Récupére la clé API 
Dans le fichier js/api.js : const API_KEY = "c159a3ff";

- Lancement du projet : Live Server 


Organisation JavaScript
Un fichier JS par page
Logique commune séparée (api.js)

## Gestion Git 
-Dépôt distant GitHub

Projet réalisé par Sihem et Chams dans le cadre du Mini-Projet JavaScript – Cinéma.

© 2025 – Movie-land 🎬