import React, { useState, useMemo, useEffect, useRef } from 'react';
import CardSlot from '../components/CardSlot';
import DropRatesModal from '../components/DropRatesModal';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  Scale, 
  X
} from 'lucide-react';
import './CollectionView.css';

// Ordre officiel des raretés TCG wikiCollect (Ultra -> Légendaire -> Diamond -> Héritage -> Rare -> Commune)
const RARITY_WEIGHT_ORDER = {
  'U': 0, // Ultra Secret
  'L': 1, // Légendaire
  'D': 2, // Diamond
  'H': 3, // Héritage
  'R': 4, // Rare
  'C': 5  // Commune
};

// Grand catalogue thématique des catégories officielles wikiCollect
const CATEGORIES_LIST = [
  { id: "all", label: "Toutes" },
  { id: "Charme & Porno", label: "Charme & Porno" },
  { id: "Rap & Hip-Hop", label: "Rap & Hip-Hop" },
  { id: "Musique & Pop", label: "Musique & Pop" },
  { id: "Sport", label: "Sport" },
  { id: "Tech & IA", label: "Tech & IA" },
  { id: "Politique", label: "Politique" },
  { id: "Histoire", label: "Histoire" },
  { id: "Sciences & Pensée", label: "Sciences & Pensée" },
  { id: "Cinéma", label: "Cinéma" },
  { id: "Pègre & Crime", label: "Pègre & Crime" },
  { id: "YouTube & Internet", label: "YouTube & Internet" },
  { id: "Controverses & Médias", label: "Controverses & Médias" },
  { id: "Renseignement", label: "Renseignement" }
];

