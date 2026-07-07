import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertySpecs from './PropertySpecs';
import PropertyScore from './PropertyScore';
import AgentCard from './AgentCard';
import { formatPrice } from '../../utils/formatters';
import { getTypeLabel } from '../../data/propertyTypes';
import { getPropertyById } from '../../data/mockProperties';
import Button from '../shared/Button';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = getPropertyById(id);

  if (!property) {
    return (
      <div style={{ textAlign: 'center', padding: 48 }}>
        <h2>Property not found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <button onClick={() => navigate(-1)} style={{
        background: 'none', border: 'none', color: 'var(--text-light)',
        fontSize: 14, cursor: 'pointer', marginBottom: 16, display: 'block',
      }}>← Back</button>

      <div style={{
        height: 320, background: 'var(--primary-light)',
        borderRadius: 'var(--radius-md)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', marginBottom: 24,
      }}>
        <span style={{ color: 'var(--primary)' }}>[Property Images]</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 4px' }}>{property.title}</h1>
          <p style={{ color: 'var(--text-light)', margin: '0 0 4px' }}>
            {property.location?.localityName}, {property.location?.cityName}
          </p>
          <p style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 500, margin: 0 }}>
            {getTypeLabel(property)} · {property.intent === 'SALE' ? 'For Sale' : property.intent === 'RENT_LEASE' ? 'For Rent' : 'PG'}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
            {formatPrice(property.pricing?.price)}
          </p>
          {property.pricing?.maintenanceAmount && (
            <p style={{ fontSize: 13, color: 'var(--text-light)', margin: 0 }}>
              + {formatPrice(property.pricing.maintenanceAmount)}/mo maintenance
            </p>
          )}
        </div>
      </div>

      <PropertyScore score={property.score} />
      <PropertySpecs physical={property.physical} />
      <AgentCard agent={property.agent} />

      <Button fullWidth onClick={() => navigate(`/book/${property.id}`)}>
        Book Appointment
      </Button>
    </div>
  );
}
