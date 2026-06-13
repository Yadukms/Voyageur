import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './GalleryPage.css';

// Re-structured high-resolution images for the gallery
const GALLERY_CATEGORIES = [
  {
    label: "Premium Spices",
    accent: "#c9a84c",
    icon: "🌶",
    images: [
      { url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", caption: "Indian Spice Bowls" },
      { url: "https://images.unsplash.com/photo-1602237514002-c2d8ae2da393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", caption: "Sun-dried Red Chillies" },
      { url: "https://images.unsplash.com/photo-1622042914684-6a6288b14078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", caption: "Green Cardamom Sourcing" }
    ]
  },
  {
    label: "Kerala Coir",
    accent: "#5aab6e",
    icon: "🌿",
    images: [
      { url: "https://images.unsplash.com/photo-1770891290495-8747a7a87e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", caption: "Natural Coir Fibre Extraction" },
      { url: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_gimn02gimn02gimn.png", caption: "Hand-woven Coir Mats" },
      { url: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_50oron50oron50or.png", caption: "Premium Coir Ropes" }
    ]
  },
  {
    label: "Coconut Products",
    accent: "#b58a30",
    icon: "🥥",
    images: [
      { url: "https://images.unsplash.com/photo-1694011772133-dc4b3ff3f24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", caption: "Kerala Coconut Plantation" },
      { url: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_tbzawxtbzawxtbza.png", caption: "Desiccated Coconut Meat" },
      { url: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_athbetathbetathb.png", caption: "Cold-Pressed Coconut Oil" }
    ]
  }
];

export default function GalleryPage({ setActivePage }) {
  return (
    <div className="gallery-page">
      {/* Top Banner Banner */}
      <div className="gallery-hero-banner">
        <div className="gallery-hero-content">
          <button onClick={() => setActivePage("home")} className="gallery-back-btn">
            <ArrowLeft size={16} />
            Back to Home
          </button>
          
          <div className="gallery-hero-tagline">
            <div className="tagline-gold-line" />
            <span className="tagline-text">Visual Showcase</span>
          </div>
          <h1 className="gallery-hero-heading">Gallery</h1>
          <p className="gallery-hero-sub">
            A visual journey through our products, Kerala's backwaters, and India's spice heritage.
          </p>
        </div>
      </div>

      {/* Gallery Groups Grid */}
      <div className="gallery-page-body">
        {GALLERY_CATEGORIES.map((category) => (
          <section className="gallery-group-section" key={category.label}>
            {/* Header row */}
            <div className="gallery-group-header">
              <span className="group-icon">{category.icon}</span>
              <h2 className="group-label">{category.label}</h2>
              <div className="group-header-line" style={{ background: `${category.accent}44` }} />
            </div>

            {/* Images grid */}
            <div className="gallery-images-grid">
              {category.images.map((img, idx) => (
                <div
                  key={idx}
                  className="gallery-img-card group"
                  style={{
                    boxShadow: "0 3px 16px rgba(0,0,0,0.12)"
                  }}
                >
                  <img src={img.url} alt={img.caption} className="gallery-card-img" />
                  
                  {/* Hover overlay caption */}
                  <div className="gallery-card-hover-info">
                    <span className="hover-caption-text">{img.caption}</span>
                  </div>

                  {/* Corner tag indicator */}
                  <div
                    className="gallery-card-corner-tag"
                    style={{ background: category.accent }}
                  >
                    <div className="corner-tag-dot" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
