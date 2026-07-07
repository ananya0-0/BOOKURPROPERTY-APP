import React, { useState, useMemo } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryTabs from '../components/home/CategoryTabs';
import SearchBar from '../components/home/SearchBar';
import PropertyTypeGrid from '../components/home/PropertyTypeGrid';
import BestChoice from '../components/home/BestChoice';
import RecommendedProperties from '../components/home/RecommendedProperties';
import PremiumListings from '../components/home/PremiumListings';
import VerifiedBuilders from '../components/home/VerifiedBuilders';
import HighDemandLocalities from '../components/home/HighDemandLocalities';
import RecommendedSellers from '../components/home/RecommendedSellers';
import Testimonials from '../components/home/Testimonials';
import PostPropertyCTA from '../components/home/PostPropertyCTA';
import AppDownload from '../components/home/AppDownload';
import FloatingButtons from '../components/home/FloatingButtons';
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

        <BestChoice />
        <RecommendedProperties />
        <PremiumListings />
        <VerifiedBuilders />
        <HighDemandLocalities />
        <RecommendedSellers />
        <Testimonials />
        <PostPropertyCTA />
        <AppDownload />
        <FloatingButtons />

        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>All Properties</h2>
          <p style={{ fontSize: 13, color: 'var(--text-light)', margin: 0 }}>Browse our complete listing</p>
        </div>
        <PropertyList properties={filtered} />
      </div>
    </div>
  );
}
