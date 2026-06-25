import React from 'react';
import { Mail } from 'lucide-react';
import './WhatsAppWidget.css';

function dispatchCloseMobileMenu() {
  document.dispatchEvent(new Event('voyageur-close-mobile-menu'));
}

export default function WhatsAppWidget({ scrollTo, activePage, setActivePage, setActiveNav }) {
  const whatsappLink = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products.";

  function handleContactButtonClick() {
    dispatchCloseMobileMenu();
    if (activePage !== "home") {
      setActivePage("home");
      setActiveNav("Contact Us");
      setTimeout(() => {
        const el = document.getElementById("contact-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      setActiveNav("Contact Us");
      scrollTo("contact-section");
    }
  }

  return (
    <div className="whatsapp-widget-container">
      {/* WhatsApp chat button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="widget-floating-btn whatsapp"
      >
        <img src="/w1.png" alt="WhatsApp" className="widget-icon-img" />
      </a>

      {/* Scroll to Contact Us button */}
      <button
        onClick={handleContactButtonClick}
        title="Contact Us"
        className="widget-floating-btn contact"
      >
        <Mail size={24} className="widget-icon" />
      </button>
    </div>
  );
}
