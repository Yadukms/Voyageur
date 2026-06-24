import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import './Navbar.css';

// Brand logo for Voyageur Overseas
export function Logo({ size = 68 }) {
  return (
    <img
      src="/mainlogo.png"
      alt="Voyageur Overseas Logo"
      style={{
        width: size,
        height: size,
        objectFit: 'contain'
      }}
    />
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
      if (mobileMenuOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  function handleProductCategoryClick(categoryId) {
    setActiveCategory(categoryId);
    setActivePage("home");
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setActiveNav("Products");
    setTimeout(() => scrollTo("products-section"), 150);
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
          <Logo size={90} />
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
                      onClick={() => handleProductCategoryClick("spices")}
                    >
                      View Products →
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
              <img src="/link1.png" alt="LinkedIn" className="nav-social-icon-img" />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" title="Instagram" className="nav-social-btn instagram">
              <img src="/i1.png" alt="Instagram" className="nav-social-icon-img" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="nav-social-btn whatsapp">
              <img src="/w1.png" alt="WhatsApp" className="nav-social-icon-img" />
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
        <button
          className="navbar-mobile-toggle"
          onClick={() => {
            if (mobileMenuOpen) {
              setDropdownOpen(false);
            }
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          {menuItems.map(({ label, hasDropdown }) => (
            <div key={label} className="mobile-menu-item-group">
              {hasDropdown ? (
                <>
                  <div className={`mobile-dropdown-toggle-wrapper ${isLinkActive(label) ? 'active' : ''}`}>
                    <button
                      className="mobile-link-btn-main"
                      onClick={() => handleProductCategoryClick("spices")}
                    >
                      {label}
                    </button>
                    <button
                      className="mobile-link-btn-chevron"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-label="Toggle Submenu"
                    >
                      <ChevronDown size={16} className={`mobile-chevron-inline ${dropdownOpen ? 'rotated' : ''}`} />
                    </button>
                  </div>
                  {dropdownOpen && (
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
                </>
              ) : (
                <button
                  className={`mobile-link-btn ${isLinkActive(label) ? 'active' : ''}`}
                  onClick={() => handleNavigation(label)}
                >
                  {label}
                </button>
              )}
            </div>
          ))}
          <div className="mobile-drawer-footer">
            <div className="mobile-socials">
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src="/link1.png" alt="LinkedIn" className="mobile-social-icon-img" /></a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer"><img src="/i1.png" alt="Instagram" className="mobile-social-icon-img" /></a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><img src="/w1.png" alt="WhatsApp" className="mobile-social-icon-img" /></a>
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
