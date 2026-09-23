# wikiCollect (tcgWIKI)

> **Plateforme TCG / Jeu de Cartes à Collectionner du Panthéon Mondial & des Figures Populaires.**
> Design de niveau Awwwards, collection uniforme en planches de 16 cartes, synchronisation Supabase en temps réel.

---

## ✨ Fonctionnalités Majeures

- **Classeur de Prestige (Awwwards UI/UX)** :
  - Planches strictes et régulières de **16 cartes** par page (grille 4x4)
  - Navigation ultra-fluide avec flèches tactiles, raccourcis clavier (`←` / `→`) et swipe tactile
  - Saut direct de planche via le popover index
  - Design neumorphique & glassmorphism avec support Dark / Light mode

- **Catégorisation Thématique Complète & Tri par Rareté** :
  - **Filtre horizontal par catégories** : *Charme & Porno*, *Rap & Hip-Hop*, *Musique & Pop*, *Sport*, *Tech & IA*, *Politique*, *Histoire*, *Sciences & Pensée*, *Cinéma*, *Pègre & Crime*, *YouTube & Internet*, *Controverses & Médias*, *Renseignement*.
  - **Champions Ultra Secret (`U`)** par catégorie : Mia Khalifa, Eminem, Tupac, Michael Jackson, Michael Jordan, Ronaldo, Messi, Albert Einstein, Steve Jobs, Elon Musk, Donald Trump, Jules César, Napoléon Ier, Pablo Escobar.
  - Cartes Légendaires (`L`) de prestige pour chaque pilier culturel.
  - 100% de portraits vérifiés en haute définition (Wikimedia Commons 500px & visuels officiels).

- **Synchronisation Supabase Cloud** :
  - Table `public.cards` avec structure typée (stats, aura, rareté, variantes holos, descriptions).
  - Client Supabase intégré (`src/services/supabaseClient.js`) et script de synchronisation automatisé (`scripts/seedSupabase.js`).

- **Boutique & Ouverture de Boosters** :
  - Packs de boosters avec probabilités de tirage certifiées (Pack Découverte, Époque Héritage, Légendaire Unique).
  - Animations de révélation 3D et effets holographiques.

---

## 🛠️ Stack Technique

- **Frontend** : React 18, Vite 6, Lucide React
- **Styles** : Vanilla CSS 3D Transforms, Neumorphism, Glassmorphism, CSS Variables
- **Base de Données** : Supabase PostgreSQL (`@supabase/supabase-js`)
- **Sources Médias** : Wikimedia Commons REST API & Unsplash

---

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement Vite
npm run dev

# Synchroniser le catalogue local vers Supabase
node scripts/seedSupabase.js

# Build de production
npm run build
```

---

*Développé pour wikiCollect / tcgWIKI.*
