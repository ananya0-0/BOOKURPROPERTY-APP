import React from 'react';

export default function Button({ children, variant = 'primary', onClick, fullWidth, disabled }) {
  const base = {
    padding: '12px 20px',
    borderRadius: 'var(--radius-sm)',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
  };
  const styles = {
    primary: { ...base, background: 'var(--primary)', color: '#fff' },
    secondary: { ...base, background: 'var(--primary-light)', color: 'var(--primary)' },
    danger: { ...base, background: 'var(--danger)', color: '#fff' },
  };
  return <button style={styles[variant]} onClick={onClick} disabled={disabled}>{children}</button>;
}