import React, { useState, useMemo } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  ChevronRight, 
  RotateCw, 
  Gem, 
  Flame, 
  Crown, 
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  drawBoosterCards, 
  recordBoosterClaim, 
  BOOSTER_CONFIGS 
} from '../services/boosterService';
import CardSlot from './CardSlot';
import './BoosterModal.css';

export default function BoosterModal({ pack, cardsPool, onClose, onCardsCollected }) {
  // Étapes: 'pack' (scellé) -> 'tearing' (déchirure animée) -> 'revealing' (carte par carte) -> 'summary' (les 5 cartes réunies)
  const [step, setStep] = useState('pack');
  const [currentRevealIdx, setCurrentRevealIdx] = useState(0);
  const [isHitRevealed, setIsHitRevealed] = useState(false);
  const [hitClimaxing, setHitClimaxing] = useState(false);

  // Configuration du pack ouvert
  const packConfig = useMemo(() => {
    const pType = pack?.type || 'common';
    return BOOSTER_CONFIGS[pType] || {
      name: pack?.name || 'Booster',
      title: pack?.title || 'Booster wikiCollect',
      subtitle: pack?.subtitle || 'Édition Officielle',
      type: pType,
      tag: '5 Cartes Certifiées',
      badgeText: 'CERTIFIÉ'
    };
  }, [pack]);

  // Tirage officiel de 5 cartes certifiées selon les règles de drop strictes (Pokémon TCG style)
  // - Commun : Ultra possible mais infime (chance difficile)
  // - Rare : 0% Commune !
  // - Épique : 0% Commune, 0% Rare !
  // Les 5 cartes sont triées de la moins rare à la plus rare (LE HIT en 5e position !)
  const pulledCards = useMemo(() => {
    if (!cardsPool || cardsPool.length === 0) return [];
    return drawBoosterCards(pack?.type || 'common', cardsPool);
  }, [pack, cardsPool]);

  if (!pack) return null;

  // Déclencher l'animation de déchirure du scellé
  const handleTearPack = () => {
    if (step !== 'pack') return;
    setStep('tearing');
    
    // Enregistre l'ouverture dans le stockage persistant
    recordBoosterClaim(pack?.type || 'common');

    // Déchirure du scellé et passage au déballage carte par carte
    setTimeout(() => {
      setStep('revealing');
      setCurrentRevealIdx(0);
    }, 1300);
  };

  // Passer à la carte suivante ou déclencher l'animation Climax pour le HIT final
  const handleNextCard = () => {
    const nextIdx = currentRevealIdx + 1;
    if (nextIdx < pulledCards.length) {
      // Si la carte suivante est la dernière (5e carte) et est de haute rareté (H, D, L, U)
      const nextCard = pulledCards[nextIdx];
      const isHighTier = nextCard.rarity === 'H' || nextCard.rarity === 'D' || nextCard.rarity === 'L' || nextCard.rarity === 'U';

      if (nextIdx === pulledCards.length - 1 && isHighTier) {
        setHitClimaxing(true);
        setTimeout(() => {
          setHitClimaxing(false);
          setIsHitRevealed(true);
          setCurrentRevealIdx(nextIdx);
        }, 1100);
      } else {
        setCurrentRevealIdx(nextIdx);
      }
    } else {
      // Toutes les 5 cartes sont révélées -> Passage au récapitulatif
      setStep('summary');
    }
  };

  const handleFinish = () => {
    if (onCardsCollected) {
      onCardsCollected(pulledCards);
    }
    onClose();
  };

  const currentCard = pulledCards[currentRevealIdx];
  const isFinalCard = currentRevealIdx === pulledCards.length - 1;
  const isLegendaryHit = currentCard && (currentCard.rarity === 'L' || currentCard.rarity === 'U' || currentCard.rarity === 'D' || currentCard.rarity === 'H');

  return (
    <div className={`booster-modal-backdrop ${hitClimaxing ? 'is-climaxing-shake' : ''}`} onClick={onClose}>
      <div className="booster-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Bouton Fermer */}
        <button className="neu-button booster-close-btn" onClick={onClose} aria-label="Fermer">
          <X size={15} />
        </button>

        {/* =========================================================
            PHASE 1 & 2 : SCELLÉ MÉTALLIQUE & ANIMATION DE DÉCHIRURE
            ========================================================= */}
        {(step === 'pack' || step === 'tearing') && (
          <div className="booster-pack-stage">
            <div className="booster-header-badge">
              <span className="booster-pack-count">
                {packConfig.badgeText} • 5 CARTES
              </span>
              <h2 className="booster-stage-title">{packConfig.title || pack.title || pack.name}</h2>
              <span className="booster-stage-subtitle">{packConfig.subtitle}</span>
            </div>

            {/* Booster Métallique Foiled Réel Awwwards */}
            <div 
              className={`real-booster-pack pack-theme-${pack.type || 'common'} ${step === 'tearing' ? 'is-tearing-foil' : ''}`}
              onClick={handleTearPack}
            >
              {/* Crimp dentelé du haut qui se déchire */}
              <div className="booster-crimp-strip crimp-top">
                <div className="crimp-teeth" />
                <div className="crimp-tear-indicator">
                  <span>DÉCHIRER LE SCELLÉ</span>
                </div>
              </div>

              {/* Corps du paquet métallisé */}
              <div className="booster-body-foil">
                <div className="booster-light-scan" />
                
                <div className="booster-foil-seal">
                  <div className="seal-crest">
                    <span className="crest-brand-top">ARCHIVUM UNIVERSELLE</span>
                    <h3 className="crest-brand-logo">wikiCollect</h3>
                    <span className="crest-brand-sub">{packConfig.name?.toUpperCase() || 'ÉDITION OFFICIELLE'}</span>
                  </div>
                </div>

                <div className="booster-pack-footer-meta">
                  <span className="meta-series">{packConfig.tag?.toUpperCase() || 'SÉRIE 1'} • 5 CARTES</span>
                  <span className="meta-odds">{pack.type === 'epic' ? '0% COMMUNE • 0% RARE' : pack.type === 'rare' ? '0% COMMUNE GARANTI' : 'DROP CERTIFIÉ • STYLE TCG'}</span>
                </div>
              </div>

              {/* Crimp dentelé du bas */}
              <div className="booster-crimp-strip crimp-bottom">
                <div className="crimp-teeth" />
              </div>
            </div>

            {/* Bouton d'action */}
            <button 
              className="neu-button booster-action-big-btn"
              onClick={handleTearPack}
              disabled={step === 'tearing'}
            >
              <Sparkles size={16} className="btn-sparkle" />
              <span>{step === 'tearing' ? 'DÉCHIRURE DU SCELLÉ EN COURS...' : 'DÉCHIRER LE BOOSTER (5 CARTES)'}</span>
            </button>
          </div>
        )}

        {/* =========================================================
            PHASE 3 : RÉVÉLATION CARTE PAR CARTE (LE HIT EN DERNIER)
            ========================================================= */}
        {step === 'revealing' && currentCard && (
          <div className="booster-revealing-stage">
            <div className="reveal-progress-strip">
              <span className="reveal-counter">CARTE {currentRevealIdx + 1} / 5</span>
              <span className={`reveal-status-pill ${isFinalCard ? 'pill-hit' : ''}`}>
                {isFinalCard ? 'LE HIT DU BOOSTER' : 'DÉCOUVERTE'}
              </span>
            </div>

            {/* Scène de la carte avec effets Climax si Rareté Haute */}
            <div className={`card-reveal-box ${hitClimaxing ? 'is-climax-pulse' : ''} ${isLegendaryHit && isFinalCard ? 'is-legendary-aura' : ''}`}>
              {/* Rayons lumineux et halo doré pour le Hit */}
              {isLegendaryHit && isFinalCard && (
                <div className="hit-cosmic-rays-burst" />
              )}

              <div className="card-stage-display">
                <CardSlot card={currentCard} size="normal" />
              </div>

              {/* Bannière de Fanfare pour le Hit */}
              {isFinalCard && (
                <div className={`hit-announcement-ribbon ribbon-${currentCard.rarity?.toLowerCase() || 'r'}`}>
                  {currentCard.rarity === 'U' ? (
                    <>
                      <Crown size={14} className="crown-svg pulse-gold" />
                      <span>ULTRA SECRET CHASE DÉCROCHÉE !</span>
                    </>
                  ) : currentCard.rarity === 'L' ? (
                    <>
                      <Crown size={14} className="crown-svg" />
                      <span>LÉGENDAIRE PUR OR OBTENU !</span>
                    </>
                  ) : currentCard.rarity === 'D' ? (
                    <>
                      <Gem size={14} className="gem-svg" />
                      <span>DIAMOND SHINE CERTIFIÉ !</span>
                    </>
                  ) : currentCard.rarity === 'H' ? (
                    <>
                      <Sparkles size={14} className="sparkle-svg" />
                      <span>HÉRITAGE D'HISTOIRE OBTENU !</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} className="sparkle-svg" />
                      <span>{currentCard.rarityLabel?.toUpperCase() || 'RARE'} CERTIFIÉ !</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Bouton Suivant / Révéler le Hit */}
            <button className="neu-button next-card-btn" onClick={handleNextCard}>
              <span>{isFinalCard ? 'VOIR LE RÉCAPITULATIF (5/5)' : 'RÉVÉLER CARTE SUIVANTE'}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* =========================================================
            PHASE 4 : RÉCAPITULATIF DES 5 CARTES & RANGEMENT CLASSEUR
            ========================================================= */}
        {step === 'summary' && (
          <div className="booster-summary-stage">
            <div className="summary-header">
              <ShieldCheck size={20} className="summary-icon-check" />
              <h2>5 CARTES OBTENUES !</h2>
            </div>
            <p className="summary-desc">
              Les cartes ont été automatiquement insérées à leurs numéros fixes dans votre classeur.
            </p>

            {/* Grille des 5 cartes réunies */}
            <div className="summary-cards-grid">
              {pulledCards.map((card, idx) => (
                <div key={`summary-card-${card.id}-${idx}`} className="summary-card-item">
                  <CardSlot card={card} size="normal" />
                  <div className="summary-slot-tag">
                    <span>Emplacement #{card.id}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton de clôture */}
            <button className="neu-button store-all-btn" onClick={handleFinish}>
              <Check size={16} />
              <span>RANGER DANS MON CLASSEUR</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
