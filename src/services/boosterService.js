/**
 * boosterService.js - Gestion des Boosters, Cooldowns Réels et Taux de Drop Certifiés
 * - Booster Commun : 1 Heure de cooldown (Très rare d'avoir Ultra/Légendaire, mais possible !)
 * - Booster Rare : 5 Heures de cooldown (0% Commune !)
 * - Booster Épique : 48 Heures de cooldown (0% Commune, 0% Rare !)
 */

export const BOOSTER_CONFIGS = {
  common: {
    id: 'common',
    type: 'common',
    name: 'Booster Commun',
    title: 'Booster Commun',
    subtitle: 'Édition Savoir Universel',
    cooldownSeconds: 3600, // 1 heure
    cooldownHoursLabel: '1h',
    priceTokens: 50,
    accentColor: '#64748b',
    glowColor: 'rgba(100, 116, 139, 0.4)',
    tag: 'Toutes les 1h',
    badgeText: 'DÉCOUVERTE',
    description: '5 Cartes du savoir mondial. Chance infime d’Ultra Secret (Drop difficile style Pokémon TCG).'
  },
  rare: {
    id: 'rare',
    type: 'rare',
    name: 'Booster Rare',
    title: 'Booster Rare',
    subtitle: 'Édition Saphir Royal',
    cooldownSeconds: 18000, // 5 heures
    cooldownHoursLabel: '5h',
    priceTokens: 200,
    accentColor: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.45)',
    tag: 'Toutes les 5h',
    badgeText: 'SANS COMMUNE',
    description: '5 Cartes certifiées. ZÉRO Commune garantie ! Concentration forte de Rares, Héritages et Diamonds.'
  },
  epic: {
    id: 'epic',
    type: 'epic',
    name: 'Booster Épique',
    title: 'Booster Épique',
    subtitle: 'Édition Maître Impérial',
    cooldownSeconds: 172800, // 48 heures
    cooldownHoursLabel: '48h',
    priceTokens: 800,
    accentColor: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.55)',
    tag: 'Toutes les 48h',
    badgeText: 'PRESTIGE',
    description: '5 Cartes de très haute voltige. ZÉRO Commune, ZÉRO Rare ! Uniquement Héritage, Diamond, Légendaire et Ultra.'
  }
};

const STORAGE_KEY_PREFIX = 'wikicollect_booster_cd_';

/**
 * Récupère l'état des timers pour les 3 boosters
 */
export function getBoosterCooldowns() {
  const now = Date.now();
  const result = {};

  Object.values(BOOSTER_CONFIGS).forEach(cfg => {
    const key = STORAGE_KEY_PREFIX + cfg.type;
    const storedLastClaim = localStorage.getItem(key);

    if (!storedLastClaim) {
      // Premier lancement : Le booster commun est déjà prêt pour le joueur !
      if (cfg.type === 'common') {
        result[cfg.type] = {
          isReady: true,
          remainingSeconds: 0,
          formatted: 'PRÊT !'
        };
      } else if (cfg.type === 'rare') {
        // Le booster rare commence avec 1h30 restante pour démonstration
        const simulatedClaim = now - (cfg.cooldownSeconds - 5400) * 1000;
        localStorage.setItem(key, String(simulatedClaim));
        result[cfg.type] = {
          isReady: false,
          remainingSeconds: 5400,
          formatted: formatRemainingTime(5400)
        };
      } else {
        // Le booster épique commence avec 14h restante pour démonstration
        const simulatedClaim = now - (cfg.cooldownSeconds - 50400) * 1000;
        localStorage.setItem(key, String(simulatedClaim));
        result[cfg.type] = {
          isReady: false,
          remainingSeconds: 50400,
          formatted: formatRemainingTime(50400)
        };
      }
    } else {
      const lastClaimTime = parseInt(storedLastClaim, 10);
      const elapsedSeconds = Math.floor((now - lastClaimTime) / 1000);
      const remaining = Math.max(0, cfg.cooldownSeconds - elapsedSeconds);

      result[cfg.type] = {
        isReady: remaining === 0,
        remainingSeconds: remaining,
        formatted: remaining === 0 ? 'PRÊT !' : formatRemainingTime(remaining)
      };
    }
  });

  return result;
}

/**
 * Enregistre l'ouverture d'un booster et réinitialise son cooldown
 */
export function recordBoosterClaim(boosterType) {
  const key = STORAGE_KEY_PREFIX + boosterType;
  localStorage.setItem(key, String(Date.now()));
}

/**
 * Formate un nombre de secondes en texte compact 'MM:SS' ou 'Xh YYm'
 */
