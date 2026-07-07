import React, { useState, useMemo } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryTabs from '../components/home/CategoryTabs';
import SearchBar from '../components/home/SearchBar';
import PropertyTypeGrid from '../components/home/PropertyTypeGrid';
import PropertyList from '../components/properties/PropertyList';
import { MOCK_PROPERTIES } from '../data/mockProperties';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Buy');
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      const matchCity = !city || p.location?.cityName?.toLowerCase() === city.toLowerCase();
      const matchSearch = !searchQuery ||
        p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location?.localityName?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchSearch;
    });
  }, [city, searchQuery]);

  const handleSearch = () => {
    setSearchQuery(`${propertyType} ${city}`.trim());
  };

  return (
    <div>
      <HeroSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SearchBar
          city={city} propertyType={propertyType}
          onCityChange={setCity} onTypeChange={setPropertyType}
          onSearch={handleSearch}
        />

        <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

        <PropertyTypeGrid />

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Properties</h2>
        <PropertyList properties={filtered} />
      </div>
    </div>
  );
}
