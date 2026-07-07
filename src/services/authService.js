import API from './api';

export const requestOtp = (email) =>
  API.post('/api/auth/email/start', { email });

export const verifyOtp = (otpFlowToken, code) =>
  API.post('/api/auth/email/verify', { otpFlowToken, code });

export const logout = () => API.post('/api/auth/logout');