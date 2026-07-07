import React from 'react';

export default function BookingReview({ property, date, time, notes, onNotesChange, propertyName }) {
  return (
    <div>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Review Booking</h3>
      <div style={{ background: 'var(--bg-gray)', padding: 16, borderRadius: 'var(--radius-md)', marginBottom: 16 }}>
        <p style={{ margin: '0 0 8px' }}><strong>Property:</strong> {propertyName || property?.title}</p>
        {date && <p style={{ margin: '0 0 8px' }}><strong>Date:</strong> {new Date(date).toLocaleDateString('en-IN', {
          weekday: 'short', day: 'numeric', month: 'long', year: 'numeric',
        })}</p>}
        <p style={{ margin: '0 0 8px' }}><strong>Time:</strong> {time}</p>
        <p style={{ margin: 0 }}><strong>Phone:</strong> +91 9876543210</p>
      </div>
      <div>
        <label style={{ fontSize: 14, fontWeight: 500, display: 'block', marginBottom: 4 }}>
          Any special requests? (optional)
        </label>
        <textarea
          value={notes}
          onChange={e => onNotesChange(e.target.value)}
          placeholder="e.g. I'd prefer a morning slot..."
          rows={3}
          style={{
            width: '100%', padding: 12, borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border)', fontSize: 14, outline: 'none',
            resize: 'vertical', fontFamily: 'inherit',
          }}
        />
      </div>
    </div>
  );
}
