import React from 'react';
import { formatArea, formatAvailability } from '../../utils/formatters';

export default function PropertySpecs({ physical }) {
  if (!physical) return null;

  const rows = [
    { label: 'Bedrooms', value: physical.bedrooms },
    { label: 'Bathrooms', value: physical.bathrooms },
    { label: 'Balconies', value: physical.balconies },
    { label: 'Carpet Area', value: formatArea(physical.carpetArea, physical.plotAreaUnit) },
    { label: 'Built-up Area', value: formatArea(physical.builtUpArea, physical.plotAreaUnit) },
    { label: 'Super Built-up', value: formatArea(physical.superBuiltUpArea, physical.plotAreaUnit) },
    { label: 'Plot Area', value: formatArea(physical.plotArea, physical.plotAreaUnit) },
    { label: 'Total Floors', value: physical.totalFloors },
    { label: 'Floor No.', value: physical.propertyOnFloor?.join(', ') },
    { label: 'Car Parking', value: physical.coveredParking ? `${physical.coveredParking} covered` : 'N/A' },
    { label: 'Availability', value: formatAvailability(physical.availability) },
    { label: 'Age', value: physical.ageBracket?.replace(/_/g, ' ') },
    { label: 'Lift', value: physical.hasLift ? 'Yes' : 'No' },
  ].filter(r => r.value);

  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Specifications</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
        {rows.map(r => (
          <div key={r.label} style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '8px 12px', background: 'var(--bg-gray)',
            borderRadius: 'var(--radius-sm)', fontSize: 14,
          }}>
            <span style={{ color: 'var(--text-light)' }}>{r.label}</span>
            <span style={{ fontWeight: 500 }}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
