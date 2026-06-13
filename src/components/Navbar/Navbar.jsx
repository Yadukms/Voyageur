import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import './Navbar.css';

// SVG brand logo for Voyageur Overseas
export function Logo({ size = 68 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Voyageur logo"
    >
      <rect width="100" height="100" fill="#f7efe7" />
      <circle cx="53" cy="42" r="34" fill="none" stroke="#b8953d" strokeWidth="2" />
      <ellipse cx="53" cy="42" rx="18" ry="34" fill="none" stroke="#b8953d" strokeWidth="1.1" />
      <line x1="53" y1="8" x2="53" y2="76" stroke="#b8953d" strokeWidth="1.1" />
      <path d="M22 42 H84" fill="none" stroke="#b8953d" strokeWidth="1.1" />
      <path d="M30 25 C43 31 64 31 76 25" fill="none" stroke="#b8953d" strokeWidth="1" />
      <path d="M28 58 C42 52 65 52 80 58" fill="none" stroke="#b8953d" strokeWidth="1" />
      <path d="M53 5 L55 13 L53 11 L51 13 Z" fill="#b8953d" />
      <path d="M20 59 C31 67 53 72 78 59 L71 73 C55 82 35 78 18 68 Z" fill="#07392f" />
      <path d="M31 51 L71 45 L78 58 C62 65 43 65 26 58 Z" fill="#07392f" />
      <path d="M30 56 C41 61 57 61 72 54" fill="none" stroke="#f7efe7" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 48 C45 52 57 52 69 47" fill="none" stroke="#f7efe7" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M39 35 H62 Q65 35 66 38 L69 47 H36 L38 38 Q38.5 35 39 35 Z" fill="#07392f" />
      <rect x="45" y="27" width="16" height="8" rx="1.5" fill="#07392f" />
      <rect x="47" y="39" width="12" height="5" rx="1" fill="#f7efe7" />
      <rect x="53" y="19" width="4" height="8" rx="1" fill="#07392f" />
    </svg>
  );
}

export default function Navbar({
  activePage,
  setActivePage,
  setActiveCategory,
  scrollTo,
  activeNav,
  setActiveNav,
  goHome
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { label: "Home" },
    { label: "About Us" },
    { label: "Products", hasDropdown: true },
    { label: "Quality" },
    { label: "Certifications" },
    { label: "Gallery" },
    { label: "Contact Us" }
  ];

  const categories = [
    { id: "spices", label: "🌶  Spices" },
    { id: "coir", label: "🌿  Coir Products" },
    { id: "coconut", label: "🥥  Coconut Products" },
    { id: "others", label: "✦   Agro Products" }
  ];

  const whatsappLink = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products.";
  const linkedinLink = "https://www.linkedin.com/company/voyageur-overseas";
  const instagramLink = "https://www.instagram.com/voyageuroverseas";

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleProductCategoryClick(categoryId) {
    setActiveCategory(categoryId);
    setActivePage("home");
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setActiveNav("Products");
    setTimeout(() => {
      document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleNavigation(label) {
    setActiveNav(label);
    setMobileMenuOpen(false);
    setDropdownOpen(false);

    if (label === "Home") {
      goHome();
      return;
    }
    if (label === "About Us") {
      setActivePage("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (label === "Quality") {
      setActivePage("quality");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (label === "Gallery") {
      setActivePage("gallery");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (label === "Certifications") {
      setActivePage("home");
      setTimeout(() => scrollTo("certifications-section"), 120);
      return;
    }
    if (label === "Contact Us") {
      setActivePage("home");
      setTimeout(() => scrollTo("contact-section"), 120);
      return;
    }
  }

  const isLinkActive = (label) => {
    if (label === "Home" && activePage === "home" && activeNav === "Home") return true;
    if (label === "About Us" && activePage === "about") return true;
    if (label === "Quality" && activePage === "quality") return true;
    if (label === "Gallery" && activePage === "gallery") return true;
    if (label === "Products" && activeNav === "Products") return true;
    if (label === "Contact Us" && activeNav === "Contact Us") return true;
    if (label === "Certifications" && activeNav === "Certifications") return true;
    return false;
  };

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-container">
        {/* Brand Logo & Title */}
        <div className="navbar-logo-area" onClick={() => { goHome(); setActiveNav("Home"); }}>
          <Logo size={62} />
          <div className="navbar-logo-text">
            <div className="navbar-title">VOYAGEUR</div>
            <div className="navbar-subtitle">OVERSEAS</div>
            <div className="navbar-tagline">— From Origin to Destination —</div>
          </div>
        </div>

        {/* Desktop Menu links */}
        <ul className="navbar-links">
          {menuItems.map(({ label, hasDropdown }) => (
            hasDropdown ? (
              <li className="navbar-dropdown-wrapper" key={label} ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`navbar-link-btn ${isLinkActive(label) ? 'active' : ''}`}
                >
                  {label}
                  <ChevronDown className={`navbar-arrow-icon ${dropdownOpen ? 'rotated' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="navbar-dropdown-menu">
                    <div className="dropdown-header">PRODUCT CATEGORIES</div>
                    {categories.map((cat) => (
                      <button
                        className="dropdown-item-btn"
                        key={cat.id}
                        onClick={() => handleProductCategoryClick(cat.id)}
                      >
                        {cat.label}
                      </button>
                    ))}
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-view-all"
                      onClick={() => handleProductCategoryClick("all")}
                    >
                      View All Products →
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li key={label}>
                <button
                  onClick={() => handleNavigation(label)}
                  className={`navbar-link-btn ${isLinkActive(label) ? 'active' : ''}`}
                >
                  {label}
                </button>
              </li>
            )
          ))}
        </ul>

        {/* Desktop Contact Area & Call to Action */}
        <div className="navbar-right-area">
          <div className="navbar-social-icons">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="nav-social-btn linkedin">
              <Linkedin size={16} />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" title="Instagram" className="nav-social-btn instagram">
              <Instagram size={16} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="nav-social-btn whatsapp">
              <MessageCircle size={16} />
            </a>
          </div>
          <div className="nav-divider"></div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="navbar-phone-info">
            <div className="phone-line">
              <Phone size={11} className="phone-icon" />
              +91 9895 999 505
            </div>
            <div className="email-line">info@voyageuroverseas.com</div>
          </a>
          <button
            onClick={() => { setActivePage("export"); setActiveNav(""); }}
            className="navbar-cta-btn"
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button className="navbar-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          {menuItems.map(({ label, hasDropdown }) => (
            <div key={label} className="mobile-menu-item-group">
              <button
                className={`mobile-link-btn ${isLinkActive(label) ? 'active' : ''}`}
                onClick={() => hasDropdown ? setDropdownOpen(!dropdownOpen) : handleNavigation(label)}
              >
                {label}
                {hasDropdown && <ChevronDown size={14} className="mobile-chevron-inline" />}
              </button>
              {hasDropdown && dropdownOpen && (
                <div className="mobile-submenu">
                  {categories.map((cat) => (
                    <button
                      className="mobile-submenu-item"
                      key={cat.id}
                      onClick={() => handleProductCategoryClick(cat.id)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-drawer-footer">
            <div className="mobile-socials">
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
            </div>
            <button
              onClick={() => { setActivePage("export"); setMobileMenuOpen(false); }}
              className="mobile-cta-btn"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
