import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostPropertyCTA() {
  const navigate = useNavigate();

  return (
    <div style={{
      borderRadius: 'var(--radius-md)', overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
      padding: '40px 32px', marginBottom: 40, color: '#fff',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 24,
    }}>
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px' }}>
          List your property for FREE
        </h2>
        <p style={{ fontSize: 14, opacity: 0.9, margin: '0 0 16px', maxWidth: 400 }}>
          Reach thousands of verified buyers in your city. No listing fee, no catch.
        </p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: 13, opacity: 0.85 }}>
          <span>⏱️ Post in 2 minutes</span>
          <span>👥 Genuine buyers only</span>
          <span>💰 No listing fee</span>
        </div>
      </div>
      <button
        onClick={() => navigate('/post-property')}
        style={{
          padding: '14px 32px', background: '#fff', color: 'var(--primary)',
          border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 15,
          fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap',
        }}
      >
        Post your property →
      </button>
    </div>
  );
}
