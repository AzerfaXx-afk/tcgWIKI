/**
 * wikiCollect - Catalogue Officiel du Master Set (Série 1 : Panthéon & Pouvoir Mondial)
 * 500 Emplacements Numérotés Officiels (001 à 500)
 * Découpés par grands piliers de personnalités et figures d'influence :
 * - Politique & Chefs d'État
 * - Figures Virales, Scandales & Médias
 * - Services Secrets & Renseignement
 * - Légendes du Sport Mondial
 * - Tycoons de la Tech & Milliardaires
 * - Conquérants & Géants de l'Histoire
 * - Penseurs, Héritage & Figures Fondatrices
 */

import { MOCK_CARDS } from './mockData.js';

// Cartes signatures pré-débloquées de la Série 1
export const SIGNATURE_CARDS = MOCK_CARDS;

// 1. POLITIQUE & CHEFS D'ÉTAT
const POLITIQUE_TITLES = [
  "Donald Trump", "Emmanuel Macron", "Vladimir Poutine", "Barack Obama", "Charles de Gaulle",
  "Winston Churchill", "John F. Kennedy", "Abraham Lincoln", "Joe Biden", "Xi Jinping",
  "Franklin D. Roosevelt", "Dwight D. Eisenhower", "George Washington", "Nelson Mandela", "Margaret Thatcher",
  "Fidel Castro", "Che Guevara", "Silvio Berlusconi", "Angela Merkel", "Justin Trudeau"
];

// 2. RAP, MUSIQUE & CULTE URBAIN
const RAP_TITLES = [
  "Travis Scott", "Kanye West", "Damso", "Orelsan", "Vald",
  "The Kid LAROI", "Tupac Shakur", "Eminem", "Booba", "Drake",
  "Kendrick Lamar", "Snoop Dogg", "Jay-Z", "50 Cent", "Ninho",
  "Gazo", "Nekfeu", "Freeze Corleone"
];

// 3. PÈGRE, CRIME & FAITS DIVERS
const CRIME_TITLES = [
  "Pablo Escobar", "Xavier Dupont de Ligonnès", "Al Capone", "Jacques Mesrine", "El Chapo",
  "Lucky Luciano", "John Gotti", "Redoine Faïd"
];

// 4. CONTROVERSES, VIRALITÉ & MÉDIAS
const VIRAL_TITLES = [
  "Jeffrey Epstein", "Charlie Kirk", "Julian Assange", "Edward Snowden", "Andrew Tate",
  "Jordan Peterson", "Tucker Carlson", "Joe Rogan", "Alex Jones", "Kim Dotcom",
  "Ross Ulbricht", "Bernard Madoff"
];

// 3. RENSEIGNEMENT & OPÉRATIONS SPÉCIALES
const RENSEIGNEMENT_TITLES = [
  "Le Mossad", "CIA", "MI6", "FSB", "KGB",
  "Interpol", "DGSE", "NSA", "BND", "Shin Bet"
];

// 4. LÉGENDES DU SPORT MONDIAL
const SPORT_TITLES = [
  "Cristiano Ronaldo", "Kylian Mbappé", "Lionel Messi", "Michael Jordan", "Mike Tyson",
  "Muhammad Ali", "Zinédine Zidane", "LeBron James", "Neymar Jr", "Diego Maradona",
  "Pelé", "Kobe Bryant", "Usain Bolt", "Roger Federer", "Rafael Nadal",
  "Conor McGregor", "Lewis Hamilton", "Tiger Woods"
];

// 5. TECH & EMPIRES FINANCIERS
const TECH_TITLES = [
  "Elon Musk", "Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos",
  "Warren Buffett", "Satya Nadella", "Sam Altman", "Peter Thiel", "Larry Page",
  "Sergey Brin", "Jensen Huang"
];

// 6. CONQUÉRANTS & GÉANTS DE L'HISTOIRE
const HISTOIRE_TITLES = [
  "Napoléon Ier", "Jules César", "Alexandre le Grand", "Cléopâtre VII", "Gengis Khan",
  "Saladin", "Marc Aurèle", "Sun Tzu", "Charlemagne", "Louis XIV",
  "Guillaume le Conquérant", "Auguste", "Ramsès II", "Hannibal Barca", "Jeanne d'Arc",
  "Cyrus le Grand", "Hammurabi", "Attila", "Vercingétorix", "Spartacus"
];

// 7. PENSÉE, PHILOSOPHIE & FIGURES FONDATRICES
const PENSEE_TITLES = [
  "Moïse", "Roi Salomon", "Moïse Maïmonide", "Baruch Spinoza", "Albert Einstein",
  "Léonard de Vinci", "Isaac Newton", "Marie Curie", "Aristote", "Socrate",
  "Platon", "René Descartes", "Blaise Pascal", "Friedrich Nietzsche", "Emmanuel Kant",
  "Voltaire", "Jean-Jacques Rousseau", "Galilée", "Nikola Tesla", "Alan Turing"
];

// 8. CINÉMA, SÉRIES & CULTURE POP
const CINEMA_TITLES = [
  "Jackie Chan", "Will Smith", "Morgan Freeman", "Scarlett Johansson", "Denzel Washington",
  "Arnold Schwarzenegger", "Bruce Lee", "Robert De Niro", "Leonardo DiCaprio", "Brad Pitt",
  "Samuel L. Jackson", "Tom Hanks", "Quentin Tarantino", "Steven Spielberg", "Al Pacino"
];

// 9. YOUTUBE, INTERNET & CRÉATEURS
const YOUTUBE_TITLES = [
  "Squeezie", "Michou", "Inoxtag", "MrBeast", "PewDiePie",
  "Amixem", "Léna Situations", "Norman Thavaud", "Cyprien", "Gotaga"
];

// 10. TITANS DE L'IA & RÉVOLUTION NUMÉRIQUE
const AI_TITANS_TITLES = [
  "Dario Amodei", "Demis Hassabis", "Yann LeCun", "Geoffrey Hinton", "Sundar Pichai",
  "Tim Cook", "Jack Dorsey", "Travis Kalanick", "Patrick Collison", "Daniel Ek"
];

// 11. CHARME, PORNO & ICÔNES GLAMOUR
const ADULT_TITLES = [
  "Mia Khalifa", "Lana Rhoades", "Clara Morgane", "Brigitte Lahaie", "Sasha Grey",
  "Riley Reid", "Angela White", "Amouranth", "Pamela Anderson", "Stormy Daniels",
  "Jenna Jameson", "Belle Delphine", "Céline Tran", "Polska"
];

// 12. MUSIQUE & POP STARS MONDIALES
const POP_MUSIC_TITLES = [
  "Michael Jackson", "Freddie Mercury"
];


// Raretés pondérées mathématiquement
const RARITY_DISTRIBUTION = [
  { rarity: 'C', rarityLabel: 'Commun', variant: 'satin_base', weight: 48 },
  { rarity: 'R', rarityLabel: 'Rare', variant: 'silver_chrome', weight: 28 },
  { rarity: 'H', rarityLabel: 'Héritage', variant: 'gold_foil', weight: 14 },
  { rarity: 'D', rarityLabel: 'Diamond', variant: 'rainbow_holo', weight: 6 },
  { rarity: 'L', rarityLabel: 'Légendaire', variant: 'solid_gold', weight: 3.5 },
  { rarity: 'U', rarityLabel: 'Ultra Secret', variant: 'full_art_secret', weight: 0.5 }
];

function getRandomRarity() {
  const rand = Math.random() * 100;
  let cum = 0;
  for (const r of RARITY_DISTRIBUTION) {
    cum += r.weight;
    if (rand <= cum) return r;
  }
  return RARITY_DISTRIBUTION[0];
}

