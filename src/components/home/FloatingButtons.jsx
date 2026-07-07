import React from 'react';

export default function FloatingButtons() {
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', flexDirection: 'column', gap: 12, zIndex: 1000 }}>
      <a
        href="https://wa.me/918602269066?text=Hi!%20I'm%20interested%20in%20a%20property"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: 52, height: 52, borderRadius: '50%',
          background: '#25D366', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          textDecoration: 'none', fontSize: 24,
        }}
        title="Chat on WhatsApp"
      >
        💬
      </a>
      <a
        href="tel:+918602269066"
        style={{
          width: 52, height: 52, borderRadius: '50%',
          background: 'var(--primary)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          textDecoration: 'none', fontSize: 24,
        }}
        title="Call us"
      >
        📞
      </a>
    </div>
  );
}
