import React from 'react';
import { useNavigate } from 'react-router-dom';

const TYPES = [
  { icon: '🏢', label: 'Flat / Apartment', type: 'FLAT_APARTMENT' },
  { icon: '🏠', label: 'Independent House / Villa', type: 'INDEPENDENT_HOUSE_VILLA' },
  { icon: '🏡', label: 'Builder Floor', type: 'INDEPENDENT_BUILDER_FLOOR' },
  { icon: '🌳', label: 'Plot / Land', type: 'PLOT_LAND' },
  { icon: '🏛️', label: 'Commercial Office', type: 'OFFICE' },
  { icon: '🛏️', label: 'PG / Hostel', type: 'ONE_RK_STUDIO_APARTMENT' },
  { icon: '🏘️', label: 'Farmhouse', type: 'FARMHOUSE' },
  { icon: '🏪', label: 'Commercial Shop', type: 'RETAIL' },
];

export default function PropertyTypeGrid() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: 12, marginBottom: 32,
    }}>
      {TYPES.map(t => (
        <div
          key={t.type}
          onClick={() => navigate(`/explore?type=${t.type}`)}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: 20, background: '#fff', borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow)', cursor: 'pointer', transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</span>
          <span style={{ fontSize: 12, fontWeight: 500, textAlign: 'center', color: 'var(--text)' }}>
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}
