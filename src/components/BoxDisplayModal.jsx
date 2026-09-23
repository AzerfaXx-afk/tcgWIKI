import React, { useState, useMemo } from 'react';
import { 
  X, 
  Sparkles, 
  Package, 
  Crown, 
  Check, 
  Layers, 
  ShieldCheck, 
  Flame, 
  ArrowRight,
  Zap,
  Gem
} from 'lucide-react';
import { generateBoxPackComposition, drawBoosterCards } from '../services/boosterService';
import CardSlot from './CardSlot';
import BoosterModal from './BoosterModal';
import './BoxDisplayModal.css';

export default function BoxDisplayModal({ box, cardsPool, onClose, onCardsCollected }) {
  // Étapes: 'sealed' -> 'open_grid' -> 'burst_summary'
  const [step, setStep] = useState('sealed');
  const [openedPacksCount, setOpenedPacksCount] = useState(0);
  const [allCollectedCards, setAllCollectedCards] = useState([]);
  const [activeSinglePack, setActiveSinglePack] = useState(null);
  const [openedIndices, setOpenedIndices] = useState(new Set());

  // Génération déterministe de la composition des 24 boosters
  // Règle : Max 2 Épiques, Max 8 Rares
  const boxData = useMemo(() => {
    return generateBoxPackComposition();
  }, []);

  const { packs, summary } = boxData;

  // Déceller la boîte
  const handleUnsealBox = () => {
    setStep('open_grid');
  };

  // Ouverture d'un booster individuel
  const handleOpenSingleBooster = (packItem) => {
    if (openedIndices.has(packItem.boxIndex)) return;
    setActiveSinglePack(packItem);
  };

  // Callback quand un booster individuel a fini d'être ouvert
  const handleSinglePackFinished = (pulledCards) => {
    if (!activeSinglePack) return;
    
    setOpenedIndices(prev => new Set(prev).add(activeSinglePack.boxIndex));
    setAllCollectedCards(prev => [...prev, ...pulledCards]);
    setOpenedPacksCount(prev => prev + 1);
    setActiveSinglePack(null);

    // Si c'était le dernier booster ouvert
    if (openedIndices.size + 1 >= 24) {
      setTimeout(() => {
        setStep('burst_summary');
      }, 500);
    }
  };

  // Déballage Rapide en Rafale des 24 Boosters (120 Cartes)
  const handleQuickOpenAll = () => {
    const allCards = [];
    packs.forEach(packItem => {
      const cards = drawBoosterCards(packItem.type, cardsPool);
      allCards.push(...cards);
    });

    setAllCollectedCards(allCards);
    setOpenedIndices(new Set(packs.map(p => p.boxIndex)));
    setOpenedPacksCount(24);
    setStep('burst_summary');
  };

  const handleFinishAll = () => {
    if (onCardsCollected) {
      onCardsCollected(allCollectedCards);
    }
    onClose();
  };

  // Filtrer les hits majeurs pour le récapitulatif
  const majorHits = useMemo(() => {
    const hits = allCollectedCards.filter(c => 
      c.rarity === 'U' || c.rarity === 'L' || c.rarity === 'D' || c.rarity === 'H'
    );
    // Trier par rareté décroissante
    const POWER = { 'U': 6, 'L': 5, 'D': 4, 'H': 3, 'R': 2, 'C': 1 };
    return hits.sort((a, b) => (POWER[b.rarity] || 0) - (POWER[a.rarity] || 0));
  }, [allCollectedCards]);

  return (
    <div className="box-modal-backdrop" onClick={onClose}>
      <div className="box-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Bouton Fermer */}
        <button className="neu-button box-close-btn" onClick={onClose} aria-label="Fermer">
          <X size={15} />
        </button>

        {/* =========================================================
            PHASE 1 : COFFRET SCELLÉ D'ORIGINE
            ========================================================= */}
        {step === 'sealed' && (
          <div className="box-sealed-stage">
            <div className="box-header-badge">
              <span className="box-pre-tag">COFFRET DISPLAY OFFICIEL</span>
              <h2 className="box-title">DISPLAY MAÎTRE (24 PAQUETS)</h2>
              <span className="box-sub">Édition Scellée • 120 Cartes Certifiées</span>
            </div>

            {/* Visuel 3D Boîte Prestige */}
            <div className="real-display-box-3d" onClick={handleUnsealBox}>
              <div className="box-lid-band">
                <ShieldCheck size={18} className="box-shield-svg" />
                <span>SCELLÉ D'INVIOLABILITÉ</span>
              </div>
              
              <div className="box-body-crest">
                <span className="crest-mini">ARCHIVUM WIKICOLLECT</span>
                <h3 className="crest-logo">DISPLAY BOX</h3>
                <span className="crest-count">24 BOOSTERS DE 5 CARTES</span>
              </div>

              <div className="box-bottom-guarantee">
                <span>COMPOSITION : 14-20 COMMUNS • 4-8 RARES • JUSQU'À 2 ÉPIQUES</span>
              </div>
            </div>

            <button className="neu-button box-action-big-btn" onClick={handleUnsealBox}>
              <Sparkles size={16} className="sparkle-gold" />
              <span>DÉCELLER LE COFFRET (24 BOOSTERS)</span>
            </button>
          </div>
        )}

        {/* =========================================================
            PHASE 2 : GRILLE DES 24 BOOSTERS DÉBOÎTÉS
            ========================================================= */}
        {step === 'open_grid' && (
          <div className="box-opened-grid-stage">
            <div className="box-shelf-header">
              <div className="shelf-title-wrap">
                <Layers size={14} className="shelf-icon" />
                <h2 className="shelf-title">BOÎTE OUVERTE ({openedIndices.size}/24)</h2>
              </div>
              
              <div className="shelf-pills-row">
                <span className="shelf-pill pill-common">{summary.commonCount} Communs</span>
                <span className="shelf-pill pill-rare">{summary.rareCount} Rares</span>
                <span className="shelf-pill pill-epic">{summary.epicCount} Épiques</span>
              </div>
            </div>

            {/* Rack des 24 boosters présentés comme en boutique */}
            <div className="box-boosters-rack-grid">
              {packs.map((packItem) => {
                const isOpened = openedIndices.has(packItem.boxIndex);
                return (
                  <div
                    key={`box-pack-${packItem.boxIndex}`}
                    className={`rack-booster-slot theme-${packItem.type} ${isOpened ? 'is-opened' : ''}`}
                    onClick={() => handleOpenSingleBooster(packItem)}
                    title={`Booster #${packItem.boxIndex} : ${packItem.name}`}
                  >
                    <div className="rack-booster-crimp" />
                    <div className="rack-booster-body">
                      <span className="rack-booster-num">#{packItem.boxIndex}</span>
                      <span className="rack-booster-type">{packItem.type.toUpperCase()}</span>
                    </div>
                    {isOpened && (
                      <div className="rack-booster-opened-overlay">
                        <Check size={12} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Boutons d'action rapides */}
            <div className="shelf-actions-footer">
              <button 
                className="neu-button burst-open-btn" 
                onClick={handleQuickOpenAll}
              >
                <Zap size={15} />
                <span>TOUT OUVRIR EN RAFALE (24 BOOSTERS)</span>
              </button>
              <span className="shelf-hint-text">
                Ou cliquez sur un paquet individuel ci-dessus pour le déchirer manuellement.
              </span>
            </div>
          </div>
        )}

        {/* =========================================================
            PHASE 3 : RÉCAPITULATIF DES HITS DU COFFRET (120 CARTES)
            ========================================================= */}
        {step === 'burst_summary' && (
          <div className="box-summary-stage">
            <div className="summary-banner-box">
              <Crown size={22} className="crown-gold-svg" />
              <h2>COFFRET INTÉGRALEMENT DÉBALLÉ !</h2>
              <span className="summary-cards-count">
                <strong>{allCollectedCards.length}</strong> CARTES COLLECTÉES SUR LES 24 BOOSTERS
              </span>
            </div>

            <div className="summary-hits-section">
              <div className="hits-title-row">
                <Gem size={13} className="gem-svg" />
                <span className="hits-title">LES MEILLEURS HITS DU COFFRET ({majorHits.length})</span>
              </div>

              <div className="major-hits-scroll-grid">
                {majorHits.slice(0, 12).map((card, idx) => (
                  <div key={`box-hit-${card.id}-${idx}`} className="box-hit-card-wrapper">
                    <CardSlot card={card} size="mini" layout="standard" />
                  </div>
                ))}
              </div>
            </div>

            <button className="neu-button save-all-box-btn" onClick={handleFinishAll}>
              <Check size={16} />
              <span>AJOUTER LES {allCollectedCards.length} CARTES AU CLASSEUR</span>
            </button>
          </div>
        )}

      </div>

      {/* Modal d'ouverture d'un booster unitaire issu de la boîte */}
      {activeSinglePack && (
        <BoosterModal
          pack={activeSinglePack}
          cardsPool={cardsPool}
          onClose={() => setActiveSinglePack(null)}
          onCardsCollected={handleSinglePackFinished}
        />
      )}
    </div>
  );
}
