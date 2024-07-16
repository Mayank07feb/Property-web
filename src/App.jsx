// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import ContactUs from './pages/ContactUs';
import ScheduleVisit from './pages/ScheduleVisit';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/schedule-visit" element={<ScheduleVisit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
