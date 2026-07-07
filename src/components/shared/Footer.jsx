import React from 'react';
import { useNavigate } from 'react-router-dom';

const SOCIAL = ['Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'YouTube', 'Pinterest'];

const FOR_BUYERS = ['Buy a Home in Bhopal', 'All Properties', 'Flats', 'Builder Floors', 'Independent House', 'Plots/Land', 'Serviced Apartments', 'Studio Apartments/1 RK', 'Farm Houses', 'New Projects'];

const FOR_TENANTS = ['Rent a Home in Bhopal', 'All Properties', 'Flats', 'Builder Floors', 'Independent House', 'Serviced Apartments', 'PG for boys', 'PG for girls', 'Single Room PG', 'Double Sharing PG'];

const COMMERCIAL = ['All Properties', 'Ready to Move Office', 'Bare Shell Office', 'Co-working Spaces', 'Shops', 'Warehouses', 'Showrooms', 'Factory', 'Commercial Land', 'Agricultural/Farm Land'];

const TOP_AREAS = ['Katara Hills', 'Hoshangabad Road', 'Kolar Road', 'Bawadia Kalan', 'Ayodhya Bypass', 'Awadhpuri', 'Misrod', 'Salaiya', 'Arera Colony', 'Airport Road'];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ background: '#1F2937', color: '#D1D5DB', marginTop: 48 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 32, marginBottom: 32 }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 12, cursor: 'pointer' }}
                onClick={() => navigate('/')}>BookUrProperty</h3>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>
              India's trusted property platform. Verified listings, trusted agents, best deals.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SOCIAL.map(s => (
                <span key={s} style={{
                  width: 32, height: 32, borderRadius: '50%', background: '#374151',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, cursor: 'pointer', color: '#9CA3AF',
                }} title={s}>{s.charAt(0)}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>For Buyers</h4>
            {FOR_BUYERS.map((l, i) => (
              <p key={i} style={{ fontSize: 12, margin: '0 0 6px', cursor: 'pointer', color: '#9CA3AF' }}
                 onClick={() => navigate('/explore')}>{l}</p>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>For Tenants</h4>
            {FOR_TENANTS.map((l, i) => (
              <p key={i} style={{ fontSize: 12, margin: '0 0 6px', cursor: 'pointer', color: '#9CA3AF' }}
                 onClick={() => navigate('/explore')}>{l}</p>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Commercial</h4>
            {COMMERCIAL.map((l, i) => (
              <p key={i} style={{ fontSize: 12, margin: '0 0 6px', cursor: 'pointer', color: '#9CA3AF' }}
                 onClick={() => navigate('/explore')}>{l}</p>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Top Areas</h4>
            {TOP_AREAS.map((l, i) => (
              <p key={i} style={{ fontSize: 12, margin: '0 0 6px', cursor: 'pointer', color: '#9CA3AF' }}
                 onClick={() => navigate('/explore')}>{l}</p>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #374151', paddingTop: 20,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontSize: 12, color: '#6B7280',
        }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ cursor: 'pointer' }}>About</span>
            <span style={{ cursor: 'pointer' }}>Careers</span>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Testimonials</span>
            <span style={{ cursor: 'pointer' }}>Sitemap</span>
            <span style={{ cursor: 'pointer' }}>FAQ's</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: 32 }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: 32 }} />
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: '#6B7280', marginTop: 20, borderTop: '1px solid #374151', paddingTop: 20 }}>
          @2026 COPYRIGHT : Bookurproperty.com
        </p>
      </div>
    </footer>
  );
}
