import React from 'react';

const statusStyles = {
  pending: { bg: '#DBEAFE', color: '#1E40AF' },
  confirmed: { bg: '#D1FAE5', color: '#065F46' },
  completed: { bg: '#F3F4F6', color: '#374151' },
  cancelled: { bg: '#FEE2E2', color: '#991B1B' },
  upcoming: { bg: '#FEF3C7', color: '#92400E' },
};

export default function Badge({ status, children }) {
  const style = statusStyles[status?.toLowerCase()] || { bg: '#F3F4F6', color: '#374151' };

  return (
    <span style={{
      display: 'inline-block', padding: '2px 10px', borderRadius: 12,
      fontSize: 12, fontWeight: 500, background: style.bg, color: style.color,
    }}>
      {children || status}
    </span>
  );
}
