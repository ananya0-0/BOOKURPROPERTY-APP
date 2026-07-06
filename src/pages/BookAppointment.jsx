import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import StepIndicator from '../components/StepIndicator';

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export default function BookAppointment() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleConfirm = () => {
    // TODO: API.createBooking({ propertyId, date, time })
    navigate('/confirmation/1');
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 24 }}>
      <h2>Book Appointment</h2>
      <StepIndicator currentStep={step} />

      {step === 0 && (
        <>
          <h3>Select Date</h3>
          <input type="date" value={date} onChange={e => setDate(e.target.value)}
                 style={{ width: '100%', padding: 12, borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border)', fontSize: 16, marginBottom: 16 }} />
          <h3>Select Time</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {timeSlots.map(t => (
              <div key={t} onClick={() => setTime(t)} style={{
                padding: 12, textAlign: 'center', borderRadius: 'var(--radius-sm)',
                border: `1px solid ${time === t ? 'var(--primary)' : 'var(--border)'}`,
                background: time === t ? 'var(--primary-light)' : '#fff',
                cursor: 'pointer', color: time === t ? 'var(--primary)' : 'var(--text)',
              }}>{t}</div>
            ))}
          </div>
          <Button fullWidth style={{ marginTop: 24 }} onClick={() => setStep(1)}
                  disabled={!date || !time}>Next</Button>
        </>
      )}

      {step === 1 && (
        <>
          <h3>Your Details</h3>
          <p style={{ color: 'var(--text-light)' }}>Name: John Doe (from profile)</p>
          <p style={{ color: 'var(--text-light)' }}>Phone: +91 9876543210</p>
          <p style={{ color: 'var(--text-light)' }}>Email: john@example.com</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <Button variant="secondary" onClick={() => setStep(0)}>Back</Button>
            <Button fullWidth onClick={() => setStep(2)}>Next</Button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Review Booking</h3>
          <div style={{ background: 'var(--bg-gray)', padding: 16, borderRadius: 'var(--radius-md)', marginBottom: 16 }}>
            <p><strong>Property:</strong> Skyview Residency</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
            <Button fullWidth onClick={handleConfirm}>Confirm Booking</Button>
          </div>
        </>
      )}
    </div>
  );
}