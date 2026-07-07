import React from 'react';
import { INTENT_LABELS } from '../../data/propertyTypes';

export default function PropertyFilter({ intent, onIntentChange, search, onSearchChange }) {
  return (
    <div style={{
      display: 'flex', gap: 12, marginBottom: 24,
      flexWrap: 'wrap', alignItems: 'center',
    }}>
      <input
        type="text"
        placeholder="Search by locality, project..."
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        style={{
          flex: 1, minWidth: 200, padding: '10px 14px',
          borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)',
          fontSize: 14, outline: 'none',
        }}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        {['ALL', ...Object.keys(INTENT_LABELS)].map(key => (
          <button
            key={key}
            onClick={() => onIntentChange(key === 'ALL' ? '' : key)}
            style={{
              padding: '8px 16px', borderRadius: 20, border: '1px solid var(--border)',
              background: intent === key || (key === 'ALL' && !intent) ? 'var(--primary)' : '#fff',
              color: intent === key || (key === 'ALL' && !intent) ? '#fff' : 'var(--text)',
              fontSize: 13, fontWeight: 500, cursor: 'pointer',
            }}
          >
            {key === 'ALL' ? 'All' : INTENT_LABELS[key]}
          </button>
        ))}
      </div>
    </div>
  );
}
