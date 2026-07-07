import React from 'react';

export default function AppDownload() {
  return (
    <div style={{
      borderRadius: 'var(--radius-md)', overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--primary-light) 0%, #E8E0FF 100%)',
      padding: '40px 32px', marginBottom: 40,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 24,
    }}>
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px', color: 'var(--text)' }}>
          Your next home, in your pocket
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-light)', margin: '0 0 20px', maxWidth: 420 }}>
          Get instant alerts the moment a new home hits the market, keep your saved searches in sync across every device, and chat with owners on the go.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="App Store"
            style={{ height: 40, cursor: 'pointer' }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={{ height: 40, cursor: 'pointer' }}
          />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 120, height: 120, background: '#fff',
          borderRadius: 'var(--radius-sm)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 8px', boxShadow: 'var(--shadow)',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-light)', textAlign: 'center', padding: 8 }}>
            QR Code<br />Scan to<br />Download
          </span>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-light)', margin: 0 }}>Scan to download</p>
      </div>
    </div>
  );
}
