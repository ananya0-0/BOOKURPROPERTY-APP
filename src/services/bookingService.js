import API from './api';

export const createBooking = async (data) => {
  const { data: res } = await API.post('/api/appointments/book', data);
  return res;
};

export const getMyBookings = async (params = {}) => {
  const { data: res } = await API.get('/api/appointments/my-appointments', { params });
  return res;
};

export const getBooking = async (id) => {
  const { data: res } = await API.get(`/api/appointments/${id}`);
  return res;
};

export const rescheduleBooking = async (id, newSlotId) => {
  const { data: res } = await API.patch(`/api/appointments/${id}/reschedule`, { newSlotId });
  return res;
};

export const cancelBooking = async (id, reason) => {
  const { data: res } = await API.delete(`/api/appointments/${id}/cancel`, { data: { reason } });
  return res;
};

export const getAvailableSlots = async (propertyId, date) => {
  const { data: res } = await API.get(`/api/properties/${propertyId}/available-slots`, {
    params: { date },
  });
  return res;
};
