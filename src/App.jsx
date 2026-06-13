import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import AboutOverview from './components/AboutOverview/AboutOverview';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget';

// Page components
import AboutPage from './pages/AboutPage/AboutPage';
import QualityPage from './pages/QualityPage/QualityPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ExportPage from './pages/ExportPage/ExportPage';

import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeNav, setActiveNav] = useState("Home");

  // Smooth scroll handler
  function scrollTo(sectionId) {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  }

  // Back to home page utility
  function goHome() {
    setActivePage("home");
    setActiveNav("Home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app-layout">
      {/* Global Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        setActiveCategory={setActiveCategory}
        scrollTo={scrollTo}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        goHome={goHome}
      />

      {/* Main Page Routing Switch */}
      {activePage === "home" && (
        <div className="home-page-layout">
          <Hero
            setActivePage={setActivePage}
            setActiveCategory={setActiveCategory}
            scrollTo={scrollTo}
            setActiveNav={setActiveNav}
          />
          <Features />
          
          <Products
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <AboutOverview
            setActivePage={setActivePage}
            setActiveNav={setActiveNav}
          />
          
          <Certifications />
          
          <Contact />
          
          <Footer
            setActivePage={setActivePage}
            setActiveCategory={setActiveCategory}
            scrollTo={scrollTo}
            setActiveNav={setActiveNav}
          />
        </div>
      )}

      {activePage === "about" && (
        <AboutPage setActivePage={setActivePage} />
      )}

      {activePage === "quality" && (
        <QualityPage setActivePage={setActivePage} />
      )}

      {activePage === "gallery" && (
        <GalleryPage setActivePage={setActivePage} />
      )}

      {activePage === "export" && (
        <ExportPage setActivePage={setActivePage} />
      )}

      {/* Floating contact widget buttons */}
      <WhatsAppWidget
        scrollTo={scrollTo}
        activePage={activePage}
        setActivePage={setActivePage}
        setActiveNav={setActiveNav}
      />
    </div>
  );
}
