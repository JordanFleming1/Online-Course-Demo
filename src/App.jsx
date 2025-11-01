import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout components
import { Navbar } from './components/layout';

// Page components
import {
  Home,
  About,
  Courses,
  CourseDetails,
  Dashboard,
  Reviews,
  FAQ,
  Pricing,
  Contact as Enroll,
  NotFound,
  Checkout,
  ThankYou
} from './components/pages';

// UI components
import { ContactButton, BackToTop } from './components/ui';

import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<div className="page-transition"><Home /></div>} />
        <Route path="/about" element={<div className="page-transition"><About /></div>} />
        <Route path="/courses" element={<div className="page-transition"><Courses /></div>} />
        <Route path="/courses/:id" element={<div className="page-transition"><CourseDetails /></div>} />
        <Route path="/enroll" element={<div className="page-transition"><Enroll /></div>} />
        <Route path="/dashboard" element={<div className="page-transition"><Dashboard /></div>} />
        <Route path="/reviews" element={<div className="page-transition"><Reviews /></div>} />
        <Route path="/faq" element={<div className="page-transition"><FAQ /></div>} />
        <Route path="/pricing" element={<div className="page-transition"><Pricing /></div>} />
        <Route path="/checkout" element={<div className="page-transition"><Checkout /></div>} />
        <Route path="/thankyou" element={<div className="page-transition"><ThankYou /></div>} />
        <Route path="*" element={<div className="page-transition"><NotFound /></div>} />
      </Routes>
      
      <ToastContainer 
        position="top-center" 
        autoClose={2500} 
        hideProgressBar 
        theme="colored" 
      />
      <ContactButton />
      <BackToTop />
    </>
  );
}

export default App;
