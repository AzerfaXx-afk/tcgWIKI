import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Sparkles, 
  Loader2, 
  Check, 
  ExternalLink, 
  BookOpen, 
  PlusCircle,
  Wand2
} from 'lucide-react';
import { searchWikipedia, forgeCardFromWikipedia } from '../services/wikipediaService';
import CardSlot from './CardSlot';
import './WikiCardGeneratorModal.css';

const QUICK_SUGGESTIONS = [
  "Alexandre le Grand",
  "Tour Eiffel",
  "Trou noir",
  "Cléopâtre VII",
  "Galaxie d'Andromède",
  "Tyrannosaurus",
  "Taj Mahal",
  "Isaac Newton",
  "Mona Lisa",
  "Volcan Krakatoa"
];

export default function WikiCardGeneratorModal({ onClose, onCardGenerated }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [forging, setForging] = useState(false);
  const [forgedCard, setForgedCard] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [added, setAdded] = useState(false);

  // Recherche d'autocomplétion en direct
  const handleSearchInput = async (e) => {
    const val = e.target.value;
    setSearchQuery(val);

    if (val.trim().length >= 2) {
      setLoadingSearch(true);
      const results = await searchWikipedia(val);
      setSuggestions(results);
      setLoadingSearch(false);
    } else {
      setSuggestions([]);
    }
  };

  // Forger une carte en direct depuis Wikipédia
  const handleForge = async (title) => {
    setForging(true);
    setForgedCard(null);
    setAdded(false);
    setStatusMessage(`Extraction des archives de "${title}" depuis Wikipédia...`);

    try {
      const newCard = await forgeCardFromWikipedia(title);
      setForgedCard(newCard);
      setStatusMessage(`Carte forgée avec succès ! Rayonnement mondial : ${newCard.stats.languages} langues.`);
    } catch (err) {
      console.error(err);
      setStatusMessage("Impossible de forger cet article. Réessayez avec un autre terme.");
    } finally {
      setForging(false);
    }
  };

  const handleAddToCollection = () => {
    if (forgedCard && !added) {
      onCardGenerated(forgedCard);
      setAdded(true);
    }
  };

  return (
    <div className="wiki-generator-backdrop" onClick={onClose}>
      <div className="wiki-generator-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* En-tête */}
        <div className="generator-modal-header">
          <div className="generator-title-badge">
            <Wand2 size={16} className="wand-icon" />
            <h2>FORGEUR WIKIPÉDIA LIVE</h2>
          </div>
          <button className="neu-button modal-close-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <p className="generator-intro">
          Tapez n'importe quel sujet du patrimoine mondial. L'IA extrait les données brutes de Wikipédia en temps réel et génère la carte TCG officielle.
        </p>

        {/* Barre de recherche avec autocomplétion */}
        <div className="generator-search-box">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            className="generator-input"
            placeholder="Ex: Alexandre le Grand, Trou noir, Tour Eiffel..."
            value={searchQuery}
            onChange={handleSearchInput}
            onKeyDown={(e) => e.key === 'Enter' && searchQuery && handleForge(searchQuery)}
          />
          {loadingSearch && <Loader2 size={16} className="spinner" />}
        </div>

        {/* Suggestions rapides cliquables */}
        <div className="quick-suggestions-row">
          <span className="suggestions-label">Tendances :</span>
          {QUICK_SUGGESTIONS.map((item) => (
            <button 
              key={item} 
              className="suggestion-tag-btn"
              onClick={() => {
                setSearchQuery(item);
                handleForge(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Résultats d'autocomplétion */}
        {suggestions.length > 0 && !forging && !forgedCard && (
          <div className="suggestions-dropdown-list">
            {suggestions.map((item) => (
              <div 
                key={item.title} 
                className="suggestion-item"
                onClick={() => handleForge(item.title)}
              >
                <div className="item-main">
                  <strong>{item.title}</strong>
                  {item.snippet && <span>{item.snippet}</span>}
                </div>
                <Sparkles size={14} className="sparkle-hint" />
              </div>
            ))}
          </div>
        )}

        {/* État de chargement / Forge en direct */}
        {forging && (
          <div className="forging-progress-card">
            <Loader2 size={32} className="forging-spinner" />
            <span className="forging-msg">{statusMessage}</span>
            <div className="forging-sub-msg">
              Calcul des octets, références académiques et rareté officielle...
            </div>
          </div>
        )}

        {/* Résultat de la carte forgée */}
        {forgedCard && (
          <div className="forged-result-container">
            <div className="forged-card-preview-stage">
              <CardSlot card={forgedCard} size="normal" />
            </div>

            <div className="forged-meta-summary">
              <div className="forged-title-badge">
                <h3>{forgedCard.name}</h3>
                <span className={`rarity-badge-result pill-${forgedCard.rarity.toLowerCase()}`}>
                  {forgedCard.rarityLabel} [{forgedCard.rarity}]
                </span>
              </div>

              <div className="forged-stats-summary-grid">
                <div className="forged-stat-box">
                  <span>ATQ</span>
                  <strong>{forgedCard.stats.attack}</strong>
                </div>
                <div className="forged-stat-box">
                  <span>DEF</span>
                  <strong>{forgedCard.stats.defense}</strong>
                </div>
                <div className="forged-stat-box">
                  <span>PV</span>
                  <strong>{forgedCard.stats.hp}</strong>
                </div>
                <div className="forged-stat-box">
                  <span>AURA</span>
                  <strong>{forgedCard.stats.aura}</strong>
                </div>
              </div>

              <p className="forged-extract-preview">
                {forgedCard.description}
              </p>

              {/* Bouton Ajouter à la collection */}
              <button 
                className={`neu-button add-collection-btn ${added ? 'is-added' : ''}`}
                onClick={handleAddToCollection}
                disabled={added}
              >
                {added ? (
                  <>
                    <Check size={16} /> AJOUTÉE À VOTRE COLLECTION !
                  </>
                ) : (
                  <>
                    <PlusCircle size={16} /> AJOUTER AU CLASSEUR
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
