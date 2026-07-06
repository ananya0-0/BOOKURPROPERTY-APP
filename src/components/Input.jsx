import React from 'react';

export default function Input({ label, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', marginBottom: 4, display: 'block' }}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
          border: `1px solid ${error ? 'var(--danger)' : 'var(--border)'}`,
          fontSize: 16, outline: 'none', boxSizing: 'border-box',
        }}
      />
      {error && <p style={{ color: 'var(--danger)', fontSize: 12, margin: '4px 0 0' }}>{error}</p>}
    </div>
  );
}