export default function CollectionView({ 
  user, 
  cards, 
  onSelectCard 
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropRates, setShowDropRates] = useState(false);
  const [showPageJump, setShowPageJump] = useState(false);
  const [turnDirection, setTurnDirection] = useState(null); // 'next' | 'prev' | null
  
  const touchStartX = useRef(null);

  // Synthèse Web Audio d'un subtil bruissement de papier pour tourner la page
  const playPageTurnSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const bufferSize = ctx.sampleRate * 0.05;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, ctx.currentTime);
      filter.Q.setValueAtTime(2.2, ctx.currentTime);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.025, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
      noise.stop(ctx.currentTime + 0.05);
    } catch (err) {
      // Audio facultatif silencieux
    }
  };

  // Comptage par catégorie pour afficher les badges précis
  const categoryCounts = useMemo(() => {
    const list = Array.isArray(cards) ? cards : [];
    const counts = { all: list.length };
    list.forEach(c => {
      const cat = c.category || 'Panthéon';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [cards]);

  // 1. Filtrage et Tri Permanent par Rareté de Prestige & Catégorie (Awwwards standard)
  const sortedCatalog = useMemo(() => {
    const list = Array.isArray(cards) ? cards : [];
    const filtered = list.filter(card => {
      // Filtre catégorie
      if (selectedCategory !== "all") {
        if (card.category !== selectedCategory) return false;
      }

      // Filtre recherche
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        return (
          (card.name && card.name.toLowerCase().includes(q)) ||
          (card.id && card.id.includes(q)) ||
          (card.category && card.category.toLowerCase().includes(q)) ||
          (card.description && card.description.toLowerCase().includes(q))
        );
      }
      return true;
    });

    // Tri strict par rareté (Ultra Secret d'abord -> Légendaire -> Diamond -> Héritage -> Rare -> Commune)
    return [...filtered].sort((a, b) => {
      const rarityA = (a.rarity || 'C').toUpperCase();
      const rarityB = (b.rarity || 'C').toUpperCase();
      const rankA = RARITY_WEIGHT_ORDER[rarityA] ?? 99;
      const rankB = RARITY_WEIGHT_ORDER[rarityB] ?? 99;

      if (rankA !== rankB) {
        return rankA - rankB;
      }

      // Tie-break : Aura de la carte décroissante
      const auraA = a.stats?.aura || 0;
      const auraB = b.stats?.aura || 0;
      if (auraB !== auraA) {
        return auraB - auraA;
      }

      const idA = parseInt(a.id || 0, 10);
      const idB = parseInt(b.id || 0, 10);
      return idA - idB;
    });
  }, [cards, selectedCategory, searchQuery]);

  // 2. Découpage strict et uniforme en planches de 16 cartes exactes (4 colonnes x 4 rangées)
  const binderPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < sortedCatalog.length; i += 16) {
      pages.push(sortedCatalog.slice(i, i + 16));
    }
    return pages.length > 0 ? pages : [[]];
  }, [sortedCatalog]);

  const totalPages = Math.max(1, binderPages.length);
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const pageCards = binderPages[validCurrentPage - 1] || [];

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setTurnDirection('prev');
      setCurrentPage(prev => Math.max(1, prev - 1));
      playPageTurnSound();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setTurnDirection('next');
      setCurrentPage(prev => Math.min(totalPages, prev + 1));
      playPageTurnSound();
    }
  };

  const handleFirstPage = () => {
    if (currentPage > 1) {
      setTurnDirection('prev');
      setCurrentPage(1);
      playPageTurnSound();
    }
  };

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      setTurnDirection('next');
      setCurrentPage(totalPages);
      playPageTurnSound();
    }
  };

  const handleJumpToPage = (targetPage) => {
    const p = Math.min(totalPages, Math.max(1, targetPage));
    if (p !== currentPage) {
      setTurnDirection(p > currentPage ? 'next' : 'prev');
      setCurrentPage(p);
      playPageTurnSound();
    }
    setShowPageJump(false);
  };

  // Raccourcis clavier (Flèches Gauche / Droite) pour tourner les pages
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages, currentPage]);

  // Gestuelle Tactile (Swipe) pour tourner les pages facilement au doigt
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (diff > 45) {
      handlePrevPage();
    } else if (diff < -45) {
      handleNextPage();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="collection-binder-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* 1. En-tête du Classeur : Typographie Awwwards & Accès Taux */}
      <div className="binder-header">
        <div className="binder-header-left">
          <div className="binder-title-block">
            <div className="binder-title-row">
              <h1 className="binder-title">Le grand classeur</h1>
              <span className="binder-edition-pill">PRESTIGE</span>
            </div>
            <span className="binder-sub">
              Panthéon mondial • Classé par rareté
            </span>
          </div>
        </div>

        <div className="binder-header-right">
          <button 
            className="neu-button drop-rates-trigger-btn"
            onClick={() => setShowDropRates(true)}
            title="Consulter les probabilités de tirage"
          >
            <Scale size={11} className="scale-svg" />
            <span>TAUX</span>
          </button>
        </div>
      </div>

      {/* 2. Barre de Recherche Permanente Haute Définition */}
      <div className="binder-search-bar-wrapper">
        <div className="binder-search-bar">
          <Search size={13} className="search-bar-icon" />
          <input 
            type="text" 
            className="binder-search-input"
            placeholder="Rechercher une personnalité (Trump, Michael Jackson, Escobar, Jordan...)"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
          {searchQuery && (
            <div className="search-active-controls">
              <span className="search-count-badge">
                {sortedCatalog.length} résultat{sortedCatalog.length > 1 ? 's' : ''}
              </span>
              <button 
                className="clear-search-btn"
                onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
                aria-label="Effacer la recherche"
                title="Réinitialiser la recherche"
              >
                <X size={12} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2.5 Sélecteur Horizontal de Catégories Awwwards */}
      <div className="binder-categories-scroll-wrapper">
        <div className="binder-categories-strip">
          {CATEGORIES_LIST.map(cat => {
            const count = categoryCounts[cat.id] || 0;
            if (cat.id !== "all" && count === 0) return null;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={`cat-${cat.id}`}
                className={`category-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage(1);
                  playPageTurnSound();
                }}
                title={`Afficher la catégorie ${cat.label}`}
              >
                <span className="category-pill-label">{cat.label}</span>
                <span className="category-pill-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. PLANCHE DU CLASSEUR : GRILLE 4x4 STRICTEMENT UNIFORME */}
      <div className="binder-page-leather-board">
        {/* Anneaux de reliure discrets */}
        <div className="binder-rings-strip">
          <span className="binder-ring" />
          <span className="binder-ring" />
          <span className="binder-ring" />
          <span className="binder-ring" />
        </div>

        {/* Grille uniforme de 16 cartes de taille 100% identique avec transition 3D */}
        {sortedCatalog.length === 0 ? (
          <div className="binder-empty-search">
            <Search size={24} className="empty-search-icon" />
            <p className="empty-search-title">Aucune carte trouvée pour "{searchQuery}"</p>
            <p className="empty-search-sub">Essayez un autre nom, rappeur, criminel ou numéro de carte.</p>
            <button 
              className="neu-button reset-search-btn"
              onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
            >
              Afficher toute la collection
            </button>
          </div>
        ) : (
          <div 
            key={`binder-page-grid-${validCurrentPage}-${searchQuery}`}
            className={`binder-slots-grid binder-16-grid ${turnDirection ? `page-turn-${turnDirection}` : ''}`}
            onAnimationEnd={() => setTurnDirection(null)}
          >
            {pageCards.map((card, idx) => (
              <div 
                key={`binder-slot-${card.id}-${idx}`} 
                className="binder-slot-wrapper"
              >
                <CardSlot 
                  card={card}
                  onClick={card.locked ? null : onSelectCard}
                  size="normal"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Barre de Navigation Awwwards : Flèches Tactiles Haut de Gamme */}
      <div className="binder-pagination-bar">
        <div className="binder-pagination-arrows-group">
          <button 
            className="page-nav-arrow-btn page-nav-jump-arrow"
            onClick={handleFirstPage}
            disabled={validCurrentPage <= 1}
            aria-label="Première page"
            title="Première planche"
          >
            <ChevronsLeft size={14} strokeWidth={2.4} />
          </button>

          <button 
            className="page-nav-arrow-btn page-nav-main-arrow"
            onClick={handlePrevPage}
            disabled={validCurrentPage <= 1}
            aria-label="Page précédente"
            title="Planche précédente (Flèche gauche ou glisser)"
          >
            <ChevronLeft size={16} strokeWidth={2.6} />
          </button>
        </div>

        <button 
          className="page-indicator-pill interactive-turn-pill"
          onClick={() => setShowPageJump(!showPageJump)}
          title="Cliquer pour sauter directement à une planche"
        >
          <span className="page-nav-main-text">
            PLANCHE <span className="page-num-highlight">{String(validCurrentPage).padStart(2, '0')}</span> <span className="page-nav-sep">/</span> {String(totalPages).padStart(2, '0')}
          </span>
          <span className="page-completion-tag">
            {sortedCatalog.length} CARTES
          </span>
        </button>

        <div className="binder-pagination-arrows-group">
          <button 
            className="page-nav-arrow-btn page-nav-main-arrow"
            onClick={handleNextPage}
            disabled={validCurrentPage >= totalPages}
            aria-label="Page suivante"
            title="Planche suivante (Flèche droite ou glisser)"
          >
            <ChevronRight size={16} strokeWidth={2.6} />
          </button>

          <button 
            className="page-nav-arrow-btn page-nav-jump-arrow"
            onClick={handleLastPage}
            disabled={validCurrentPage >= totalPages}
            aria-label="Dernière page"
            title="Dernière planche"
          >
            <ChevronsRight size={14} strokeWidth={2.4} />
          </button>
        </div>
      </div>

      {/* Popover / Sélecteur Rapide des Planches */}
      {showPageJump && (
        <div className="page-jump-overlay" onClick={() => setShowPageJump(false)}>
          <div className="page-jump-card" onClick={(e) => e.stopPropagation()}>
            <div className="page-jump-header">
              <span className="page-jump-title">INDEX DES {totalPages} PLANCHES DU CLASSEUR</span>
              <button className="clear-search-btn" onClick={() => setShowPageJump(false)}>
                <X size={12} />
              </button>
            </div>
            <div className="page-jump-grid">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => {
                const startNum = String((p - 1) * 16 + 1).padStart(3, '0');
                const endNum = String(Math.min(sortedCatalog.length, p * 16)).padStart(3, '0');
                const isActive = p === validCurrentPage;
                return (
                  <button
                    key={`jump-page-${p}`}
                    className={`page-jump-item-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleJumpToPage(p)}
                  >
                    <span className="jump-page-num">P.{String(p).padStart(2, '0')}</span>
                    <span className="jump-page-range">{startNum}–{endNum}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Modal des Probabilités de Tirage */}
      {showDropRates && (
        <DropRatesModal onClose={() => setShowDropRates(false)} />
      )}

    </div>
  );
}
