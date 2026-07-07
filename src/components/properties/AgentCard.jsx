import React from 'react';

export default function AgentCard({ agent }) {
  if (!agent) return null;

  return (
    <div style={{
      padding: 16, border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)', marginBottom: 24,
    }}>
      <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'var(--text-light)' }}>Agent / Seller</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'var(--primary-light)', color: 'var(--primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 18,
        }}>{agent.name?.charAt(0)}</div>
        <div>
          <p style={{ margin: 0, fontWeight: 600 }}>{agent.name}</p>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-light)' }}>
            {agent.rating} ★ · {agent.listingsCount} listings
          </p>
        </div>
      </div>
    </div>
  );
}
