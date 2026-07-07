import React from 'react';

const PROPERTY_TYPES = [
  'Flat/Apartment', 'Residential Land', 'Serviced Apartments',
  'Independent/Builder Floor', '1 RK/Studio Apartment', 'Other',
  'Independent House/Villa', 'Farm House',
];

const CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Bhopal', 'Indore'];

export default function SearchBar({ city, propertyType, onCityChange, onTypeChange, onSearch }) {
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'center',
      flexWrap: 'wrap', marginBottom: 24,
      padding: 16, background: '#fff', borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow)',
    }}>
      <select
        value={propertyType}
        onChange={e => onTypeChange(e.target.value)}
        style={{
          flex: 1, minWidth: 180, padding: '10px 12px', borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border)', fontSize: 14, background: '#fff',
        }}
      >
        <option value="">Property Type</option>
        {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <select
        value={city}
        onChange={e => onCityChange(e.target.value)}
        style={{
          flex: 1, minWidth: 150, padding: '10px 12px', borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border)', fontSize: 14, background: '#fff',
        }}
      >
        <option value="">Select City</option>
        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button
        onClick={onSearch}
        style={{
          padding: '10px 28px', background: 'var(--primary)', color: '#fff',
          border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 14,
          fontWeight: 600, cursor: 'pointer',
        }}
      >SEARCH</button>
    </div>
  );
}