// Répertoire des portraits officiels et visuels certifiés Wikimedia Commons
export const TOPIC_ARTWORKS = {
  // 1. Politique
  "Donald Trump": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg",
    cropPosition: "50% 12%",
    desc: "45e et 47e président des États-Unis, magnat et figure politique polarisante mondiale."
  },
  "Emmanuel Macron": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Président de la République française depuis 2017, artisan du réformisme européen."
  },
  "Vladimir Poutine": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vladimir_Putin_%282020-02-20%29.jpg/330px-Vladimir_Putin_%282020-02-20%29.jpg",
    cropPosition: "50% 12%",
    desc: "Président de la Russie, ancien du KGB et maître stratège des équilibres géopolitiques."
  },
  "Barack Obama": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/330px-President_Barack_Obama.jpg",
    cropPosition: "50% 10%",
    desc: "44e président des États-Unis et prix Nobel de la paix 2009, orateur exceptionnel."
  },
  "Charles de Gaulle": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/De_Gaulle-OWI_%28cropped%29_%28c%29%282%29.jpg/500px-De_Gaulle-OWI_%28cropped%29_%28c%29%282%29.jpg",
    cropPosition: "50% 10%",
    category: "Politique",
    defaultRarity: "L",
    desc: "Général de brigade, chef de la France libre et fondateur de la Cinquième République."
  },
  "Winston Churchill": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg/500px-Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg",
    cropPosition: "50% 12%",
    category: "Politique",
    defaultRarity: "L",
    desc: "Premier ministre britannique et prix Nobel, symbole indéfectible de la victoire alliée."
  },
  "John F. Kennedy": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/330px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
    cropPosition: "50% 8%",
    desc: "35e président des États-Unis, figure charismatique de la guerre froide et d'Apollo."
  },
  "Abraham Lincoln": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/330px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    cropPosition: "50% 10%",
    desc: "16e président des États-Unis, proclamateur de l'émancipation et sauveur de l'Union."
  },
  "Joe Biden": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/330px-Joe_Biden_presidential_portrait.jpg",
    cropPosition: "50% 10%",
    desc: "46e président des États-Unis après avoir été vice-président de Barack Obama."
  },
  "Xi Jinping": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Xi_Jinping_2019.jpg/330px-Xi_Jinping_2019.jpg",
    cropPosition: "50% 10%",
    desc: "Secrétaire général du PCC et président de la République populaire de Chine."
  },
  "Franklin D. Roosevelt": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/330px-FDR_1944_Color_Portrait.jpg",
    cropPosition: "50% 10%",
    desc: "32e président des États-Unis, pilote du New Deal et architecte de la victoire alliée."
  },
  "Dwight D. Eisenhower": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg/330px-Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg",
    cropPosition: "50% 10%",
    desc: "Commandant en chef des forces alliées en Europe et 34e président américain."
  },
  "George Washington": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/330px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    cropPosition: "50% 8%",
    desc: "Père fondateur et premier président des États-Unis d'Amérique."
  },
  "Nelson Mandela": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/330px-Nelson_Mandela_1994.jpg",
    cropPosition: "50% 12%",
    desc: "Leader anti-apartheid sud-africain, président d'Afrique du Sud et Prix Nobel de la paix."
  },
  "Margaret Thatcher": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Margaret_Thatcher_cropped.png/330px-Margaret_Thatcher_cropped.png",
    cropPosition: "50% 10%",
    desc: "La 'Dame de fer', première ministre du Royaume-Uni de 1979 à 1990."
  },
  "Fidel Castro": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fidel_Castro_1978.jpg/330px-Fidel_Castro_1978.jpg",
    cropPosition: "50% 10%",
    desc: "Dirigeant de la Révolution cubaine et figure historique du tiers-mondisme."
  },
  "Che Guevara": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/330px-CheHigh.jpg",
    cropPosition: "50% 10%",
    desc: "Révolutionnaire marxiste argentino-cubain, icône mondiale immortalisée par Korda."
  },
  "Silvio Berlusconi": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Silvio_Berlusconi_2011.jpg/330px-Silvio_Berlusconi_2011.jpg",
    cropPosition: "50% 10%",
    desc: "Homme d'affaires et président du Conseil italien, pionnier du magnat médiatique."
  },
  "Angela Merkel": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Angela_Merkel_2019_cropped.jpg/330px-Angela_Merkel_2019_cropped.jpg",
    cropPosition: "50% 10%",
    desc: "Chancelière fédérale d'Allemagne pendant seize ans, figure de proue de l'UE."
  },
  "Justin Trudeau": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Justin_Trudeau_in_2024.jpg/330px-Justin_Trudeau_in_2024.jpg",
    cropPosition: "50% 10%",
    desc: "Premier ministre du Canada depuis 2015, leader du Parti libéral."
  },

  // 2. Viralité, Médias & Controverses
  "Jeffrey Epstein": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Jeffrey_Epstein_mug_shot.jpg/330px-Jeffrey_Epstein_mug_shot.jpg",
    cropPosition: "50% 12%",
    desc: "Financier américain au cœur d'un séisme judiciaire et médiatique mondial."
  },
  "Charlie Kirk": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Charlie_Kirk_%2853952923573%29_%28headshot_cropped%29.jpg/330px-Charlie_Kirk_%2853952923573%29_%28headshot_cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Commentateur politique US, créateur de débats viraux universitaires et TPUSA."
  },
  "Julian Assange": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Julian_Assange_2014.jpg/330px-Julian_Assange_2014.jpg",
    cropPosition: "50% 10%",
    desc: "Fondateur de WikiLeaks, figure de la cyberguerre et de la transparence de l'État."
  },
  "Edward Snowden": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Edward_Snowden-2.jpg/330px-Edward_Snowden-2.jpg",
    cropPosition: "50% 10%",
    desc: "Lanceur d'alerte de la NSA ayant révélé les programmes mondiaux de surveillance de masse."
  },
  "Andrew Tate": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Andrew_Tate_on_AJ_Sept_2022_crop.jpg/330px-Andrew_Tate_on_AJ_Sept_2022_crop.jpg",
    cropPosition: "50% 10%",
    desc: "Ancien kickboxeur devenu personnalité internet virale et figure médiatique controversée."
  },
  "Jordan Peterson": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jordan_Peterson_by_Gage_Skidmore.jpg/330px-Jordan_Peterson_by_Gage_Skidmore.jpg",
    cropPosition: "50% 10%",
    desc: "Psychologue clinicien canadien, essayiste et conférencier aux millions d'abonnés."
  },
  "Tucker Carlson": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Tucker_Carlson_%2852586718370%29_%28cropped%29.jpg/500px-Tucker_Carlson_%2852586718370%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Controverses & Médias",
    defaultRarity: "H",
    desc: "Journaliste et animateur de talk-show politique américain aux interviews virales."
  },
  "Joe Rogan": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Joe_Rogan_2020.jpg/330px-Joe_Rogan_2020.jpg",
    cropPosition: "50% 10%",
    desc: "Créateur du podcast 'The Joe Rogan Experience', média audio le plus écouté au monde."
  },
  "Alex Jones": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Alex_Jones_at_the_2016_RNC_%2828458925585%29_%28cropped%29.jpg/330px-Alex_Jones_at_the_2016_RNC_%2828458925585%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Animateur de radio américain et fondateur d'Infowars, figure de théories virales."
  },
  "Kim Dotcom": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kim_Dotcom_%287232230414%29.jpg/330px-Kim_Dotcom_%287232230414%29.jpg",
    cropPosition: "50% 10%",
    desc: "Entrepreneur internet flamboyant, fondateur de Megaupload et activiste du web."
  },
  "Ross Ulbricht": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ross_Ulbricht_2010.jpg/330px-Ross_Ulbricht_2010.jpg",
    cropPosition: "50% 10%",
    desc: "Créateur du marché noir en ligne Silk Road sur le Dark Web et pionnier des cryptos."
  },
  "Bernard Madoff": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/BernardMadoff.jpg/330px-BernardMadoff.jpg",
    cropPosition: "50% 10%",
    desc: "Financier de Wall Street, auteur de la plus vaste escroquerie pyramidale de Ponzi."
  },

  // 3. Renseignement & Agences Secrètes
  "Le Mossad": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mossad_seal.svg/330px-Mossad_seal.svg.png",
    cropPosition: "50% 50%",
    desc: "Institut pour le renseignement et les missions spéciales d'Israël, maître des coups tactiques."
  },
  "CIA": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Seal_of_the_Central_Intelligence_Agency.svg/330px-Seal_of_the_Central_Intelligence_Agency.svg.png",
    cropPosition: "50% 50%",
    desc: "Central Intelligence Agency, agence d'espionnage et d'action extérieure des États-Unis."
  },
  "MI6": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_the_Secret_Intelligence_Service.svg/330px-Flag_of_the_Secret_Intelligence_Service.svg.png",
    cropPosition: "50% 50%",
    desc: "Secret Intelligence Service britannique, agence mythique du renseignement d'État."
  },
  "FSB": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Emblem_of_the_Federal_Security_Service.svg/330px-Emblem_of_the_Federal_Security_Service.svg.png",
    cropPosition: "50% 50%",
    desc: "Service fédéral de sécurité de la Fédération de Russie, successeur direct du KGB soviétique."
  },
  "KGB": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/KGB_emblem.svg/330px-KGB_emblem.svg.png",
    cropPosition: "50% 50%",
    desc: "Comité de la sécurité d'État soviétique, pilier de l'espionnage pendant la guerre froide."
  },
  "Interpol": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Interpol_logo.svg/330px-Interpol_logo.svg.png",
    cropPosition: "50% 50%",
    desc: "Organisation internationale de police criminelle réunissant 196 pays du monde entier."
  },
  "DGSE": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Emblem_of_the_DGSE.svg/330px-Emblem_of_the_DGSE.svg.png",
    cropPosition: "50% 50%",
    desc: "Direction générale de la Sécurité extérieure, agence de renseignement secret français."
  },
  "NSA": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Seal_of_the_National_Security_Agency.svg/330px-Seal_of_the_National_Security_Agency.svg.png",
    cropPosition: "50% 50%",
    desc: "National Security Agency, géant de l'interception de signaux et de la cryptanalyse globale."
  },
  "BND": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Logo_Bundesnachrichtendienst.svg/330px-Logo_Bundesnachrichtendienst.svg.png",
    cropPosition: "50% 50%",
    desc: "Service fédéral de renseignement allemand, opérant dans la collecte extérieure."
  },
  "Shin Bet": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Emblem_of_the_Shin_Bet.svg/330px-Emblem_of_the_Shin_Bet.svg.png",
    cropPosition: "50% 50%",
    desc: "Service de sécurité intérieure israélien chargé du contre-terrorisme et du contre-espionnage."
  },

  // 4. Dieux du Sport Mondial
  "Cristiano Ronaldo": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Quintuple Ballon d'Or, machine athlétique et meilleur buteur du football international."
  },
  "Kylian Mbappé": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/330px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
    cropPosition: "50% 15%",
    desc: "Champion du monde 2018 et triplé légendaire en finale 2022, attaquant supersonique."
  },
  "Lionel Messi": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    cropPosition: "50% 12%",
    desc: "Octtuple Ballon d'Or, champion du monde 2022, génie absolu du football moderne."
  },
  "Michael Jordan": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/330px-Michael_Jordan_in_2014.jpg",
    cropPosition: "50% 10%",
    desc: "Sextuple champion NBA des Chicago Bulls, icône mondiale et le plus grand joueur de basket."
  },
  "Mike Tyson": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg/330px-Mike_Tyson_2019_by_Glenn_Francis.jpg",
    cropPosition: "50% 10%",
    desc: "Plus jeune champion du monde poids lourds de l'histoire, puissance de KO dévastatrice."
  },
  "Muhammad Ali": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/330px-Muhammad_Ali_NYWTS.jpg",
    cropPosition: "50% 12%",
    desc: "'The Greatest', triple champion du monde des poids lourds et légende des droits civiques."
  },
  "Zinédine Zidane": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/330px-Zinedine_Zidane_by_Tasnim_03.jpg",
    cropPosition: "50% 12%",
    desc: "Ballon d'Or 1998, héros du Mondial 98 et triple vainqueur de la C1 comme entraîneur."
  },
  "LeBron James": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/330px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    cropPosition: "50% 10%",
    desc: "'King James', quadruple champion NBA et meilleur marqueur de l'histoire de la ligue."
  },
  "Neymar Jr": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bra-Cos_%281%29_%28cropped%29.jpg/330px-Bra-Cos_%281%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Virtuose brésilien et meilleur buteur de l'histoire de la Seleção brésilienne."
  },
  "Diego Maradona": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/330px-Maradona-Mundial_86_con_la_copa.JPG",
    cropPosition: "50% 10%",
    desc: "'El Pibe de Oro', vainqueur du Mondial 86 avec la Main de Dieu et le but du siècle."
  },
  "Pelé": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pel%C3%A9_by_John_Mathew_Smith.jpg/330px-Pel%C3%A9_by_John_Mathew_Smith.jpg",
    cropPosition: "50% 10%",
    desc: "Le Roi Pelé, unique footballeur triple vainqueur de la Coupe du Monde de la FIFA."
  },
  "Kobe Bryant": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/330px-Kobe_Bryant_2014.jpg",
    cropPosition: "50% 10%",
    desc: "'Black Mamba', quintuple champion NBA avec les Lakers et modèle de mentalité d'élite."
  },
  "Usain Bolt": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Usain_Bolt_after_4_%C3%97_100_m_relay_at_the_2012_Summer_Olympics_%28cropped%29.jpg/330px-Usain_Bolt_after_4_%C3%97_100_m_relay_at_the_2012_Summer_Olympics_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "L'éclair jamaïcain, octuple médaillé d'or olympique et recordman du 100m et 200m."
  },
  "Roger Federer": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Roger_Federer_at_2012_Wimbledon_%28cropped%29.jpg/330px-Roger_Federer_at_2012_Wimbledon_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Maestro du tennis suisse aux 20 titres du Grand Chelem, maître de l'élégance sur gazon."
  },
  "Rafael Nadal": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rafael_Nadal_2022.jpg/330px-Rafael_Nadal_2022.jpg",
    cropPosition: "50% 10%",
    desc: "L'ogre de l'ocre, 14 fois vainqueur de Roland-Garros et gladiateur du tennis mondial."
  },
  "Conor McGregor": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Conor_McGregor_2018.jpg/330px-Conor_McGregor_2018.jpg",
    cropPosition: "50% 10%",
    desc: "'The Notorious', double champion UFC et superstar planétaire des arts martiaux mixtes."
  },
  "Lewis Hamilton": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/330px-Lewis_Hamilton_2016_Malaysia_2.jpg",
    cropPosition: "50% 10%",
    desc: "Septuple champion du monde de Formule 1 et recordman absolu de victoires et de poles."
  },
  "Tiger Woods": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tiger_Woods_2019.jpg/330px-Tiger_Woods_2019.jpg",
    cropPosition: "50% 10%",
    desc: "Quinze victoires en Grand Chelem, figure dominante ayant transformé le golf planétaire."
  },

  // 5. Tech & Tycoons
  "Elon Musk": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    cropPosition: "50% 15%",
    desc: "Entrepreneur à la tête de Tesla, SpaceX, Neuralink et X, visionnaire de l'espace."
  },
  "Steve Jobs": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur d'Apple et pionnier de l'ordinateur personnel, de l'iPhone et du design moderne."
  },
  "Bill Gates": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/330px-Bill_Gates_2017_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Fondateur de Microsoft et philanthrope mondial majeur via la Fondation Gates."
  },
  "Mark Zuckerberg": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Créateur de Facebook et PDG de Meta, bâtisseur des réseaux sociaux et du métavers."
  },
  "Jeff Bezos": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%28cropped%29.jpg/330px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Fondateur d'Amazon et de Blue Origin, maître du commerce en ligne et de l'infrastructure cloud."
  },
  "Warren Buffett": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg/330px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg",
    cropPosition: "50% 10%",
    desc: "'L'Oracle d'Omaha', président de Berkshire Hathaway et légendaire investisseur."
  },
  "Sam Altman": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sam_Altman_TechCrunch_Disrupt_2019_%28cropped%29.jpg/330px-Sam_Altman_TechCrunch_Disrupt_2019_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "PDG d'OpenAI et architecte du déploiement mondial de ChatGPT et de l'intelligence artificielle."
  },
  "Jensen Huang": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jensen_Huang_at_Computex_2023.jpg/330px-Jensen_Huang_at_Computex_2023.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur et PDG de Nvidia, moteur technologique de la révolution de l'IA et du calcul accéléré."
  },

  // 6. Conquérants & Histoire Universelle
  "Napoléon Ier": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project_2.jpg/330px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project_2.jpg",
    cropPosition: "50% 4%",
    desc: "Premier empereur des Français, stratège militaire de génie et réformateur du Code civil."
  },
  "Jules César": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg/330px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Imperator de Rome, conquérant des Gaules et dictateur perpétuel au destin tragique."
  },
  "Alexandre le Grand": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/AlexanderTheGreat_Bust.jpg/330px-AlexanderTheGreat_Bust.jpg",
    cropPosition: "50% 10%",
    desc: "Roi de Macédoine et conquérant invaincu de l'Égypte jusqu'aux frontières de l'Inde."
  },
  "Cléopâtre VII": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/330px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
    cropPosition: "50% 12%",
    desc: "Dernière souveraine d'Égypte ptolémaïque, femme d'État d'un immense prestige antique."
  },
  "Gengis Khan": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanGenghisKhan.jpg/330px-YuanGenghisKhan.jpg",
    cropPosition: "50% 15%",
    desc: "Fondateur de l'Empire mongol, plus grand empire terrestre contigu de toute l'histoire."
  },
  "Saladin": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Saladin_Rex_Aegypti.jpg/330px-Saladin_Rex_Aegypti.jpg",
    cropPosition: "50% 12%",
    desc: "Sultan ayyoubide d'Égypte et de Syrie, preneur de Jérusalem et stratège respecté."
  },
  "Marc Aurèle": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Marcus_Aurelius_Glyptothek_Munich.jpg/330px-Marcus_Aurelius_Glyptothek_Munich.jpg",
    cropPosition: "50% 10%",
    desc: "Empereur romain et philosophe stoïcien, auteur des célèbres Pensées pour moi-même."
  },
  "Sun Tzu": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Suntzu.jpg/330px-Suntzu.jpg",
    cropPosition: "50% 15%",
    desc: "Général chinois de l'Antiquité, auteur du traité indémodable 'L'Art de la guerre'."
  },
  "Charlemagne": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Charlemagne_by_Albrecht_D%C3%BCrer.jpg/330px-Charlemagne_by_Albrecht_D%C3%BCrer.jpg",
    cropPosition: "50% 10%",
    desc: "Roi des Francs et empereur d'Occident, unificateur des nations d'Europe occidentale."
  },
  "Louis XIV": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/330px-Louis_XIV_of_France.jpg",
    cropPosition: "50% 6%",
    desc: "Le Roi-Soleil, souverain absolu qui porta la monarchie et les arts français à leur apogée."
  },
  "Jeanne d'Arc": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Contemporaine_afb_jeanne_d_arc.png/330px-Contemporaine_afb_jeanne_d_arc.png",
    cropPosition: "50% 12%",
    desc: "Héroïne française de la guerre de Cent Ans et symbole universel de détermination."
  },
  "Ramsès II": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/RamsesIIEgypt.jpg/330px-RamsesIIEgypt.jpg",
    cropPosition: "50% 15%",
    desc: "Pharaon guerrier et plus grand bâtisseur de l'Égypte antique sous la XIXe dynastie."
  },
  "Vercingétorix": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Millet_Vercingetorix.jpg/330px-Millet_Vercingetorix.jpg",
    cropPosition: "50% 8%",
    desc: "Chef des Arvernes et fédérateur de la résistance gauloise contre Jules César à Alésia."
  },

  // 7. Pensée, Savoir & Civilisations
  "Moïse": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Moses_Breaking_the_Tablets_of_the_Law%2C_by_Guido_Reni.jpg/330px-Moses_Breaking_the_Tablets_of_the_Law%2C_by_Guido_Reni.jpg",
    cropPosition: "50% 15%",
    desc: "Prophète et législateur biblique ayant conduit la sortie d'Égypte et les Tables de la Loi."
  },
  "Roi Salomon": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/King_Solomon_wearing_his_crown%2C_holding_his_sceptre_and_a_book_Wellcome_V0034440.jpg/330px-King_Solomon_wearing_his_crown%2C_holding_his_sceptre_and_a_book_Wellcome_V0034440.jpg",
    cropPosition: "50% 12%",
    desc: "Roi d'Israël réputé pour sa sagesse infinie, bâtisseur du Premier Temple de Jérusalem."
  },
  "Moïse Maïmonide": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Maimonides-2.jpg/330px-Maimonides-2.jpg",
    cropPosition: "50% 12%",
    desc: "Rambam, médecin, philosophe et juriste majeur du Moyen Âge, auteur du Guide des égarés."
  },
  "Baruch Spinoza": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Spinoza.jpg/330px-Spinoza.jpg",
    cropPosition: "50% 10%",
    desc: "Philosophe hollandais d'origine marrane portugaise, auteur révolutionnaire de l'Éthique."
  },
  "Albert Einstein": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/330px-Albert_Einstein_Head_cleaned.jpg",
    cropPosition: "50% 15%",
    desc: "Physicien théoricien, père de la théorie de la relativité générale et Prix Nobel de physique."
  },
  "Léonard de Vinci": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/330px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
    cropPosition: "50% 15%",
    desc: "Polymathe toscan de la Renaissance, peintre de La Joconde et ingénieur visionnaire."
  },
  "Marie Curie": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/330px-Marie_Curie_c1920.jpg",
    cropPosition: "50% 15%",
    desc: "Pionnière de la radioactivité, unique personne doublement lauréate de prix Nobel dans deux sciences."
  },
  "Isaac Newton": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/330px-GodfreyKneller-IsaacNewton-1689.jpg",
    cropPosition: "50% 10%",
    desc: "Physicien et mathématicien anglais, père de la gravitation universelle et des Principia."
  },
  "Aristote": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aristoteles_Louvre.jpg/330px-Aristoteles_Louvre.jpg",
    cropPosition: "50% 15%",
    desc: "Philosophe grec de l'Antiquité dont la pensée a structuré la logique et les sciences occidentales."
  },
  "Socrate": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrate_du_Louvre.jpg/330px-Socrate_du_Louvre.jpg",
    cropPosition: "50% 12%",
    desc: "Père de la philosophie morale occidentale et inventeur de la maïeutique."
  },
  "Platon": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/330px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    cropPosition: "50% 12%",
    desc: "Disciple de Socrate et fondateur de l'Académie d'Athènes, auteur de La République."
  },
  "Nikola Tesla": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/330px-N.Tesla.JPG",
    cropPosition: "50% 10%",
    desc: "Inventeur génial, concepteur du courant alternatif et visionnaire de l'énergie sans fil."
  },
  "Alan Turing": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16_c.jpg/330px-Alan_Turing_Aged_16_c.jpg",
    cropPosition: "50% 12%",
    desc: "Mathématicien britannique, casseur d'Enigma et père fondateur de l'informatique moderne."
  },

  // Rap, Trap & Musique Urbaine
  "Travis Scott": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TravisScott-byPhilipRomano.jpg/330px-TravisScott-byPhilipRomano.jpg",
    cropPosition: "50% 12%",
    desc: "Superstar de Houston, architecte d'Astroworld et d'Utopia, icône de la culture sneakers et trap."
  },
  "Kanye West": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Kanye_West_at_the_Met_Gala_in_2019.png/330px-Kanye_West_at_the_Met_Gala_in_2019.png",
    cropPosition: "50% 10%",
    desc: "Ye, producteur visionnaire, 24 Grammy Awards, créateur de Yeezy et génie controversé."
  },
  "The Kid LAROI": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/LEAD_PRESS_PC_ADAMKARGENIAN_%28cropped%29.tif/lossy-page1-330px-LEAD_PRESS_PC_ADAMKARGENIAN_%28cropped%29.tif.jpg",
    cropPosition: "50% 10%",
    desc: "Phénomène australien du rap mélodique, protégé de Juice WRLD et auteur du hit mondial 'Stay'."
  },
  "Orelsan": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Orelsan_Deauville_2019.jpg/330px-Orelsan_Deauville_2019.jpg",
    cropPosition: "50% 12%",
    desc: "Auteur-compositeur caennais, multi-récompensé aux Victoires, plume percutante de Civilisation."
  },
  "Vald": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/NDLE2025Vald_10.jpg/330px-NDLE2025Vald_10.jpg",
    cropPosition: "50% 10%",
    desc: "Rappeur d'Aulnay-sous-Bois, maître de l'absurde, de la satire tranchante et des flows chirurgicaux."
  },
  "Damso": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Festival_des_Vieilles_Charrues_2018_-_Damso_-_053.jpg/330px-Festival_des_Vieilles_Charrues_2018_-_Damso_-_053.jpg",
    cropPosition: "50% 12%",
    desc: "Dems, parolier bruxellois virtuose, créateur d'Ipséité et de QALF, figure majeure du rap francophone."
  },
  "Tupac Shakur": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tupac_Shakur_in_1995.jpg/330px-Tupac_Shakur_in_1995.jpg",
    cropPosition: "50% 10%",
    desc: "2Pac, icône éternelle de la West Coast, poète révolutionnaire et figure immortelle du hip-hop."
  },
  "Eminem": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eminem_2021_Color_Corrected.jpg/330px-Eminem_2021_Color_Corrected.jpg",
    cropPosition: "50% 10%",
    desc: "Slim Shady, le Rap God de Detroit aux 220 millions d'albums vendus et au débit technique légendaire."
  },
  "Booba": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Festival_des_Vieilles_Charrues_2019_-_Booba_-_038.jpg/330px-Festival_des_Vieilles_Charrues_2019_-_Booba_-_038.jpg",
    cropPosition: "50% 10%",
    desc: "Le Duc de Boulogne, roi du 92i et maître incontesté de la longévité dans le rap français."
  },
  "Drake": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Drake_at_The_Carter_Effect_2017_%2836818935200%29_%28cropped%29.jpg/330px-Drake_at_The_Carter_Effect_2017_%2836818935200%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Drizzy, géant canadien d'OVO et roi incontesté du streaming mondial sur Spotify et Apple Music."
  },
  "Kendrick Lamar": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/KendrickSZASPurs230725-144_%28cropped%29_desaturated.jpg/330px-KendrickSZASPurs230725-144_%28cropped%29_desaturated.jpg",
    cropPosition: "50% 10%",
    desc: "K-Dot, premier rappeur récompensé du prix Pulitzer, génie conceptuel de Compton."
  },
  "Snoop Dogg": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg/330px-Snoop_Dogg_2019_by_Glenn_Francis.jpg",
    cropPosition: "50% 10%",
    desc: "Légende vivante de Long Beach, voix d'or du G-funk et ambassadeur mondial de la West Coast."
  },
  "Jay-Z": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jay-Z_2%2C_2011.jpg/330px-Jay-Z_2%2C_2011.jpg",
    cropPosition: "50% 10%",
    desc: "Hov, premier milliardaire du hip-hop, fondateur de Roc Nation et légende de Brooklyn."
  },
  "50 Cent": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Curtis_%2250_Cent%22_Jackson_visits_Barksdale_AFB_%285%29_%28cropped%29.jpg/330px-Curtis_%2250_Cent%22_Jackson_visits_Barksdale_AFB_%285%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Curtis Jackson, rescapé de 9 balles devenu magnat mondial avec 'Get Rich or Die Tryin'."
  },
  "Ninho": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Festival_des_Vieilles_Charrues_2022_-_Ninho_-_041.jpg/330px-Festival_des_Vieilles_Charrues_2022_-_Ninho_-_041.jpg",
    cropPosition: "50% 10%",
    desc: "Le recordman absolu des certifications et disques d'or du rap français contemporain."
  },
  "Gazo": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/P2N2023Gazo_2.jpg/330px-P2N2023Gazo_2.jpg",
    cropPosition: "50% 10%",
    desc: "Pionnier de la drill francophone à la voix grave inimitable et aux bangers d'anthologie."
  },
  "Nekfeu": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Nekfeu_avp.jpg/330px-Nekfeu_avp.jpg",
    cropPosition: "50% 10%",
    desc: "Ken Samaras, membre de 1995 et $crew, auteur de Feu et des Étoiles vagabondes."
  },
  "Freeze Corleone": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Freeze_Corleone_%28cropped%29.jpg/330px-Freeze_Corleone_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Professeur Chen du collectif 667, maître des rimes multi-syllabiques sombres et cryptiques."
  },

  // Pègre, Crime Organisé & Faits Divers
  "Pablo Escobar": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pablo_Escobar_Mug_%28cropped%29%28b%29.jpg/330px-Pablo_Escobar_Mug_%28cropped%29%28b%29.jpg",
    cropPosition: "50% 12%",
    desc: "Le 'Patron' du cartel de Medellín, criminel le plus puissant et fortuné du XXe siècle."
  },
  "Xavier Dupont de Ligonnès": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Derni%C3%A8re_image_de_Xavier_de_Ligonn%C3%A8s.jpg",
    cropPosition: "50% 10%",
    desc: "Principal suspect de la tuerie de Nantes d'avril 2011, disparu sans laisser de trace."
  },
  "Al Capone": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Al_Capone_in_1930.jpg/330px-Al_Capone_in_1930.jpg",
    cropPosition: "50% 10%",
    desc: "Scarface, parrain incontournable de la mafia de Chicago à l'époque de la Prohibition."
  },
  "Jacques Mesrine": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jacques_Mesrine.jpg/330px-Jacques_Mesrine.jpg",
    cropPosition: "50% 10%",
    desc: "L'ex-ennemi public numéro un en France, braqueur flamboyant et roi des évasions spectaculaires."
  },
  "El Chapo": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Booking_photo_of_Joaquin_%E2%80%9CEl_Chapo%E2%80%9C_Guzman_%28front%29.jpg/330px-Booking_photo_of_Joaquin_%E2%80%9CEl_Chapo%E2%80%9C_Guzman_%28front%29.jpg",
    cropPosition: "50% 10%",
    desc: "Joaquín Guzmán, baron historique du cartel de Sinaloa et auteur d'évasions par tunnels."
  },
  "Lucky Luciano": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/LuckyLucianoSmaller_%28hq%29.jpeg/330px-LuckyLucianoSmaller_%28hq%29.jpeg",
    cropPosition: "50% 10%",
    desc: "Père du crime organisé moderne américain et créateur de la Commission des Cinq Familles."
  },
  "John Gotti": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/John_Gotti_FBI_booking_%28cropped%29_2.jpg/330px-John_Gotti_FBI_booking_%28cropped%29_2.jpg",
    cropPosition: "50% 10%",
    desc: "The Dapper Don, chef médiatique et impitoyable de la famille Gambino à New York."
  },
  "Redoine Faïd": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Fa%C3%AFd_Portrait.png/330px-Fa%C3%AFd_Portrait.png",
    cropPosition: "50% 10%",
    desc: "Braqueur de fourgons blindés récidiviste, spécialiste des évasions d'anthologie en hélicoptère."
  },
  "Steve Jobs": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur visionnaire d'Apple, créateur du Macintosh, de l'iPod et de l'iPhone."
  },
  "Bill Gates": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P013621-689183_%28cropped%29.jpg/330px-Bill_Gates_-_2023_-_P013621-689183_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur de Microsoft, pionnier de la micro-informatique et grand philanthrope mondial."
  },

  // Cinéma, Séries & Culture Pop
  "Jackie Chan": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Jackie_Chan_July_2016.jpg/330px-Jackie_Chan_July_2016.jpg",
    cropPosition: "50% 10%",
    desc: "Maître des arts martiaux et légende du cinéma d'action hongkongais et hollywoodien."
  },
  "Will Smith": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/330px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Prince de Bel-Air devenu superstar mondiale du box-office et lauréat de l'Oscar."
  },
  "Morgan Freeman": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_%28cropped%29.jpg/330px-Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Voix iconique d'Hollywood, Oscar du meilleur acteur et narrateur légendaire."
  },
  "Scarlett Johansson": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg/330px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg",
    cropPosition: "50% 10%",
    desc: "Actrice la plus rentable de l'histoire du box-office mondial et héroïne du MCU."
  },
  "Denzel Washington": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Denzel_Washington_2018.jpg/330px-Denzel_Washington_2018.jpg",
    cropPosition: "50% 10%",
    desc: "Double lauréat de l'Oscar et l'un des acteurs les plus respectés de sa génération."
  },
  "Arnold Schwarzenegger": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/330px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg",
    cropPosition: "50% 10%",
    desc: "Terminator, Mister Olympia et Gouverneur de Californie : l'incarnation du rêve américain."
  },
  "Bruce Lee": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/330px-Bruce_Lee_1973.jpg",
    cropPosition: "50% 10%",
    desc: "Le Dragon, maître du Jeet Kune Do et père fondateur du cinéma d'arts martiaux moderne."
  },
  "Robert De Niro": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Robert_De_Niro_at_Cannes_2025_at_a_Photocall_06.jpg/500px-Robert_De_Niro_at_Cannes_2025_at_a_Photocall_06.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Double Oscar, maître du Method Acting et légende du cinéma italo-américain."
  },
  "Leonardo DiCaprio": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/330px-Leonardo_Dicaprio_Cannes_2019.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Oscar du meilleur acteur, activiste écologiste et star mondiale du cinéma d'auteur."
  },
  "Brad Pitt": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Oscar du meilleur acteur et producteur emblématique d'Hollywood via Plan B Entertainment."
  },
  "Samuel L. Jackson": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/330px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Acteur le plus rentable de l'histoire du cinéma, icône de Pulp Fiction et du MCU."
  },
  "Tom Hanks": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/330px-Tom_Hanks_TIFF_2019.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Double Oscar consécutif, trésor national américain et narrateur d'une génération."
  },
  "Quentin Tarantino": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/330px-Quentin_Tarantino_by_Gage_Skidmore.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Réalisateur culte de Pulp Fiction et Kill Bill, maître des dialogues et du cinéma de genre."
  },
  "Steven Spielberg": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/MKr25425_Steven_Spielberg_%28Berlinale_2023%29.jpg/330px-MKr25425_Steven_Spielberg_%28Berlinale_2023%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Le plus grand réalisateur vivant, père de Jaws, E.T., Jurassic Park et de La Liste de Schindler."
  },
  "Al Pacino": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/330px-Al_Pacino.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Oscar pour Scent of a Woman, immortel Scarface et Michael Corleone du Parrain."
  },

  // YouTube, Internet & Créateurs
  "Squeezie": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Squeezie_Zack_en_Roue_Libre_2025.png/500px-Squeezie_Zack_en_Roue_Libre_2025.png",
    cropPosition: "50% 10%",
    category: "YouTube & Internet",
    defaultRarity: "L",
    desc: "Premier YouTubeur de France avec 19M+ d'abonnés, icône du gaming et de l'entertainment digital."
  },
  "Michou": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Michou_%28star_du_Cabaret%29.jpg/330px-Michou_%28star_du_Cabaret%29.jpg",
    cropPosition: "50% 10%",
    desc: "Créateur de contenu français aux millions d'abonnés, figure incontournable du YouTube FR."
  },
  "Inoxtag": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Inoxtag_-_Kaizen_%282024%29.jpg/330px-Inoxtag_-_Kaizen_%282024%29.jpg",
    cropPosition: "50% 10%",
    desc: "YouTubeur et aventurier français, auteur du documentaire Kaizen sur l'ascension de l'Everest."
  },
  "MrBeast": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/330px-MrBeast_2023_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Le plus grand YouTubeur du monde avec 300M+ d'abonnés, roi des challenges philanthropiques."
  },
  "PewDiePie": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PewDiePie_2018.jpg/330px-PewDiePie_2018.jpg",
    cropPosition: "50% 10%",
    desc: "Pionnier du YouTube gaming suédois, premier créateur individuel à atteindre 100M d'abonnés."
  },
  "Amixem": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Amixem-salon-vid%C3%A9o-city-2017.jpg/330px-Amixem-salon-vid%C3%A9o-city-2017.jpg",
    cropPosition: "50% 10%",
    desc: "YouTubeur français aux vidéos de divertissement, millions d'abonnés et figure du YouTube FR."
  },
  "Léna Situations": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/L%C3%A9na_Situations_Cannes_2022.jpg/330px-L%C3%A9na_Situations_Cannes_2022.jpg",
    cropPosition: "50% 10%",
    desc: "Créatrice de contenu française, influenceuse mode et entrepreneuse à succès."
  },
  "Norman Thavaud": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Norman_fait_des_vid%C3%A9os_%28cropped_2%29.jpg/330px-Norman_fait_des_vid%C3%A9os_%28cropped_2%29.jpg",
    cropPosition: "50% 10%",
    desc: "Pionnier du YouTube français, humoriste web aux 12M d'abonnés et acteur de cinéma."
  },
  "Cyprien": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cyprien_Iov_2013.jpg/330px-Cyprien_Iov_2013.jpg",
    cropPosition: "50% 10%",
    desc: "Pilier historique du YouTube français, créateur de la série animée 'Le Petit Journal'."
  },
  "Gotaga": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gotaga-ESWC2012.jpg/330px-Gotaga-ESWC2012.jpg",
    cropPosition: "50% 10%",
    desc: "Le French Monster, légende de l'esport français devenu streamer et entrepreneur gaming."
  },

  // Titans de l'IA & Révolution Numérique
  "Dario Amodei": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dario_Amodei_at_the_2024_Nobel_Banquet_%28cropped%29.jpg/330px-Dario_Amodei_at_the_2024_Nobel_Banquet_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur et PDG d'Anthropic, architecte de Claude et pionnier de la sécurité de l'IA."
  },
  "Demis Hassabis": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Demis_Hassabis_Royal_Society.jpg/330px-Demis_Hassabis_Royal_Society.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur de DeepMind (Google), prix Nobel de chimie 2024 pour AlphaFold."
  },
  "Yann LeCun": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Yann_LeCun_-_2018_%28cropped%29.jpg/330px-Yann_LeCun_-_2018_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Prix Turing 2018, père des réseaux convolutifs et Chief AI Scientist de Meta."
  },
  "Geoffrey Hinton": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Geoffrey_Hinton_-_Collision_2023_-_Centre_Stage_%2852880635463%29_%28cropped%29.jpg/330px-Geoffrey_Hinton_-_Collision_2023_-_Centre_Stage_%2852880635463%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Parrain de l'IA, prix Nobel de physique 2024, père du deep learning et du backpropagation."
  },
  "Sundar Pichai": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/500px-Sundar_Pichai_-_2023_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Tech & IA",
    defaultRarity: "L",
    desc: "PDG d'Alphabet et Google, pilote de la stratégie IA de Gemini et du cloud mondial."
  },
  "Tim Cook": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg/500px-Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg",
    cropPosition: "50% 10%",
    category: "Tech & IA",
    defaultRarity: "H",
    desc: "PDG d'Apple depuis 2011, stratège de l'ère post-Jobs et de l'Apple Vision Pro."
  },
  "Jack Dorsey": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jack_Dorsey%2C_2019_%28cropped%29.jpg/330px-Jack_Dorsey%2C_2019_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur de Twitter et Square (Block), figure de la décentralisation du web."
  },
  "Travis Kalanick": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Travis_Kalanick_-_LeWeb_2014.jpg/330px-Travis_Kalanick_-_LeWeb_2014.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur d'Uber, symbole de la disruption tech et de la gig economy mondiale."
  },
  "Patrick Collison": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Patrick_Collison.png/330px-Patrick_Collison.png",
    cropPosition: "50% 10%",
    desc: "Cofondateur et PDG de Stripe, pionnier de l'infrastructure de paiement en ligne mondiale."
  },
  "Daniel Ek": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Daniel_Ek_Web_Summit_2017.jpg/330px-Daniel_Ek_Web_Summit_2017.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur et PDG de Spotify, architecte du streaming musical planétaire."
  },

  // Missing Tech entries
  "Satya Nadella": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Satya_Nadella_%28cropped%29.jpg/330px-Satya_Nadella_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "PDG de Microsoft, architecte du virage cloud Azure et de l'alliance stratégique avec OpenAI."
  },
  "Peter Thiel": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Peter_Thiel_by_Gage_Skidmore.jpg/330px-Peter_Thiel_by_Gage_Skidmore.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur de PayPal et Palantir, investisseur controversé et penseur libertarien de la Silicon Valley."
  },
  "Larry Page": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/330px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur de Google et d'Alphabet, inventeur du PageRank et architecte du web moderne."
  },
  "Sergey Brin": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Sergey_Brin_Ted_2010_%28cropped%29.jpg/330px-Sergey_Brin_Ted_2010_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    desc: "Cofondateur de Google, pionnier de la recherche web et visionnaire des technologies X."
  },

  // 11. Légendes de la Musique & Pop Culture
  "Michael Jackson": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Michael_Jackson_1984.jpg/330px-Michael_Jackson_1984.jpg",
    cropPosition: "50% 8%",
    category: "Rap & Musique",
    defaultRarity: "L",
    desc: "Le Roi de la Pop, légende planétaire de l'industrie musicale et icône culturelle intemporelle."
  },
  "Freddie Mercury": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/330px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
    cropPosition: "50% 12%",
    category: "Rap & Musique",
    desc: "Chanteur et leader charismatique de Queen, voix d'opéra-rock légendaire."
  },
  "Bob Marley": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bob-Marley.jpg/330px-Bob-Marley.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Icône mondiale du reggae et symbole d'émancipation et de paix universelle."
  },
  "Prince": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Prince_at_Coachella_%28cropped%29.jpg/330px-Prince_at_Coachella_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Génie multi-instrumentiste, auteur de Purple Rain et bête de scène légendaire."
  },
  "Madonna": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg/330px-Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "La Reine de la Pop, figure d'avant-garde et artiste féminine la plus vendue de l'histoire."
  },
  "Daft Punk": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Daft_Punk_2013.jpg/330px-Daft_Punk_2013.jpg",
    cropPosition: "50% 25%",
    category: "Rap & Musique",
    desc: "Duo casqué pionnier de la French Touch et maîtres absolus de l'électro mondiale."
  },
  "David Bowie": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/David-Bowie_Chicago_2002-08-08_photoby_Adam-Bielawski-cropped.jpg/330px-David-Bowie_Chicago_2002-08-08_photoby_Adam-Bielawski-cropped.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "L'homme aux mille visages, icône du glam-rock et visionnaire artistique."
  },
  "Elvis Presley": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elvis_Presley_promoting_Jailhouse_Rock_%28cropped%29.jpg/330px-Elvis_Presley_promoting_Jailhouse_Rock_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "The King, pionnier du rock 'n' roll et phénomène culturel du XXe siècle."
  },
  "Kurt Cobain": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Nirvana_around_1992.jpg/330px-Nirvana_around_1992.jpg",
    cropPosition: "50% 15%",
    category: "Rap & Musique",
    desc: "Leader charismatique de Nirvana et porte-parole de la génération grunge."
  },
  "Céline Dion": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Celine_Dion_Concert_Singing_2012_%28cropped%29.jpg/330px-Celine_Dion_Concert_Singing_2012_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Voix d'or de la francophonie mondiale et reine incontestée des charts."
  },
  "Johnny Hallyday": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Johnny_Hallyday_2003_%28cropped%29.jpg/330px-Johnny_Hallyday_2003_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "L'idole des jeunes et monstre sacré du rock français pendant plus de 50 ans."
  },
  "Beyoncé": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beyonce_at_The_Lion_King_European_Premiere_2019.png/330px-Beyonce_at_The_Lion_King_European_Premiere_2019.png",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Queen Bey, superstar planétaire détentrice du record absolu de Grammy Awards."
  },
  "Rihanna": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/330px-Rihanna_Fenty_2018.png",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Superstar planétaire de la pop et magnat de l'empire Fenty."
  },
  "The Weeknd": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Cannes_2023.png/330px-The_Weeknd_Cannes_2023.png",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Auteur de Blinding Lights, géant du R&B alternatif et voix de la pop moderne."
  },
  "Elton John": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Elton_John_2011_Shankbone_2.JPG/330px-Elton_John_2011_Shankbone_2.JPG",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Légende du piano-pop britannique, auteur de Rocket Man et Your Song."
  },
  "Lady Gaga": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lady_Gaga_at_the_2024_Venice_International_Film_Festival_%28cropped%29.jpg/330px-Lady_Gaga_at_the_2024_Venice_International_Film_Festival_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Mother Monster, superstar de la pop et actrice oscarisée d'A Star is Born."
  },
  "Adele": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Adele_for_Vogue_in_2021.png/330px-Adele_for_Vogue_in_2021.png",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Voix soul britannique aux dizaines de millions d'albums vendus et 16 Grammys."
  },
  "Taylor Swift": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png/330px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Auteure-compositrice phénomène mondial de l'Eras Tour et milliardaire de la pop."
  },
  "Billie Eilish": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Billie_Eilish_at_the_2024_Golden_Globes_%28cropped%29.jpg/330px-Billie_Eilish_at_the_2024_Golden_Globes_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Rap & Musique",
    desc: "Voix électro-pop sombre, double oscarisée et icône de la Gen Z."
  },

  // 12. Cinéma & Réalisateurs Légendaires
  "Christopher Nolan": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Christopher_Nolan_Cannes_2018.jpg/330px-Christopher_Nolan_Cannes_2018.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Cinéaste visionnaire d'Inception, Interstellar, The Dark Knight et Oppenheimer."
  },
  "Martin Scorsese": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg/330px-Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Maître du cinéma italo-américain, réalisateur de Taxi Driver et Goodfellas."
  },
  "Stanley Kubrick": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kubrick_on_the_set_of_Barry_Lyndon_%281975_publicity_photo%29.jpg/330px-Kubrick_on_the_set_of_Barry_Lyndon_%281975_publicity_photo%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Perfectionniste mythique, réalisateur de 2001, Shining et Orange mécanique."
  },
  "Alfred Hitchcock": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Alfred_Hitchcock_in_1955.jpg/330px-Alfred_Hitchcock_in_1955.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Le Maître du suspense, pionnier des techniques cinématographiques modernes."
  },
  "Keanu Reeves": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spike_TV%27s_Guys_Choice_Awards_-_Keanu_Reeves_%28cropped%29.jpg/330px-Spike_TV%27s_Guys_Choice_Awards_-_Keanu_Reeves_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Néo dans Matrix et John Wick, figure iconique et humble d'Hollywood."
  },
  "Tom Cruise": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Le dernier titan du box-office mondial et cascadeur d'élite dans Mission Impossible."
  },
  "Harrison Ford": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/330px-Harrison_Ford_by_Gage_Skidmore_3.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Han Solo, Indiana Jones, Rick Deckard : visage des plus grandes sagas de l'histoire."
  },
  "Clint Eastwood": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Clint_Eastwood_at_2010_Cannes_Film_Festival.jpg/330px-Clint_Eastwood_at_2010_Cannes_Film_Festival.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "L'Inspecteur Harry et réalisateur oscarisé d'Unforgiven et Million Dollar Baby."
  },
  "Jean Reno": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jean_Reno_Cannes_2016.jpg/330px-Jean_Reno_Cannes_2016.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Léon, Les Visiteurs, Le Grand Bleu : figure emblématique du cinéma français et international."
  },
  "Alain Delon": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Alain_Delon_Cannes_2019.jpg/330px-Alain_Delon_Cannes_2019.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Le Samouraï, figure mythique du cinéma européen à l'aura mondiale."
  },
  "Jean-Paul Belmondo": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jean-Paul_Belmondo_Cannes_2011.jpg/330px-Jean-Paul_Belmondo_Cannes_2011.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Bébel, monstre sacré du cinéma français, cascadeur d'exception."
  },
  "Louis de Funès": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Louis_de_Fun%C3%A8s_1978.jpg/330px-Louis_de_Fun%C3%A8s_1978.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "Génie comique universel, recordman des entrées du cinéma français."
  },
  "Omar Sy": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Omar_Sy_Cannes_2016.jpg/330px-Omar_Sy_Cannes_2016.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    desc: "César du meilleur acteur pour Intouchables et star internationale de Lupin."
  },

  // 13. Nouveaux Titans du Sport
  "Thierry Henry": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Thierry_Henry_2011.jpg/330px-Thierry_Henry_2011.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Légende des Invincibles d'Arsenal et champion du monde 1998."
  },
  "Karim Benzema": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_kit_2021-2022.jpg/330px-Karim_Benzema_wearing_Real_Madrid_kit_2021-2022.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Ballon d'Or 2022, quintuple vainqueur de la Ligue des Champions avec le Real Madrid."
  },
  "Ayrton Senna": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ayrton_Senna_Imola_1989.jpg/330px-Ayrton_Senna_Imola_1989.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Triple champion du monde de Formule 1 et légende mystique de la vitesse."
  },
  "Michael Schumacher": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Michael_Schumacher_2012.jpg/330px-Michael_Schumacher_2012.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Septuple champion du monde de F1 et souverain de l'ère moderne de Ferrari."
  },
  "Novak Djokovic": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Novak_Djokovic_at_2024_French_Open_04.jpg/330px-Novak_Djokovic_at_2024_French_Open_04.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Recordman absolu de titres du Grand Chelem dans l'ère open du tennis."
  },
  "Serena Williams": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Serena_Williams_at_2013_US_Open.jpg/330px-Serena_Williams_at_2013_US_Open.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "23 titres majeurs et reine athlétique dominante du tennis contemporain."
  },
  "Stephen Curry": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Stephen_Curry_2022.jpg/330px-Stephen_Curry_2022.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Pionnier du tir à trois points ayant révolutionné l'histoire de la NBA."
  },
  "Victor Wembanyama": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Victor_Wembanyama_2023.jpg/330px-Victor_Wembanyama_2023.jpg",
    cropPosition: "50% 8%",
    category: "Sport",
    desc: "Phénomène générationnel du basketball mondial, prodige de San Antonio."
  },
  "Zlatan Ibrahimović": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg/330px-Zlatan_Ibrahimovi%C4%87_June_2018.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Buteur spectaculaire et colosse charismatique passé par le PSG, le Barça et Milan."
  },
  "Shaquille O'Neal": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shaquille_O%27Neal_2018.jpg/330px-Shaquille_O%27Neal_2018.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    desc: "Le pivot le plus dominant de l'histoire de la NBA, quadruple champion et personnalité télé."
  },

  // 14. Penseurs, Sciences & Littérature
  "Victor Hugo": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/330px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Monument littéraire universel, auteur des Misérables et phare républicain."
  },
  "Albert Camus": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_au_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabac_au_bec.jpg/330px-Albert_Camus%2C_gagnant_au_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabac_au_bec.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Prix Nobel de littérature, philosophe de l'absurde et de la révolte."
  },
  "Louis Pasteur": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Albert_Edelfelt_-_Louis_Pasteur_-_1885.jpg/330px-Albert_Edelfelt_-_Louis_Pasteur_-_1885.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Pionnier de la microbiologie et inventeur du vaccin contre la rage."
  },
  "Stephen Hawking": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/330px-Stephen_Hawking.StarChild.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Astrophysicien théoricien des trous noirs et auteur d'Une brève histoire du temps."
  },
  "Carl Sagan": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Carl_Sagan_Planetary_Society_romance_cropped.jpg/330px-Carl_Sagan_Planetary_Society_romance_cropped.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Astronome vulgarisateur de Cosmos et pionnier de l'exploration planétaire."
  },
  "Charles Darwin": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/330px-Charles_Darwin_seated_crop.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Naturaliste révolutionnaire, père de la théorie de l'évolution par sélection naturelle."
  },
  "Molière": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Moli%C3%A8re_-_Nicolas_Mignard_%281658%29.jpg/330px-Moli%C3%A8re_-_Nicolas_Mignard_%281658%29.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Maître absolu de la comédie théâtrale et de la langue française."
  },
  "Alexandre Dumas": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Alexandre_Dumas_par_Nadar_1855.jpg/330px-Alexandre_Dumas_par_Nadar_1855.jpg",
    cropPosition: "50% 10%",
    category: "Pensée",
    desc: "Auteur des Trois Mousquetaires et du Comte de Monte-Cristo, géant du roman d'aventures."
  },

  // 15. Histoire & Pionniers de l'Espace
  "Neil Armstrong": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/330px-Neil_Armstrong_pose.jpg",
    cropPosition: "50% 10%",
    category: "Histoire",
    desc: "Premier être humain à avoir marché sur la Lune le 21 juillet 1969 (Apollo 11)."
  },
  "Thomas Pesquet": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Thomas_Pesquet_2021.jpg/330px-Thomas_Pesquet_2021.jpg",
    cropPosition: "50% 10%",
    category: "Histoire",
    desc: "Astronaute européen de l'ESA, commandant de l'ISS et vulgarisateur scientifique."
  },
  "Youri Gagarine": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Yuri_Gagarin_%281961%29_-_restoration.jpg/330px-Yuri_Gagarin_%281961%29_-_restoration.jpg",
    cropPosition: "50% 10%",
    category: "Histoire",
    desc: "Premier être humain dans l'espace en orbite terrestre le 12 avril 1961 (Vostok 1)."
  },
  "Jean Moulin": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jean_Moulin_par_Marcel_Bernard_1939.jpg/330px-Jean_Moulin_par_Marcel_Bernard_1939.jpg",
    cropPosition: "50% 10%",
    category: "Histoire",
    desc: "Héros unificateur de la Résistance française et martyr de la Libération."
  },

  // 16. YouTube, Créateurs & Esport
  "Tibo InShape": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tibo_InShape_2024.jpg/330px-Tibo_InShape_2024.jpg",
    cropPosition: "50% 10%",
    category: "YouTube & Internet",
    desc: "Numéro 1 de YouTube en France, icône du fitness et du développement personnel."
  },
  "Mister V": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mister_V_2020.jpg/330px-Mister_V_2020.jpg",
    cropPosition: "50% 10%",
    category: "YouTube & Internet",
    desc: "Créateur star de YouTube, humoriste et rappeur certifié double platine."
  },
  "Kameto": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kameto_2022.jpg/330px-Kameto_2022.jpg",
    cropPosition: "50% 10%",
    category: "YouTube & Internet",
    desc: "Général de la Karmine Corp et figure majeure du streaming et de l'esport."
  },
  "ZeratoR": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/ZeratoR_2022.jpg/330px-ZeratoR_2022.jpg",
    cropPosition: "50% 10%",
    category: "YouTube & Internet",
    desc: "Fondateur du ZEvent et de la ZLAN, artisan des plus grands records caritatifs."
  },

  // 17. Charme, Porno & Icônes Glamour
  "Mia Khalifa": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Mia_Khalifa_in_2019_%28Enhanced%29.jpg/500px-Mia_Khalifa_in_2019_%28Enhanced%29.jpg",
    cropPosition: "50% 12%",
    category: "Charme & Porno",
    defaultRarity: "U",
    desc: "Figure médiatique mondiale et star historique du divertissement adulte devenue commentatrice sportive et icône pop incontournable."
  },
  "Lana Rhoades": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Lana_Rhoades_2-2017.jpg/500px-Lana_Rhoades_2-2017.jpg",
    cropPosition: "50% 12%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "L'une des actrices de divertissement adulte les plus recherchées au monde, animatrice de podcast et influenceuse."
  },
  "Clara Morgane": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Clara_morgan_france_bleu_champagne_1008361.jpg/500px-Clara_morgan_france_bleu_champagne_1008361.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "Icône française du charme et du glamour, animatrice télévisée, chanteuse et créatrice de cabarets itinérants."
  },
  "Brigitte Lahaie": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/BrigitteLahaie-StudioHarcourt-1988.png/500px-BrigitteLahaie-StudioHarcourt-1988.png",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "Pionnière du cinéma érotique français, actrice culte et animatrice radio de référence sur RMC et Sud Radio."
  },
  "Sasha Grey": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Sasha_Grey_%40_FIL%2C_December_2013_GST_GST_5798_%2811293311844%29_%28cropped%29.jpg/500px-Sasha_Grey_%40_FIL%2C_December_2013_GST_GST_5798_%2811293311844%29_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "Légende du divertissement adulte devenue actrice chez Steven Soderbergh, autrice et streameuse populaire."
  },
  "Riley Reid": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Riley_Reid_at_AVN_Adult_Entertainment_Expo_2016_%2825638324926%29_%28cropped%29.jpg/500px-Riley_Reid_at_AVN_Adult_Entertainment_Expo_2016_%2825638324926%29_%28cropped%29.jpg",
    cropPosition: "50% 12%",
    category: "Charme & Porno",
    defaultRarity: "H",
    desc: "Recordwoman des AVN Awards et l'une des figures les plus récompensées de l'industrie adulte américaine."
  },
  "Angela White": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Angela_White.png/500px-Angela_White.png",
    cropPosition: "50% 12%",
    category: "Charme & Porno",
    defaultRarity: "H",
    desc: "Superstar australienne multi-diplômée, réalisatrice et entrepreneuse majeure de l'industrie pour adultes."
  },
  "Amouranth": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Amouranth_at_DreamHack_Atlanta_2024.jpg/500px-Amouranth_at_DreamHack_Atlanta_2024.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "H",
    desc: "Kaitlyn Siragusa, reine incontestée du streaming Twitch et créatrice glamour au succès financier colossal."
  },
  "Pamela Anderson": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Pamela_Anderson_2024_Headshot_by_Norman_Wong.jpg/500px-Pamela_Anderson_2024_Headshot_by_Norman_Wong.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "Sex-symbol mondial absolu des années 1990, icône d'Alerte à Malibu et recordwoman des couvertures de Playboy."
  },
  "Stormy Daniels": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Stormy_Daniels_2015.jpg/500px-Stormy_Daniels_2015.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "R",
    desc: "Actrice et réalisatrice adulte propulsée au cœur des séismes judiciaires et politiques américains."
  },
  "Jenna Jameson": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Jenna_Jameson_2014.jpg/500px-Jenna_Jameson_2014.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "Surnommée 'La Reine du Porno', entrepreneuse et première star adulte à devenir un phénomène culturel mondial."
  },
  "Belle Delphine": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Belle_Delphine_-_2020-b_%28cropped%29.png/500px-Belle_Delphine_-_2020-b_%28cropped%29.png",
    cropPosition: "50% 12%",
    category: "Charme & Porno",
    defaultRarity: "H",
    desc: "Pionnière de l'e-girl culture, modèle cosplay et génie du marketing viral sur les plateformes numériques."
  },
  "Céline Tran": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Katsuni_2010.jpg/500px-Katsuni_2010.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "Anciennement Katsuni, star mondiale multi-primée du divertissement pour adultes, aujourd'hui autrice et comédienne."
  },
  "Polska": {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    cropPosition: "50% 15%",
    category: "Charme & Porno",
    defaultRarity: "H",
    desc: "Créatrice de contenu et chroniqueuse remarquée de TPMP, figure médiatique française ultra-populaire des réseaux sociaux."
  },

  // 18. Musique Pop & Légendes du Spectacle
  "Michael Jackson": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg/500px-Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg",
    cropPosition: "50% 10%",
    category: "Musique & Pop",
    defaultRarity: "U",
    desc: "Le Roi de la Pop ('King of Pop'), artiste le plus récompensé de tous les temps, créateur du Moonwalk et interprète de Thriller."
  },
  "Freddie Mercury": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/500px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
    cropPosition: "50% 10%",
    category: "Musique & Pop",
    defaultRarity: "L",
    desc: "Chanteur et leader mythique de Queen, voix exceptionnelle de 4 octaves et bête de scène légendaire."
  },

  // 19. Nouvelles Figures Majeures & Icônes Glamour / Cinéma / Sport
  "Carmen Electra": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Carmen_Electra_2013.jpg/500px-Carmen_Electra_2013.jpg",
    cropPosition: "50% 10%",
    category: "Charme & Porno",
    defaultRarity: "L",
    desc: "Modèle et actrice culte d'Alerte à Malibu, star glamour des années 90 et de la pop culture MTV."
  },
  "Eva Green": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/EVA_GREEN_CESAR_2020.jpg/500px-EVA_GREEN_CESAR_2020.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Actrice française magnétique, James Bond girl iconique (Casino Royale) et égérie du cinéma d'auteur mondial."
  },
  "Sophie Marceau": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Sophie_Marceau_Cabourg_2012.jpg/500px-Sophie_Marceau_Cabourg_2012.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "L'actrice préférée des Français depuis La Boum, star internationale dans Braveheart et Le monde ne suffit pas."
  },
  "David Beckham": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/David_Beckham_UNICEF_%28cropped2%29.jpg/500px-David_Beckham_UNICEF_%28cropped2%29.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    defaultRarity: "L",
    desc: "Légende de Manchester United et du Real Madrid, tireur de coups francs d'anthologie et icône de mode planétaire."
  },
  "Ayrton Senna": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ayrton_Senna_Pesawat_RC_Cropped.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    defaultRarity: "L",
    desc: "Triple champion du monde de Formule 1, maître absolu sous la pluie et héros national brésilien immortel."
  },
  "Michael Schumacher": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Michael_Schumacher%2C_September_2005.jpg/500px-Michael_Schumacher%2C_September_2005.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    defaultRarity: "L",
    desc: "Septuple champion du monde de F1, légende absolue de la Scuderia Ferrari et titan du sport mécanique."
  },
  "Keanu Reeves": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg/500px-Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "L'Élu de Matrix (Neo) et impitoyable John Wick, star d'action la plus aimée et respectée d'Hollywood."
  },
  "Cillian Murphy": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Cillian_Murphy_at_the_London_premier_of_Steve_in_September_2025_%28cropped%29.jpg/500px-Cillian_Murphy_at_the_London_premier_of_Steve_in_September_2025_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Oscar du meilleur acteur pour Oppenheimer et immortel Thomas Shelby dans Peaky Blinders."
  },
  "Christopher Nolan": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/ChristopherNolan-byPhilipRomano_%28cropped%29.jpg/500px-ChristopherNolan-byPhilipRomano_%28cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Oscar du meilleur réalisateur, architecte visionnaire d'Inception, Interstellar et The Dark Knight."
  },
  "Victor Hugo": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Victor_Hugo_001.jpg/500px-Victor_Hugo_001.jpg",
    cropPosition: "50% 10%",
    category: "Sciences & Pensée",
    defaultRarity: "L",
    desc: "Géant de la littérature française, poète, dramaturge et auteur immortel des Misérables et de Notre-Dame de Paris."
  },
  "Molière": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Moli%C3%A8re_-_Nicolas_Mignard_%281658%29.jpg/500px-Moli%C3%A8re_-_Nicolas_Mignard_%281658%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Le maître incontesté de la langue et du théâtre français, créateur du Tartuffe, de L'Avare et du Bourgeois gentilhomme."
  },
  "Jean de La Fontaine": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Jean_de_La_Fontaine.PNG/500px-Jean_de_La_Fontaine.PNG",
    cropPosition: "50% 10%",
    category: "Sciences & Pensée",
    defaultRarity: "L",
    desc: "Le plus grand fabuliste français, moraliste de génie et observateur universel de la nature humaine."
  },
  "Paul Bocuse": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Paul_Bocuse_2007_-2.jpg/500px-Paul_Bocuse_2007_-2.jpg",
    cropPosition: "50% 10%",
    category: "Histoire",
    defaultRarity: "L",
    desc: "Pape de la gastronomie française, cuisinier du siècle et ambassadeur mondial de l'art culinaire d'excellence."
  },
  "Jean Reno": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Jean_Reno_Cannes_2016.jpg/500px-Jean_Reno_Cannes_2016.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Acteur français d'envergure mondiale, immortel Léon chez Luc Besson et star des Visiteurs et Mission Impossible."
  },
  "Jean Dujardin": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Christophe_Lambert_et_Jean_Dujardin_%28Cropped%29.jpg",
    cropPosition: "50% 10%",
    category: "Cinéma",
    defaultRarity: "L",
    desc: "Premier comédien français à remporter l'Oscar du meilleur acteur (The Artist), culte dans OSS 117 et Brice de Nice."
  },
  "Antoine Griezmann": {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Antoine_Griezmann_World_Cup_Trophy.jpg",
    cropPosition: "50% 10%",
    category: "Sport",
    defaultRarity: "L",
    desc: "Champion du monde 2018 avec la France, maître à jouer de l'Atlético de Madrid et légende des Bleus."
  }
};


