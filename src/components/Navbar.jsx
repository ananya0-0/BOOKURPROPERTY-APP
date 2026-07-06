import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 24px', background: '#fff', borderBottom: '1px solid var(--border)',
    }}>
      <h2 style={{ color: 'var(--primary)', margin: 0, cursor: 'pointer' }}
          onClick={() => navigate('/')}>BookUrProperty</h2>
      <div style={{ display: 'flex', gap: 12 }}>
        {token ? (
          <>
            <button style={linkStyle} onClick={() => navigate('/my-bookings')}>My Bookings</button>
            <button style={linkStyle} onClick={() => { localStorage.clear(); navigate('/login'); }}>Logout</button>
          </>
        ) : (
          <button style={linkStyle} onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  background: 'none', border: 'none', color: 'var(--text)', fontSize: 14,
  cursor: 'pointer', fontWeight: 500,
};