import React from 'react';

export default function HeroSection() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
      padding: '64px 24px', textAlign: 'center', color: '#fff',
      borderRadius: '0 0 24px 24px', marginBottom: 32,
    }}>
      <h1 style={{
        fontSize: 36, fontWeight: 800, margin: '0 0 12px',
        lineHeight: 1.2, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
      }}>
        FIND YOUR DREAM SPACE WITH<br />BOOKURPROPERTY
      </h1>
      <p style={{ fontSize: 16, opacity: 0.9, margin: '0 0 32px', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
        Verified listings, trusted agents, and the best deals — all in one place across India.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
        {[
          { value: '10K+', label: 'Properties' },
          { value: '50+', label: 'Cities' },
          { value: '100%', label: 'Verified' },
        ].map(s => (
          <div key={s.label}>
            <p style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>{s.value}</p>
            <p style={{ fontSize: 13, opacity: 0.8, margin: '4px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
