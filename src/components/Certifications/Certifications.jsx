import React from 'react';
import './Certifications.css';

export default function Certifications() {
  const certifications = [
    {
      name: "APEDA",
      sub: "REGISTERED",
      icon: (
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#2d6a1e" strokeWidth="1.5" />
          <path d="M20 8 C12 14 12 26 20 32 C28 26 28 14 20 8Z" fill="#2d6a1e" opacity="0.15" />
          <path d="M14 22 L17 25 L26 16" stroke="#2d6a1e" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M20 5 L20 35 M5 20 L35 20" stroke="#2d6a1e" strokeWidth="0.5" opacity="0.3" />
        </svg>
      )
    },
    {
      name: "IEC",
      sub: "REGISTERED",
      icon: (
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#1a4a7a" strokeWidth="1.5" />
          <text x="20" y="24" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a4a7a">IEC</text>
        </svg>
      )
    },
    {
      name: "fssai",
      sub: "LICENSED",
      icon: (
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#c0392b" strokeWidth="1.5" />
          <text x="20" y="19" textAnchor="middle" fontSize="9" fontStyle="italic" fontWeight="bold" fill="#c0392b">fssai</text>
          <path d="M10 24 L30 24" stroke="#c0392b" strokeWidth="1" />
        </svg>
      )
    },
    {
      name: "ISO",
      sub: "22000:2018",
      icon: (
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#1a5a8a" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="13" fill="none" stroke="#1a5a8a" strokeWidth="0.8" />
          <text x="20" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a5a8a">ISO</text>
          <text x="20" y="27" textAnchor="middle" fontSize="5.5" fill="#1a5a8a">22000:2018</text>
        </svg>
      )
    },
    {
      name: "SPICES BOARD",
      sub: "INDIA",
      icon: (
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#1a4a7a" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="12" fill="none" stroke="#1a4a7a" strokeWidth="0.8" />
          <path d="M20 10 L22 16 L28 16 L23 20 L25 26 L20 22 L15 26 L17 20 L12 16 L18 16 Z" fill="#1a4a7a" opacity="0.7" />
        </svg>
      )
    }
  ];

  return (
    <section id="certifications-section" className="certifications-section">
      {/* Top Gold Border Decor */}
      <div className="decor-line-wrapper">
        <div className="decor-line" />
      </div>

      <div className="certifications-inner-container">
        {/* Left Side Vector Art (Kerala Backwaters) */}
        <div className="side-art left-art">
          <svg viewBox="0 0 220 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <rect x="0" y="110" width="220" height="50" fill="#c4a882" />
            {[0, 1, 2, 3, 4, 5].map((a) => (
              <path key={a} d={`M0 ${118 + a * 7} Q110 ${114 + a * 7} 220 ${118 + a * 7}`} stroke="#a0845a" strokeWidth="0.8" fill="none" />
            ))}
            <path d="M0 90 L40 50 L70 75 L110 35 L150 65 L180 45 L220 80 L220 110 L0 110Z" fill="#b89870" />
            <path d="M0 100 L60 70 L100 85 L140 65 L180 80 L220 90 L220 110 L0 110Z" fill="#c4a882" />
            
            {/* Palm Trees */}
            <rect x="18" y="72" width="4" height="18" fill="#7a5a30" />
            <ellipse cx="20" cy="68" rx="9" ry="12" fill="#6a7a30" />
            <rect x="55" y="80" width="3" height="14" fill="#7a5a30" />
            <ellipse cx="56.5" cy="76" rx="7" ry="10" fill="#6a7a30" />
            
            {/* Houseboat */}
            <ellipse cx="90" cy="108" rx="8" ry="5" fill="#8a6a40" />
            <circle cx="90" cy="100" r="5" fill="#8a6a40" />
            <ellipse cx="90" cy="95" rx="9" ry="3" fill="#6a4a20" />
            <rect x="87" y="90" width="6" height="6" rx="2" fill="#7a5a30" />
            <path d="M86 104 L84 114 M94 104 L96 114" stroke="#8a6a40" strokeWidth="2" />
            <path d="M84 114 L90 112 L96 114" stroke="#8a6a40" strokeWidth="2" fill="none" />
            
            {/* Small boat */}
            <circle cx="140" cy="98" r="4" fill="#8a6a40" />
            <ellipse cx="140" cy="94" rx="7" ry="2.5" fill="#6a4a20" />
            <path d="M137 102 L135 112 M143 102 L145 112" stroke="#8a6a40" strokeWidth="1.8" />
            <ellipse cx="105" cy="112" rx="6" ry="4" fill="#a07840" />
            <path d="M99 112 L99 108 L111 108 L111 112" fill="#c09860" />
          </svg>
        </div>

        {/* Central Certifications Display */}
        <div className="central-content-area">
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div className="cert-item" key={cert.name}>
                {idx > 0 && <div className="cert-divider" />}
                <div className="cert-content-box">
                  <div className="cert-icon-container">{cert.icon}</div>
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

        {/* Right Side Vector Art (Port Cargo / Shipping) */}
        <div className="side-art right-art">
          <svg viewBox="0 0 220 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <rect x="0" y="0" width="220" height="160" fill="#f5ede0" />
            <rect x="40" y="118" width="140" height="8" fill="#d4b88a" opacity="0.5" />
            <path d="M40 122 Q110 120 180 122" stroke="#c4a882" strokeWidth="0.5" fill="none" />
            
            {/* Cargo Ship */}
            <rect x="80" y="72" width="60" height="50" fill="#d4b48a" />
            <path d="M80 72 Q110 30 140 72" fill="#e0c8a0" />
            <line x1="110" y1="30" x2="110" y2="22" stroke="#c4a882" strokeWidth="1.5" />
            <ellipse cx="110" cy="20" rx="2.5" ry="4" fill="#c4a882" />
            
            {/* Port Buildings */}
            <rect x="55" y="82" width="14" height="40" fill="#d4b48a" />
            <path d="M55 82 Q62 68 69 82" fill="#e0c8a0" />
            <line x1="62" y1="68" x2="62" y2="62" stroke="#c4a882" strokeWidth="1" />
            <ellipse cx="62" cy="60" rx="2" ry="3" fill="#c4a882" />
            
            <rect x="151" y="82" width="14" height="40" fill="#d4b48a" />
            <path d="M151 82 Q158 68 165 82" fill="#e0c8a0" />
            <line x1="158" y1="68" x2="158" y2="62" stroke="#c4a882" strokeWidth="1" />
            <ellipse cx="158" cy="60" rx="2" ry="3" fill="#c4a882" />
            
            {/* Shipping Cranes */}
            <path d="M96 95 Q103 85 110 95 L110 122 L96 122Z" fill="#c4a882" opacity="0.4" />
            <path d="M110 95 Q117 85 124 95 L124 122 L110 122Z" fill="#c4a882" opacity="0.4" />
            
            {/* Boat details */}
            <circle cx="175" cy="118" r="4" fill="#8a6a40" />
            <path d="M172 122 L170 130 M178 122 L176 130" stroke="#8a6a40" strokeWidth="1.5" />
            <path d="M170 130 L175 128 L176 130" stroke="#8a6a40" strokeWidth="1.2" fill="none" />
            
            {/* Trees in port */}
            <rect x="42" y="98" width="3" height="20" fill="#7a5a30" />
            <ellipse cx="43.5" cy="94" rx="6" ry="9" fill="#6a7a30" />
            <rect x="174" y="100" width="3" height="18" fill="#7a5a30" />
            <ellipse cx="175.5" cy="96" rx="6" ry="9" fill="#6a7a30" />
          </svg>
        </div>
      </div>

      {/* Bottom Gold Border Decor */}
      <div className="decor-line-wrapper">
        <div className="decor-line" />
      </div>
    </section>
  );
}
