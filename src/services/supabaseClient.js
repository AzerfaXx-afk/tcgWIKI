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
 * Récupère toutes les cartes enregistrées sur Supabase
 */
export async function fetchCardsFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('cards')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.warn('[Supabase] Erreur lors de la récupération des cartes:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('[Supabase] Exception réseau/client:', err.message);
    return null;
  }
}

/**
 * Synchronise les cartes du catalogue local vers Supabase (Upsert par id)
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
      rarity_label: c.rarityLabel || 'Commun',
      variant: c.variant || 'satin_base',
      image: c.image,
      description: c.description || '',
      crop_position: c.cropPosition || '50% 12%',
      stats: c.stats || {},
      aura: c.stats?.aura || (c.rarity === 'U' || c.rarity === 'L' ? 9 : 5),
      serial_number: c.serialNumber || `${String(c.id).padStart(3, '0')}/500`
    }));

    // Insérer par lots de 50 pour éviter les limites de payload HTTP
    const chunkSize = 50;
    let inserted = 0;

    for (let i = 0; i < rows.length; i += chunkSize) {
      const chunk = rows.slice(i, i + chunkSize);
      const { data, error } = await supabase
        .from('cards')
        .upsert(chunk, { onConflict: 'id' });

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