const DEFAULT_PORTRAIT = {
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg",
  cropPosition: "50% 10%",
  desc: "Personnalité historique et figure d'actualité du Panthéon mondial."
};

/**
 * Résout la catégorie thématique officielle d'une personnalité
 */
function resolveCardCategory(name, explicitCategory) {
  if (explicitCategory === "Charme & Porno" || ADULT_TITLES.includes(name)) return "Charme & Porno";
  if (explicitCategory === "Musique & Pop" || explicitCategory === "Rap & Musique" || explicitCategory === "Musique" || POP_MUSIC_TITLES.includes(name)) return "Musique & Pop";
  if (explicitCategory === "Rap" || explicitCategory === "Rap & Hip-Hop" || RAP_TITLES.includes(name)) return "Rap & Hip-Hop";
  if (explicitCategory === "Sport" || SPORT_TITLES.includes(name)) return "Sport";
  if (explicitCategory === "Tech" || explicitCategory === "Tech & IA" || TECH_TITLES.includes(name) || AI_TITANS_TITLES.includes(name)) return "Tech & IA";
  if (explicitCategory === "Politique" || POLITIQUE_TITLES.includes(name)) return "Politique";
  if (explicitCategory === "Histoire" || HISTOIRE_TITLES.includes(name)) return "Histoire";
  if (explicitCategory === "Sciences" || explicitCategory === "Pensée" || explicitCategory === "Sciences & Pensée" || PENSEE_TITLES.includes(name)) return "Sciences & Pensée";
  if (explicitCategory === "Cinéma" || CINEMA_TITLES.includes(name)) return "Cinéma";
  if (explicitCategory === "Pègre" || explicitCategory === "Faits Divers" || explicitCategory === "Pègre & Crime" || CRIME_TITLES.includes(name)) return "Pègre & Crime";
  if (explicitCategory === "YouTube & Internet" || YOUTUBE_TITLES.includes(name)) return "YouTube & Internet";
  if (explicitCategory === "Controverse" || explicitCategory === "Médias" || explicitCategory === "Controverses & Médias" || VIRAL_TITLES.includes(name)) return "Controverses & Médias";
  if (explicitCategory === "Renseignement" || RENSEIGNEMENT_TITLES.includes(name)) return "Renseignement";
  return explicitCategory || "Panthéon";
}

