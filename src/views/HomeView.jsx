import React, { useState, useEffect } from 'react';
import CardSlot from '../components/CardSlot';
import { 
  Clock, 
  Sparkles, 
  Package, 
  Crown, 
  Trophy, 
  ArrowRight, 
  Flame, 
  Gem, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { 
  BOOSTER_CONFIGS, 
  getBoosterCooldowns, 
  recordBoosterClaim 
} from '../services/boosterService';
import './HomeView.css';

// Raretés par ordre de valeur pour sélectionner les Top 3 cartes
const RARITY_WEIGHT = {
  'U': 8,
  'L': 7,
  'H': 6,
  'D': 5,
  'G': 4,
  'S': 3,
  'R': 2,
  'C': 1
};

export default function HomeView({ 
  user, 
  cards, 
  onSelectCard, 
  onOpenBoosterQuick, 
  onNavigate 
}) {
  // Aperçu de 6 cartes de la collection actuelle
  const collectionCards = cards.slice(0, 6);

  // Top 3 des cartes les plus prestigieuses débloquées par le joueur
  const topCards = [...cards]
    .filter(c => !c.locked)
    .sort((a, b) => (RARITY_WEIGHT[b.rarity] || 0) - (RARITY_WEIGHT[a.rarity] || 0))
    .slice(0, 3);

  // Timers réels des 3 Boosters (1h, 5h, 48h)
  const [cooldowns, setCooldowns] = useState(() => getBoosterCooldowns());

  useEffect(() => {
    const timer = setInterval(() => {
      setCooldowns(getBoosterCooldowns());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBoosterClick = (type) => {
    recordBoosterClaim(type);
    setCooldowns(getBoosterCooldowns());
    if (onOpenBoosterQuick) {
      onOpenBoosterQuick(type);
    }
  };

  return (
    <div className="home-view-container home-no-scroll">
      
      {/* 1. Salutation Joueur & Titre Officiel */}
      <div className="home-greeting-row">
        <div className="greeting-text-wrap">
          <span className="greeting-pretitle">PORTAIL DU COLLECTIONNEUR</span>
          <h1 className="home-greeting-title">
            BONJOUR, {user.name?.split(' ')[0]?.toUpperCase() || 'NATHAN'}
          </h1>
        </div>
        <div className="home-user-rank-pill">
          <Crown size={10} className="rank-crown-icon" />
          <span>MEMBRE OFFICIEL</span>
        </div>
      </div>

      {/* 2. Tableau de Bord : Votre Collection (Gauche) & Boosters à Réclamer (Droite) */}
      <div className="home-dashboard-grid">
        
        {/* Colonne Gauche : Aperçu Collection */}
        <section className="neu-card home-collection-panel">
          <div className="panel-header-row">
            <div className="panel-title-with-badge">
              <h2 className="panel-title">VOTRE COLLECTION</h2>
              <span className="panel-count-pill">{cards.filter(c => !c.locked).length} débloquées</span>
            </div>
            <button 
              className="panel-more-btn" 
              onClick={() => onNavigate('collection')}
              title="Consulter tout le classeur"
            >
              <ArrowRight size={11} />
            </button>
          </div>
          
          <div className="home-mini-cards-grid">
            {collectionCards.map((card, idx) => (
              <div key={`home-mini-${card.id}-${idx}`} className="mini-card-slot-wrap">
                <CardSlot 
                  card={card} 
                  onClick={onSelectCard} 
                  size="mini" 
                  layout="standard"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Colonne Droite : Les 3 Boosters & Leurs Cooldowns (1h, 5h, 48h) */}
        <section className="neu-card home-booster-panel">
          <div className="panel-header-row">
            <h2 className="panel-title">OUVRIR UN BOOSTER</h2>
            <span className="booster-header-tag">5 CARTES</span>
          </div>
          
          <div className="booster-buttons-list">
            
            {/* 1. Booster Commun (1 Heure) */}
            <div 
              className={`neu-button home-booster-item-btn item-common ${cooldowns.common?.isReady ? 'is-ready' : ''}`}
              onClick={() => handleBoosterClick('common')}
              title="Booster Commun - 5 Cartes (Toutes les 1h)"
            >
              <div className="booster-item-left">
                <div className="booster-mini-badge icon-common">
                  <Package size={14} className="booster-pack-svg" />
                </div>
                <div className="booster-item-info">
                  <span className="booster-name">BOOSTER COMMUN</span>
                  <span className="booster-desc-sub">Toutes les 1h • Ultra possible</span>
                </div>
              </div>
              <div className="booster-timer-badge">
                {cooldowns.common?.isReady ? (
                  <span className="timer-ready-tag">PRÊT !</span>
                ) : (
                  <span className="timer-countdown-tag">{cooldowns.common?.formatted}</span>
                )}
              </div>
            </div>

            {/* 2. Booster Épique (48 Heures - 0% Commune, 0% Rare) */}
            <div 
              className={`neu-button home-booster-item-btn item-epic ${cooldowns.epic?.isReady ? 'is-ready' : ''}`}
              onClick={() => handleBoosterClick('epic')}
              title="Booster Épique - 5 Cartes de Prestige (Toutes les 48h, 0% Commune, 0% Rare)"
            >
              <div className="booster-item-left">
                <div className="booster-mini-badge icon-epic">
                  <Crown size={14} className="booster-pack-svg" />
                </div>
                <div className="booster-item-info">
                  <span className="booster-name">BOOSTER ÉPIQUE</span>
                  <span className="booster-desc-sub">Toutes les 48h • Prestige</span>
                </div>
              </div>
              <div className="booster-timer-badge">
                {cooldowns.epic?.isReady ? (
                  <span className="timer-ready-tag tag-epic">PRÊT !</span>
                ) : (
                  <span className="timer-countdown-tag">{cooldowns.epic?.formatted}</span>
                )}
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* 3. Section Vos Meilleurs (Top 3 Rares possédées) */}
      <section className="neu-card home-top-cards-panel">
        <div className="panel-header-row top-header-spaced">
          <div className="top-cards-title-badge">
            <Trophy size={13} className="trophy-gold-icon" />
            <h2 className="panel-title">VOS MEILLEURS (TOP 3)</h2>
          </div>
          <span className="top-cards-sub">Vos plus rares trophées</span>
        </div>

        <div className="home-top-cards-row">
          {topCards.map((card, idx) => (
            <div key={`top-${card.id}-${idx}`} className="top-card-wrapper">
              <div className={`top-rank-badge rank-${idx + 1}`}>
                #{idx + 1}
              </div>
              <CardSlot 
                card={card} 
                onClick={onSelectCard} 
                size="normal" 
                layout="standard"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Section Basse : Actu du Marché & Carnet Global */}
      <div className="home-bottom-grid">
        
        {/* Actu du Marché */}
        <section className="neu-card home-market-panel">
          <div className="market-header-row">
            <Flame size={11} className="market-flame-icon" />
            <h2 className="panel-title">ACTU DU MARCHÉ</h2>
          </div>
          <div className="market-ticker-feed">
            <div className="ticker-item">
              <span className="ticker-dot dot-red" />
              <p className="ticker-text">
                <strong>Sarah</strong> a tiré <span className="ticker-card-highlight">[NAPOLÉON]</span> !
              </p>
            </div>
            <div className="ticker-item">
              <span className="ticker-dot dot-blue" />
              <p className="ticker-text">
                <strong>Thomas</strong> a complété <span className="ticker-card-highlight">[SCIENCES]</span> !
              </p>
            </div>
          </div>
        </section>

        {/* Carnet Global */}
        <section className="neu-card home-gauge-panel">
          <h2 className="panel-title text-center">CARNET GLOBAL</h2>
          
          <div className="circular-gauge-wrapper">
            <svg className="gauge-svg" viewBox="0 0 140 70">
              <path
                d="M 15 65 A 55 55 0 0 1 125 65"
                fill="none"
                stroke="rgba(160, 175, 195, 0.3)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 15 65 A 55 55 0 0 1 125 65"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="7"
                strokeDasharray="180"
                strokeDashoffset="120"
                strokeLinecap="round"
              />
            </svg>
            <div className="gauge-center-content">
              <span className="gauge-sublabel">CARNET</span>
              <span className="gauge-numbers">
                <strong>{cards.filter(c => !c.locked).length}</strong> / {cards.length}
              </span>
            </div>
          </div>

          <div className="collection-value-footer">
            <span>VALEUR : <strong>{user.collectionValue?.toLocaleString() || '14 850'} PT</strong></span>
          </div>
        </section>

      </div>

    </div>
  );
}
