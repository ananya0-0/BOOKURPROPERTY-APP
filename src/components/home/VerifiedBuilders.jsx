import React from 'react';
import SectionCarousel from './SectionCarousel';

const BUILDERS = [
  { name: 'Sapphire Group', location: 'Indore', tag: 'Townships & high-rises', projects: 32 },
  { name: 'Marvel Realty', location: 'Pune', tag: 'Premium apartments', projects: 58 },
  { name: 'Imperial Group', location: 'Ahmedabad', tag: 'Commercial & retail', projects: 27 },
  { name: 'Orchid Estates', location: 'Bangalore', tag: 'Gated villa communities', projects: 41 },
  { name: 'Lakehouse Developers', location: 'Bhopal', tag: 'Lakefront residences', projects: 19 },
  { name: 'Fortune Builders', location: 'Bhopal', tag: 'Luxury duplexes', projects: 24 },
  { name: 'Acharaya Builders', location: 'Bhopal', tag: 'Affordable housing', projects: 16 },
  { name: 'Kalpataru Heights', location: 'Mumbai', tag: 'Sky residences', projects: 63 },
];

export default function VerifiedBuilders() {
  return (
    <SectionCarousel title="Vetted Partners" subtitle="Verified builders">
      {BUILDERS.map((b, i) => (
        <div key={i} style={{
          minWidth: 300, scrollSnapAlign: 'start',
          borderRadius: 'var(--radius-md)', overflow: 'hidden',
          boxShadow: 'var(--shadow)', background: '#fff', flexShrink: 0,
        }}>
          <div style={{
            height: 120, background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 40,
          }}>🏗️</div>
          <div style={{ padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--primary-light)', color: 'var(--primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 700, flexShrink: 0,
            }}>{b.name.charAt(0)}</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <p style={{ fontSize: 15, fontWeight: 600, margin: '0 0 2px' }}>{b.name}</p>
                <span style={{ fontSize: 11, color: 'var(--success)', fontWeight: 600 }}>✓ Verified</span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--text-light)', margin: '0 0 2px' }}>
                📍 {b.location} · {b.tag}
              </p>
              <p style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 500, margin: 0 }}>
                🏢 {b.projects} projects
              </p>
            </div>
          </div>
        </div>
      ))}
    </SectionCarousel>
  );
}