/**
 * Génère le catalogue officiel du Master Set (Série 1)
 * ZÉRO DOUBLON : Chaque carte représente une personnalité UNIQUE et certifiée.
 */
export function generateMasterCatalog() {
  const catalog = [];
  const registeredNames = new Set();

  // 1. D'abord les cartes signatures officielles (pré-configurées)
  for (const sigCard of SIGNATURE_CARDS) {
    if (!registeredNames.has(sigCard.name)) {
      const card = { ...sigCard };
      card.category = resolveCardCategory(card.name, card.category);
      catalog.push(card);
      registeredNames.add(sigCard.name);
    }
  }

  // 2. Extraire toutes les personnalités uniques disponibles dans notre répertoire
  const allPersonalities = Object.keys(TOPIC_ARTWORKS);

  // 3. Ajouter chaque personnalité unique (pas de répétition !)
  for (const name of allPersonalities) {
    if (registeredNames.has(name)) continue;

    const artworkInfo = TOPIC_ARTWORKS[name] || DEFAULT_PORTRAIT;
    const category = resolveCardCategory(name, artworkInfo.category);

    // Détermination de la rareté : Ultras de chaque catégorie, Légendaires, etc.
    let rarityInfo;
    const isUltra = (
      artworkInfo.defaultRarity === 'U' || 
      name === "Mia Khalifa" || 
      name === "Michael Jackson" || 
      name === "Eminem" || 
      name === "Michael Jordan" || 
      name === "Albert Einstein" || 
      name === "Steve Jobs" || 
      name === "Donald Trump" || 
      name === "Pablo Escobar" || 
      name === "Jules César" || 
      name === "Cristiano Ronaldo" || 
      name === "Lionel Messi" || 
      name === "Napoléon Ier" || 
      name === "Tupac Shakur" || 
      name === "Elon Musk" || 
      name === "Kanye West"
    );

    if (isUltra) {
      rarityInfo = { rarity: 'U', rarityLabel: 'Ultra Secret', variant: 'full_art_secret' };
    } else if (artworkInfo.defaultRarity === 'L') {
      rarityInfo = { rarity: 'L', rarityLabel: 'Légendaire', variant: 'solid_gold' };
    } else if (artworkInfo.defaultRarity === 'D') {
      rarityInfo = { rarity: 'D', rarityLabel: 'Diamond', variant: 'rainbow_holo' };
    } else if (artworkInfo.defaultRarity === 'H') {
      rarityInfo = { rarity: 'H', rarityLabel: 'Héritage', variant: 'gold_foil' };
    } else if (artworkInfo.defaultRarity === 'R') {
      rarityInfo = { rarity: 'R', rarityLabel: 'Rare', variant: 'silver_chrome' };
    } else if (artworkInfo.defaultRarity === 'C') {
      rarityInfo = { rarity: 'C', rarityLabel: 'Commun', variant: 'satin_base' };
    } else {
      rarityInfo = getRandomRarity();
    }

    const aura = rarityInfo.rarity === 'U' || rarityInfo.rarity === 'L' ? 9 
      : rarityInfo.rarity === 'D' ? 8 
      : rarityInfo.rarity === 'H' ? 7 
      : rarityInfo.rarity === 'R' ? 6 : 4;

    catalog.push({
      id: String(catalog.length + 1).padStart(3, '0'),
      seriesId: 1,
      name,
      category,
      rarity: rarityInfo.rarity,
      rarityLabel: rarityInfo.rarityLabel,
      variant: rarityInfo.variant,
      image: artworkInfo.image,
      locked: false,
      serialNumber: "",
      stats: {
        attack: isUltra ? 155 : rarityInfo.rarity === 'L' ? 146 : Math.floor(75 + Math.random() * 65),
        defense: isUltra ? 148 : rarityInfo.rarity === 'L' ? 140 : Math.floor(70 + Math.random() * 65),
        hp: isUltra ? 195 : rarityInfo.rarity === 'L' ? 180 : Math.floor(110 + Math.random() * 75),
        speed: isUltra ? 97 : rarityInfo.rarity === 'L' ? 92 : Math.floor(50 + Math.random() * 45),
        aura,
        bytes: Math.floor(45000 + Math.random() * 120000),
        languages: Math.floor(50 + Math.random() * 140)
      },
      description: artworkInfo.desc || `Figure emblématique répertoriée dans la Série 1.`,
      license: "Domaine Public / CC BY-SA",
      cropPosition: artworkInfo.cropPosition || "50% 12%"
    });

    registeredNames.add(name);
  }

  // Ajuster pour obtenir des planches de 16 cartes exactes et pleines
  const remainder = catalog.length % 16;
  const targetCount = remainder === 0 ? catalog.length : catalog.length - remainder;
  const finalCatalog = catalog.slice(0, targetCount);

  // 4. Numéroter séquentiellement de manière officielle ("001/TOTAL")
  const total = finalCatalog.length;
  finalCatalog.forEach((card, idx) => {
    const num = String(idx + 1).padStart(3, '0');
    card.id = num;
    card.serialNumber = `${num}/${total}`;
  });

  return finalCatalog;
}

