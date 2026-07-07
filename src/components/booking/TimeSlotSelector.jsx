import React from 'react';

const DEFAULT_SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export default function TimeSlotSelector({ date, time, onChange, slots }) {
  const timeSlots = slots || DEFAULT_SLOTS;

  return (
    <div>
      {date && (
        <p style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 12 }}>
          Available slots for {new Date(date).toLocaleDateString('en-IN', {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
          })}
        </p>
      )}
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Select Time</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {timeSlots.map(t => (
          <div
            key={t}
            onClick={() => onChange(t)}
            style={{
              padding: 12, textAlign: 'center', borderRadius: 'var(--radius-sm)',
              border: `1px solid ${time === t ? 'var(--primary)' : 'var(--border)'}`,
              background: time === t ? 'var(--primary-light)' : '#fff',
              cursor: 'pointer', fontWeight: time === t ? 600 : 400,
              color: time === t ? 'var(--primary)' : 'var(--text)',
            }}
          >{t}</div>
        ))}
      </div>
    </div>
  );
}
