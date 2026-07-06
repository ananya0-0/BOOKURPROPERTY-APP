import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 500, margin: '80px auto', padding: 24, textAlign: 'center' }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%', background: '#D1FAE5',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px',
      }}>
        <span style={{ fontSize: 36, color: 'var(--success)' }}>✓</span>
      </div>
      <h2>Booking Confirmed!</h2>
      <p style={{ color: 'var(--text-light)' }}>Booking Reference: #BKP24001</p>
      <p style={{ color: 'var(--text-light)' }}>A confirmation has been sent to your phone.</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'center' }}>
        <Button variant="secondary" onClick={() => navigate('/my-bookings')}>My Bookings</Button>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    </div>
  );
}