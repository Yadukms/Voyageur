import React from 'react';
import LottieComponent from 'lottie-react';
import aboutAnimation from '../../assets/about-animation.json';
import './AboutOverview.css';

const Lottie = LottieComponent.default || LottieComponent;

export default function AboutOverview({ setActivePage, setActiveNav }) {


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
            {/* Voyageur Overseas is a trusted name in the export of premium quality spices from India. 
            With a strong commitment to quality, purity, and sustainability, we bring the rich 
            flavors of India to global markets. */}
            Voyageur’s Overseas is a trusted export-import company specializing in premium-quality spices, agro products, and essential commodities for global markets. With a strong focus on quality, authenticity, and customer satisfaction, we connect reliable producers with international buyers while ensuring products meet the highest global standards.

Driven by integrity, reliability, and excellence, we emphasize sustainable sourcing, strict quality assurance, and efficient supply chain management to deliver consistent value. At Voyageur’s Overseas, we are committed to building long-term partnerships through trust, transparency, and responsible business practices, while continuously striving for growth and innovation in global trade.
          </p>
          {/* <p className="about-overview-desc-sub">
            Our spices are carefully handpicked, hygienically processed, and packed to retain 
            their natural aroma, taste, and freshness. Every batch undergoes rigorous testing 
            to meet international quality standards before shipment.
          </p> */}



          <button onClick={handleReadMoreClick} className="about-read-more-btn">
            READ MORE
          </button>
        </div>

        {/* Right Side: Lottie Animation */}
        <div className="about-overview-media-container">
          <div className="about-lottie-wrapper">
            <Lottie
              animationData={aboutAnimation}
              loop={true}
              autoplay={true}
              className="about-lottie-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
