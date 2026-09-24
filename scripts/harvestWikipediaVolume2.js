import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://knxecrhgpfatcdblzprg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yxucAHYJsWPVrK96zXwsTQ_yAHQBe5z';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const VOLUME_2_QUERIES = [
  // 1. SPORT MONDIAL
  { q: 'gardien de but international de football', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueur de football italien', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueur de football allemand', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueur de football anglais de Premier League', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueur de football néerlandais', cat: 'Sport', offsets: [0, 50] },
  { q: 'joueur de football portugais', cat: 'Sport', offsets: [0, 50] },
  { q: 'basketteur membre du Basketball Hall of Fame', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'joueuse de tennis championne de grand chelem', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'pilote automobile champion du monde', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'pilote de moto GP champion du monde', cat: 'Sport', offsets: [0, 50] },
  { q: 'golfeur vainqueur d\'un tournoi majeur', cat: 'Sport', offsets: [0, 50] },
  { q: 'joueur de baseball de la Ligue majeure', cat: 'Sport', offsets: [0, 50, 100] },
  { q: 'boxeur champion olympique', cat: 'Sport', offsets: [0, 50] },
  { q: 'skieuse alpine championne olympique', cat: 'Sport', offsets: [0, 50] },
  { q: 'patineur artistique champion olympique', cat: 'Sport', offsets: [0, 50] },
  { q: 'combattant de kick-boxing', cat: 'Sport', offsets: [0, 50] },

  // 2. CINÉMA & TÉLÉVISION ÉLITE
  { q: 'acteur oscarisé du meilleur second rôle', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'actrice oscarisée du meilleur second rôle', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'compositeur de musique de film américain', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'acteur de série télévisée américaine', cat: 'Cinéma', offsets: [0, 50, 100, 150] },
  { q: 'actrice de série télévisée américaine', cat: 'Cinéma', offsets: [0, 50, 100, 150] },
  { q: 'acteur de cinéma coréen', cat: 'Cinéma', offsets: [0, 50] },
  { q: 'réalisateur de films d\'animation', cat: 'Cinéma', offsets: [0, 50] },
  { q: 'acteur comique français', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'comédien de stand-up américain', cat: 'Cinéma', offsets: [0, 50, 100] },
  { q: 'humoriste français', cat: 'Cinéma', offsets: [0, 50, 100] },

  // 3. MUSIQUE, RAP & COMPOSITEURS
  { q: 'rappeur de la côte ouest américain', cat: 'Rap & Hip-Hop', offsets: [0, 50, 100] },
  { q: 'rappeur de la côte est américain', cat: 'Rap & Hip-Hop', offsets: [0, 50, 100] },
  { q: 'rappeur du sud des États-Unis', cat: 'Rap & Hip-Hop', offsets: [0, 50, 100] },
  { q: 'rappeur belge francophone', cat: 'Rap & Hip-Hop', offsets: [0, 50] },
  { q: 'pianiste virtuose de musique classique', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'violoniste classique virtuose', cat: 'Musique & Pop', offsets: [0, 50] },
  { q: 'chanteur de hard rock ou heavy metal', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'chanteuse de soul et RnB', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'chanteur de jazz américain', cat: 'Musique & Pop', offsets: [0, 50, 100] },
  { q: 'auteur-compositeur-interprète français', cat: 'Musique & Pop', offsets: [0, 50, 100] },

  // 4. TECH, IA & INVENTEURS
  { q: 'inventeur américain du XIXe siècle', cat: 'Tech & IA', offsets: [0, 50, 100] },
  { q: 'ingénieur en robotique et automatique', cat: 'Tech & IA', offsets: [0, 50] },
  { q: 'chercheur en apprentissage profond machine learning', cat: 'Tech & IA', offsets: [0, 50] },
  { q: 'créateur de langage de programmation', cat: 'Tech & IA', offsets: [0, 50] },
  { q: 'pionnier de l\'Internet et du Web', cat: 'Tech & IA', offsets: [0, 50] },
  { q: 'milliardaire du classement Forbes', cat: 'Tech & IA', offsets: [0, 50, 100] },

  // 5. SCIENCES & SAVOIR
  { q: 'mathématicien français de l\'Académie des sciences', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'astronome du XVIIe ou XVIIIe siècle', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'lauréat de la médaille Copley', cat: 'Sciences & Pensée', offsets: [0, 50] },
  { q: 'chimiste lauréat du prix Nobel', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'peintre de la Renaissance italienne', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'peintre impressionniste français', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'sculpteur français célèbre', cat: 'Sciences & Pensée', offsets: [0, 50] },
  { q: 'écrivain français du XIXe siècle', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },
  { q: 'romancier américain du XXe siècle', cat: 'Sciences & Pensée', offsets: [0, 50, 100] },

  // 6. HISTOIRE & GÉOPOLITIQUE
  { q: 'tsar de Russie de la dynastie Romanov', cat: 'Histoire', offsets: [0, 50] },
  { q: 'roi d\'Angleterre de la monarchie britannique', cat: 'Histoire', offsets: [0, 50, 100] },
  { q: 'empereur byzantin', cat: 'Histoire', offsets: [0, 50] },
  { q: 'sultan de l\'Empire ottoman', cat: 'Histoire', offsets: [0, 50] },
  { q: 'conquérant ou chef de guerre célèbre', cat: 'Histoire', offsets: [0, 50] },
  { q: 'homme politique de la Rome antique consul', cat: 'Histoire', offsets: [0, 50] },
  { q: 'chevalier ou connétable de France', cat: 'Histoire', offsets: [0, 50] },

  // 7. POLITIQUE CONTEMPORAINE
  { q: 'sénateur des États-Unis', cat: 'Politique', offsets: [0, 50, 100, 150] },
  { q: 'gouverneur d\'un État des États-Unis', cat: 'Politique', offsets: [0, 50, 100] },
  { q: 'député français ministre', cat: 'Politique', offsets: [0, 50, 100] },
  { q: 'premier ministre du Canada', cat: 'Politique', offsets: [0, 50] },
  { q: 'président de la République italienne', cat: 'Politique', offsets: [0, 50] },
  { q: 'chancelier d\'Autriche', cat: 'Politique', offsets: [0, 50] },

  // 8. CULTURE & GLAMOUR (ADULT & MODE)
  { q: 'mannequin international de haute couture', cat: 'Charme & Porno', offsets: [0, 50, 100] },
  { q: 'top model des années 1990', cat: 'Charme & Porno', offsets: [0, 50] },
  { q: 'actrice pornographique récompensée aux AVN Awards', cat: 'Charme & Porno', offsets: [0, 50, 100] },
  { q: 'playmate de Playboy magazine', cat: 'Charme & Porno', offsets: [0, 50, 100] },
  { q: 'modèle érotique ou glamour', cat: 'Charme & Porno', offsets: [0, 50, 100] },

  // 9. INTERNET, ESPORT & CRÉATEURS
  { q: 'streameur américain sur Twitch', cat: 'YouTube & Internet', offsets: [0, 50, 100] },
  { q: 'joueur professionnel d\'esport', cat: 'YouTube & Internet', offsets: [0, 50, 100] },
  { q: 'créateur de contenu sur TikTok', cat: 'YouTube & Internet', offsets: [0, 50, 100] },
  { q: 'youtubeur anglophone célèbre', cat: 'YouTube & Internet', offsets: [0, 50, 100] },
  { q: 'streameuse sur Twitch', cat: 'YouTube & Internet', offsets: [0, 50] }
];

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
  return raw.replace(/ \([^)]+\)$/, '').trim();
}

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
  console.log('║    tcgWIKI - INGESTION VOLUME 2 : EXPANSION GÉANTE SUPABASE      ║');
  console.log('╚═══════════════════════════════════════════════════════════════════╝');

  console.log('🔍 Étape 1 : Récupération exhaustive des cartes existantes...');
  
  // Récupérer toutes les cartes existantes par tranches
  const existingNames = new Set();
  let maxIdNum = 7890;
  
  for (let offset = 0; offset < 10000; offset += 1000) {
    const { data: rows } = await supabase
      .from('cards')
      .select('id, name')
      .range(offset, offset + 999);
    if (!rows || rows.length === 0) break;
    rows.forEach(r => {
      existingNames.add(r.name.toLowerCase());
      const num = parseInt(r.id, 10);
      if (!isNaN(num) && num > maxIdNum) maxIdNum = num;
    });
  }

  console.log(`   -> ${existingNames.size} cartes déjà en base. ID Max actuel : ${maxIdNum}`);

  const tasks = [];
  VOLUME_2_QUERIES.forEach(item => {
    item.offsets.forEach(offset => {
      tasks.push({ q: item.q, cat: item.cat, offset });
    });
  });

  console.log(`\n🚀 Étape 2 : Lancement de ${tasks.length} requêtes Wikipedia...`);
  const t0 = Date.now();
  const collectedMap = new Map();

  let completedTasks = 0;
  await runConcurrent(tasks, async (task) => {
    const pages = await fetchWikiSearch(task.q, task.offset, 'fr');
    completedTasks++;
    
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
      }
    }
    if (completedTasks % 20 === 0 || completedTasks === tasks.length) {
      console.log(`   [${completedTasks}/${tasks.length}] "${task.q}" (${task.offset}) -> Nouveaux uniques récoltés : ${collectedMap.size}`);
    }
  }, 6);

  console.log(`\n✅ Récolte terminée en ${((Date.now() - t0)/1000).toFixed(1)}s !`);
  console.log(`   -> ${collectedMap.size} NOUVELLES personnalités additionnelles trouvées.`);

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

  console.log(`\n💾 Étape 4 : Insertion de ${cardsToInsert.length} cartes dans Supabase (par lots de 250)...`);
  const BATCH_SIZE = 250;
  let insertedTotal = 0;

  for (let i = 0; i < cardsToInsert.length; i += BATCH_SIZE) {
    const batch = cardsToInsert.slice(i, i + BATCH_SIZE);
    const { error } = await supabase
      .from('cards')
      .upsert(batch, { onConflict: 'name', ignoreDuplicates: true });

    if (error) {
      console.error(`   ❌ Erreur lot ${i}:`, error.message);
    } else {
      insertedTotal += batch.length;
      console.log(`   ✓ Lot ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(cardsToInsert.length / BATCH_SIZE)} inséré (${insertedTotal}/${cardsToInsert.length})`);
    }
  }

  const { count: finalCount } = await supabase
    .from('cards')
    .select('*', { count: 'exact', head: true });

  console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
  console.log(`║ 🎉 NOUVEAU TOTAL DE CARTES SUR SUPABASE : ${finalCount}          ║`);
  console.log('╚═══════════════════════════════════════════════════════════════════╝\n');
}

main().catch(console.error);
