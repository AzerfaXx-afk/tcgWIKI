/**
 * wikiCollect - Système Multi-Séries Officiel (20 Séries de 500 Cartes = 10 000 Cartes)
 * Architecture Awwwards de Classeur TCG avec sélection par Série (Tomes de Personnalités & Pouvoir)
 */

export const SERIES_CONFIG = [
  {
    id: 1,
    code: "S01",
    title: "Série 1 : Panthéon du Pouvoir Mondial",
    shortTitle: "Panthéon Mondial",
    theme: "Chefs d'État, Légendes & Figures d'Impact",
    badgeColor: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.4)",
    ultraCard: {
      id: "001",
      name: "Jules César (Imperator)",
      category: "Histoire",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Cesare_da_Roccatagliata.jpg/330px-Cesare_da_Roccatagliata.jpg",
      cropPosition: "50% 10%",
      desc: "Imperator de Rome et conquérant des Gaules, père des empires occidentaux."
    },
    legendaries: ["Donald Trump", "Cristiano Ronaldo", "Vladimir Poutine", "Michael Jordan"]
  },
  {
    id: 2,
    code: "S02",
    title: "Série 2 : Présidents & Géopolitique",
    shortTitle: "Les Présidents",
    theme: "Démocraties, Crises & Leaders Contemporains",
    badgeColor: "#2563eb",
    accentGlow: "rgba(37, 99, 235, 0.4)",
    ultraCard: {
      id: "001",
      name: "Donald Trump (Maison-Blanche)",
      category: "Politique",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg",
      cropPosition: "50% 12%",
      desc: "45e et 47e président des États-Unis, symbole du populisme contemporain mondial."
    },
    legendaries: ["Emmanuel Macron", "Vladimir Poutine", "Barack Obama", "Charles de Gaulle"]
  },
  {
    id: 3,
    code: "S03",
    title: "Série 3 : Opérations Secrètes & Renseignement",
    shortTitle: "Services Secrets",
    theme: "Espionnage, Maîtres de l'Ombre & Contre-Terrorisme",
    badgeColor: "#059669",
    accentGlow: "rgba(5, 150, 105, 0.4)",
    ultraCard: {
      id: "001",
      name: "Le Mossad (Opérations Ciblées)",
      category: "Renseignement",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Emblem_of_the_Mossad.svg/330px-Emblem_of_the_Mossad.svg.png",
      cropPosition: "50% 50%",
      desc: "Institut pour le renseignement et les missions spéciales d'Israël."
    },
    legendaries: ["CIA", "MI6", "FSB", "Interpol"]
  },
  {
    id: 4,
    code: "S04",
    title: "Série 4 : Dieux du Stade & Icônes Sportives",
    shortTitle: "Légendes du Sport",
    theme: "Ballons d'Or, Bagues NBA & Légendes Olympiques",
    badgeColor: "#ea580c",
    accentGlow: "rgba(234, 88, 12, 0.4)",
    ultraCard: {
      id: "001",
      name: "Cristiano Ronaldo (CR7)",
      category: "Sport",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
      cropPosition: "50% 10%",
      desc: "Quintuple Ballon d'Or et meilleur buteur de l'histoire du football international."
    },
    legendaries: ["Kylian Mbappé", "Lionel Messi", "Michael Jordan", "Muhammad Ali"]
  },
  {
    id: 5,
    code: "S05",
    title: "Série 5 : Controverses, Médias & Viralité",
    shortTitle: "Viral & Scandales",
    theme: "Affaires d'État, Lanceurs d'Alerte & Débats Viraux",
    badgeColor: "#dc2626",
    accentGlow: "rgba(220, 38, 38, 0.4)",
    ultraCard: {
      id: "001",
      name: "Julian Assange (WikiLeaks)",
      category: "Médias",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Julian_Assange_2014.jpg/330px-Julian_Assange_2014.jpg",
      cropPosition: "50% 10%",
      desc: "Fondateur de WikiLeaks, figure de proue de la publication de câbles diplomatiques secrets."
    },
    legendaries: ["Jeffrey Epstein", "Charlie Kirk", "Edward Snowden", "Andrew Tate"]
  },
  {
    id: 6,
    code: "S06",
    title: "Série 6 : Tycoons de la Tech & Empereurs Financiers",
    shortTitle: "Tech Titans",
    theme: "Silicon Valley, IA, Wall Street & Espace",
    badgeColor: "#0284c7",
    accentGlow: "rgba(2, 132, 199, 0.4)",
    ultraCard: {
      id: "001",
      name: "Elon Musk (Mission Mars)",
      category: "Tech",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      cropPosition: "50% 15%",
      desc: "PDG de Tesla et SpaceX, homme le plus riche du monde et propriétaire de X."
    },
    legendaries: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Warren Buffett"]
  },
  {
    id: 7,
    code: "S07",
    title: "Série 7 : Conquérants & Bâtisseurs d'Empires",
    shortTitle: "Conquérants",
    theme: "Stratèges Militaires & Monarques Absolus",
    badgeColor: "#d97706",
    accentGlow: "rgba(217, 119, 6, 0.4)",
    ultraCard: {
      id: "001",
      name: "Napoléon Ier (L'Aigle Impérial)",
      category: "Histoire",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project_2.jpg/330px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project_2.jpg",
      cropPosition: "50% 4%",
      desc: "Premier empereur des Français, maître absolu de la guerre de mouvement et réformateur."
    },
    legendaries: ["Alexandre le Grand", "Gengis Khan", "Saladin", "Charlemagne"]
  },
  {
    id: 8,
    code: "S08",
    title: "Série 8 : Sagesse, Héritage & Figures Spirituelles",
    shortTitle: "Pensée & Héritage",
    theme: "Penseurs Majeurs, Éthique & Origines des Peuples",
    badgeColor: "#7c3aed",
    accentGlow: "rgba(124, 58, 237, 0.4)",
    ultraCard: {
      id: "001",
      name: "Moïse (Les Tables de la Loi)",
      category: "Histoire",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Michelangelo%27s_Moses_in_San_Pietro_in_Vincoli_Rome.jpg/330px-Michelangelo%27s_Moses_in_San_Pietro_in_Vincoli_Rome.jpg",
      cropPosition: "50% 15%",
      desc: "Prophète et législateur biblique, libérateur des Hébreux et transmetteur du Décalogue."
    },
    legendaries: ["Roi Salomon", "Moïse Maïmonide", "Baruch Spinoza", "Albert Einstein"]
  },
  {
    id: 9,
    code: "S09",
    title: "Série 9 : Conflits Mondiaux & Résistance",
    shortTitle: "Guerres & Résistance",
    theme: "Figures de la Victoire & Résistances Alliées",
    badgeColor: "#475569",
    accentGlow: "rgba(71, 85, 105, 0.4)",
    ultraCard: {
      id: "001",
      name: "Winston Churchill (Blood, Toil, Tears)",
      category: "Politique",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_1941.jpg/330px-Sir_Winston_Churchill_-_1941.jpg",
      cropPosition: "50% 12%",
      desc: "Premier ministre britannique ayant galvanisé la résistance mondiale contre la tyrannie."
    },
    legendaries: ["Charles de Gaulle", "Franklin D. Roosevelt", "Dwight D. Eisenhower", "John F. Kennedy"]
  },
  {
    id: 10,
    code: "S10",
    title: "Série 10 : Révolution de l'Intelligence Artificielle",
    shortTitle: "Révolution IA",
    theme: "Pionniers de l'Algorithme, Mathématiques & Modèles",
    badgeColor: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.4)",
    ultraCard: {
      id: "001",
      name: "Alan Turing (Père de l'Informatique)",
      category: "Sciences",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16_c.jpg/330px-Alan_Turing_Aged_16_c.jpg",
      cropPosition: "50% 12%",
      desc: "Mathématicien britannique de génie, briseur d'Enigma et théoricien de la machine universelle."
    },
    legendaries: ["Sam Altman", "Jensen Huang", "Elon Musk", "Steve Jobs"]
  },
  {
    id: 11,
    code: "S11",
    title: "Série 11 : Boxe & Arts Martiaux Mixtes",
    shortTitle: "Guerriers du Ring",
    theme: "Légendes du Combat au Corps à Corps",
    badgeColor: "#b91c1c",
    accentGlow: "rgba(185, 28, 28, 0.4)",
    ultraCard: {
      id: "001",
      name: "Muhammad Ali (Rumble in the Jungle)",
      category: "Sport",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/330px-Muhammad_Ali_NYWTS.jpg",
      cropPosition: "50% 12%",
      desc: "'The Greatest', légende de la boxe et combattant de la justice raciale et sociale."
    },
    legendaries: ["Mike Tyson", "Conor McGregor", "Kobe Bryant", "Zinédine Zidane"]
  },
  {
    id: 12,
    code: "S12",
    title: "Série 12 : Révolutionnaires & Idéologues",
    shortTitle: "Révolutionnaires",
    theme: "Soulèvements Populaires & Doctrines Politiques",
    badgeColor: "#be123c",
    accentGlow: "rgba(190, 18, 60, 0.4)",
    ultraCard: {
      id: "001",
      name: "Che Guevara (Hasta la Victoria)",
      category: "Histoire",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/330px-CheHigh.jpg",
      cropPosition: "50% 10%",
      desc: "Commandant de la guérilla cubaine et mythe visuel planétaire des luttes révolutionnaires."
    },
    legendaries: ["Fidel Castro", "Nelson Mandela", "Simon Bolivar", "George Washington"]
  },
  {
    id: 13,
    code: "S13",
    title: "Série 13 : Diplomates & Souverains d'Europe",
    shortTitle: "Souverains d'Europe",
    theme: "Monarchies Millénaires & Traités Historiques",
    badgeColor: "#4f46e5",
    accentGlow: "rgba(79, 70, 229, 0.4)",
    ultraCard: {
      id: "001",
      name: "Louis XIV (Le Roi-Soleil)",
      category: "Histoire",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/330px-Louis_XIV_of_France.jpg",
      cropPosition: "50% 6%",
      desc: "Monarque absolu ayant bâti le château de Versailles et dominé l'Europe du XVIIe siècle."
    },
    legendaries: ["Charlemagne", "Guillaume le Conquérant", "Auguste", "Marc Aurèle"]
  },
  {
    id: 14,
    code: "S14",
    title: "Série 14 : Génies de la Science & Physique",
    shortTitle: "Sciences & Atome",
    theme: "Relativité, Électromagnétisme & Prix Nobel",
    badgeColor: "#0891b2",
    accentGlow: "rgba(8, 145, 178, 0.4)",
    ultraCard: {
      id: "001",
      name: "Albert Einstein (E=mc²)",
      category: "Sciences",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/330px-Albert_Einstein_Head_cleaned.jpg",
      cropPosition: "50% 15%",
      desc: "Père de la relativité restreinte et générale, Prix Nobel de physique."
    },
    legendaries: ["Isaac Newton", "Marie Curie", "Nikola Tesla", "Galilée"]
  },
  {
    id: 15,
    code: "S15",
    title: "Série 15 : Maîtres de la Philosophie Antique",
    shortTitle: "Philosophie Antique",
    theme: "L'Agora, l'Éthique, la Logique & la République",
    badgeColor: "#ca8a04",
    accentGlow: "rgba(202, 138, 4, 0.4)",
    ultraCard: {
      id: "001",
      name: "Socrate (L'Examen de Soi)",
      category: "Histoire",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrate_du_Louvre.jpg/330px-Socrate_du_Louvre.jpg",
      cropPosition: "50% 12%",
      desc: "Fondateur de la philosophie morale occidentale et maître de Platon."
    },
    legendaries: ["Aristote", "Platon", "Marc Aurèle", "Sun Tzu"]
  },
  {
    id: 16,
    code: "S16",
    title: "Série 16 : Titans du Football Mondial",
    shortTitle: "Football Mondial",
    theme: "Coupes du Monde, Clasicos & Magiciens du Ballon",
    badgeColor: "#16a34a",
    accentGlow: "rgba(22, 163, 74, 0.4)",
    ultraCard: {
      id: "001",
      name: "Lionel Messi (Coupe du Monde 2022)",
      category: "Sport",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
      cropPosition: "50% 12%",
      desc: "Capitaine de l'Argentine championne du monde et 8 fois lauréat du Ballon d'Or."
    },
    legendaries: ["Cristiano Ronaldo", "Kylian Mbappé", "Diego Maradona", "Pelé"]
  },
  {
    id: 17,
    code: "S17",
    title: "Série 17 : Polémistes & Débatteurs Contemporains",
    shortTitle: "Débats & Polémiques",
    theme: "Liberté d'Expression, Podcasts & Réseaux Sociaux",
    badgeColor: "#9333ea",
    accentGlow: "rgba(147, 51, 234, 0.4)",
    ultraCard: {
      id: "001",
      name: "Joe Rogan (The Rogan Experience)",
      category: "Médias",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Joe_Rogan_2020.jpg/330px-Joe_Rogan_2020.jpg",
      cropPosition: "50% 10%",
      desc: "Animateur du podcast le plus puissant de la planète avec des audiences record."
    },
    legendaries: ["Charlie Kirk", "Tucker Carlson", "Jordan Peterson", "Andrew Tate"]
  },
  {
    id: 18,
    code: "S18",
    title: "Série 18 : Pionniers du Darknet & Cryptos",
    shortTitle: "Cyberguerre & Cryptos",
    theme: "Bitcoin, Cyphers, Whistleblowers & Décentralisation",
    badgeColor: "#0f766e",
    accentGlow: "rgba(15, 118, 110, 0.4)",
    ultraCard: {
      id: "001",
      name: "Edward Snowden (Le Prisme)",
      category: "Médias",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Edward_Snowden-2.jpg/330px-Edward_Snowden-2.jpg",
      cropPosition: "50% 10%",
      desc: "Informaticien et lanceur d'alerte héroïque ayant dévoilé les secrets de la NSA."
    },
    legendaries: ["Julian Assange", "Ross Ulbricht", "Kim Dotcom", "Elon Musk"]
  },
  {
    id: 19,
    code: "S19",
    title: "Série 19 : Bâtisseurs de l'Empire Romain",
    shortTitle: "Empire Romain",
    theme: "Légions, Sénat & Dynasties Impériales",
    badgeColor: "#b45309",
    accentGlow: "rgba(180, 83, 9, 0.4)",
    ultraCard: {
      id: "001",
      name: "Auguste (Pax Romana)",
      category: "Histoire",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-Augustus.jpg/330px-Statue-Augustus.jpg",
      cropPosition: "50% 8%",
      desc: "Premier empereur romain et architecte de la transformation de Rome en marbre."
    },
    legendaries: ["Jules César", "Marc Aurèle", "Spartacus", "Hannibal Barca"]
  },
  {
    id: 20,
    code: "S20",
    title: "Série 20 : Le Grand Sommet des Maîtres",
    shortTitle: "Grand Sommet",
    theme: "L'Apothéose : Les 500 Plus Grandes Figures Réunies",
    badgeColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.5)",
    ultraCard: {
      id: "001",
      name: "Léonard de Vinci (Le Génie Universel)",
      category: "Sciences",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/330px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
      cropPosition: "50% 15%",
      desc: "Polymathe toscan de la Renaissance incarnant l'absolu du savoir et de la créativité."
    },
    legendaries: ["Napoléon Ier", "Donald Trump", "Cristiano Ronaldo", "Albert Einstein"]
  }
];

export function getSeriesMetadata(seriesId = 1) {
  const num = Number(seriesId);
  return SERIES_CONFIG.find(s => s.id === num) || SERIES_CONFIG[0];
}
