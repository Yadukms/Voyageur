import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20spices%20and%20coir%20products.";

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 9895 999 505",
      href: whatsappLink
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@voyageuroverseas.com",
      href: "mailto:info@voyageuroverseas.com"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "158/A, Koyilandy, Kozhikode, Kerala 673306, India",
      href: null
    }
  ];

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In frontend-only, mock submit and switch to success state
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  }

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">
        {/* Left Side: Contact Information */}
        <div className="contact-info-column">
          <div className="contact-tagline-row">
            <div className="contact-tagline-line" />
            <span className="contact-tagline-text">Get In Touch</span>
          </div>
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-intro-desc">
            Ready to source premium Indian spices & coir products? 
            Reach out for bulk orders, pricing, and custom packaging solutions.
          </p>

          <div className="contact-details-list">
            {contactDetails.map(({ icon: IconComponent, label, value, href }) => (
              <div className="contact-detail-item" key={label}>
                <div className="detail-icon-wrapper">
                  <IconComponent className="detail-icon" />
                </div>
                <div className="detail-text-wrapper">
                  <div className="detail-label">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-value-link"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="detail-value">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Form / Success Screen */}
        <div className="contact-form-column">
          {isSubmitted ? (
            <div className="contact-success-card">
              <CheckCircle className="success-check-icon" />
              <h3 className="success-title">Message Sent Successfully!</h3>
              <p className="success-desc">
                Thank you for reaching out to <strong>Voyageur Overseas</strong>. 
                Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="success-reset-btn"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-element">
              {/* Row 1: Name and Email */}
              <div className="form-row-grid">
                <div className="form-field-group">
                  <label className="form-field-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input-element"
                  />
                </div>
                <div className="form-field-group">
                  <label className="form-field-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input-element"
                  />
                </div>
              </div>

              {/* Row 2: Company Name */}
              <div className="form-field-group">
                <label className="form-field-label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input-element"
                />
              </div>

              {/* Row 3: Message */}
              <div className="form-field-group">
                <label className="form-field-label">Message / Requirements *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your requirements, quantities, destination country..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea-element"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="form-submit-btn">
                <Send size={16} />
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
