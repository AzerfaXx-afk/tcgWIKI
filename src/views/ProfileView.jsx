import React from 'react';
import { Award, Shield, Settings, LogOut, PlusCircle, Sparkles } from 'lucide-react';
import './ProfileView.css';

export default function ProfileView({ user, onOpenRecharge }) {
  return (
    <div className="profile-view-container">
      {/* Title */}
      <div className="profile-header">
        <h1 className="profile-title">MON PROFIL</h1>
      </div>

      {/* User Avatar & Rank Card */}
      <div className="profile-user-summary">
        <div className="profile-avatar-outer-ring">
          <div className="profile-avatar-inner-ring">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="profile-avatar-img"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </div>
        </div>
        
        <h2 className="profile-user-name">{user.name?.toUpperCase() || 'NATHAN C.'}</h2>
        <span className="profile-user-level">NIVEAU {user.level} COLLECTOR</span>
        <span className="profile-user-date">Membre depuis: {user.memberSince}</span>
      </div>

      {/* Collection Stats Card */}
      <div className="neu-card profile-stats-card">
        <h3 className="profile-card-heading text-center">STATISTIQUES DE COLLECTION</h3>
        
        <div className="profile-stats-grid">
          {/* Cartes Totales */}
          <div className="stat-column">
            <span className="stat-label">CARTES TOTALES</span>
            <div className="stat-progress-track">
              <div 
                className="stat-progress-fill" 
                style={{ width: `${(user.collectionCount / user.collectionTotal) * 100}%` }}
              />
            </div>
            <span className="stat-value">
              {user.collectionCount?.toLocaleString()} / {user.collectionTotal?.toLocaleString()}
            </span>
          </div>

          {/* Cartes Légendaires */}
          <div className="stat-column">
            <span className="stat-label">CARTES<br />LÉGENDAIRES</span>
            <span className="stat-big-number">{user.legendaryCount}</span>
          </div>

          {/* Achèvements */}
          <div className="stat-column">
            <span className="stat-label">ACHÈVEMENTS</span>
            <span className="stat-big-number">{user.achievementRate}%</span>
          </div>
        </div>
      </div>

      {/* Tokens Balance & Recharge Card */}
      <div className="neu-card profile-balance-row">
        <div className="balance-info">
          <span className="balance-label">VOTRE SOLDE:</span>
          <span className="balance-value"><strong>{user.tokens?.toLocaleString()}</strong> W Tokens</span>
        </div>
        <button className="neu-button recharge-btn" onClick={() => onOpenRecharge && onOpenRecharge()}>
          <span>RECHARGER</span>
        </button>
      </div>

      {/* Recent History Card */}
      <div className="neu-card profile-history-card">
        <h3 className="profile-card-heading">HISTORIQUE RÉCENT</h3>
        <ul className="profile-history-list">
          <li>• Nouvelle Carte [Donald Trump] obtenue (Hier)</li>
          <li>• Déblocage Carte Renseignement [Le Mossad] (Lun)</li>
          <li>• Tirage Pack Légendaire [Cristiano Ronaldo] (Ven)</li>
        </ul>
      </div>

      {/* Bottom Action Buttons */}
      <div className="profile-actions-row">
        <button className="neu-button profile-action-pill">
          <span>PARAMÈTRES DU COMPTE</span>
        </button>
        <button className="neu-button profile-action-pill btn-logout">
          <span>DÉCONNEXION</span>
        </button>
      </div>
    </div>
  );
}
