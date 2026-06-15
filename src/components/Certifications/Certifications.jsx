import React from 'react';
import './Certifications.css';

export default function Certifications() {
  const certifications = [
    {
      name: "APEDA",
      sub: "REGISTERED",
      imgSrc: "/l1.png"
    },
    {
      name: "IEC",
      sub: "REGISTERED",
      imgSrc: "/logo2.png"
    },
    {
      name: "FSSAI",
      sub: "LICENSED",
      imgSrc: "/logo3.png"
    },
    {
      name: "ISO 22000:2018",
      sub: "CERTIFIED",
      imgSrc: "/logo4.png",
      className: "iso-logo"
    },
    {
      name: "SPICES BOARD",
      sub: "INDIA",
      imgSrc: "/logo6.png",
      className: "spices-board-logo"
    }
  ];

  return (
    <section id="certifications-section" className="certifications-section">
      {/* Top Gold Border Decor */}
      <div className="decor-line-wrapper">
        <div className="decor-line" />
      </div>

      <div className="certifications-inner-container">
        {/* Left Side Decorative Image */}
        <div className="side-art left-art">
          <img src="/img1.jpeg" alt="Left Decor" className="side-art-img" />
        </div>

        {/* Central Certifications Display */}
        <div className="central-content-area">
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div className="cert-item" key={cert.name}>
                {idx > 0 && <div className="cert-divider" />}
                <div className="cert-content-box">
                  <div className="cert-icon-container">
                    <img src={cert.imgSrc} alt={cert.name} className={`cert-logo-img ${cert.className || ''}`} />
                  </div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-subtitle">{cert.sub}</div>
                </div>
              </div>
            ))}

            {/* Vertical divider */}
            <div className="certs-vertical-divider" />

            {/* Slogan column */}
            <div className="slogan-column">
              <p className="slogan-title">Authentic Spices.</p>
              <p className="slogan-title">Authentic India.</p>
              <div className="slogan-decor-row">
                <div className="slogan-line" />
                <svg width="14" height="14" viewBox="0 0 20 20" className="slogan-svg">
                  <path d="M10 2 C6 6 4 10 10 18 C16 10 14 6 10 2Z" fill="#2d6a1e" />
                </svg>
                <div className="slogan-line" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Decorative Image */}
        <div className="side-art right-art">
          <img src="/img2.jpeg" alt="Right Decor" className="side-art-img" />
        </div>
      </div>

      {/* Bottom Gold Border Decor */}
      <div className="decor-line-wrapper">
        <div className="decor-line" />
      </div>
    </section>
  );
}
