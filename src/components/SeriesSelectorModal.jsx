import React, { useState } from 'react';
import { X, Search, Layers, Sparkles, BookOpen, Crown, Check, ChevronRight } from 'lucide-react';
import { SERIES_CONFIG } from '../data/seriesData';
import './SeriesSelectorModal.css';

export default function SeriesSelectorModal({ 
  activeSeriesId, 
  onSelectSeries, 
  onClose,
  seriesProgressMap = {} 
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSeries = SERIES_CONFIG.filter(s => {
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.theme.toLowerCase().includes(q) ||
      s.code.toLowerCase().includes(q) ||
      (s.ultraCard && s.ultraCard.name.toLowerCase().includes(q)) ||
      (s.legendaries && s.legendaries.some(leg => leg.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="series-modal-backdrop" onClick={onClose}>
      <div className="series-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header du Modal */}
        <div className="series-modal-header">
          <div className="series-header-info">
            <div className="series-title-row">
              <Layers size={18} className="series-modal-icon" />
              <h2 className="series-modal-title">ARCHIVES MULTI-SÉRIES</h2>
            </div>
            <p className="series-modal-subtitle">
              20 SÉRIES OFFICIELLES • 10 000 CARTES WIKIPÉDIA
            </p>
          </div>

          <button 
            className="neu-button close-series-btn" 
            onClick={onClose}
            aria-label="Fermer la sélection de séries"
          >
            <X size={16} />
          </button>
        </div>

        {/* Barre de Recherche rapide parmi les 20 Séries */}
        <div className="series-search-box">
          <Search size={14} className="series-search-icon" />
          <input 
            type="text"
            className="series-search-input"
            placeholder="Rechercher une série, un thème, une carte Ultra..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>

        {/* Liste défilante des 20 Séries */}
        <div className="series-list-scroll">
          {filteredSeries.map((series) => {
            const isActive = Number(activeSeriesId) === series.id;
            const progress = seriesProgressMap[series.id] || { unlocked: series.id === 1 ? 12 : 4, total: 500 };
            const percent = ((progress.unlocked / progress.total) * 100).toFixed(1);

            return (
              <div 
                key={`series-item-${series.id}`}
                className={`series-card-row ${isActive ? 'is-active-series' : ''}`}
                onClick={() => {
                  onSelectSeries(series.id);
                  onClose();
                }}
              >
                {/* Badge de Série */}
                <div 
                  className="series-code-badge"
                  style={{ 
                    background: series.badgeColor,
                    boxShadow: `0 3px 12px ${series.accentGlow}`
                  }}
                >
                  <span className="series-code-txt">{series.code}</span>
                  <span className="series-id-num">#{series.id}</span>
                </div>

                {/* Métadonnées & Détails */}
                <div className="series-details-col">
                  <div className="series-title-bar">
                    <h3 className="series-row-title">{series.title}</h3>
                    {isActive && (
                      <span className="active-pill-badge">
                        <Check size={10} /> ACTIF
                      </span>
                    )}
                  </div>

                  <p className="series-theme-desc">{series.theme}</p>

                  {/* Carte Ultra Chase de la Série */}
                  {series.ultraCard && (
                    <div className="series-ultra-preview">
                      <Crown size={11} className="crown-icon-gold" />
                      <span className="ultra-preview-label">CHASE ULTRA :</span>
                      <strong className="ultra-preview-name">{series.ultraCard.name}</strong>
                    </div>
                  )}

                  {/* Barre de Progression / Complétion du Tome */}
                  <div className="series-progress-wrapper">
                    <div className="series-progress-bar-bg">
                      <div 
                        className="series-progress-bar-fill"
                        style={{ 
                          width: `${Math.max(percent, 2)}%`,
                          background: series.badgeColor 
                        }}
                      />
                    </div>
                    <span className="series-progress-label">
                      {progress.unlocked} / {progress.total} ({percent}%)
                    </span>
                  </div>
                </div>

                {/* Bouton d'action / Flèche */}
                <div className="series-action-col">
                  <button 
                    className={`neu-button series-switch-btn ${isActive ? 'btn-current' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSeries(series.id);
                      onClose();
                    }}
                  >
                    {isActive ? (
                      <BookOpen size={13} />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="series-modal-footer">
          <span>Classeur TCG wikiCollect • 500 cartes par série numérotées fixes #001 à #500</span>
        </div>

      </div>
    </div>
  );
}
