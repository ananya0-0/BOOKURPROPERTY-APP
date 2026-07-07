import React, { useRef } from 'react';

export default function SectionCarousel({ title, subtitle, children }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 4px' }}>
            {title}
          </p>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{subtitle}</h2>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => scroll(-1)} style={arrowStyle}>‹</button>
          <button onClick={() => scroll(1)} style={arrowStyle}>›</button>
        </div>
      </div>
      <div ref={scrollRef} style={{
        display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory',
        paddingBottom: 8, scrollbarWidth: 'none',
      }}>
        {children}
      </div>
    </div>
  );
}

const arrowStyle = {
  width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border)',
  background: '#fff', fontSize: 20, cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center', lineHeight: 1, color: 'var(--text)',
};
