# 📜 BIBLE OFFICIELLE DU PROJET : tcgWIKI
### *Le Grand Livre de Conception, d'Architecture & de Monétisation*
*Version 1.0 — Document Maître d'Ingénierie & de Game Design*

---

## 🏛️ SOMMAIRE EXÉCUTIF
1. **Vision, Philosophie & Positionnement**
2. **Économie & Monétisation Réelle (Stripe & Supabase)**
3. **Moteur de Données Wikipédia & Wikidata (Curation & Formules Réelles)**
4. **Direction Artistique Awwwards & Pipeline 3D Three.js**
5. **Matrice des Raretés & Variantes Collectionnables (Style Pokémon)**
6. **Système de Jeu : Duels de Savoir & Collectionnite**
7. **Architecture Technique Backend & Sécurité (Supabase RLS & Stripe Webhooks)**
8. **Feuille de Route (Roadmap) de Développement**

---

# 1. VISION, PHILOSOPHIE & POSITIONNEMENT

### Le Constat
Les plus grands jeux de cartes du monde (Pokémon, Yu-Gi-Oh!, Magic: The Gathering, Hearthstone) reposent sur des univers fictionnels inventés de toutes pièces.
À l'inverse, **l'humanité a déjà écrit la plus fascinante, vaste et spectaculaire des histoires : la nôtre.**

Wikipédia est l'encyclopédie universelle : plus de **60 millions d'articles**, des millions d'esprits brillants, de conquérants, de catastrophes, de révolutions technologiques, d'espèces animales fascinantes et de merveilles astronomiques.

### Le Concept tcgWIKI
**tcgWIKI** fusionne la rigueur du savoir universel avec l'excitation viscérale du Trading Card Game :
- **Chaque carte est un véritable article Wikipédia.**
- **Aucune statistique n'est inventée** : les points d'Attaque, de Défense, de Vie, de Vitesse et de Mana proviennent mathématiquement des données brutes de Wikipédia (taille en octets, nombre de sources académiques, âge de l'article, fréquence d'édition, nombre de langues de traduction).
- **Une esthétique Awwwards de haute voltige** : Finition neumorphique en double-thème (Ivoire le jour, Obsidian profond la nuit), physique 3D gyroscopique et reflets holographiques texturés d'une rare élégance.

---

# 2. ÉCONOMIE & MONÉTISATION RÉELLE (STRIPE & SUPABASE)

L'économie de tcgWIKI est conçue pour être **éthique, addictive et hautement rentable**, articulée autour d'un modèle "Freemium / Collector".

```
  ┌─────────────────────────┐           ┌─────────────────────────┐
  │      JOUEUR GRATUIT     │           │     JOUEUR COLLECTOR    │
  │ • 1 Booster gratuit/45m │           │ • Achat direct en Euros │
  │ • Quêtes d'Histoire     │           │ • Boosters Rares/Or     │
  │ • Gains de Wiki Tokens  │           │ • Cartes Numérotées     │
  └────────────┬────────────┘           └────────────┬────────────┘
               │                                     │
               ▼                                     ▼
        [ WIKI TOKENS ] ◄─────────────────── [ STRIPE CHECKOUT ]
        (Monnaie en jeu)                    (Conversion d'Euros)
               │                                     │
               └───────────────┬─────────────────────┘
                               ▼
                    [ OUVERTURE DE BOOSTERS ]
                    [ MARCHÉ ENTRE JOUEURS ]
```

### A. La Monnaie Virtuelle : "Wiki Tokens" (W-Tokens)
- **Gagnée gratuitement en jeu** :
  - Connexion quotidienne : +100 W-Tokens
  - Booster quotidien gratuit (toutes les 45 min)
  - Complétion de séries (ex: posséder les 7 Merveilles du Monde antique) : +500 W-Tokens
  - Recyclage de cartes en double : 20% de la valeur de rareté réinjectée
- **Achetée avec du vrai argent (via Stripe)**.

### B. Grille Tarifaire des Packs d'Euros (Stripe Checkout)
Les micro-transactions sont calibrées selon les standards de l'App Store / Play Store pour maximiser la conversion d'impulsion :

