import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://knxecrhgpfatcdblzprg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yxucAHYJsWPVrK96zXwsTQ_yAHQBe5z';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Définition exhaustive des requêtes de recherche thématiques par catégorie
const QUERY_MATRIX = [
  // 1. SPORT
  { q: 'footballeur international français', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'footballeur ballon d\'or', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'vainqueur de la coupe du monde de football', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueur de football brésilien', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueur de football argentin', cat: 'Sport', offsets: [0, 50] },
  { q: 'joueur de football espagnol', cat: 'Sport', offsets: [0, 50] },
  { q: 'joueur de la NBA', cat: 'Sport', offsets: [0, 50, 100, 150] },
  { q: 'basketteur américain all-star', cat: 'Sport', offsets: [0, 50] },
  { q: 'joueur de tennis vainqueur en grand chelem', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'pilote de Formule 1 champion du monde', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'combattant d\'arts martiaux mixtes de l\'UFC', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'boxeur champion du monde poids lourds', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'champion olympique d\'athlétisme', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'nageur champion olympique', cat: 'Sport', offsets: [0, 50] },
  { q: 'cycliste vainqueur du Tour de France', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueur de rugby à XV international', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'judoka champion olympique', cat: 'Sport', offsets: [0, 50] },

  // 2. CINÉMA & SÉRIES
  { q: 'acteur américain oscarisé', cat: 'Cinéma', offsets: [0, 50, 100, 150] },
  { q: 'actrice américaine oscarisée', cat: 'Cinéma', offsets: [0, 50, 100, 150] },
  { q: 'acteur français césar du meilleur acteur', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'actrice française césar de la meilleure actrice', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'réalisateur américain oscarisé', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'réalisateur français de cinéma', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'acteur britannique de cinéma', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'actrice britannique de cinéma', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'acteur de cinéma d\'action', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'acteur de cinéma d\'arts martiaux', cat: 'Cinéma', offsets: [0, 50] },
  { q: 'acteur italien de cinéma', cat: 'Cinéma', offsets: [0, 50] },
  { q: 'acteur espagnol de cinéma', cat: 'Cinéma', offsets: [0, 50] },
  { q: 'réalisateur japonais de cinéma', cat: 'Cinéma', offsets: [0, 50] },

  // 3. RAP & HIP-HOP
  { q: 'rappeur américain', cat: 'Rap & Hip-Hop', offsets: [0, 50, 100, 150, 200] },
  { q: 'rappeur français', cat: 'Rap & Hip-Hop', offsets: [0, 50, 100, 150, 200] },
  { q: 'rappeuse américaine', cat: 'Rap & Hip-Hop', offsets: [0, 50, 100] },
  { q: 'rappeuse française', cat: 'Rap & Hip-Hop', offsets: [0, 50] },
  { q: 'producteur de hip-hop américain', cat: 'Rap & Hip-Hop', offsets: [0, 50, 100] },
  { q: 'rappeur britannique drill grime', cat: 'Rap & Hip-Hop', offsets: [0, 50] },
  { q: 'rappeur marseillais', cat: 'Rap & Hip-Hop', offsets: [0, 50] },
  { q: 'rappeur parisien', cat: 'Rap & Hip-Hop', offsets: [0, 50] },

  // 4. MUSIQUE & POP
  { q: 'chanteur américain de pop', cat: 'Musique & Pop', offsets: [0, 50, 100, 150] },
  { q: 'chanteuse américaine de pop', cat: 'Musique & Pop', offsets: [0, 50, 100, 150] },
  { q: 'chanteur français de variété', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'chanteuse française', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'guitariste de rock américain', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'chanteur de rock britannique', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'compositeur de musique classique', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'disc jockey international musique électronique', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'chanteur de reggae', cat: 'Musique & Pop', offsets: [0, 50] },

  // 5. TECH & IA
  { q: 'entrepreneur de la Silicon Valley', cat: 'Tech & IA', offsets: [0, 50, 100] },
  { q: 'chercheur en intelligence artificielle', cat: 'Tech & IA', offsets: [0, 50, 100] },
  { q: 'pionnier de l\'informatique', cat: 'Tech & IA', offsets: [0, 50, 100] },
  { q: 'informaticien américain lauréat du prix Turing', cat: 'Tech & IA', offsets: [0, 50, 100] },
  { q: 'fondateur d\'entreprise technologique', cat: 'Tech & IA', offsets: [0, 50, 100] },
  { q: 'cryptographe informatique', cat: 'Tech & IA', offsets: [0, 50] },
  { q: 'ingénieur aérospatial', cat: 'Tech & IA', offsets: [0, 50] },
  { q: 'milliardaire de la tech', cat: 'Tech & IA', offsets: [0, 50] },

  // 6. SCIENCES & PENSÉE
  { q: 'lauréat du prix Nobel de physique', cat: 'Sciences & Pensée', offsets: [0, 50, 100, 150] },
  { q: 'lauréat du prix Nobel de chimie', cat: 'Sciences & Pensée', offsets: [0, 50, 100, 150] },
  { q: 'lauréat du prix Nobel de physiologie ou médecine', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'mathématicien lauréat de la médaille Fields', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'astrophysicien célèbre', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'philosophe des Lumières', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'philosophe français contemporain', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'philosophe de la Grèce antique', cat: 'Sciences & Pensée', offsets: [0, 50] },
  { q: 'biologiste et généticien', cat: 'Sciences & Pensée', offsets: [0, 50] },
  { q: 'économiste lauréat du prix Nobel', cat: 'Sciences & Pensée', offsets: [0, 50] },

  // 7. POLITIQUE
  { q: 'président des États-Unis', cat: 'Politique', offsets: [0, 50] },
  { q: 'président de la République française', cat: 'Politique', offsets: [0, 50] },
  { q: 'premier ministre français', cat: 'Politique', offsets: [0, 50, 100] },
  { q: 'premier ministre du Royaume-Uni', cat: 'Politique', offsets: [0, 50] },
  { q: 'chancelier fédéral d\'Allemagne', cat: 'Politique', offsets: [0, 50] },
  { q: 'président de la fédération de Russie', cat: 'Politique', offsets: [0, 50] },
  { q: 'chef d\'État européen', cat: 'Politique', offsets: [0, 50, 100] },
  { q: 'secrétaire général des Nations unies', cat: 'Politique', offsets: [0, 50] },
  { q: 'homme politique français ministre', cat: 'Politique', offsets: [0, 50, 100] },

  // 8. HISTOIRE
  { q: 'empereur romain de l\'Empire romain', cat: 'Histoire', offsets: [0, 50, 100] },
  { q: 'roi de France de la monarchie française', cat: 'Histoire', offsets: [0, 50, 100] },
  { q: 'reine de France ou régente', cat: 'Histoire', offsets: [0, 50] },
  { q: 'général de la Seconde Guerre mondiale', cat: 'Histoire', offsets: [0, 50, 100] },
  { q: 'maréchal du Premier Empire', cat: 'Histoire', offsets: [0, 50, 100] },
  { q: 'explorateur de l\'époque moderne', cat: 'Histoire', offsets: [0, 50, 100] },
  { q: 'pharaon d\'Égypte antique', cat: 'Histoire', offsets: [0, 50] },
  { q: 'héros de la résistance française', cat: 'Histoire', offsets: [0, 50, 100] },
  { q: 'révolutionnaire français de 1789', cat: 'Histoire', offsets: [0, 50] },

  // 9. CULTURE & GLAMOUR (ADULT & MODE)
  { q: 'actrice pornographique américaine', cat: 'Charme & Porno', offsets: [0, 50, 100, 150] },
  { q: 'actrice pornographique française', cat: 'Charme & Porno', offsets: [0, 50, 100] },
  { q: 'acteur pornographique américain', cat: 'Charme & Porno', offsets: [0, 50] },
  { q: 'playmate de l\'année Playboy', cat: 'Charme & Porno', offsets: [0, 50, 100] },
  { q: 'mannequin Victoria\'s Secret', cat: 'Charme & Porno', offsets: [0, 50, 100] },
  { q: 'mannequin de charme', cat: 'Charme & Porno', offsets: [0, 50, 100] },
  { q: 'personnalité d\'OnlyFans modèle', cat: 'Charme & Porno', offsets: [0, 50] },
  { q: 'actrice de film érotique des années 1970', cat: 'Charme & Porno', offsets: [0, 50] },

  // 10. INTERNET & CRÉATEURS (YOUTUBE / TWITCH)
  { q: 'vidéaste web français sur YouTube', cat: 'YouTube & Internet', offsets: [0, 50, 100, 150] },
  { q: 'streamer français sur Twitch', cat: 'YouTube & Internet', offsets: [0, 50, 100] },
  { q: 'créateur de contenu sur Internet', cat: 'YouTube & Internet', offsets: [0, 50, 100] },
  { q: 'influenceur du web', cat: 'YouTube & Internet', offsets: [0, 50, 100] },
  { q: 'podcasteur célèbre', cat: 'YouTube & Internet', offsets: [0, 50] },

  // 11. PÈGRE & CRIME
  { q: 'parrain de la mafia américaine', cat: 'Pègre & Crime', offsets: [0, 50, 100] },
  { q: 'gangster américain des années 1930', cat: 'Pègre & Crime', offsets: [0, 50] },
  { q: 'narcotrafiquant mexicain ou colombien', cat: 'Pègre & Crime', offsets: [0, 50] },
  { q: 'braqueur célèbre du grand banditisme', cat: 'Pègre & Crime', offsets: [0, 50] },
  { q: 'pirate des Caraïbes de l\'âge d\'or', cat: 'Pègre & Crime', offsets: [0, 50] },

  // 12. RENSEIGNEMENT & ESPIONNAGE
  { q: 'agent secret de la guerre froide', cat: 'Renseignement', offsets: [0, 50] },
  { q: 'directeur de la Central Intelligence Agency', cat: 'Renseignement', offsets: [0, 50] },
  { q: 'espion du MI6 ou du KGB', cat: 'Renseignement', offsets: [0, 50] },
  { q: 'cryptanalyste de Bletchley Park', cat: 'Renseignement', offsets: [0, 50] },

  // 13. CONTROVERSES & MÉDIAS
  { q: 'journaliste d\'investigation français', cat: 'Controverses & Médias', offsets: [0, 50, 100] },
  { q: 'présentateur de télévision français', cat: 'Controverses & Médias', offsets: [0, 50, 100] },
  { q: 'animateur de radio français', cat: 'Controverses & Médias', offsets: [0, 50] },
  { q: 'lanceur d\'alerte américain', cat: 'Controverses & Médias', offsets: [0, 50] },
  { q: 'magnat de la presse et des médias', cat: 'Controverses & Médias', offsets: [0, 50] }
];

// Helper pour filtrer les faux positifs (articles généraux, tournois, listes, films)
const FORBIDDEN_WORDS = [
  'liste', 'catégorie:', 'portail:', 'projet:', 'homonymie', 'championnat', 'tournoi',
  'saison', 'coupe du monde', 'jeux olympiques', 'élection', 'parti politique', 'gouvernement',
  'histoire de', 'économie de', 'géographie de', 'politique en', 'discographie', 'filmographie',
  'palmarès', 'drapeau', 'armoiries', 'équipe de', 'club de', 'stade de', 'fédération',
  'ligue de', 'syndicat', 'affaire ', 'scandale ', 'procès ', 'attentat', 'bataille',
  'traité', 'guerre de', 'guerre du', 'conflit', 'festival', 'cérémonie', 'prix nobel',
  'bande originale', 'album de', 'chanson de', 'single de', 'film de', 'série de'
];

function isLegitPersonTitle(title) {
  const t = title.toLowerCase();
  for (const word of FORBIDDEN_WORDS) {
    if (t.includes(word)) return false;
  }
  return true;
}

function cleanTitle(raw) {
  // Retire les parenthèses de désambiguïsation : "Nas (rappeur)" -> "Nas"
  return raw.replace(/ \([^)]+\)$/, '').trim();
}

