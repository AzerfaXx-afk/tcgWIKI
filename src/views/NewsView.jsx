import React, { useState } from 'react';
import { Calendar, Award, ArrowUpRight, Flame, Users, Sparkles } from 'lucide-react';
import './NewsView.css';

const NEWS_CATEGORIES = [
  "TOUT",
  "ÉVÉNEMENTS",
  "DÉCOUVERTES",
  "NOUVELLES CARTES",
  "COMMUNAUTÉ"
];

export default function NewsView({ user }) {
  const [activeCategory, setActiveCategory] = useState("TOUT");
  const [marieImgErr, setMarieImgErr] = useState(false);

  return (
    <div className="news-view-container">
      {/* Header with Balance */}
      <div className="news-header-row">
        <div>
          <h1 className="news-title">ACTUALITÉS & ÉVÉNEMENTS</h1>
        </div>
        <div className="news-balance-chip">
          <span className="chip-label">VOTRE SOLDE:</span>
          <span className="chip-value"><strong>{user.tokens?.toLocaleString()}</strong> W Tokens</span>
        </div>
      </div>

      {/* Filter Categories Pills */}
      <div className="pills-scroll-row">
        {NEWS_CATEGORIES.map(category => (
          <button 
            key={category}
            className={`neu-pill ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid (2 Columns) */}
      <div className="news-cards-grid">
        {/* Card 1: Sommet Géopolitique */}
        <div className="neu-card news-item-card featured-event-card">
          <div className="news-media-frame">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/500px-Donald_Trump_official_portrait.jpg" 
              alt="Sommet Géopolitique Mondial" 
              className="news-media-img"
              loading="lazy"
            />
          </div>
          <div className="news-content-body">
            <h3 className="news-card-title">Sommet Géopolitique : Tirage Exclusif Trump vs Macron !</h3>
            <p className="news-card-desc">
              Obtenez la carte Légendaire 'Donald Trump' et débloquez le bonus d'Aura Diplomatique.
            </p>
            <div className="news-card-footer">
              <span className="news-date-text">ÉVÉNEMENT ACTIF</span>
              <button className="neu-button news-action-btn">
                <span>DÉCOUVRIR</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Le Mossad Heritage */}
        <div className="neu-card news-item-card heritage-spotlight-card">
          <div className="heritage-portrait-frame">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Emblem_of_the_Mossad.svg/330px-Emblem_of_the_Mossad.svg.png" 
              alt="Le Mossad" 
              className="heritage-portrait-img"
              style={{ objectFit: 'contain', padding: '4px' }}
              referrerPolicy="no-referrer"
            />
            <div className="heritage-pill-badge">H</div>
          </div>
          <div className="news-content-body">
            <h3 className="news-card-title">Carte Héritage : Le Mossad</h3>
            <p className="news-card-desc">
              L'agence de renseignement d'élite dotée d'une Défense tactique maximale de 145.
            </p>
          </div>
        </div>

        {/* Card 3: Cristiano Ronaldo vs Messi */}
        <div className="neu-card news-item-card">
          <div className="news-media-frame">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/500px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" 
              alt="Cristiano Ronaldo" 
              className="news-media-img"
              loading="lazy"
            />
          </div>
          <div className="news-content-body">
            <h3 className="news-card-title">Duel des GOATs : Ronaldo & Messi !</h3>
            <p className="news-card-desc">
              Les deux monstres sacrés du football réunis dans la Série 1 avec 150 d'Attaque pure.
            </p>
          </div>
        </div>

        {/* Card 4: Community Feed & Token Box */}
        <div className="neu-card news-item-card community-panel-card">
          <ul className="community-bullet-list">
            <li>• Tournoi des Penseurs & Décideurs</li>
            <li>• Votez pour la Prochaine Personnalité !</li>
            <li>• Guide Stratégique: Synergies d'Aura des Titans</li>
          </ul>

          <div className="news-inner-token-box">
            <span className="inner-token-label">VOTRE SOLDE:</span>
            <span className="inner-token-amount"><strong>{user.tokens?.toLocaleString()}</strong></span>
            <span className="inner-token-unit">W Tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
}
