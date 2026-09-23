import React, { useState, useMemo, useEffect, useRef } from 'react';
import './NeumorphicBackground.css';

const TILE_HUES = ['blue', 'cyan', 'violet', 'amber', 'rose'];

/**
 * Composant de fond d'écran Neumorphique Awwwards Interactif
 * Couvre 100% de l'écran quelle que soit la résolution
 * Réaction lumineuse colorée au survol et éclairage spéculaire en temps réel
 */
export default function NeumorphicBackground() {
  const containerRef = useRef(null);
  const [activeTileId, setActiveTileId] = useState(null);
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  }));

  // Suivi du redimensionnement de l'écran
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Grille calculée dynamiquement pour recouvrir intégralement tout l'écran
  const { tiles, cols, rows } = useMemo(() => {
    const tileSize = 80;
    const gap = 15;
    const step = tileSize + gap;
    
    // Marge de débordement (+4 tuiles) pour garantir zéro bande vide
    const calculatedCols = Math.max(16, Math.ceil(dimensions.width / step) + 4);
    const calculatedRows = Math.max(12, Math.ceil(dimensions.height / step) + 4);
    
    const tileList = [];
    for (let r = 0; r < calculatedRows; r++) {
      for (let c = 0; c < calculatedCols; c++) {
        const isInset = (r * 3 + c * 2) % 3 === 0;
        const colorIdx = (r * 5 + c * 7) % TILE_HUES.length;
        tileList.push({
          id: `${r}-${c}`,
          r,
          c,
          baseState: isInset ? 'inset' : 'raised',
          hue: TILE_HUES[colorIdx]
        });
      }
    }
    return { tiles: tileList, cols: calculatedCols, rows: calculatedRows };
  }, [dimensions]);

  // Déplacement de la lumière spéculaire au mouvement du curseur
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      containerRef.current.style.setProperty('--mouse-x', `${xPercent.toFixed(1)}%`);
      containerRef.current.style.setProperty('--mouse-y', `${yPercent.toFixed(1)}%`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="neumorphic-bg-canvas" aria-hidden="true">
      {/* Vague de lumière ambiante dynamique qui suit le curseur */}
      <div className="neu-bg-cursor-spotlight" />

      <div 
        className="neumorphic-grid-wrapper"
        style={{
          gridTemplateColumns: `repeat(${cols}, 80px)`,
          gridTemplateRows: `repeat(${rows}, 80px)`
        }}
      >
        {tiles.map((tile) => {
          const isHovered = activeTileId === tile.id;
          const currentState = isHovered 
            ? (tile.baseState === 'inset' ? 'raised' : 'inset') 
            : tile.baseState;

          return (
            <div
              key={tile.id}
              className={`neu-bg-square state-${currentState} hue-${tile.hue} ${isHovered ? 'is-hovered' : ''}`}
              onMouseEnter={() => setActiveTileId(tile.id)}
              onMouseLeave={() => setActiveTileId(null)}
            >
              <div className="neu-square-inner-highlight" />
            </div>
          );
        })}
      </div>
      
      {/* Vignette d'ambiance et flou de profondeur Awwwards */}
      <div className="neu-bg-ambient-vignette" />
    </div>
  );
}
