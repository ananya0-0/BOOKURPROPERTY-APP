export const RESIDENTIAL_TYPE_LABELS = {
  FLAT_APARTMENT: 'Flat / Apartment',
  INDEPENDENT_HOUSE_VILLA: 'Independent House / Villa',
  INDEPENDENT_BUILDER_FLOOR: 'Builder Floor',
  PLOT_LAND: 'Plot / Land',
  ONE_RK_STUDIO_APARTMENT: '1 RK / Studio',
  SERVICED_APARTMENT: 'Serviced Apartment',
  FARMHOUSE: 'Farmhouse',
  OTHER: 'Other',
};

export const COMMERCIAL_TYPE_LABELS = {
  OFFICE: 'Office',
  RETAIL: 'Retail',
  PLOT_LAND: 'Commercial Land',
  INDUSTRIAL_STORAGE: 'Industrial / Storage',
  HOSPITALITY: 'Hospitality',
  HEALTHCARE: 'Healthcare',
  EDUCATION: 'Education',
  ENTERTAINMENT: 'Entertainment',
  INFRASTRUCTURE: 'Infrastructure',
  LOGISTICS_PARK: 'Logistics Park',
};

export const INTENT_LABELS = {
  SALE: 'Sale',
  RENT_LEASE: 'Rent / Lease',
  PG: 'PG / Paying Guest',
};

export const getTypeLabel = (property) => {
  if (property.category === 'COMMERCIAL') return property.propertySubType?.replace(/_/g, ' ') || COMMERCIAL_TYPE_LABELS[property.type] || property.type;
  return RESIDENTIAL_TYPE_LABELS[property.type] || property.type;
}