| Nom du Pack | Prix (€) | W-Tokens Crédités | Bonus Offert | Taux de Conversion |
| :--- | :---: | :---: | :--- | :---: |
| **Bourse de l'Apprenti** | **1,99 €** | 400 W-Tokens | — | 200 Tokens / € |
| **Sacoche d'Érudit** *(Le plus populaire)* | **4,99 €** | 1 200 W-Tokens | + 1 Booster Rare Offert | 240 Tokens / € |
| **Coffre d'Alexandrie** | **9,99 €** | 2 800 W-Tokens | + 1 Booster Époque Héritage | 280 Tokens / € |
| **Trésor Impérial** *(Meilleure Valeur)* | **24,99 €** | 8 000 W-Tokens | + 1 Carte Or Garantie | 320 Tokens / € |
| **Chambre des Secrets** | **49,99 €** | 18 000 W-Tokens | + 1 Carte Légendaire Garantie Numérotée | 360 Tokens / € |

### C. Catalogue des Boosters en Boutique
- **Pack Découverte Base (100 W-Tokens / ~0,40 €)** : 5 cartes (Communes à Rares).
- **Pack Époque Héritage (500 W-Tokens / ~1,80 €)** : 3 cartes (Minimum 1 Rare + chance élevée d'Héritage).
- **Pack Légendaire Unique (2 500 W-Tokens / ~8,50 €)** : 1 Carte Légendaire certifiée garantie avec reflets cosmiques.
- **Offres Flash (-50%)** : Déclenchées par compte à rebours de 3 heures pour stimuler l'urgence d'achat.

### D. Conformité Légale & Transparence des Lootboxes
Conformément aux réglementations européennes et aux directives Apple/Google :
- **Probabilités de tirage transparentes et affichées** directement sous chaque paquet :
  - *Commune* : 50%
  - *Rare* : 25%
  - *Silver* : 12%
  - *Or* : 7%
  - *Diamond* : 3.8%
  - *Héritage* : 1.5%
  - *Légendaire* : 0.6%
  - *Ultra Secret Rare* : 0.1%
- Système de **Pity Timer (Garantie de Malchance)** : si un joueur ouvre 30 boosters sans carte Légendaire, la 31e carte est automatiquement garantie de rang Légendaire ou supérieur.

---

# 3. MOTEUR DE DONNÉES WIKIPÉDIA & CURATION

Pour que le jeu soit immersif et prestigieux, **nous ne prenons pas les 65 millions d'articles au hasard**. Nous filtrons pour ne garder que le panthéon de l'histoire humaine.

### A. Le Filtre d'Admissibilité Wikidata (SPARQL)
Chaque article admissible doit satisfaire :
1. **Indicateur de Notoriété Universelle** : `wikibase:sitelinks >= 15` (l'article doit exister dans au moins 15 langues différentes).
2. **Classification Ontologique** :
   - `Q5` : Humains célèbres (Savants, Dirigeants, Écrivains, Philosophes, Musiciens).
   - `Q570116` : Monuments et merveilles de l'architecture.
   - `Q523` : Objets du cosmos (Planètes, Étoiles, Trous noirs, Télescopes).
   - `Q16521` : Espèces vivantes emblématiques (Félins, Cétacés, Dinosaures).
   - `Q1190554` : Événements pivots (Batailles historiques, Traités, Révolutions).

### B. Formules Mathématiques des Statistiques de Cartes
Chaque carte est alimentée en temps réel par les données de Wikipédia :

```
                          ┌────────────────────────┐
                          │   ARTICLE WIKIPÉDIA    │
                          └───────────┬────────────┘
                                      │
       ┌──────────────┬───────────────┼───────────────┬──────────────┐
       ▼              ▼               ▼               ▼              ▼
[ Taille Octets ] [ Sources Ref ] [ Âge Création ] [ Vues 30j ] [ Langues ]
       │              │               │               │              │
       ▼              ▼               ▼               ▼              ▼
     [ ATQ ]        [ DEF ]         [ PV ]          [ VIT ]        [ AURA ]
   (10 - 150)     (10 - 150)      (50 - 200)      (10 - 100)      (1 - 9)
```

1. **Attaque (ATQ) = Longueur de l'article**
   - Formule : $\text{ATQ} = \min\left(150, \max\left(10, \lfloor \frac{\text{Octets}}{600} \rfloor\right)\right)$
   - *Philosophie* : Plus un sujet a suscité d'écrits et d'analyses, plus son impact historique est percutant.
2. **Défense (DEF) = Nombre de références bibliographiques**
   - Formule : $\text{DEF} = \min\left(150, \max\left(10, \lfloor \text{Nombre de sources} \times 1.1 \rfloor\right)\right)$
   - *Philosophie* : Un article lourdement vérifié et sourcé est intellectuellement inébranlable.
3. **Points de Vie (PV) = Ancienneté & Résilience Temporelle**
   - Formule : $\text{PV} = 50 + \min(150, \lfloor \text{Années d'existence de la page ou de l'entité} \times 6 \rfloor)$
   - *Philosophie* : Les figures millénaires (Pyramides, Jules César) ont une endurance que le temps ne peut effacer.
4. **Vitesse (VIT) = Fréquence des révisions récentes & Dynamisme**
   - Formule : $\text{VIT} = \min(100, \max(10, \lfloor \text{Modifications sur 30 jours} \times 7 \rfloor))$
   - *Philosophie* : Mesure la vivacité du débat et l'actualité brûlante de la thématique.
5. **Aura / Coût d'Invocation (AUR) = Rayonnement International**
   - Formule : $\text{AUR} = \min\left(9, \max\left(1, \lfloor \frac{\text{Traductions mondiales}}{18} \rfloor\right)\right)$
   - *Philosophie* : Un personnage connu dans 150 pays (Napoléon, Einstein) demande beaucoup d'énergie pour être joué.

---

# 4. DIRECTION ARTISTIQUE AWWWARDS & PIPELINE 3D

Pour rivaliser avec les plus beaux jeux de cartes mobiles mondiaux, tcgWIKI adopte un pipeline graphique automatisé d'exception :

### A. L'Effet 2.5D "Overflow Pop-Out" (Style Pokémon Secret Rare)
Pour chaque illustration récupérée depuis Wikimedia Commons :
1. **Détourage automatique du sujet principal** (portrait, buste, sommet d'édifice).
2. **Superposition sur le cadre** : Le corps du personnage reste à l'intérieur du cadre doré, mais son chapeau, sa tête ou son sceptre **passe par-dessus la bordure extérieure** de la carte.
3. **Traitement de couleur "Museum Fine-Art"** :
   - Application d'un filtre argentique subtil, grain photographique vintage et léger vignettage pour uniformiser les styles hétérogènes (peintures du Louvre, photos satellites, gravures d'époque).

### B. Moteur 3D Three.js & Shaders Holographiques (GLSL)
Quand l'utilisateur inspecte une carte ou ouvre un booster :
- **Mesh 3D physique** : La carte a une épaisseur de 0.8 mm avec tranche biseautée (dorée, argentée ou chromée).
- **Shader de Foil Irisé (Rainbow Diffraction)** :
  - Un shader calcule en temps réel l'angle entre le regard de l'utilisateur et la normale de la carte.
  - Il projette des bandes spectrales arc-en-ciel qui glissent sur la carte lors de l'inclinaison gyroscopique ou du déplacement du curseur.
- **Micro-relief & Normal Maps** : Gravures baroques en relief sur les bordures qui captent la lumière de manière réaliste.

---

# 5. MATRICE DES RARETÉS & VARIANTES (STYLE POKÉMON)

Une figure historique existe en plusieurs tirages, créant une quête de rareté infinie :

| Variante | Finition Visuelle | Fréquence d'Apparition | Valeur Marché Estimée |
| :--- | :--- | :---: | :---: |
| **Standard Mate** | Finition papier d'art satiné, cadre neumorphique sobre. | 1 sur 1 | Base |
| **Reverse Holo** | Illustration mate, cadre extérieur et cartouche textuel métallisés brillants. | 1 sur 4 boosters | × 3 |
| **Full Art (Plein Cadre)** | L'illustration occupe 100% de la surface de la carte. Les stats flottent en verre dépoli. | 1 sur 18 boosters | × 10 |
| **Alternative Art (Secret)** | Illustration d'archive inédite (croquis de travail, manuscrit autographe), sceau de cire et dorure à chaud. | 1 sur 75 boosters | × 40 |
| **Solid Gold Metal** | Carte entièrement coulée en or 24k brossé, gravée au laser, tirage limité numéroté (`#01/500`). | 1 sur 500 boosters | × 250 |

---

# 6. SYSTÈME DE JEU : DUELS DE SAVOIR & PROGRESSION

tcgWIKI n'est pas seulement un album d'images : c'est un jeu stratégique complet.

### A. Le Plateau de Duel : "L'Arène du Savoir"
- Grille de combat tactique **3 × 3**.
- Chaque joueur dispose d'un Codex de 20 cartes et d'une jauge d'Énergie (qui augmente de +1 par tour).
- **Règles d'affrontement** :
  - Une carte posée attaque les cartes adverses situées en face ou adjacentes (`ATQ` opposée à `DEF`).
  - Si les dégâts dépassent la `DEF`, la différence entame les `PV`.
- **Synergies d'Époque & de Type** :
  - *Affinité Scientifique* : Jouer Marie Curie et Albert Einstein sur la même ligne accorde +20% de DEF mutuelle ("Effet Solvay").
  - *Affinité Renaissance* : Léonard de Vinci booste toutes les cartes d'Histoire de la Renaissance.

### B. Le Grand Classeur Multi-Séries (10 000 Cartes • 20 Séries de 500 Cartes)
Le classeur physique tcgWIKI est structuré en **20 Tomes Officiels de 500 cartes chacun** (pour un total de 10 000 cartes encyclopédiques Wikipédia) :

```
       [ FAB SÉRIE : 01 ▾ ] ────► Ouvre le Sélecteur de Tomes (20 Séries)
                │
                ▼
   ┌──────────────────────────────────────────────────────────────┐
   │ PLANCHE OFFICIELLE 16 CARTES (4 Colonnes × 4 Rangées)        │
   │ 32 Pages par Série (500 cartes numérotées fixes #001 à #500) │
   ├──────────────┬──────────────┬──────────────┬─────────────────┤
   │ [ Carte 01 ] │ [ Carte 02 ] │ [ Carte 03 ] │ [ Carte 04 ]    │
   │ [ Carte 05 ] │ [ Carte 06 ] │ [ Carte 07 ] │ [ Carte 08 ]    │
   │ [ Carte 09 ] │ [ Carte 10 ] │ [ Carte 11 ] │ [ Carte 12 ]    │
   │ [ Carte 13 ] │ [ Carte 14 ] │ [ Carte 15 ] │ [ Carte 16 ]    │
   └──────────────┴──────────────┴──────────────┴─────────────────┘
```

#### Les 20 Séries Officielles & Leurs Cartes Ultra Chase :
1. **Série 1 : Genèse du Savoir** *(Antiquité & Sagesses)* — **Chase Ultra** : *Mona Lisa (La Joconde)*
2. **Série 2 : Révolutions & Grands Empires** *(Souverains & Conquêtes)* — **Chase Ultra** : *Napoléon Ier (Sacre Impérial)*
3. **Série 3 : Présidents & Hommes d'État** *(Démocraties & Leaders Mondiaux)* — **Chase Ultra** : *Abraham Lincoln (L'Émancipation)*
4. **Série 4 : Le Siècle des Lumières** *(Philosophie, Raison & Encyclopédie)* — **Chase Ultra** : *L'Encyclopédie de Diderot*
5. **Série 5 : Pionniers de la Science & Physique** *(Gravitation, Relativité)* — **Chase Ultra** : *Albert Einstein (E=mc²)*
6. **Série 6 : Merveilles du Monde & Architecture** *(Monuments Éternels)* — **Chase Ultra** : *Grande Pyramide de Khéops*
7. **Série 7 : Conquête Spatiale & Cosmos** *(Astrophysique & Apollo)* — **Chase Ultra** : *Apollo 11 (Le Premier Pas)*
8. **Série 8 : Conflits Mondiaux & XXe Siècle** *(Stratèges & Chute des Régimes)* — **Chase Ultra** : *Adolf Hitler (Seconde Guerre Mondiale)*
9. **Série 9 : Chefs-d'œuvre de la Peinture** *(Renaissance & Maîtres)* — **Chase Ultra** : *La Nuit Étoilée (Van Gogh)*
10. **Série 10 : Grands Explorateurs & Tours du Monde** *(Circumnavigation)* — **Chase Ultra** : *Ferdinand de Magellan*
11. **Série 11 : Littérature Universelle & Épopées** *(Grands Romanciers)* — **Chase Ultra** : *L'Odyssée d'Homère*
12. **Série 12 : Inventions & Révolution Industrielle** *(Vapeur & Électricité)* — **Chase Ultra** : *La Fusée de Stephenson*
13. **Série 13 : Civilisations d'Orient & Asie** *(Dynasties & Samouraïs)* — **Chase Ultra** : *L'Armée de Terre Cuite de Qin*
14. **Série 14 : Médecine & Grands Guérisseurs** *(Microbiologie & Vaccins)* — **Chase Ultra** : *Louis Pasteur*
15. **Série 15 : Océans & Abysses Mystérieuses** *(Fosses Océaniques)* — **Chase Ultra** : *Fosse des Mariannes*
16. **Série 16 : Pionniers de l'Aviation & Vitesse** *(Supersonique)* — **Chase Ultra** : *Le Concorde 001 Supersonique*
17. **Série 17 : Virtuoses de la Musique Classique** *(Symphonies & Opéras)* — **Chase Ultra** : *Wolfgang Amadeus Mozart*
18. **Série 18 : Géologie, Volcans & Forces de la Terre** *(Tectonique)* — **Chase Ultra** : *Le Mont Everest*
19. **Série 19 : Informatique, Code & Ère Numérique** *(Algorithmes & Turing)* — **Chase Ultra** : *Alan Turing (Enigma)*
20. **Série 20 : Trésors Archéologiques de l'Humanité** *(Hiéroglyphes & Reliques)* — **Chase Ultra** : *La Pierre de Rosette*

#### Règles Strictes de Conception Visuelle (Awwwards) :
- **Uniformité dimensionnelle absolue** : Chaque pochette de carte (verrouillée ou débloquée) possède un ratio d'aspect strict de `1 / 1.50`, avec des cartouches de titre (13px), micro-statistiques (12px) et numéro de série (9px) à hauteurs fixes pour éliminer tout décrochage vertical.
- **Transparence des slots verrouillés** : Les emplacements non possédés affichent le nom exact de la carte manquante (`🔒 [Nom de l'article]`) dans la pochette et le ruban de titre pour une quête de complétion claire et motivante.
- **Navigation par FAB Série à gauche** : Un bouton flottant `SÉRIE : [X] ▾` sur la gauche du classeur permet d'ouvrir instantanément le sélecteur des 20 tomes avec jauges de complétion et aperçu des cartes Ultra Chase.

---

# 7. ARCHITECTURE BACKEND : SUPABASE & STRIPE

```
[ FRONTEND REACT + THREE.JS ]
             │
             ├──► (1) Demande de paiement ──► [ STRIPE CHECKOUT ]
             │                                        │
             │                                        ▼
             │                                [ WEBHOOK STRIPE ]
             │                                        │
             ▼                                        ▼
[ SUPABASE REST / REALTIME ] ◄────────────── [ SUPABASE EDGE FUNCTION ]
  • Table users (solde tokens)                  • Vérification signature Stripe
  • Table user_cards (inventaire chiffré)       • Crédit instantané des tokens
  • Table booster_logs (traçabilité tirages)    • Idempotency anti-fraude
```

### A. Schéma des Tables Clés (PostgreSQL Supabase)
1. **`profiles`** : `id`, `username`, `avatar_url`, `tokens_balance`, `collector_level`, `created_at`.
2. **`cards_catalog`** : `id`, `wiki_title`, `name`, `rarity`, `image_url`, `stats_json`, `wiki_url`.
3. **`user_cards`** : `id`, `user_id`, `card_id`, `variant` (standard, holo, full_art, gold), `serial_number`, `xp`, `obtained_at`.
4. **`transactions`** : `id`, `user_id`, `stripe_session_id`, `amount_cents`, `tokens_credited`, `status`.

### B. Sécurité & Anti-Triche (Row Level Security)
- Le client frontend **ne peut jamais modifier son solde de tokens ni inventer une carte**.
- Tout tirage de booster est exécuté côté serveur via une fonction `open_booster(pack_type)` sous Supabase RPC, garantissant l'aléatoire cryptographique sécurisé.

---

# 8. FEUILLE DE ROUTE D'IMPLÉMENTATION

- [x] **Étape 1 : L'Armature & Design Neumorphique Awwwards** *(Terminé)*
  - 5 interfaces fidèles (`Accueil`, `Collection`, `Shop`, `Actu`, `Profil`).
  - Mode Jour Ivoire / Mode Nuit Obsidian profond avec interrupteur cosmique.
  - Pas de scroll sur l'accueil, top 3 des cartes rares, suppression de l'encoche.
- [ ] **Étape 2 : Connecteur Wikipédia Live & Générateur de Cartes**
  - Branchement sur l'API Wikipédia pour générer n'importe quelle carte à la volée.
  - Calcul dynamique d'Attaque, Défense, PV et Vitesse.
- [ ] **Étape 3 : Moteur de Rendu 3D Three.js & Shaders Holographiques**
  - Rotation 360°, biseautage de tranche et brillance holographique réactive.
- [ ] **Étape 4 : Backend Supabase & Monétisation Réelle Stripe**
  - Authentification, persistance de l'inventaire en base SQL.
  - Intégration de Stripe Checkout et Webhooks de crédit de W-Tokens.
- [ ] **Étape 5 : Mode Bataille "Duels de Savoir"**
  - Moteur de jeu au tour par tour, matchmaking joueur contre joueur (PvP).
