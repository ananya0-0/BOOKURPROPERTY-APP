import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import Badge from '../components/shared/Badge';

const MOCK_BOOKINGS = [
  { id: 1, property: 'Skyview Residency', date: '2026-07-10', time: '10:00 AM', status: 'upcoming', agent: 'Priya Sharma' },
  { id: 2, property: 'Greenwood Apartments', date: '2026-06-28', time: '2:00 PM', status: 'completed', agent: 'Amit Verma' },
  { id: 3, property: 'Lakeview Villa', date: '2026-06-25', time: '4:00 PM', status: 'cancelled', agent: 'Neha Gupta' },
];

export default function MyBookings() {
  const [bookings] = useState(MOCK_BOOKINGS);
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h1 style={{ marginBottom: 24 }}>My Bookings</h1>

      {bookings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 48 }}>
          <p style={{ color: 'var(--text-light)', marginBottom: 16 }}>No bookings yet.</p>
          <Button onClick={() => navigate('/')}>Browse Properties</Button>
        </div>
      ) : (
        bookings.map(b => (
          <div key={b.id} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: 16, border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)', marginBottom: 12, background: '#fff',
          }}>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: 16 }}>{b.property}</h3>
              <p style={{ margin: '0 0 4px', color: 'var(--text-light)', fontSize: 13 }}>
                {new Date(b.date).toLocaleDateString('en-IN', {
                  weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
                })} at {b.time}
              </p>
              <p style={{ margin: '0 0 6px', fontSize: 12, color: 'var(--text-light)' }}>
                Agent: {b.agent}
              </p>
              <Badge status={b.status}>{b.status}</Badge>
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
