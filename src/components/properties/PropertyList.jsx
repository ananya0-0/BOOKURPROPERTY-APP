import React from 'react';
import PropertyCard from './PropertyCard';

export default function PropertyList({ properties }) {
  if (!properties?.length) {
    return (
      <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: 48 }}>
        No properties found.
      </p>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 20,
    }}>
      {properties.map(p => <PropertyCard key={p.id} property={p} />)}
    </div>
  );
}
