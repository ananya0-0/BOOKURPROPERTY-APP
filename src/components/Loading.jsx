import React from 'react';

export default function Loading({ text = 'Loading...' }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      padding: 48, flexDirection: 'column', gap: 12
    }}>
      <div style={{
        width: 36, height: 36, border: '3px solid var(--border)',
        borderTopColor: 'var(--primary)', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <p style={{ color: 'var(--text-light)', fontSize: 14 }}>{text}</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}