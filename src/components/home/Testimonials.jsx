import React from 'react';
import SectionCarousel from './SectionCarousel';

const TESTIMONIALS = [
  { name: 'Rahul Verma', role: 'Home Buyer', location: 'Mumbai', text: 'Found my dream home within a week. The verified listings saved me from all the usual broker headaches.', emoji: '👨' },
  { name: 'Sneha Kapoor', role: 'First-Time Buyer', location: 'Bangalore', text: 'As a first-time buyer I was nervous, but the team guided me through every step. Highly recommend!', emoji: '👩' },
  { name: 'Amit Patel', role: 'NRI Investor', location: 'Hyderabad', text: 'Invested from abroad without any hassle. The virtual tours and digital paperwork made it possible.', emoji: '👨' },
  { name: 'Priya Nair', role: 'Property Seller', location: 'Chennai', text: 'Sold my property in 2 weeks at the right price. The platform brought genuine buyers instantly.', emoji: '👩' },
  { name: 'Karan Mehta', role: 'NRI Buyer', location: 'Pune', text: 'Seamless experience for NRIs. The team handled time zone differences and documentation flawlessly.', emoji: '👨' },
  { name: 'Divya Menon', role: 'First-Time Buyer', location: 'Bhopal', text: 'Finally a property site that actually verifies listings. No fake posts, no wasted time.', emoji: '👩' },
];

export default function Testimonials() {
  return (
    <SectionCarousel title="Real Stories" subtitle="Hear From Our Clients">
      {TESTIMONIALS.map((t, i) => (
        <div key={i} style={{
          minWidth: 320, scrollSnapAlign: 'start',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow)', background: '#fff', flexShrink: 0,
          padding: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'var(--primary-light)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: 22,
            }}>{t.emoji}</div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{t.name}</p>
              <p style={{ fontSize: 12, color: 'var(--text-light)', margin: 0 }}>{t.role} · {t.location}</p>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text)', margin: 0, fontStyle: 'italic' }}>
            "{t.text}"
          </p>
        </div>
      ))}
    </SectionCarousel>
  );
}
