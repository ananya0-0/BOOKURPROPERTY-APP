import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 24px', background: '#fff',
      borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100,
    }}>
      <h2 style={{ color: 'var(--primary)', margin: 0, cursor: 'pointer', fontSize: 20 }}
          onClick={() => navigate('/')}>BookUrProperty</h2>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <button style={linkStyle} onClick={() => navigate('/')}>Home</button>
        {token && (
          <button style={linkStyle} onClick={() => navigate('/my-bookings')}>My Bookings</button>
        )}
        {token ? (
          <button style={linkStyle} onClick={handleLogout}>Logout</button>
        ) : (
          <button style={{
            ...linkStyle, background: 'var(--primary)', color: '#fff',
            padding: '8px 16px', borderRadius: 'var(--radius-sm)',
          }} onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  background: 'none', border: 'none', color: 'var(--text)', fontSize: 14,
  cursor: 'pointer', fontWeight: 500,
};