import { SERIES_CONFIG, getSeriesMetadata } from './seriesData.js';

/**
 * Génère le catalogue des 500 cartes pour n'importe laquelle des 20 Séries
 */
export function generateSeriesCatalog(seriesId = 1) {
  if (Number(seriesId) === 1) {
    return generateMasterCatalog();
  }

  const meta = getSeriesMetadata(seriesId);
  const catalog = [];
  
  // Carte 001 : Carte Ultra Chase officielle de la Série
  if (meta.ultraCard) {
    catalog.push({
      id: "001",
      seriesId: Number(seriesId),
      name: meta.ultraCard.name,
      category: meta.ultraCard.category || "Politique",
      rarity: "U",
      rarityLabel: "Ultra Secret",
      variant: "full_art_secret",
      image: meta.ultraCard.image,
      cropPosition: meta.ultraCard.cropPosition || "50% 12%",
      stats: { attack: 155, defense: 150, hp: 200, speed: 95, aura: 9, bytes: 180000, languages: 210 },
      description: meta.ultraCard.desc,
      license: "Domaine Public / Wikimedia Commons",
      locked: false,
      serialNumber: `001/500`
    });
  }

  const ALL_PERSONALITIES = [
    ...POLITIQUE_TITLES,
    ...RAP_TITLES,
    ...POP_MUSIC_TITLES,
    ...CRIME_TITLES,
    ...VIRAL_TITLES,
    ...RENSEIGNEMENT_TITLES,
    ...SPORT_TITLES,
    ...TECH_TITLES,
    ...HISTOIRE_TITLES,
    ...PENSEE_TITLES,
    ...CINEMA_TITLES,
    ...YOUTUBE_TITLES,
    ...AI_TITANS_TITLES,
    ...ADULT_TITLES
  ];


  // Cartes 002 à 500 de la Série
  for (let i = catalog.length + 1; i <= 500; i++) {
    const id = String(i).padStart(3, '0');
    const isDesignatedLegendary = meta && meta.legendaries && i >= 2 && i <= 5;
    const baseTitle = isDesignatedLegendary 
      ? meta.legendaries[i - 2]
      : ALL_PERSONALITIES[(i - 1 + Number(seriesId) * 7) % ALL_PERSONALITIES.length];

    const name = baseTitle;
    const artworkInfo = TOPIC_ARTWORKS[baseTitle] || DEFAULT_PORTRAIT;
    const rarityInfo = isDesignatedLegendary
      ? { rarity: 'L', rarityLabel: 'Légendaire', variant: 'solid_gold' }
      : getRandomRarity();

    const aura = rarityInfo.rarity === 'L' || rarityInfo.rarity === 'U' ? 9 : rarityInfo.rarity === 'D' ? 8 : rarityInfo.rarity === 'H' ? 7 : rarityInfo.rarity === 'R' ? 6 : 4;

    catalog.push({
      id,
      seriesId: Number(seriesId),
      name,
      category: meta.shortTitle || "Panthéon",
      rarity: rarityInfo.rarity,
      rarityLabel: rarityInfo.rarityLabel,
      variant: rarityInfo.variant,
      image: artworkInfo.image,
      locked: false,
      serialNumber: `${id}/500`,
      stats: {
        attack: isDesignatedLegendary ? 145 : Math.floor(75 + Math.random() * 70),
        defense: isDesignatedLegendary ? 140 : Math.floor(75 + Math.random() * 70),
        hp: isDesignatedLegendary ? 175 : Math.floor(110 + Math.random() * 80),
        speed: Math.floor(45 + Math.random() * 52),
        aura,
        bytes: Math.floor(40000 + Math.random() * 110000),
        languages: Math.floor(40 + Math.random() * 130)
      },
      description: artworkInfo.desc || `Carte de la Série ${seriesId} (${meta.shortTitle}).`,
      license: "Domaine Public / CC BY-SA",
      cropPosition: artworkInfo.cropPosition || "50% 12%"
    });
  }

  return catalog;
}

export const MASTER_CATALOG = generateMasterCatalog();
