import React, { useState, useRef, useMemo } from 'react';
import { 
  X, 
  ExternalLink, 
  RotateCw, 
  ChevronLeft,
  ChevronRight,
  BookOpen, 
  Swords, 
  Shield, 
  Heart, 
  Zap, 
  Compass, 
  Scale,
  Award,
  Gem
} from 'lucide-react';
import './CardModal.css';

export default function CardModal({ card, cards = [], onSelectCard, onClose }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [backMode, setBackMode] = useState('relic'); // 'relic' | 'archive'
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  const unlockedCards = useMemo(() => {
    return cards.filter(c => !c.locked);
  }, [cards]);

  const currentIndex = useMemo(() => {
    if (!card) return -1;
    return unlockedCards.findIndex(c => c.id === card.id);
  }, [card, unlockedCards]);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < unlockedCards.length - 1;

  const handlePrev = (e) => {
    e && e.stopPropagation();
    if (hasPrev && onSelectCard) {
      onSelectCard(unlockedCards[currentIndex - 1]);
      setIsFlipped(false);
    }
  };

  const handleNext = (e) => {
    e && e.stopPropagation();
    if (hasNext && onSelectCard) {
      onSelectCard(unlockedCards[currentIndex + 1]);
      setIsFlipped(false);
    }
  };

  if (!card) return null;

  const rarity = (card.rarity || 'C').toUpperCase();
  const stats = card.stats || {
    attack: 85,
    defense: 80,
    hp: 130,
    speed: 60,
    aura: 5,
    bytes: 45000,
    languages: 45,
    revisions: 8
  };

  const displayId = String(card.id || '001').padStart(3, '0');

  // Effet 3D Gyroscopique Awwwards
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTiltStyle({
      transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`,
      '--glare-x': `${glareX}%`,
      '--glare-y': `${glareY}%`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      '--glare-x': '50%',
      '--glare-y': '50%'
    });
  };

  return (
    <div className="card-modal-backdrop" onClick={onClose}>
      <div className="card-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Barre d'actions supérieure */}
        <div className="modal-header-actions">
          {/* Navigation Flèches Précédent / Suivant */}
          <div className="modal-nav-arrows-group">
            <button 
              className="neu-button modal-nav-btn"
              onClick={handlePrev}
              disabled={!hasPrev}
              title="Carte précédente"
              aria-label="Carte précédente"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              className="neu-button modal-nav-btn"
              onClick={handleNext}
              disabled={!hasNext}
              title="Carte suivante"
              aria-label="Carte suivante"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Bouton Flip Recto/Verso */}
          <button 
            className="neu-button modal-flip-btn"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <RotateCw size={14} className={isFlipped ? 'spin-reverse' : ''} />
            <span>{isFlipped ? "RECTO" : "VERSO"}</span>
          </button>
          
          {/* Croix Fermer */}
          <button 
            className="neu-button modal-close-btn" 
            onClick={onClose} 
            aria-label="Fermer la vue carte"
            title="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scène 3D Gyroscopique de la Carte */}
        <div 
          className={`card-3d-stage ${isFlipped ? 'is-flipped' : ''}`}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
        >
          
          {/* =========================================================
              FACE 1 : RECTO (Combat, Stats & Finition Awwwards)
              ========================================================= */}
          <div className={`card-face card-face-front rarity-theme-${rarity.toLowerCase()}`}>
            <div className="card-glare-effect" />
            
            <div className="modal-card-frame-bezel">
              
              {/* En-tête de la carte */}
              <div className="card-front-header">
                <div className="card-aura-badge">
                  <Gem size={13} className="aura-gem-icon" />
                  <span className="aura-val">{stats.aura}</span>
                  <span className="aura-label">AURA</span>
                </div>

                <div className="card-rarity-tag-box">
                  <span className={`rarity-label-pill pill-${rarity.toLowerCase()}`}>
                    {card.rarityLabel || rarity} [{rarity}]
                  </span>
                </div>

                <div className="card-serial-tag">
                  {card.serialNumber || `${displayId}/500`}
                </div>
              </div>

              {/* Artwork Pop-out */}
              <div className="modal-card-artwork-box">
                {card.image ? (
                  <img 
                    src={card.image} 
                    alt={card.name} 
                    className="modal-artwork-img"
                    referrerPolicy="no-referrer"
                    style={{ objectPosition: card.cropPosition || '50% 12%' }}
                  />
                ) : (
                  <div className="modal-artwork-empty">
                    <BookOpen size={36} className="empty-icon" />
                    <span>Archive wikiCollect</span>
                  </div>
                )}
                <div className="artwork-vignette-overlay" />
                <span className="artwork-category-pill">{card.category || 'Panthéon'}</span>
              </div>

              {/* Titre & Extrait */}
              <div className="card-front-title-area">
                <h2 className="modal-card-title">{card.name}</h2>
                <p className="modal-card-brief">{card.description}</p>
              </div>

              {/* Les 5 Statistiques Officielles Wikipédia */}
              <div className="card-official-stats-panel">
                <div className="official-stat-pill stat-atq" title="Attaque = Longueur en octets">
                  <Swords size={12} className="stat-svg" />
                  <span className="stat-code">ATQ</span>
                  <strong className="stat-number">{stats.attack}</strong>
                </div>

                <div className="official-stat-pill stat-def" title="Défense = Références & sources">
                  <Shield size={12} className="stat-svg" />
                  <span className="stat-code">DEF</span>
                  <strong className="stat-number">{stats.defense}</strong>
                </div>

                <div className="official-stat-pill stat-pv" title="Points de Vie = Ancienneté & pérennité">
                  <Heart size={12} className="stat-svg" />
                  <span className="stat-code">PV</span>
                  <strong className="stat-number">{stats.hp}</strong>
                </div>

                <div className="official-stat-pill stat-vit" title="Vitesse = Dynamisme des révisions">
                  <Zap size={12} className="stat-svg" />
                  <span className="stat-code">VIT</span>
                  <strong className="stat-number">{stats.speed}</strong>
                </div>
              </div>

              {/* Pied de carte avec sceau certifié */}
              <div className="card-front-footer-strip">
                <span className="footer-edition">SÉRIE 1 • PANTHÉON MONDIAL</span>
                <span className="footer-auth">CERTIFIÉ WIKICOLLECT</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              FACE 2 : VERSO (Le Dos Relique & Archives Légales)
              ========================================================= */}
          <div className="card-face card-face-back">
            <div className="back-card-bezel">
              
              <div className="back-mode-tabs">
                <button 
                  className={`neu-pill back-tab-btn ${backMode === 'relic' ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setBackMode('relic'); }}
                >
                  <Award size={12} /> DOS RELIQUE
                </button>
                <button 
                  className={`neu-pill back-tab-btn ${backMode === 'archive' ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setBackMode('archive'); }}
                >
                  <BookOpen size={12} /> ARCHIVES DU SAVOIR
                </button>
              </div>

              {/* VUE 1 : DOS DE CARTE DE LUXE ("Le Dos Relique") */}
              {backMode === 'relic' && (
                <div className="back-relic-face">
                  <div className="guilloche-border-outer">
                    <div className="guilloche-border-inner">
                      
                      <div className="heraldic-corner top-left">✦</div>
                      <div className="heraldic-corner top-right">✦</div>
                      <div className="heraldic-corner bottom-left">✦</div>
                      <div className="heraldic-corner bottom-right">✦</div>

                      <div className="relic-header-motto">
                        <span>ACADÉMIA UNIVERSALIS</span>
                      </div>

                      <div className="relic-central-seal">
                        <div className="seal-ring-outer">
                          <div className="seal-ring-inner">
                            <Compass size={40} className="seal-compass" />
                            <div className="seal-brand-text">
                              <span className="seal-w">wiki</span>
                              <span className="seal-c">COLLECT</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relic-footer-motto">
                        <span className="motto-latin">"SCIENTIA EST POTENTIA"</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VUE 2 : ARCHIVES & MÉTRIQUES WIKIPÉDIA RÉELLES */}
              {backMode === 'archive' && (
                <div className="back-archive-face">
                  <div className="archive-inner-scroll">
                    
                    <div className="archive-header-card">
                      <span className="archive-badge">MÉTADONNÉES WIKIPÉDIA OFFICIELLES</span>
                      <h3 className="archive-card-name">{card.name}</h3>
                    </div>

                    <div className="metrics-detailed-grid">
                      <div className="metric-item">
                        <span className="metric-label">Taille de l'Article</span>
                        <strong className="metric-val">{stats.bytes?.toLocaleString() || 50000} octets</strong>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Traductions</span>
                        <strong className="metric-val">{stats.languages || 45} langues</strong>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Révisions Récentes</span>
                        <strong className="metric-val">{stats.revisions || 12} édits/mois</strong>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Index Universel</span>
                        <strong className="metric-val">WIKI-{displayId}</strong>
                      </div>
                    </div>

                    <div className="legal-compliance-card">
                      <div className="compliance-header">
                        <Scale size={13} className="compliance-icon" />
                        <span>CONFORMITÉ LÉGALE & ATTRIBUTION</span>
                      </div>
                      <p className="compliance-text">
                        Contenu textuel issu de <strong>Wikipédia, L'Encyclopédie Libre</strong>.
                        <br />
                        Licence officielle : <strong>{card.license || 'Creative Commons CC BY-SA 4.0'}</strong>.
                        <br />
                        Tirage certifié sans droit de reconversion en argent réel (Zéro Gambling).
                      </p>
                    </div>

                    <a 
                      href={card.wikiUrl || `https://fr.wikipedia.org/wiki/${encodeURIComponent(card.name)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="neu-button wiki-direct-link"
                    >
                      <span>OUVRIR L'ARTICLE COMPLET SUR WIKIPÉDIA</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
