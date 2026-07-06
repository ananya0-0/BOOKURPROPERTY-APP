import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div style={{
      borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)',
      overflow: 'hidden', background: '#fff', cursor: 'pointer',
    }} onClick={() => navigate(`/property/${property.id}`)}>
      <div style={{ height: 180, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--primary)' }}>[Image]</span>
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: '0 0 4px', fontSize: 18 }}>{property.name}</h3>
        <p style={{ margin: '0 0 8px', color: 'var(--text-light)', fontSize: 14 }}>{property.location}</p>
        <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 700, fontSize: 18 }}>₹{property.price.toLocaleString()}</p>
      </div>
    </div>
  );
}