export function formatRemainingTime(seconds) {
  if (seconds <= 0) return 'PRÊT !';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, '0')}m`;
  }
  return `${minutes}m ${String(secs).padStart(2, '0')}s`;
}

/**
 * ALGORITHME DE TIRAGE RÉEL ET DIFFICILE (Style Pokémon TCG)
 * Tire 5 cartes selon le type de booster et les règles strictes demandées :
 * - Commun : Ultra possible mais infime (très difficile)
 * - Rare : 0% Commune !
 * - Épique : 0% Commune, 0% Rare !
 */
export function drawBoosterCards(boosterType, cardsPool) {
  if (!cardsPool || cardsPool.length === 0) return [];

  const poolByRarity = {
    C: cardsPool.filter(c => c.rarity === 'C'),
    R: cardsPool.filter(c => c.rarity === 'R'),
    H: cardsPool.filter(c => c.rarity === 'H'),
    D: cardsPool.filter(c => c.rarity === 'D'),
    L: cardsPool.filter(c => c.rarity === 'L'),
    U: cardsPool.filter(c => c.rarity === 'U')
  };

  const pickCard = (tier) => {
    let pool = poolByRarity[tier];
    if (!pool || pool.length === 0) {
      pool = cardsPool;
    }
    const card = pool[Math.floor(Math.random() * pool.length)];
    return { ...card, locked: false };
  };

  const rollRarityFromTable = (table) => {
    const rand = Math.random() * 100;
    let cumulative = 0;
    for (const item of table) {
      cumulative += item.rate;
      if (rand <= cumulative) {
        return item.rarity;
      }
    }
    return table[table.length - 1].rarity;
  };

  const drawn = [];

  // =========================================================================
  // 1. BOOSTER COMMUN (Toutes les 1h)
  // Peut donner une Ultra ou Légendaire, mais chance infime et difficile !
  // =========================================================================
  if (boosterType === 'common') {
    // Cartes 1, 2, 3 : Majorité Commune (90%), Petite chance Rare (10%)
    for (let i = 0; i < 3; i++) {
      const r = rollRarityFromTable([
        { rarity: 'C', rate: 90.0 },
        { rarity: 'R', rate: 10.0 }
      ]);
      drawn.push(pickCard(r));
    }

    // Carte 4 : Semi-Hit (Rare 72%, Héritage 22%, Diamond 5%, Légendaire 0.9%, Ultra 0.1%)
    const r4 = rollRarityFromTable([
      { rarity: 'R', rate: 72.0 },
      { rarity: 'H', rate: 22.0 },
      { rarity: 'D', rate: 5.0 },
      { rarity: 'L', rate: 0.9 },
      { rarity: 'U', rate: 0.1 }
    ]);
    drawn.push(pickCard(r4));

    // Carte 5 : THE HIT (Rare 55%, Héritage 28%, Diamond 12%, Légendaire 4.5%, Ultra 0.5% !)
    const r5 = rollRarityFromTable([
      { rarity: 'R', rate: 55.0 },
      { rarity: 'H', rate: 28.0 },
      { rarity: 'D', rate: 12.0 },
      { rarity: 'L', rate: 4.5 },
      { rarity: 'U', rate: 0.5 } // 1 chance sur 200 boosters pour l'Ultra Chase !
    ]);
    drawn.push(pickCard(r5));
  }

  // =========================================================================
  // 2. BOOSTER RARE (Toutes les 5h)
  // RÈGLE : AUCUNE COMMUNE ! (0% C)
  // =========================================================================
  else if (boosterType === 'rare' || boosterType === 'heritage') {
    // Cartes 1, 2, 3 : Rare (84%), Héritage (16%)
    for (let i = 0; i < 3; i++) {
      const r = rollRarityFromTable([
        { rarity: 'R', rate: 84.0 },
        { rarity: 'H', rate: 16.0 }
      ]);
      drawn.push(pickCard(r));
    }

    // Carte 4 : Rare (45%), Héritage (38%), Diamond (13%), Légendaire (3.5%), Ultra (0.5%)
    const r4 = rollRarityFromTable([
      { rarity: 'R', rate: 45.0 },
      { rarity: 'H', rate: 38.0 },
      { rarity: 'D', rate: 13.0 },
      { rarity: 'L', rate: 3.5 },
      { rarity: 'U', rate: 0.5 }
    ]);
    drawn.push(pickCard(r4));

    // Carte 5 : THE HIT (Héritage 45%, Diamond 35%, Légendaire 17%, Ultra 3.0%)
    const r5 = rollRarityFromTable([
      { rarity: 'H', rate: 45.0 },
      { rarity: 'D', rate: 35.0 },
      { rarity: 'L', rate: 17.0 },
      { rarity: 'U', rate: 3.0 }
    ]);
    drawn.push(pickCard(r5));
  }

  // =========================================================================
  // 3. BOOSTER ÉPIQUE (Toutes les 48h)
  // RÈGLE : AUCUNE COMMUNE NI RARE ! (0% C, 0% R)
  // Uniquement Héritage, Diamond, Légendaire et Ultra !
  // =========================================================================
  else {
    // Cartes 1, 2, 3 : Héritage (68%), Diamond (32%)
    for (let i = 0; i < 3; i++) {
      const r = rollRarityFromTable([
        { rarity: 'H', rate: 68.0 },
        { rarity: 'D', rate: 32.0 }
      ]);
      drawn.push(pickCard(r));
    }

    // Carte 4 : Héritage (30%), Diamond (45%), Légendaire (20%), Ultra (5%)
    const r4 = rollRarityFromTable([
      { rarity: 'H', rate: 30.0 },
      { rarity: 'D', rate: 45.0 },
      { rarity: 'L', rate: 20.0 },
      { rarity: 'U', rate: 5.0 }
    ]);
    drawn.push(pickCard(r4));

    // Carte 5 : THE HIT MAJEUR (Diamond 30%, Légendaire 50%, Ultra 20% !)
    const r5 = rollRarityFromTable([
      { rarity: 'D', rate: 30.0 },
      { rarity: 'L', rate: 50.0 },
      { rarity: 'U', rate: 20.0 }
    ]);
    drawn.push(pickCard(r5));
  }

  // RÈGLE D'OR : Trier les 5 cartes de la moins rare à la plus rare (Le Hit en 5e et dernière position)
  const RARITY_POWER = { 'C': 1, 'R': 2, 'H': 3, 'D': 4, 'L': 5, 'U': 6 };
  return drawn.sort((a, b) => (RARITY_POWER[a.rarity] || 1) - (RARITY_POWER[b.rarity] || 1));
}

/**
 * CONFIGURATION DU COFFRET DISPLAY BOX (24 Boosters Scellés)
 */
export const DISPLAY_BOX_CONFIG = {
  id: 'display_box_24',
  type: 'box',
  name: 'Coffret Display (24 Boosters)',
  title: 'Coffret Display Prestige',
  subtitle: 'Boîte Scellée d\'Usine • 24 Paquets',
  boosterCount: 24,
  priceTokens: 1800,
  tag: '24 Boosters Scellés',
  badgeText: 'DISPLAY OFFICIEL',
  description: 'Boîte scellée d’usine de 24 boosters. Taux de drop certifiés : 14 à 20 Communs, 4 à 8 Rares, 0 à 2 Épiques (Max 2 Épiques, Max 8 Rares garantis !).'
};

/**
 * Génère la composition aléatoire et équilibrée d'un Coffret de 24 Boosters
 * Règle utilisateur stricte : Max 2 Épiques, Max 8 Rares (total = 24 boosters)
 */
export function generateBoxPackComposition() {
  // Tirage du nombre de boosters Épiques (0, 1 ou 2)
  const randEpic = Math.random();
  let epicCount = 1;
  if (randEpic < 0.15) epicCount = 0;
  else if (randEpic < 0.75) epicCount = 1;
  else epicCount = 2; // Max 2 épiques !

  // Tirage du nombre de boosters Rares (entre 4 et 8, selon les épiques)
  let rareCount = 5;
  if (epicCount === 2) {
    rareCount = 4 + Math.floor(Math.random() * 3); // 4 à 6 rares
  } else if (epicCount === 1) {
    rareCount = 4 + Math.floor(Math.random() * 4); // 4 à 7 rares
  } else {
    rareCount = 5 + Math.floor(Math.random() * 4); // 5 à 8 rares (max 8)
  }
  rareCount = Math.min(8, Math.max(4, rareCount));

  // Le reste en boosters Communs (total = 24)
  const commonCount = 24 - epicCount - rareCount;

  // Création de la liste des 24 boosters
  const packs = [];
  for (let i = 0; i < commonCount; i++) {
    packs.push({
      boxIndex: packs.length + 1,
      type: 'common',
      name: 'Booster Commun',
      title: 'Booster Commun',
      accentColor: '#64748b'
    });
  }
  for (let i = 0; i < rareCount; i++) {
    packs.push({
      boxIndex: packs.length + 1,
      type: 'rare',
      name: 'Booster Rare',
      title: 'Booster Rare',
      accentColor: '#2563eb'
    });
  }
  for (let i = 0; i < epicCount; i++) {
    packs.push({
      boxIndex: packs.length + 1,
      type: 'epic',
      name: 'Booster Épique',
      title: 'Booster Épique',
      accentColor: '#d97706'
    });
  }

  // Mélange aléatoire (shuffle) pour émuler une vraie boîte scellée
  for (let i = packs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [packs[i], packs[j]] = [packs[j], packs[i]];
    packs[i].boxIndex = i + 1;
    packs[j].boxIndex = j + 1;
  }

  return {
    packs,
    summary: {
      total: 24,
      commonCount,
      rareCount,
      epicCount
    }
  };
}
