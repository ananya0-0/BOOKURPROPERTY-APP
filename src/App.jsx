import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import BookAppointment from './pages/BookAppointment';
import Confirmation from './pages/Confirmation';
import MyBookings from './pages/MyBookings';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/book/:propertyId" element={<BookAppointment />} />
        <Route path="/confirmation/:bookingId" element={<Confirmation />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}