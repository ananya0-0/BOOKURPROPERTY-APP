import React from 'react';
import SectionCarousel from './SectionCarousel';

const SELLERS = [
  { name: 'Priya Sharma', role: 'Senior Property Advisor', city: 'Indore', rating: 4.5, deals: 128, image: '👩‍💼' },
  { name: 'Amit Verma', role: 'Real Estate Consultant', city: 'Pune', rating: 4.8, deals: 215, image: '👨‍💼' },
  { name: 'Neha Gupta', role: 'Property Manager', city: 'Bangalore', rating: 4.2, deals: 89, image: '👩‍💼' },
  { name: 'Rohan Desai', role: 'Commercial Specialist', city: 'Mumbai', rating: 4.6, deals: 167, image: '👨‍💼' },
  { name: 'Sneha Kapoor', role: 'First-time Buyer Expert', city: 'Delhi', rating: 4.7, deals: 143, image: '👩‍💼' },
  { name: 'Karan Mehta', role: 'NRI Investment Advisor', city: 'Hyderabad', rating: 4.4, deals: 96, image: '👨‍💼' },
];

export default function RecommendedSellers() {
  return (
    <SectionCarousel title="Trusted Professionals" subtitle="Recommended Sellers">
      {SELLERS.map((s, i) => (
        <div key={i} style={{
          minWidth: 240, scrollSnapAlign: 'start',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow)', background: '#fff', flexShrink: 0,
          padding: 20, textAlign: 'center',
        }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{s.image}</div>
          <p style={{ fontSize: 15, fontWeight: 600, margin: '0 0 2px' }}>{s.name}</p>
          <p style={{ fontSize: 12, color: 'var(--text-light)', margin: '0 0 4px' }}>{s.role}</p>
          <p style={{ fontSize: 12, color: 'var(--text-light)', margin: '0 0 8px' }}>📍 {s.city}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 12, color: 'var(--text-light)' }}>
            <span>⭐ {s.rating}</span>
            <span>✅ {s.deals} deals</span>
          </div>
        </div>
      ))}
    </SectionCarousel>
  );
}
