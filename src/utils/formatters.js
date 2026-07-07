export const formatPrice = (price) => {
  if (!price && price !== 0) return '';
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  });
};

export const formatArea = (area, unit = 'SQ_FT') => {
  if (!area) return '';
  const unitMap = { SQ_FT: 'sq ft', SQ_YARDS: 'sq yd', SQ_M: 'sq m', ACRES: 'acres', MARLA: 'marla', CENTS: 'cents' };
  return `${area.toLocaleString('en-IN')} ${unitMap[unit] || unit}`;
};

export const formatAvailability = (status) => {
  const map = {
    READY_TO_MOVE: 'Ready to Move',
    UNDER_CONSTRUCTION: 'Under Construction',
    FROM_DATE: 'Available from Date',
  };
  return map[status] || status;
};