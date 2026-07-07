import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, formatArea } from '../../utils/formatters';
import { getTypeLabel } from '../../data/propertyTypes';

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/property/${property.id}`)}
      style={{
        borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)',
        background: '#fff', overflow: 'hidden', cursor: 'pointer',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow)'}
    >
      <div style={{
        height: 180, background: 'var(--primary-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <span style={{ color: 'var(--primary)', fontSize: 14 }}>[Image]</span>
        {property.score && (
          <span style={{
            position: 'absolute', top: 12, right: 12,
            background: 'var(--primary)', color: '#fff',
            padding: '2px 8px', borderRadius: 12, fontSize: 12, fontWeight: 600,
          }}>{property.score}</span>
        )}
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>{property.title}</h3>
        <p style={{ margin: '0 0 4px', color: 'var(--text-light)', fontSize: 13 }}>
          {property.location?.localityName}, {property.location?.cityName}
        </p>
        <p style={{ margin: '0 0 8px', color: 'var(--primary)', fontSize: 12, fontWeight: 500 }}>
          {getTypeLabel(property)} · {property.intent}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 18 }}>
            {formatPrice(property.pricing?.price)}
          </span>
          {property.physical?.bedrooms && (
            <span style={{ fontSize: 13, color: 'var(--text-light)' }}>
              {property.physical.bedrooms} BHK
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
