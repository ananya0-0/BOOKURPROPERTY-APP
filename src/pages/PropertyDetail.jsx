import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const MOCK = { id: 1, name: 'Skyview Residency', location: 'Whitefield, Bangalore', price: 8500000,
  description: '2 BHK apartment with modern amenities. 1200 sq ft. Gated community with pool, gym, park.' };

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <div style={{ height: 300, background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--primary)', fontSize: 18 }}>[Property Images]</span>
      </div>
      <h1 style={{ margin: '16px 0 4px' }}>{MOCK.name}</h1>
      <p style={{ color: 'var(--text-light)', margin: '0 0 16px' }}>{MOCK.location}</p>
      <p style={{ fontSize: 24, fontWeight: 700, color: 'var(--primary)' }}>₹{MOCK.price.toLocaleString()}</p>
      <p style={{ lineHeight: 1.6, color: 'var(--text)' }}>{MOCK.description}</p>
      <Button fullWidth style={{ marginTop: 24 }} onClick={() => navigate(`/book/${id}`)}>
        Book Appointment
      </Button>
    </div>
  );
}