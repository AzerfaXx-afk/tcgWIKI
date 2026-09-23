import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Sparkles, 
  Clock, 
  Coins, 
  Flame, 
  Scale, 
  Layers, 
  ShieldCheck,
  Package,
  Boxes,
  Crown
} from 'lucide-react';
import CardSlot from '../components/CardSlot';
import DropRatesModal from '../components/DropRatesModal';
import { DISPLAY_BOX_CONFIG } from '../services/boosterService';
import './ShopView.css';

const SHOP_CATEGORIES = [
  "TOUT",
  "BOOSTERS",
  "COFFRETS",
  "OFFRES FLASH",
  "TOKENS"
];

export default function ShopView({ 
  user, 
  onBuyPack, 
  onBuyBox,
  onSelectCard,
  cards,
  onOpenRecharge,
  activeSeriesId = 1
}) {
  const [activeCategory, setActiveCategory] = useState("TOUT");
  const [showDropRates, setShowDropRates] = useState(false);

  const showcaseCards = cards.slice(8, 12);

  return (
    <div className="shop-view-container">
      {/* Title & Drop Rates Modal Trigger */}
      <div className="shop-header">
        <div className="shop-title-row">
          <h1 className="shop-title">BOUTIQUE DE BOOSTERS</h1>
          <button 
            className="neu-button shop-rates-btn"
            onClick={() => setShowDropRates(true)}
            title="Consulter les probabilités de tirage officielles certifiées"
          >
            <Scale size={12} className="scale-svg" />
            <span>TAUX DE DROP</span>
          </button>
        </div>
        <span className="shop-subline">SÉRIE {String(activeSeriesId).padStart(2, '0')} ACTIVE • 5 Cartes certifiées par paquet</span>
      </div>

      {/* Filter Categories Pills */}
      <div className="pills-scroll-row">
        {SHOP_CATEGORIES.map(category => (
          <button 
            key={category}
            className={`neu-pill ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Boosters Grid (3 Columns) - Real Foiled Awwwards Pouches */}
      <div className="shop-boosters-grid">
        {/* 1. Booster Commun */}
        <div className="neu-card shop-pack-card">
          <div className="pack-visual-box pack-silver">
            <div className="shop-pack-crimp-top" />
            <div className="shop-foil-crest">
              <span className="shop-foil-mini-brand">WIKI</span>
              <span className="shop-foil-mini-edition">COMMUN</span>
            </div>
            <div className="shop-pack-crimp-bottom" />
          </div>
          <div className="pack-info-block">
            <h3 className="pack-title">BOOSTER COMMUN</h3>
            <span className="pack-count-label">5 CARTES • 1H</span>
            <span className="pack-sublabel">(Ultra rare possible)</span>
          </div>
          <button 
            className="neu-button pack-buy-btn"
            onClick={() => onBuyPack({ 
              id: 'common', 
              type: 'common', 
              name: 'Booster Commun', 
              title: 'Booster Commun', 
              subtitle: 'Édition Savoir Universel',
              price: 50 
            })}
          >
            <span>50 W-Tokens</span>
            <ShoppingCart size={11} className="cart-svg" />
          </button>
        </div>

        {/* 2. Booster Rare */}
        <div className="neu-card shop-pack-card">
          <div className="pack-visual-box pack-sapphire">
            <div className="shop-pack-crimp-top" />
            <div className="shop-foil-crest">
              <span className="shop-foil-mini-brand">WIKI</span>
              <span className="shop-foil-mini-edition blue-text">SAPHIR RARE</span>
            </div>
            <div className="shop-pack-crimp-bottom" />
          </div>
          <div className="pack-info-block">
            <h3 className="pack-title">BOOSTER RARE</h3>
            <span className="pack-count-label highlight-blue">5 CARTES • 5H</span>
            <span className="pack-sublabel">0% Commune garanti !</span>
          </div>
          <button 
            className="neu-button pack-buy-btn btn-blue"
            onClick={() => onBuyPack({ 
              id: 'rare', 
              type: 'rare', 
              name: 'Booster Rare', 
              title: 'Booster Rare', 
              subtitle: 'Édition Saphir Royal',
              price: 200 
            })}
          >
            <span>200 W-Tokens</span>
            <ShoppingCart size={11} className="cart-svg" />
          </button>
        </div>

        {/* 3. Booster Épique */}
        <div className="neu-card shop-pack-card pack-card-legendary">
          <div className="pack-visual-box pack-gold-shimmer">
            <div className="shop-pack-crimp-top" />
            <div className="shop-foil-crest">
              <span className="shop-foil-mini-brand gold-shimmer-brand">WIKI</span>
              <span className="shop-foil-mini-edition gold-shimmer-sub">ÉPIQUE PRESTIGE</span>
            </div>
            <div className="shop-pack-crimp-bottom" />
          </div>
          <div className="pack-info-block">
            <h3 className="pack-title">BOOSTER ÉPIQUE</h3>
            <span className="pack-count-label highlight-gold">5 CARTES • 48H</span>
            <span className="pack-sublabel">0% Commune, 0% Rare !</span>
          </div>
          <button 
            className="neu-button pack-buy-btn btn-gold"
            onClick={() => onBuyPack({ 
              id: 'epic', 
              type: 'epic', 
              name: 'Booster Épique', 
              title: 'Booster Épique', 
              subtitle: 'Édition Maître Impérial',
              price: 800 
            })}
          >
            <span>800 W-Tokens</span>
            <ShoppingCart size={11} className="cart-svg" />
          </button>
        </div>
      </div>

      {/* Premier Coffret Collector : Boîte Display (24 Boosters) */}
      <div className="neu-card shop-display-box-card">
        <div className="box-card-left">
          <div className="box-card-icon-frame">
            <Package size={22} className="box-icon-svg" />
            <span className="box-tag-label">24 BOOSTERS</span>
          </div>
          <div className="box-card-info">
            <div className="box-card-header-row">
              <span className="box-pre-tag">ÉDITION SCELLÉE D'USINE</span>
              <span className="box-guarantee-pill">120 CARTES</span>
            </div>
            <h3 className="box-card-title">COFFRET DISPLAY (24 BOOSTERS)</h3>
            <p className="box-card-desc">
              Taux certifiés : 14-20 Communs, 4-8 Rares, max 2 Épiques !
            </p>
          </div>
        </div>
        <button 
          className="neu-button box-buy-action-btn"
          onClick={() => onBuyBox && onBuyBox(DISPLAY_BOX_CONFIG)}
        >
          <div className="box-price-wrap">
            <span className="box-price-tokens">1 800 W-Tokens</span>
            <span className="box-badge-discount">-25% PACK</span>
          </div>
          <ShoppingCart size={12} className="cart-svg" />
        </button>
      </div>

      {/* Second Row: Monnaie & Offre Flash */}
      <div className="shop-secondary-grid">
        {/* Monnaie */}
        <div 
          className="neu-card shop-deal-card"
          onClick={() => onOpenRecharge && onOpenRecharge()}
          style={{ cursor: 'pointer' }}
        >
          <div className="deal-visual-box tokens-pile">
            <Coins size={30} className="coins-svg" />
          </div>
          <div className="deal-info">
            <h4 className="deal-title">PILE DE TOKENS WIKI (1000)</h4>
            <span className="deal-sub">ACHAT DE MONNAIE</span>
          </div>
          <button 
            className="neu-button deal-buy-btn"
            onClick={(e) => { e.stopPropagation(); onOpenRecharge && onOpenRecharge(); }}
          >
            <span>€4.99</span>
            <ShoppingCart size={12} />
          </button>
        </div>

        {/* Offre Flash */}
        <div className="neu-card shop-deal-card flash-deal-card">
          <div className="flash-timer-badge">
            <Clock size={11} />
            <span>2h30 restante</span>
          </div>
          <div className="deal-visual-box flash-pack-box">
            <Flame size={28} className="flame-svg" />
          </div>
          <div className="deal-info">
            <h4 className="deal-title text-red">OFFRE FLASH:<br />PACK HÉRITAGE (-50%)</h4>
          </div>
          <button 
            className="neu-button deal-buy-btn btn-flash"
            onClick={() => onBuyPack({ 
              id: 'flash', 
              type: 'heritage', 
              name: 'Offre Flash Héritage', 
              title: 'Offre Flash Héritage', 
              price: 250 
            })}
          >
            <span className="price-strike"><strong className="flash-red">250</strong> Tokens</span>
            <ShoppingCart size={12} />
          </button>
        </div>
      </div>

      {/* Preview Section: Cartes de la rotation */}
      <div className="shop-preview-section">
        <h4 className="preview-heading">CARTES DISPONIBLES EN BOUTIQUE</h4>
        <div className="shop-cards-preview-row">
          {showcaseCards.map((card, idx) => (
            <CardSlot 
              key={`shop-prev-${card.id}-${idx}`}
              card={card}
              onClick={onSelectCard}
              size="mini"
            />
          ))}
        </div>
      </div>

      {/* Floating Balance Badge inside the phone frame */}
      <div className="shop-floating-balance-pill">
        <span className="balance-pill-label">VOTRE SOLDE:</span>
        <span className="balance-pill-amount">
          <strong>{user.tokens?.toLocaleString()}</strong>
        </span>
        <span className="balance-pill-unit">W Tokens</span>
      </div>

      {/* Modal des Probabilités de Tirage certifiées */}
      {showDropRates && (
        <DropRatesModal onClose={() => setShowDropRates(false)} />
      )}
    </div>
  );
}
