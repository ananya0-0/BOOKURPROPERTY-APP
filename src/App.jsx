import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import BookAppointment from './pages/BookAppointment';
import Confirmation from './pages/Confirmation';
import MyBookings from './pages/MyBookings';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/book/:propertyId" element={<BookAppointment />} />
        <Route path="/confirmation/:bookingId" element={<Confirmation />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
}