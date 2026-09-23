import React, { useState } from 'react';
import { Lock, Swords, Shield, Gem, Sparkles } from 'lucide-react';
import './CardSlot.css';

/**
 * CardSlot : Affichage uniforme Awwwards d'une carte de collection TCG
 * Toutes les cartes ont rigoureusement la MÊME TAILLE et les MÊMES PROPORTIONS.
 * La rareté s'exprime par les reflets holographiques, les bordures métallisées
 * et l'aura lumineuse.
 */
export default function CardSlot({ card, onClick, size = "normal" }) {
  const [imageError, setImageError] = useState(false);

  if (!card) return null;

  const isLocked = card.locked;
  const rarity = (card.rarity || 'C').toUpperCase();
  const aura = card.stats?.aura || 4;
  const attack = card.stats?.attack || 80;
  const defense = card.stats?.defense || 75;
  const objectPosition = card.cropPosition || '50% 12%';
  const displayId = String(card.id || '001').padStart(3, '0');

  // Raretés avec reflets holographiques
  const hasHolo = !isLocked && (rarity === 'U' || rarity === 'L' || rarity === 'D' || rarity === 'H' || rarity === 'R');

  return (
    <div 
      className={`real-tcg-card ${size} ${isLocked ? 'is-locked' : 'is-unlocked'} rarity-type-${rarity.toLowerCase()}`}
      onClick={() => onClick && onClick(card)}
      title={`${card.name} (${card.rarityLabel || rarity}) - ${displayId}/500`}
    >
      {/* Effet holographique irisé */}
      {hasHolo && (
        <div className={`card-holo-foil-shimmer ${rarity === 'U' ? 'ultra-shimmer' : rarity === 'D' ? 'diamond-shimmer' : ''}`} />
      )}

      <div className="card-inner-frame">
        {/* 1. Micro-barre supérieure : Aura & Badge Rareté */}
        <div className="card-mini-top-bar">
          <div className="card-aura-gem" title={`Aura : ${aura}`}>
            <Gem size={7.5} className="aura-svg-gem" />
            <span className="aura-num">{aura}</span>
          </div>

          <div className="card-top-center-id">
            <span className="card-slot-id-label">{displayId}</span>
          </div>

          <div className={`card-rarity-pill pill-rarity-${rarity.toLowerCase()}`}>
            {rarity}
          </div>
        </div>

        {/* 2. Cadre d'Artwork / Portrait */}
        <div className="card-artwork-frame">
          {!isLocked && card.image && !imageError ? (
            <img 
              src={card.image} 
              alt={card.name} 
              className="card-artwork-photo" 
              loading="lazy"
              referrerPolicy="no-referrer"
              style={{ objectPosition }}
              onError={() => setImageError(true)}
            />
          ) : isLocked ? (
            <div className="card-locked-state">
              <div className="locked-icon-bubble">
                <Lock size={11} className="locked-icon" />
              </div>
              <span className="locked-target-name" title={card.name}>{card.name}</span>
            </div>
          ) : (
            <div className="card-fallback-art">
              <span className="fallback-monogram">{card.name?.charAt(0) || 'W'}</span>
            </div>
          )}
        </div>

        {/* 3. Nom & Titre */}
        <div className="card-identity-ribbon">
          <h3 className="card-name-title" title={card.name}>
            {card.name}
          </h3>
        </div>

        {/* 4. Barre Inférieure : Stats de Combat & Numérotation */}
        <div className="card-bottom-bar">
          {!isLocked ? (
            <>
              <div className="card-micro-stats">
                <span className="micro-stat atq" title={`Attaque : ${attack}`}>
                  <Swords size={7} /> {attack}
                </span>
                <span className="micro-stat def" title={`Défense : ${defense}`}>
                  <Shield size={7} /> {defense}
                </span>
              </div>
              <span className="card-edition-serial">{displayId}/500</span>
            </>
          ) : (
            <div className="card-locked-footer">
              <span className="locked-rarity-hint">{card.rarityLabel || rarity}</span>
              <span className="card-edition-serial">{displayId}/500</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
