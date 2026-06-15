import React from 'react';
import { ArrowLeft, Leaf, Award, Globe, Eye } from 'lucide-react';
import './AboutPage.css';

// ==========================================
// IMAGE ASSETS (Easy to update)
// ==========================================
const ABOUT_HERO_BG = "https://images.unsplash.com/photo-1532336414038-cf19250c5757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzcGljZXMlMjBjb2xvcmZ1bCUyMGJvd2xzfGVufDF8fHx8MTc4MTA4ODcxNXww&ixlib=rb-4.1.0&q=80&w=1080";
const ABOUT_BODY_IMAGE = "https://images.unsplash.com/photo-1486548730767-5c679e8eda6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxJbmRpYW4lMjBzcGljZXMlMjBjb2xvcmZ1bCUyMGJvd2xzfGVufDF8fHx8MTc4MTA4ODcxNXww&ixlib=rb-4.1.0&q=80&w=1080";

export default function AboutPage({ setActivePage }) {


  const missionItems = [
    { icon: Leaf, title: "100% Natural", desc: "No artificial additives or preservatives in any of our products." },
    { icon: Award, title: "Certified Quality", desc: "ISO, FSSAI, APEDA & Spices Board certified on every batch." },
    { icon: Globe, title: "Global Reach", desc: "Exporting to 25+ countries with on-time, doorstep delivery." }
  ];

  return (
    <div className="about-page">
      {/* Top Banner with Background */}
      <div className="about-hero-banner">
        <div className="about-hero-bg-wrapper">
          <img src={ABOUT_HERO_BG} alt="Spice bowls background" className="about-hero-bg" />
        </div>
        <div className="about-hero-banner-content">
          <button onClick={() => setActivePage("home")} className="about-back-btn">
            <ArrowLeft size={16} />
            Back to Home
          </button>
          
          <div className="about-hero-tagline">
            <div className="tagline-gold-line" />
            <span className="tagline-text">Our Story</span>
          </div>
          <h1 className="about-hero-heading">About Voyageur Overseas</h1>
          <p className="about-hero-sub">
            A trusted name in premium Indian spices, coir & coconut products — from origin to destination.
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="about-page-body">
        {/* Section 1: Who We Are */}
        <section className="about-section-grid">
          <div className="about-text-col">
            <div className="section-tag-row">
              <div className="tag-gold-line" />
              <span className="tag-text">Who We Are</span>
            </div>
            <h2 className="section-heading">About Voyageur Overseas</h2>
            <p className="section-p">
              Voyageur Overseas is a trusted export company based in Koyilandy, Kozhikode, Kerala, India. 
              We specialise in exporting premium-quality Indian spices, natural coir products, and 
              coconut-based goods to clients across 25+ countries.
            </p>
            <p className="section-p-secondary">
              Founded with a passion for showcasing India's agricultural richness, Voyageur Overseas 
              bridges Indian farmers with global markets. Every product we ship is carefully 
              handpicked, hygienically processed, and packed to retain its natural aroma, taste, 
              and freshness.
            </p>


          </div>
          <div className="about-img-col">
            <div className="about-img-wrapper-card">
              <img src={ABOUT_BODY_IMAGE} alt="Spice powders" className="about-body-img" />
            </div>
          </div>
        </section>

        {/* Section 2: Our Mission */}
        <section className="about-mission-panel">
          <div className="mission-panel-container">
            <div className="mission-icon-circle">
              <Award size={26} className="mission-award-icon" />
            </div>
            <div className="mission-text-area">
              <div className="mission-tag-row">
                <div className="mission-tag-line" />
                <span className="mission-tag-text">Our Mission</span>
              </div>
              <h2 className="mission-heading-text">Our Mission</h2>
              <p className="mission-desc-text">
                To be the most trusted bridge between India's finest agricultural producers and global importers 
                — delivering premium-quality spices, coir products, and natural coconut goods with complete 
                transparency, reliability, and care.
              </p>

              <div className="mission-sub-cards">
                {missionItems.map(({ icon: IconComponent, title, desc }) => (
                  <div className="mission-sub-card" key={title}>
                    <IconComponent className="sub-card-icon" />
                    <div className="sub-card-title">{title}</div>
                    <div className="sub-card-desc">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Vision */}
        <section className="about-vision-panel">
          <div className="vision-panel-container">
            <div className="vision-icon-circle">
              <Eye size={26} className="vision-eye-icon" />
            </div>
            <div className="vision-text-area">
              <div className="vision-tag-row">
                <div className="vision-tag-line" />
                <span className="vision-tag-text">Our Vision</span>
              </div>
              <h2 className="vision-heading-text">Our Vision</h2>
              <p className="vision-desc-text">
                To become a globally recognised export brand that stands as a symbol of India's 
                agricultural excellence — one that every international buyer trusts for purity, 
                consistency, and ethical sourcing.
              </p>
              <p className="vision-desc-text-sub">
                We envision a future where every kitchen in the world carries a pinch of India's richness, 
                and every eco-conscious buyer chooses Kerala's natural coir. By 2030, we aim to serve 
                50+ countries and empower 1,000+ Indian farming families through fair-trade partnerships.
              </p>
              <div className="vision-quote-card">
                "From Origin to Destination — We carry India's finest to the world's finest."
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
