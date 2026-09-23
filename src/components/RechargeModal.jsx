import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles, CreditCard } from 'lucide-react';
import './RechargeModal.css';

const TOKEN_TIERS = [
  { id: 't1', tokens: 400, price: '1,99 €', popular: false, bonus: null },
  { id: 't2', tokens: 1200, price: '4,99 €', popular: true, bonus: '+1 Booster Rare offert' },
  { id: 't3', tokens: 2800, price: '9,99 €', popular: false, bonus: '+1 Booster Héritage offert' },
  { id: 't4', tokens: 8000, price: '24,99 €', popular: false, bonus: '+1 Carte Or garantie' },
];

export default function RechargeModal({ currentTokens, onClose, onRechargeSuccess }) {
  const [selectedTier, setSelectedTier] = useState(TOKEN_TIERS[1]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      if (onRechargeSuccess) {
        onRechargeSuccess(selectedTier.tokens);
      }
      setTimeout(() => {
        onClose();
      }, 1400);
    }, 900);
  };

  return (
    <div className="recharge-modal-backdrop" onClick={onClose}>
      <div className="recharge-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="neu-button recharge-close-btn" onClick={onClose}>
          <X size={15} />
        </button>

        {/* Header */}
        <div className="recharge-modal-header">
          <div className="recharge-icon-ring">
            <Sparkles size={22} className="sparkle-gold" />
          </div>
          <h2 className="recharge-title">RECHARGER MES TOKENS</h2>
          <span className="recharge-balance-hint">
            Solde actuel : <strong>{currentTokens.toLocaleString()}</strong> W-Tokens
          </span>
        </div>

        {/* Tiers List */}
        {!isSuccess ? (
          <>
            <div className="tiers-grid">
              {TOKEN_TIERS.map(tier => (
                <div 
                  key={tier.id}
                  className={`neu-card tier-card ${selectedTier.id === tier.id ? 'is-selected' : ''}`}
                  onClick={() => setSelectedTier(tier)}
                >
                  {tier.popular && <span className="tier-badge-popular">POPULAIRE</span>}
                  <div className="tier-tokens-row">
                    <span className="tier-amount">{tier.tokens.toLocaleString()}</span>
                    <span className="tier-unit">Tokens</span>
                  </div>
                  {tier.bonus && <span className="tier-bonus-tag">{tier.bonus}</span>}
                  <span className="tier-price-pill">{tier.price}</span>
                </div>
              ))}
            </div>

            {/* Security Notice */}
            <div className="recharge-security-row">
              <ShieldCheck size={14} className="shield-green" />
              <span>Paiement sécurisé chiffré par Stripe & Apple Pay</span>
            </div>

            {/* Pay Button */}
            <button 
              className="neu-button recharge-submit-btn"
              onClick={handleSimulatePayment}
              disabled={isProcessing}
            >
              <CreditCard size={15} />
              <span>
                {isProcessing ? "CONNEXION BANCAIRE..." : `RECHARGER ${selectedTier.tokens} W-TOKENS (${selectedTier.price})`}
              </span>
            </button>
          </>
        ) : (
          <div className="recharge-success-stage">
            <div className="success-check-circle">
              <Check size={28} />
            </div>
            <h3 className="success-heading">PAIEMENT ACCEPTÉ !</h3>
            <p className="success-desc">
              +<strong>{selectedTier.tokens.toLocaleString()}</strong> W-Tokens crédités sur votre compte.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
