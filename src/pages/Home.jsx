import React, { useState, useMemo } from 'react';
import PropertyList from '../components/properties/PropertyList';
import PropertyFilter from '../components/properties/PropertyFilter';
import { MOCK_PROPERTIES } from '../data/mockProperties';

export default function Home() {
  const [search, setSearch] = useState('');
  const [intent, setIntent] = useState('');

  const filtered = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      const matchSearch = !search ||
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.location?.localityName?.toLowerCase().includes(search.toLowerCase()) ||
        p.location?.cityName?.toLowerCase().includes(search.toLowerCase());
      const matchIntent = !intent || p.intent === intent;
      return matchSearch && matchIntent;
    });
  }, [search, intent]);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Properties</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: 20, fontSize: 14 }}>
        {MOCK_PROPERTIES.length} properties available
      </p>
      <PropertyFilter
        search={search} onSearchChange={setSearch}
        intent={intent} onIntentChange={setIntent}
      />
      <PropertyList properties={filtered} />
    </div>
  );
}
