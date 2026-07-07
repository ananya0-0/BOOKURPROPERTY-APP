import React from 'react';

export default function PropertyScore({ score }) {
  if (!score) return null;
  const color = score >= 80 ? 'var(--success)' : score >= 60 ? 'var(--warning)' : 'var(--danger)';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        border: `3px solid ${color}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16, fontWeight: 700, color,
      }}>
        {score}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Property Score</p>
        <p style={{ margin: 0, fontSize: 12, color: 'var(--text-light)' }}>
          {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Average'}
        </p>
      </div>
    </div>
  );
}
