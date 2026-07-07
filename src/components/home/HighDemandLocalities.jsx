import React from 'react';
import SectionCarousel from './SectionCarousel';
import { useNavigate } from 'react-router-dom';

const LOCALITIES = [
  { name: 'Arera Colony', city: 'Bhopal', listings: 38, yoy: '+9%', amenities: ['🏫 Schools', '🏥 Hospitals', '🚌 Connected'] },
  { name: 'Shyamla Hills', city: 'Bhopal', listings: 24, yoy: '+6%', amenities: ['🌳 Green', '🏥 Hospitals', '🚌 Connected'] },
  { name: 'Hoshangabad Road', city: 'Bhopal', listings: 51, yoy: '+12%', amenities: ['🚇 Metro', '🏫 Schools', '🛒 Markets'] },
  { name: 'Kolar Road', city: 'Bhopal', listings: 29, yoy: '+7%', amenities: ['🏫 Schools', '🚌 Connected', '🛒 Markets'] },
  { name: 'Bawadiya Kalan', city: 'Bhopal', listings: 17, yoy: '+5%', amenities: ['🏥 Hospitals', '🌳 Green', '🚌 Connected'] },
  { name: 'Vijay Nagar', city: 'Indore', listings: 45, yoy: '+11%', amenities: ['🏫 Schools', '🛒 Markets', '🚌 Connected'] },
  { name: 'Whitefield', city: 'Bangalore', listings: 62, yoy: '+8%', amenities: ['🚇 Metro', '🏫 Schools', '🛒 IT Corridor'] },
];

export default function HighDemandLocalities() {
  const navigate = useNavigate();

  return (
    <SectionCarousel title="Market Trends" subtitle="High Demand Localities">
      {LOCALITIES.map((l, i) => (
        <div
          key={i}
          onClick={() => navigate(`/explore?cityName=${l.city}&localityName=${l.name}`)}
          style={{
            minWidth: 260, scrollSnapAlign: 'start',
            borderRadius: 'var(--radius-md)', overflow: 'hidden',
            boxShadow: 'var(--shadow)', background: '#fff', flexShrink: 0, cursor: 'pointer',
          }}
        >
          <div style={{
            height: 100, background: '#E8E0FF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, color: 'var(--text-light)',
          }}>📍 Map — {l.name}</div>
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{l.name}</p>
                <p style={{ fontSize: 12, color: 'var(--text-light)', margin: 0 }}>{l.city}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--primary)', margin: 0 }}>{l.listings}+</p>
                <p style={{ fontSize: 12, color: 'var(--success)', fontWeight: 600, margin: 0 }}>{l.yoy} YoY</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {l.amenities.map((a, j) => (
                <span key={j} style={{ fontSize: 11, color: 'var(--text-light)', background: 'var(--bg-gray)', padding: '2px 8px', borderRadius: 8 }}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </SectionCarousel>
  );
}
