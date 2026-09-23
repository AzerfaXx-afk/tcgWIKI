import { createClient } from '@supabase/supabase-js';
import { MASTER_CATALOG } from '../src/data/cardsCatalog.js';

const SUPABASE_URL = 'https://knxecrhgpfatcdblzprg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_yxucAHYJsWPVrK96zXwsTQ_yAHQBe5z';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function seed() {
  console.log(`[Seed] Début de l'envoi de ${MASTER_CATALOG.length} cartes vers Supabase...`);

  const rows = MASTER_CATALOG.map(c => ({
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

  const chunkSize = 50;
  let totalInserted = 0;

  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    const { data, error } = await supabase
      .from('cards')
      .upsert(chunk, { onConflict: 'id' });

    if (error) {
      console.error(`[Seed] Erreur sur le lot ${i / chunkSize + 1}:`, error.message);
      process.exit(1);
    }
    totalInserted += chunk.length;
    console.log(`[Seed] Lot ${i / chunkSize + 1} synchronisé (${totalInserted}/${rows.length} cartes)`);
  }

  console.log(`[Seed] Succès total ! ${totalInserted} cartes sont synchronisées sur Supabase.`);
}

seed().catch(err => {
  console.error('[Seed] Exception:', err);
  process.exit(1);
});
