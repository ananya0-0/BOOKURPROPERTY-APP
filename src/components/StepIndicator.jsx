import React from 'react';

const steps = ['Date & Time', 'Details', 'Confirm'];

export default function StepIndicator({ currentStep }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 0, margin: '24px 0' }}>
      {steps.map((label, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: i <= currentStep ? 'var(--primary)' : 'var(--border)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 600, margin: '0 auto',
            }}>{i + 1}</div>
            <p style={{ fontSize: 12, margin: '4px 0 0', color: i <= currentStep ? 'var(--primary)' : 'var(--text-light)' }}>{label}</p>
          </div>
          {i < steps.length - 1 && <div style={{
            width: 60, height: 2, background: i < currentStep ? 'var(--primary)' : 'var(--border)',
            marginBottom: 20,
          }} />}
        </div>
      ))}
    </div>
  );
}