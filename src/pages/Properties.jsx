import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';

const MOCK_PROPERTIES = [
  { id: 1, name: 'Skyview Residency', location: 'Whitefield, Bangalore', price: 8500000 },
  { id: 2, name: 'Greenwood Apartments', location: 'HSR Layout, Bangalore', price: 12000000 },
  { id: 3, name: 'Lakeview Villa', location: 'Electronic City, Bangalore', price: 9500000 },
];

export default function Properties() {
  const [properties, setProperties] = useState(MOCK_PROPERTIES);

  // useEffect(() => { getProperties().then(res => setProperties(res.data)) }, []);

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 24 }}>Properties</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
        {properties.map(p => <PropertyCard key={p.id} property={p} />)}
      </div>
    </div>
  );
}