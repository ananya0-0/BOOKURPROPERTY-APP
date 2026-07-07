import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '24px', marginTop: 48,
      borderTop: '1px solid var(--border)', color: 'var(--text-light)', fontSize: 13,
    }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} BookUrProperty. All rights reserved.</p>
    </footer>
  );
}
