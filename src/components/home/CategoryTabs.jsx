import React, { useState } from 'react';

const TABS = ['Buy', 'Rent', 'Commercial', 'Plots/Land', 'Projects', 'New Launch'];

export default function CategoryTabs({ activeTab, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: 4, marginBottom: 20, overflowX: 'auto',
      paddingBottom: 4,
    }}>
      {TABS.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            padding: '8px 20px', borderRadius: 20, border: '1px solid var(--primary)',
            background: activeTab === tab ? 'var(--primary)' : 'transparent',
            color: activeTab === tab ? '#fff' : 'var(--primary)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            whiteSpace: 'nowrap', transition: 'all 0.2s',
          }}
        >{tab}</button>
      ))}
    </div>
  );
}
