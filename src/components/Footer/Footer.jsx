import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '../Navbar/Navbar';
import './Footer.css';

export default function Footer({ setActivePage, scrollTo, setActiveNav }) {
  const whatsappLink = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products.";
  const linkedinLink = "https://www.linkedin.com/company/voyageur-overseas";
  const instagramLink = "https://www.instagram.com/voyageuroverseas";

  const quickLinks = [
    { label: "Home", action: "home", target: "" },
    { label: "About Us", action: "page", target: "", page: "about" },
    { label: "Our Products", action: "scroll", target: "products-section" },
    { label: "Quality", action: "page", target: "", page: "quality" },
    { label: "Certifications", action: "scroll", target: "certifications-section" },
    { label: "Gallery", action: "page", target: "", page: "gallery" },
    { label: "Contact Us", action: "scroll", target: "contact-section" }
  ];

  function handleQuickLinkClick(link) {
    if (link.action === "page" && link.page) {
      setActivePage(link.page);
      setActiveNav(link.label);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setActivePage("home");
    if (link.action === "home") {
      setActiveNav("Home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => scrollTo(link.target), 100);
    }
  }

  return (
    <footer className="footer-element">
      {/* Top Gold Border Decor */}
      <div className="footer-decor-line" />

      <div className="footer-container">
        {/* Column 1: Brand & Socials */}
        <div className="footer-brand-column">
          <div className="footer-logo-row" onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <div className="footer-logo-wrapper">
              <Logo size={70} />
            </div>
            <div className="footer-logo-text">
              <div className="footer-title">VOYAGEUR</div>
              <div className="footer-subtitle">OVERSEAS</div>
            </div>
          </div>
          <p className="footer-brand-desc">
            Premium Indian spices & natural coir products exported worldwide.
            Quality, purity, and authenticity on every shipment.
          </p>
          <div className="footer-social-row">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="footer-social-btn">
              <img src="/link1.png" alt="LinkedIn" className="footer-social-icon-img" />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" title="Instagram" className="footer-social-btn">
              <img src="/i1.png" alt="Instagram" className="footer-social-icon-img" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="footer-social-btn">
              <img src="/w1.png" alt="WhatsApp" className="footer-social-icon-img" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links-column">
          <h4 className="footer-column-heading">QUICK LINKS</h4>
          <div className="footer-links-grid">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleQuickLinkClick(link)}
                className="footer-link-item group"
              >
                <span className="footer-link-dot" />
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Column 3: Contact details */}
        <div className="footer-contact-column">
          <h4 className="footer-column-heading">CONTACT</h4>
          <div className="footer-contact-links">
            <a href="https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products." target="_blank" rel="noopener noreferrer" className="footer-contact-item group">
              <div className="contact-icon-box">
                <Phone size={14} />
              </div>
              <div className="contact-info-text">
                <div className="contact-info-label">India Office (Phone / WA)</div>
                <div className="contact-info-val">+91 9895 999 505</div>
              </div>
            </a>

            <a href="https://wa.me/971502461236?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products." target="_blank" rel="noopener noreferrer" className="footer-contact-item group">
              <div className="contact-icon-box">
                <Phone size={14} />
              </div>
              <div className="contact-info-text">
                <div className="contact-info-label">UAE Office (Phone / WA)</div>
                <div className="contact-info-val">+971 50 246 1236</div>
              </div>
            </a>

            <a href="mailto:info@voyageuroverseas.com" className="footer-contact-item group">
              <div className="contact-icon-box">
                <Mail size={14} />
              </div>
              <div className="contact-info-text">
                <div className="contact-info-label">Email</div>
                <div className="contact-info-val">info@voyageuroverseas.com</div>
              </div>
            </a>

            <div className="footer-contact-item">
              <div className="contact-icon-box">
                <MapPin size={14} />
              </div>
              <div className="contact-info-text">
                <div className="contact-info-label">Address</div>
                <div className="contact-info-val">
                  158/A, Koyilandy<br />
                  Kozhikode, Kerala 673306,India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom-row">
        <div className="footer-bottom-container">
          <span className="copyright-text">© 2026 Voyageur Overseas. All rights reserved.</span>
          <span className="footer-bottom-slogan">From origin to destination.</span>
        </div>
      </div>
    </footer>
  );
}
