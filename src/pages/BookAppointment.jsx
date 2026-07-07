import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import StepIndicator from '../components/StepIndicator';
import DateSelector from '../components/booking/DateSelector';
import TimeSlotSelector from '../components/booking/TimeSlotSelector';
import BookingReview from '../components/booking/BookingReview';

export default function BookAppointment() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleConfirm = () => {
    // TODO: call createBooking({ propertyId, date, time, notes })
    navigate(`/confirmation/${propertyId}`);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 24 }}>
      <button onClick={() => navigate(-1)} style={{
        background: 'none', border: 'none', color: 'var(--text-light)',
        fontSize: 14, cursor: 'pointer', marginBottom: 16, display: 'block',
      }}>← Back</button>

      <h2 style={{ marginBottom: 8 }}>Book Appointment</h2>
      <StepIndicator currentStep={step} />

      <div style={{ marginTop: 24 }}>
        {step === 0 && (
          <>
            <DateSelector date={date} onChange={setDate} />
            <div style={{ marginTop: 20 }}>
              <TimeSlotSelector date={date} time={time} onChange={setTime} />
            </div>
            <Button fullWidth style={{ marginTop: 24 }}
                    disabled={!date || !time} onClick={() => setStep(1)}>Next</Button>
          </>
        )}

        {step === 1 && (
          <>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Your Details</h3>
            <p style={{ color: 'var(--text-light)', margin: '0 0 4px' }}>Name: John Doe (from profile)</p>
            <p style={{ color: 'var(--text-light)', margin: '0 0 4px' }}>Phone: +91 9876543210</p>
            <p style={{ color: 'var(--text-light)', margin: 0 }}>Email: john@example.com</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <Button variant="secondary" onClick={() => setStep(0)}>Back</Button>
              <Button fullWidth onClick={() => setStep(2)}>Next</Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <BookingReview
              propertyName="Skyview Residency"
              date={date} time={time}
              notes={notes} onNotesChange={setNotes}
            />
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
              <Button fullWidth onClick={handleConfirm}>Confirm Booking</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
