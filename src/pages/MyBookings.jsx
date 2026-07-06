import React, { useState } from 'react';
import Button from '../components/Button';

const MOCK_BOOKINGS = [
  { id: 1, property: 'Skyview Residency', date: '2026-07-10', time: '10:00 AM', status: 'upcoming' },
  { id: 2, property: 'Greenwood Apartments', date: '2026-06-28', time: '2:00 PM', status: 'completed' },
];

export default function MyBookings() {
  const [bookings] = useState(MOCK_BOOKINGS);

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h1 style={{ marginBottom: 24 }}>My Bookings</h1>
      {bookings.length === 0 ? (
        <p style={{ color: 'var(--text-light)', textAlign: 'center', marginTop: 48 }}>No bookings yet.</p>
      ) : (
        bookings.map(b => (
          <div key={b.id} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: 16, border: `1px solid var(--border)`, borderRadius: 'var(--radius-md)',
            marginBottom: 12, background: '#fff',
          }}>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: 16 }}>{b.property}</h3>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: 14 }}>{b.date} at {b.time}</p>
              <span style={{
                fontSize: 12, padding: '2px 8px', borderRadius: 12, marginTop: 4, display: 'inline-block',
                background: b.status === 'upcoming' ? '#FEF3C7' : '#D1FAE5',
                color: b.status === 'upcoming' ? '#92400E' : '#065F46',
              }}>{b.status}</span>
            </div>
            {b.status === 'upcoming' && (
              <div style={{ display: 'flex', gap: 8 }}>
                <Button variant="secondary" style={{ padding: '8px 16px', fontSize: 14 }}>Reschedule</Button>
                <Button variant="danger" style={{ padding: '8px 16px', fontSize: 14 }}>Cancel</Button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}