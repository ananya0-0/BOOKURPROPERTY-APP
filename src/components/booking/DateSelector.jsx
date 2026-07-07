import React from 'react';

export default function DateSelector({ date, onChange }) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Select Date</h3>
      <input
        type="date"
        value={date}
        min={today}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%', padding: 12, borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border)', fontSize: 16, outline: 'none',
        }}
      />
      {date && (
        <p style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 8 }}>
          Selected: {new Date(date).toLocaleDateString('en-IN', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
          })}
        </p>
      )}
    </div>
  );
}