// Concurrency pool runner
async function runConcurrent(items, fn, limit = 6) {
  const results = [];
  const executing = new Set();
  for (const item of items) {
    const p = Promise.resolve().then(() => fn(item));
    results.push(p);
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(results);
}

async function fetchWikiSearch(query, offset, lang = 'fr') {
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=50&gsroffset=${offset}&prop=description|pageimages|extracts&exintro=1&explaintext=1&exsentences=2&piprop=thumbnail&pithumbsize=600&pilicense=any&format=json`;

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'tcgWIKI-Massive-Ingest/2.0 (contact@tcgwiki.io)' },
      signal: AbortSignal.timeout(6500)
    });
    if (!res.ok) return [];
    const json = await res.json();
    const pages = Object.values(json.query?.pages || {});
    return pages.filter(p => p.thumbnail?.source && isLegitPersonTitle(p.title));
  } catch (e) {
    return [];
  }
}

function getRarityDetails(index) {
  // Distribution de rareté authentique TCG Prestige
  const mod = index % 100;
  if (mod < 3) {
    return { rarity: 'U', rarity_label: 'Ultra Secret', variant: 'full_art_secret', auraBase: 9500 };
  } else if (mod < 10) {
    return { rarity: 'L', rarity_label: 'Légendaire', variant: 'solid_gold', auraBase: 7800 };
  } else if (mod < 25) {
    return { rarity: 'D', rarity_label: 'Diamond', variant: 'rainbow_holo', auraBase: 6200 };
  } else if (mod < 50) {
    return { rarity: 'H', rarity_label: 'Héritage', variant: 'gold_foil', auraBase: 4800 };
  } else if (mod < 80) {
    return { rarity: 'R', rarity_label: 'Rare', variant: 'silver_chrome', auraBase: 3400 };
  } else {
    return { rarity: 'C', rarity_label: 'Commune', variant: 'standard', auraBase: 1900 };
  }
}

function generateStats(name, rarityDetails) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) & 0xffffffff;
  }
  const base = Math.abs(hash);
  const multiplier = rarityDetails.rarity === 'U' ? 1.4 : rarityDetails.rarity === 'L' ? 1.3 : rarityDetails.rarity === 'D' ? 1.2 : rarityDetails.rarity === 'H' ? 1.1 : 1.0;
  
  return {
    attack: Math.min(99, Math.round((48 + (base % 48)) * multiplier / 1.4)),
    defense: Math.min(99, Math.round((45 + ((base >> 4) % 50)) * multiplier / 1.4)),
    hp: Math.min(99, Math.round((50 + ((base >> 8) % 45)) * multiplier / 1.4)),
    speed: Math.min(99, Math.round((42 + ((base >> 12) % 52)) * multiplier / 1.4))
  };
}

async function main() {
  console.log('╔═══════════════════════════════════════════════════════════════════╗');
  console.log('║       tcgWIKI - INGESTION MASSIVE WIKIPEDIA DANS SUPABASE        ║');
  console.log('╚═══════════════════════════════════════════════════════════════════╝');

  // 1. Récupérer les cartes déjà existantes dans Supabase pour éviter tout doublon
  console.log('🔍 Étape 1 : Récupération des cartes existantes dans Supabase...');
  const { data: existingRows, error: fetchErr } = await supabase
    .from('cards')
    .select('id, name');

  if (fetchErr) {
    console.error('Erreur Supabase:', fetchErr.message);
    process.exit(1);
  }

  const existingNames = new Set((existingRows || []).map(r => r.name.toLowerCase()));
  let maxIdNum = 0;
  (existingRows || []).forEach(r => {
    const num = parseInt(r.id, 10);
    if (!isNaN(num) && num > maxIdNum) maxIdNum = num;
  });

  console.log(`   -> ${existingRows.length} cartes déjà présentes. ID Max actuel : ${maxIdNum}`);

  // 2. Aplatir toutes les tâches de recherche
  const tasks = [];
  QUERY_MATRIX.forEach(item => {
    item.offsets.forEach(offset => {
      tasks.push({ q: item.q, cat: item.cat, offset });
    });
  });

  console.log(`\n🚀 Étape 2 : Lancement de ${tasks.length} requêtes Wikipedia concurrentes...`);
  const t0 = Date.now();
  const collectedMap = new Map();

  let completedTasks = 0;
  await runConcurrent(tasks, async (task) => {
    const pages = await fetchWikiSearch(task.q, task.offset, 'fr');
    completedTasks++;
    
    let addedCount = 0;
    for (const page of pages) {
      const clean = cleanTitle(page.title);
      const cleanLower = clean.toLowerCase();
      if (!existingNames.has(cleanLower) && !collectedMap.has(cleanLower) && page.thumbnail?.source) {
        collectedMap.set(cleanLower, {
          name: clean,
          category: task.cat,
          image: page.thumbnail.source,
          description: page.description || page.extract?.slice(0, 160) || `Figure emblématique de la catégorie ${task.cat}.`
        });
        addedCount++;
      }
    }
    if (completedTasks % 20 === 0 || completedTasks === tasks.length) {
      console.log(`   [${completedTasks}/${tasks.length}] "${task.q}" (${task.offset}) -> Total uniques trouvées : ${collectedMap.size}`);
    }
  }, 6);

  console.log(`\n✅ Récolte terminée en ${((Date.now() - t0)/1000).toFixed(1)}s !`);
  console.log(`   -> ${collectedMap.size} NOUVELLES personnalités uniques avec IMAGE GARANTIE prêtes à l'insertion.`);

  // 3. Transformation en Cartes TCG Supabase
  console.log('\n📦 Étape 3 : Structuration des cartes et calcul des raretés...');
  let currentId = maxIdNum + 1;
  const cardsToInsert = [];

  for (const item of collectedMap.values()) {
    const rarityInfo = getRarityDetails(currentId);
    const stats = generateStats(item.name, rarityInfo);
    const aura = rarityInfo.auraBase + (Math.abs(currentId * 41) % 1500);
    const seriesId = Math.floor((currentId - 1) / 500) + 1;

    cardsToInsert.push({
      id: String(currentId).padStart(3, '0'),
      series_id: seriesId,
      name: item.name,
      category: item.category,
      rarity: rarityInfo.rarity,
      rarity_label: rarityInfo.rarity_label,
      variant: rarityInfo.variant,
      image: item.image,
      description: item.description,
      crop_position: 'center 20%',
      stats: stats,
      aura: aura,
      serial_number: `S${String(seriesId).padStart(2, '0')}-${String(currentId).padStart(4, '0')}`
    });
    currentId++;
  }

  // 4. Insertion par lots (batch) dans Supabase
  console.log(`\n💾 Étape 4 : Insertion de ${cardsToInsert.length} cartes dans Supabase (par lots de 250)...`);
  const BATCH_SIZE = 250;
  let insertedTotal = 0;

  for (let i = 0; i < cardsToInsert.length; i += BATCH_SIZE) {
    const batch = cardsToInsert.slice(i, i + BATCH_SIZE);
    const { error } = await supabase
      .from('cards')
      .upsert(batch, { onConflict: 'name', ignoreDuplicates: true });

    if (error) {
      console.error(`   ❌ Erreur lot ${i} - ${i + batch.length}:`, error.message);
    } else {
      insertedTotal += batch.length;
      console.log(`   ✓ Lot ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(cardsToInsert.length / BATCH_SIZE)} inséré (${insertedTotal}/${cardsToInsert.length})`);
    }
  }

  // 5. Bilan Final
  const { count: finalCount } = await supabase
    .from('cards')
    .select('*', { count: 'exact', head: true });

  console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
  console.log(`║ 🎉 OPÉRATION RÉUSSIE ! TOTAL CARTES SUR SUPABASE : ${finalCount}       ║`);
  console.log('╚═══════════════════════════════════════════════════════════════════╝\n');
}

main().catch(console.error);
