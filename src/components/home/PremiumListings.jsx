import React from 'react';
import SectionCarousel from './SectionCarousel';
import { formatPrice } from '../../utils/formatters';

const SPONSORED = [
  { name: 'Skyline Greens', location: 'Vijay Nagar, Indore', price: 12000000, config: '3 BHK', area: '1,850 sq.ft', builder: 'Sapphire Group' },
  { name: 'The Vermont', location: 'Koregaon Park, Pune', price: 24000000, config: '4 BHK', area: '2,650 sq.ft', builder: 'Marvel Realty' },
  { name: 'Lake Vista Residences', location: 'Shyamla Hills, Bhopal', price: 8500000, config: '2 BHK', area: '1,240 sq.ft', builder: 'Lakehouse Developers' },
  { name: 'Imperial Court', location: 'Satellite, Ahmedabad', price: 16000000, config: '3 BHK', area: '1,980 sq.ft', builder: 'Imperial Group' },
  { name: 'Orchid Heights', location: 'Whitefield, Bangalore', price: 31000000, config: '4 BHK', area: '3,100 sq.ft', builder: 'Orchid Estates' },
];

export default function PremiumListings() {
  return (
    <SectionCarousel title="Sponsored" subtitle="Premium listings">
      {SPONSORED.map((item, i) => (
        <div key={i} style={{
          minWidth: 280, scrollSnapAlign: 'start',
          borderRadius: 'var(--radius-md)', overflow: 'hidden',
          boxShadow: 'var(--shadow)', background: '#fff', flexShrink: 0,
        }}>
          <div style={{
            height: 160, background: 'linear-gradient(135deg, var(--primary-light), #E8E0FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48,
          }}>🏡</div>
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 11, background: '#FEF3C7', padding: '2px 6px', borderRadius: 6, fontWeight: 600, color: '#92400E' }}>Premium</span>
              <span style={{ fontSize: 11, color: 'var(--success)', fontWeight: 600 }}>✓ Verified</span>
            </div>
            <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--primary)', margin: '0 0 4px' }}>{formatPrice(item.price)}</p>
            <p style={{ fontSize: 15, fontWeight: 600, margin: '0 0 2px' }}>{item.name}</p>
            <p style={{ fontSize: 12, color: 'var(--text-light)', margin: '0 0 6px' }}>{item.location}</p>
            <p style={{ fontSize: 12, color: 'var(--text-light)', margin: 0 }}>{item.config} · {item.area}</p>
          </div>
        </div>
      ))}
    </SectionCarousel>
  );
}
