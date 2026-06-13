import React from 'react';
import aboutOverviewImg from '../../assets/about_overview.jpg';
import './AboutOverview.css';

// ==========================================
// IMAGE ASSETS (Easy to update)
// ==========================================
const ABOUT_OVERVIEW_IMAGE = aboutOverviewImg;

export default function AboutOverview({ setActivePage, setActiveNav }) {
  const stats = [
    { value: "25+", label: "Countries Served" },
    { value: "500+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" }
  ];

  function handleReadMoreClick() {
    setActivePage("about");
    setActiveNav("About Us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section id="about-section" className="about-overview-section">
      <div className="about-overview-container">
        {/* Left Side: Copywriting */}
        <div className="about-overview-content">
          <div className="about-tagline-row">
            <div className="about-tagline-line" />
            <span className="about-tagline-text">About Us</span>
          </div>
          <h2 className="about-overview-heading">Voyageur Overseas</h2>
          
          <p className="about-overview-desc">
            Voyageur Overseas is a trusted name in the export of premium quality spices from India. 
            With a strong commitment to quality, purity, and sustainability, we bring the rich 
            flavors of India to global markets.
          </p>
          <p className="about-overview-desc-sub">
            Our spices are carefully handpicked, hygienically processed, and packed to retain 
            their natural aroma, taste, and freshness. Every batch undergoes rigorous testing 
            to meet international quality standards before shipment.
          </p>

          {/* Stats grid */}
          <div className="about-stats-grid">
            {stats.map(({ value, label }) => (
              <div className="stat-card" key={label}>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>

          <button onClick={handleReadMoreClick} className="about-read-more-btn">
            READ MORE
          </button>
        </div>

        {/* Right Side: Image Banner */}
        <div className="about-overview-media-container">
          <div className="about-media-wrapper">
            <img
              src={ABOUT_OVERVIEW_IMAGE}
              alt="Colorful spice powders"
              className="about-overview-img"
            />
            <div className="about-media-overlay" />
          </div>
          
          {/* Floating badge */}
          <div className="about-floating-badge">
            <div className="floating-badge-tag">AUTHENTIC SPICES</div>
            <div className="floating-badge-sub">Authentic India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
