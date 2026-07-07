import React from 'react';
import SectionCarousel from './SectionCarousel';
import { formatPrice } from '../../utils/formatters';
import { MOCK_PROPERTIES } from '../../data/mockProperties';

export default function RecommendedProperties() {
  return (
    <SectionCarousel title="Picked For You" subtitle="Recommended Property">
      {MOCK_PROPERTIES.map((item, i) => (
        <div key={i} style={{
          minWidth: 260, scrollSnapAlign: 'start',
          borderRadius: 'var(--radius-md)', overflow: 'hidden',
          boxShadow: 'var(--shadow)', background: '#fff', flexShrink: 0, cursor: 'pointer',
        }}>
          <div style={{
            height: 140, background: 'var(--primary-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
          }}>{item.type === 'FLAT_APARTMENT' ? '🏢' : item.type === 'INDEPENDENT_HOUSE_VILLA' ? '🏠' : item.type === 'OFFICE' ? '🏛️' : '🌳'}</div>
          <div style={{ padding: 12 }}>
            <p style={{ fontSize: 16, fontWeight: 700, margin: '0 0 2px' }}>{formatPrice(item.pricing?.price)}</p>
            <p style={{ fontSize: 14, fontWeight: 500, margin: '0 0 2px' }}>{item.title}</p>
            <p style={{ fontSize: 12, color: 'var(--text-light)', margin: '0 0 4px' }}>{item.location?.localityName}, {item.location?.cityName}</p>
            <p style={{ fontSize: 12, color: 'var(--text-light)', margin: 0 }}>
              {item.physical?.bedrooms && `${item.physical.bedrooms} BHK · `}
              {item.physical?.superBuiltUpArea || item.physical?.carpetArea || item.physical?.builtUpArea} sq.ft
            </p>
          </div>
        </div>
      ))}
    </SectionCarousel>
  );
}
