import React from 'react';
import { X, ShieldCheck, Scale, Award, Sparkles, Gem, Layers } from 'lucide-react';
import './DropRatesModal.css';

export default function DropRatesModal({ onClose }) {
  return (
    <div className="drop-rates-backdrop" onClick={onClose}>
      <div className="drop-rates-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="drop-rates-header">
          <div className="drop-rates-title-badge">
            <Scale size={16} className="scale-icon" />
            <h2>PROBABILITÉS DE TIRAGE OFFICIELLES</h2>
          </div>
          <button className="neu-button modal-close-btn" onClick={onClose} aria-label="Fermer">
            <X size={16} />
          </button>
        </div>

        <p className="drop-rates-subtitle">
          Conformément aux normes européennes et aux standards du jeu équitable, tous les tirages sont certifiés sans avantage pay-to-win.
        </p>

        {/* Grille des 3 Boosters et leurs Probabilités Certifiées (5 Cartes par Booster) */}
        <div className="packs-rates-list">
          
          {/* Booster 1: Commun (1h) */}
          <div className="pack-rate-card pack-common">
            <div className="pack-rate-badge">
              <span className="pack-type-tag">BOOSTER COMMUN (TOUTES LES 1H)</span>
              <span className="pack-price-tag">50 W-Tokens ou Gratuit</span>
            </div>
            <div className="rates-table">
              <div className="rate-row">
                <span className="rarity-name tier-c">Cartes 1 à 3</span>
                <span className="rate-percent">90% C • 10% R</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-r">Carte 4 (Semi-Hit)</span>
                <span className="rate-percent">72% R • 22% H • 5% D • 0.9% L • 0.1% U</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-u">Carte 5 (LE HIT)</span>
                <span className="rate-percent">55% R • 28% H • 12% D • 4.5% L • 0.5% Ultra</span>
              </div>
            </div>
          </div>

          {/* Booster 2: Rare (5h - 0% Commune) */}
          <div className="pack-rate-card pack-heritage">
            <div className="pack-rate-badge">
              <span className="pack-type-tag">BOOSTER RARE (TOUTES LES 5H)</span>
              <span className="pack-price-tag">200 W-Tokens • 0% COMMUNE !</span>
            </div>
            <div className="rates-table">
              <div className="rate-row">
                <span className="rarity-name tier-r">Cartes 1 à 3</span>
                <span className="rate-percent">84% R • 16% H (0% Commune)</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-d">Carte 4 (Semi-Hit)</span>
                <span className="rate-percent">45% R • 38% H • 13% D • 3.5% L • 0.5% U</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-u">Carte 5 (LE HIT)</span>
                <span className="rate-percent">45% H • 35% D • 17% L • 3.0% Ultra</span>
              </div>
            </div>
          </div>

          {/* Booster 3: Épique (48h - 0% Commune, 0% Rare) */}
          <div className="pack-rate-card pack-legendary">
            <div className="pack-rate-badge">
              <span className="pack-type-tag">BOOSTER ÉPIQUE (TOUTES LES 48H)</span>
              <span className="pack-price-tag">800 W-Tokens • 0% C & 0% R !</span>
            </div>
            <div className="rates-table">
              <div className="rate-row">
                <span className="rarity-name tier-h">Cartes 1 à 3</span>
                <span className="rate-percent">68% H • 32% D (0% C & 0% R)</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-l">Carte 4 (Semi-Hit)</span>
                <span className="rate-percent">30% H • 45% D • 20% L • 5.0% U</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-u">Carte 5 (LE HIT MAJEUR)</span>
                <span className="rate-percent">30% D • 50% L • 20% Ultra Chase !</span>
              </div>
            </div>
          </div>

          {/* Coffret 4: Display 24 Boosters */}
          <div className="pack-rate-card pack-box">
            <div className="pack-rate-badge">
              <span className="pack-type-tag">COFFRET DISPLAY (24 BOOSTERS SCELLÉS)</span>
              <span className="pack-price-tag">1 800 W-Tokens</span>
            </div>
            <div className="rates-table">
              <div className="rate-row">
                <span className="rarity-name tier-c">Boosters Communs</span>
                <span className="rate-percent">14 à 20 Paquets (5 Cartes ch.)</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-r">Boosters Rares</span>
                <span className="rate-percent">4 à 8 Paquets (0% Commune, Max 8)</span>
              </div>
              <div className="rate-row">
                <span className="rarity-name tier-u">Boosters Épiques</span>
                <span className="rate-percent">0 à 2 Paquets (Prestige, Max 2)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Garantie de Malchance (Pity Timer) */}
        <div className="pity-timer-banner">
          <ShieldCheck size={16} className="pity-icon" />
          <div className="pity-text">
            <strong>Garantie Anti-Malchance (Pity Timer) :</strong>
            <span> Si vous ouvrez 30 boosters sans carte Légendaire, la 31e carte est automatiquement garantie de rang Légendaire ou supérieur.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
