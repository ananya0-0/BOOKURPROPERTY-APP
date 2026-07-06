import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.length === 10) setShowOtp(true);
  };

  const handleVerify = () => {
    // TODO: Call API.login({ phone, otp })
    localStorage.setItem('token', 'fake-token');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', padding: 24 }}>
      <h1 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: 32 }}>BookUrProperty</h1>
      {!showOtp ? (
        <>
          <Input label="Phone Number" type="tel" value={phone}
                 onChange={e => setPhone(e.target.value)} placeholder="Enter 10-digit number" />
          <Button fullWidth onClick={handleSendOtp}>Send OTP</Button>
          <div style={{ margin: '16px 0', textAlign: 'center', color: 'var(--text-light)' }}>or</div>
          <Button variant="secondary" fullWidth>Continue with Google</Button>
          <Button variant="secondary" fullWidth style={{ marginTop: 8 }}>Continue with Email</Button>
        </>
      ) : (
        <>
          <Input label="Enter OTP" type="text" value={otp}
                 onChange={e => setOtp(e.target.value)} placeholder="6-digit OTP" />
          <Button fullWidth onClick={handleVerify}>Verify & Login</Button>
        </>
      )}
    </div>
  );
}