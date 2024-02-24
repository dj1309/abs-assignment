import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Footer from './components/footer';
import NavbarMain from './components/navbar'; 
import AboutPage from './components/AboutPage'; 
import MediaNews from './components/MediaNews';
import Purchase from './components/Purchase';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <Router>
      <NavbarMain /> 
      <Routes>
        <Route  path="/" element={<Layout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/MediaNews" element={<MediaNews />} />
        <Route path="/Purchase" element={<Purchase />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
