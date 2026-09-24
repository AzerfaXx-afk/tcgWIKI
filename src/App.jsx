import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  BookOpen, 
  Home, 
  Globe, 
  User, 
  Menu, 
  X,
  Coins,
  Sparkles
} from 'lucide-react';

import { MOCK_USER } from './data/mockData';
import { MASTER_CATALOG, generateSeriesCatalog } from './data/cardsCatalog';
import { SERIES_CONFIG, getSeriesMetadata } from './data/seriesData';
import { BOOSTER_CONFIGS } from './services/boosterService';
import { fetchAllCardsFromSupabase } from './services/supabaseClient';
import HomeView from './views/HomeView';
import CollectionView from './views/CollectionView';
import ShopView from './views/ShopView';
import NewsView from './views/NewsView';
import ProfileView from './views/ProfileView';
import CardModal from './components/CardModal';
import BoosterModal from './components/BoosterModal';
import BoxDisplayModal from './components/BoxDisplayModal';
import RechargeModal from './components/RechargeModal';
import ThemeSwitch from './components/ThemeSwitch';
import NeumorphicBackground from './components/NeumorphicBackground';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'shop' | 'collection' | 'home' | 'news' | 'profile'
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  // App state : 20 Séries de 500 cartes officielles (001 à 500 par tome = 10 000 cartes)
  const [user, setUser] = useState(MOCK_USER);
  const [activeSeriesId, setActiveSeriesId] = useState(1);
  const [seriesCardsMap, setSeriesCardsMap] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [openingPack, setOpeningPack] = useState(null);
  const [openingBox, setOpeningBox] = useState(null);
  const [showRecharge, setShowRecharge] = useState(false);
  const [supabaseCards, setSupabaseCards] = useState(null);

  // Chargement en arrière-plan des milliers de cartes réelles Supabase
  useEffect(() => {
    let isMounted = true;
    fetchAllCardsFromSupabase(15000).then(data => {
      if (isMounted && data && data.length > 0) {
        console.log(`[tcgWIKI] ${data.length} cartes réelles chargées depuis Supabase !`);
        setSupabaseCards(data);
      }
    });
    return () => { isMounted = false; };
  }, []);

  // Cartes actives du classeur : Chargement prioritaire Supabase (milliers de cartes) ou Master Catalog
  const activeCards = React.useMemo(() => {
    if (supabaseCards && supabaseCards.length > 0) {
      return supabaseCards;
    }
    if (seriesCardsMap[activeSeriesId]) {
      return seriesCardsMap[activeSeriesId];
    }
    return activeSeriesId === 1 ? MASTER_CATALOG : generateSeriesCatalog(activeSeriesId);
  }, [activeSeriesId, seriesCardsMap, supabaseCards]);

  // Synchronisation stricte : Éliminer tout cache obsolète éventuel dans le navigateur
  useEffect(() => {
    if (seriesCardsMap[1] && seriesCardsMap[1][0]?.name !== "Donald Trump") {
      setSeriesCardsMap(prev => ({ ...prev, 1: MASTER_CATALOG }));
    }
  }, [seriesCardsMap]);

  // Changement de série actif
  const handleSelectSeries = (newSeriesId) => {
    const id = Number(newSeriesId);
    if (!seriesCardsMap[id]) {
      const generated = generateSeriesCatalog(id);
      setSeriesCardsMap(prev => ({ ...prev, [id]: generated }));
    }
    setActiveSeriesId(id);
  };

  // Progression de chaque série pour les jauges du modal
  const seriesProgressMap = React.useMemo(() => {
    const map = {};
    SERIES_CONFIG.forEach(s => {
      const sCards = seriesCardsMap[s.id];
      if (sCards) {
        map[s.id] = {
          unlocked: sCards.filter(c => !c.locked).length,
          total: 500
        };
      } else {
        map[s.id] = {
          unlocked: s.id === 1 ? 12 : 4,
          total: 500
        };
      }
    });
    return map;
  }, [seriesCardsMap]);

  // Apply dark mode theme attribute to root
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  // Handle Token Recharge Success
  const handleRechargeSuccess = (addedTokens) => {
    setUser(prev => ({
      ...prev,
      tokens: prev.tokens + addedTokens
    }));
  };

  // Handle Quick Booster Trigger (1h, 5h, 48h)
  const handleOpenBoosterQuick = (type) => {
    const config = BOOSTER_CONFIGS[type] || BOOSTER_CONFIGS.common;
    setOpeningPack({
      id: config.id,
      type: config.type,
      name: config.name,
      title: config.title,
      subtitle: config.subtitle,
      price: 0 // Gratuit via le cooldown
    });
  };

  const handleBuyPack = (pack) => {
    if (user.tokens < pack.price) {
      alert("Tokens insuffisants !");
      return;
    }
    setUser(prev => ({ ...prev, tokens: prev.tokens - pack.price }));
    setOpeningPack(pack);
  };

  const handleBuyBox = (box) => {
    if (user.tokens < box.priceTokens) {
      alert("Tokens insuffisants pour acquérir le coffret de 24 boosters !");
      setShowRecharge(true);
      return;
    }
    setUser(prev => ({ ...prev, tokens: prev.tokens - box.priceTokens }));
    setOpeningBox(box);
  };

  // Déverrouillage précis des emplacements dans le classeur de la série active
  const handleCardsCollected = (newCards) => {
    setSeriesCardsMap(prev => {
      const currentList = prev[activeSeriesId] || activeCards;
      const updated = [...currentList];
      newCards.forEach(newCard => {
        const idx = updated.findIndex(c => c.id === newCard.id);
        if (idx !== -1) {
          // La carte vient se ranger exactement dans sa pochette numérotée
          updated[idx] = {
            ...updated[idx],
            ...newCard,
            locked: false
          };
        }
      });
      return {
        ...prev,
        [activeSeriesId]: updated
      };
    });

    setUser(prev => ({
      ...prev,
      collectionCount: prev.collectionCount + newCards.length,
      collectionValue: prev.collectionValue + (newCards.length * 150)
    }));
  };

  const handleAddCard = (newCard) => {
    const cardSeries = newCard.seriesId || activeSeriesId;
    setSeriesCardsMap(prev => {
      const currentList = prev[cardSeries] || activeCards;
      const updated = [...currentList];
      const idx = updated.findIndex(c => c.id === newCard.id);
      if (idx !== -1) {
        updated[idx] = {
          ...updated[idx],
          ...newCard,
          locked: false
        };
      }
      return {
        ...prev,
        [cardSeries]: updated
      };
    });
    setUser(prev => ({
      ...prev,
      collectionCount: prev.collectionCount + 1,
      collectionValue: prev.collectionValue + 250
    }));
  };

  return (
    <div className="app-viewport-wrapper">
      {/* Fond d'écran Neumorphique Awwwards interactif (sur desktop) */}
      <NeumorphicBackground />

      {/* Téléphone Smartphone Flottant au centre */}
      <div className="phone-frame">

        {/* Top Header Bar */}
        <header className="app-header">
          <button 
            className="header-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>

          {/* Logo Officiel : wikiCollect */}
          <div 
            className="app-title-logo" 
            onClick={() => setActiveTab('home')} 
            style={{ cursor: 'pointer' }}
            title="Accueil wikiCollect"
          >
            <span className="logo-wiki-part">wiki</span>
            <span className="logo-collect-part">Collect</span>
          </div>

          <div 
            className="avatar-badge" 
            onClick={() => setActiveTab('profile')}
            title="Accéder au profil"
          >
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="avatar-img"
              referrerPolicy="no-referrer"
            />
          </div>
        </header>

        {/* Pro Slide-out Menu Drawer */}
        {menuOpen && (
          <div className="menu-drawer-backdrop" onClick={() => setMenuOpen(false)}>
            <div className="menu-drawer-content" onClick={(e) => e.stopPropagation()}>
              
              {/* Brand Title */}
              <div className="drawer-brand-header">
                <div className="drawer-title">
                  <span className="logo-wiki-part">wiki</span>
                  <span className="logo-collect-part">Collect</span>
                </div>
                <p className="drawer-desc">L'encyclopédie mondiale Wikipédia sous forme de cartes TCG de prestige.</p>
              </div>

              {/* User Mini Card */}
              <div className="drawer-user-card" onClick={() => { setActiveTab('profile'); setMenuOpen(false); }}>
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="drawer-user-avatar"
                  referrerPolicy="no-referrer"
                />
                <div className="drawer-user-info">
                  <span className="drawer-user-name">{user.name}</span>
                  <span className="drawer-user-level">Niveau {user.level} • {user.title}</span>
                  <span className="drawer-user-tokens">
                    <Coins size={12} className="drawer-coins-icon" /> {user.tokens.toLocaleString()} W-Tokens
                  </span>
                </div>
              </div>
              
              {/* Navigation Items */}
              <div className="drawer-nav-list">
                <button className="neu-button drawer-item" onClick={() => { setActiveTab('home'); setMenuOpen(false); }}>
                  <Home size={15} /> <span>Accueil</span>
                </button>
                <button className="neu-button drawer-item" onClick={() => { setActiveTab('collection'); setMenuOpen(false); }}>
                  <BookOpen size={15} /> <span>Classeur Tome {activeSeriesId} ({activeCards.filter(c => !c.locked).length} / 500)</span>
                </button>
                <button className="neu-button drawer-item" onClick={() => { setActiveTab('shop'); setMenuOpen(false); }}>
                  <ShoppingBag size={15} /> <span>Boutique de Boosters</span>
                </button>
                <button className="neu-button drawer-item" onClick={() => { setActiveTab('news'); setMenuOpen(false); }}>
                  <Globe size={15} /> <span>Événements & Quêtes</span>
                </button>
                <button className="neu-button drawer-item" onClick={() => { setActiveTab('profile'); setMenuOpen(false); }}>
                  <User size={15} /> <span>Profil & Statistiques</span>
                </button>
              </div>

              {/* Day / Night Mode Awwwards Switch */}
              <div className="drawer-theme-toggle-box">
                <span className="drawer-toggle-label">
                  {isDark ? "MODE NUIT OBSIDIAN" : "MODE JOUR IVOIRE"}
                </span>
                <ThemeSwitch 
                  isDark={isDark} 
                  onToggle={() => setIsDark(!isDark)} 
                />
              </div>

              <div className="drawer-footer">
                <span>wikiCollect v1.0 — Architecture Pro Awwwards</span>
              </div>
            </div>
          </div>
        )}

        {/* Screen Content (no-scroll when on Home or Collection tab, collection-active for CollectionView) */}
        <main className={`app-screen-content ${activeTab === 'home' ? 'no-scroll' : ''} ${activeTab === 'collection' ? 'collection-active no-scroll' : ''}`}>
          {activeTab === 'home' && (
            <HomeView 
              user={user}
              cards={activeCards}
              onSelectCard={setSelectedCard}
              onOpenBoosterQuick={handleOpenBoosterQuick}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === 'collection' && (
            <CollectionView 
              user={user}
              cards={activeCards}
              onSelectCard={setSelectedCard}
            />
          )}

          {activeTab === 'shop' && (
            <ShopView 
              user={user}
              cards={activeCards}
              onBuyPack={handleBuyPack}
              onBuyBox={handleBuyBox}
              onSelectCard={setSelectedCard}
              onOpenRecharge={() => setShowRecharge(true)}
              activeSeriesId={activeSeriesId}
            />
          )}

          {activeTab === 'news' && (
            <NewsView 
              user={user}
            />
          )}

          {activeTab === 'profile' && (
            <ProfileView 
              user={user}
              onOpenRecharge={() => setShowRecharge(true)}
            />
          )}
        </main>

        {/* Bottom Floating Neumorphic Dock (5 Tabs) */}
        <nav className="floating-dock-container" aria-label="Navigation principale">
          <button 
            className={`dock-item ${activeTab === 'shop' ? 'active' : ''}`}
            onClick={() => setActiveTab('shop')}
          >
            <div className="dock-icon-wrapper">
              <ShoppingBag size={16} />
            </div>
            <span>Boutique</span>
          </button>

          <button 
            className={`dock-item ${activeTab === 'collection' ? 'active' : ''}`}
            onClick={() => setActiveTab('collection')}
          >
            <div className="dock-icon-wrapper">
              <BookOpen size={16} />
            </div>
            <span>Collection</span>
          </button>

          <button 
            className={`dock-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <div className="dock-icon-wrapper">
              <Home size={16} />
            </div>
            <span>Accueil</span>
          </button>

          <button 
            className={`dock-item ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            <div className="dock-icon-wrapper">
              <Globe size={16} />
            </div>
            <span>Actu</span>
          </button>

          <button 
            className={`dock-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <div className="dock-icon-wrapper">
              <User size={16} />
            </div>
            <span>Mon profil</span>
          </button>
        </nav>
      </div>

      {/* 3D Card Inspection Modal */}
      {selectedCard && (
        <CardModal 
          card={selectedCard} 
          cards={activeCards}
          onSelectCard={setSelectedCard}
          onClose={() => setSelectedCard(null)} 
        />
      )}

      {/* Booster Opening Unboxing Modal */}
      {openingPack && (
        <BoosterModal 
          pack={openingPack}
          cardsPool={activeCards}
          onClose={() => setOpeningPack(null)}
          onCardsCollected={handleCardsCollected}
        />
      )}

      {/* Coffret Display 24 Boosters Modal */}
      {openingBox && (
        <BoxDisplayModal 
          box={openingBox}
          cardsPool={activeCards}
          onClose={() => setOpeningBox(null)}
          onCardsCollected={handleCardsCollected}
        />
      )}

      {/* Token Recharge Modal (Stripe Checkout Simulation) */}
      {showRecharge && (
        <RechargeModal 
          currentTokens={user.tokens}
          onClose={() => setShowRecharge(false)}
          onRechargeSuccess={handleRechargeSuccess}
        />
      )}
    </div>
  );
}
