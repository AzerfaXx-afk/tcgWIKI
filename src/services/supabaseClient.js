import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://knxecrhgpfatcdblzprg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_yxucAHYJsWPVrK96zXwsTQ_yAHQBe5z';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

/**
 * Normalise un enregistrement Supabase en format de carte tcgWIKI
 */
function normalizeCard(row) {
  return {
    id: String(row.id).padStart(3, '0'),
    seriesId: row.series_id || 1,
    name: row.name,
    category: row.category || 'Panthéon',
    rarity: row.rarity || 'C',
    rarityLabel: row.rarity_label || 'Commune',
    variant: row.variant || 'standard',
    image: row.image,
    description: row.description || '',
    cropPosition: row.crop_position || 'center 20%',
    stats: {
      attack: row.stats?.attack || 70,
      defense: row.stats?.defense || 70,
      hp: row.stats?.hp || 70,
      speed: row.stats?.speed || 70,
      aura: row.aura || row.stats?.aura || 4500
    },
    aura: row.aura || row.stats?.aura || 4500,
    serialNumber: row.serial_number || `S01-${String(row.id).padStart(4, '0')}`
  };
}

/**
 * Récupère le nombre total de cartes dans Supabase
 */
export async function fetchCardsCount() {
  try {
    const { count, error } = await supabase
      .from('cards')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  } catch (err) {
    console.warn('[Supabase] Erreur fetchCardsCount:', err.message);
    return 0;
  }
}

/**
 * Récupère toutes les cartes de Supabase en parallèle par tranches de 1 000
 * Permet de charger des milliers de cartes sans être bloqué par la limite max-rows
 */
export async function fetchAllCardsFromSupabase(maxLimit = 15000) {
  try {
    const totalCount = await fetchCardsCount();
    const effectiveLimit = Math.min(totalCount > 0 ? totalCount : 8000, maxLimit);
    const BATCH_SIZE = 1000;
    const ranges = [];

    for (let offset = 0; offset < effectiveLimit; offset += BATCH_SIZE) {
      ranges.push({
        from: offset,
        to: Math.min(offset + BATCH_SIZE - 1, effectiveLimit - 1)
      });
    }

    const promises = ranges.map(async ({ from, to }) => {
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .order('id', { ascending: true })
        .range(from, to);

      if (error) {
        console.warn(`[Supabase] Erreur tranche ${from}-${to}:`, error.message);
        return [];
      }
      return data || [];
    });

    const results = await Promise.all(promises);
    const allRows = results.flat();
    return allRows.map(normalizeCard);
  } catch (err) {
    console.warn('[Supabase] Exception fetchAllCardsFromSupabase:', err.message);
    return null;
  }
}

/**
 * Récupère les cartes d'une série spécifique
 */
export async function fetchCardsBySeries(seriesId = 1) {
  try {
    const { data, error } = await supabase
      .from('cards')
      .select('*')
      .eq('series_id', seriesId)
      .order('id', { ascending: true })
      .limit(1000);

    if (error) throw error;
    return (data || []).map(normalizeCard);
  } catch (err) {
    console.warn(`[Supabase] Erreur fetchCardsBySeries(${seriesId}):`, err.message);
    return null;
  }
}

/**
 * Synchronise des cartes locales vers Supabase
 */
export async function syncCardsToSupabase(cards) {
  if (!cards || !cards.length) return { count: 0, error: null };

  try {
    const rows = cards.map(c => ({
      id: String(c.id).padStart(3, '0'),
      series_id: c.seriesId || 1,
      name: c.name,
      category: c.category || 'Panthéon',
      rarity: c.rarity || 'C',
      rarity_label: c.rarityLabel || 'Commune',
      variant: c.variant || 'standard',
      image: c.image,
      description: c.description || '',
      crop_position: c.cropPosition || 'center 20%',
      stats: c.stats || {},
      aura: c.stats?.aura || 5000,
      serial_number: c.serialNumber || `S01-${String(c.id).padStart(4, '0')}`
    }));

    const chunkSize = 200;
    let inserted = 0;

    for (let i = 0; i < rows.length; i += chunkSize) {
      const chunk = rows.slice(i, i + chunkSize);
      const { error } = await supabase
        .from('cards')
        .upsert(chunk, { onConflict: 'name', ignoreDuplicates: true });

      if (error) {
        console.error('[Supabase] Erreur lot upsert:', error.message);
        return { count: inserted, error };
      }
      inserted += chunk.length;
    }

    return { count: inserted, error: null };
  } catch (err) {
    console.error('[Supabase] Exception upsert:', err.message);
    return { count: 0, error: err };
  }
}
