import React, { useState } from 'react';
import './Products.css';

// ==========================================
// PRODUCTS DATA SYSTEM (Easy to update)
// ==========================================
const SPICES_PRODUCTS = [
  { id: "s1", name: "GREEN CARDAMOM", origin: "Kerala, India", desc: "Aromatic green pods with sweet, floral notes. Used in chai, desserts & biryanis.", img: "https://images.unsplash.com/photo-1622042914684-6a6288b14078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNhcmRhbW9tJTIwc3BpY2V8ZW58MXx8fHwxNzgxMDg4NzIzfDA&ixlib=rb-4.1.0&q=80&w=400" },
  { id: "s2", name: "BLACK PEPPER", origin: "Wayanad, Kerala", desc: "King of spices. Bold pungent flavour, used globally in cuisine & medicine.", img: "https://images.unsplash.com/photo-1591801058986-9e28e68670f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHNwaWNlfGVufDF8fHx8MTc4MDk2MjE2Nnww&ixlib=rb-4.1.0&q=80&w=400" },
  { id: "s3", name: "CINNAMON", origin: "Tamil Nadu, India", desc: "Sweet, warm spice for baking, curries & beverages. Naturally harvested bark.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_8jhluf8jhluf8jhl.png" },
  { id: "s4", name: "CLOVES", origin: "Tamil Nadu, India", desc: "Intensely aromatic dried flower buds prized for medicinal & culinary value.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_f39zn8f39zn8f39z.png" },
  { id: "s5", name: "TURMERIC", origin: "Erode, Tamil Nadu", desc: "Golden spice rich in curcumin. Used worldwide for health & cooking.", img: "https://images.unsplash.com/photo-1606951444141-e5533feb55be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHBvd2RlciUyMHllbGxvdyUyMHNwaWNlfGVufDF8fHx8MTc4MTA4ODcyNHww&ixlib=rb-4.1.0&q=80&w=400" },
  { id: "s6", name: "RED CHILLI", origin: "Guntur, Andhra Pradesh", desc: "Fiery heat & rich colour. One of India's most exported spices.", img: "https://images.unsplash.com/photo-1602237514002-c2d8ae2da393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjaGlsbGklMjBwZXBwZXIlMjBkcmllZHxlbnwxfHx8fDE3ODEwODg3MjV8MA&ixlib=rb-4.1.0&q=80&w=400" }
];

const COIR_PRODUCTS = [
  { id: "c1", name: "COCO PEAT", origin: "Alappuzha, Kerala", desc: "100% natural growing medium from coconut husk. Excellent water retention for horticulture.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_2wyvu02wyvu02wyv.png" },
  { id: "c2", name: "COIR MAT", origin: "Alappuzha, Kerala", desc: "Hand-woven natural coir door mats & floor mats. Durable, eco-friendly & biodegradable.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_gimn02gimn02gimn.png" },
  { id: "c3", name: "COIR ROPE", origin: "Kerala, India", desc: "Twisted natural coir rope in various diameters. Strong, salt-water resistant & widely exported.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_50oron50oron50or.png" },
  { id: "c4", name: "COIR FIBRE", origin: "Alappuzha, Kerala", desc: "Raw & processed coir fibre for mattresses, geo-textiles, brushes & upholstery.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_ydpbptydpbptydpb.png" },
  { id: "c5", name: "COIR GEO-TEXTILE", origin: "Kerala, India", desc: "Biodegradable geo-textiles for soil erosion control & slope stabilisation.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_8d69c88d69c88d69.png" },
  { id: "c6", name: "GROW BAGS", origin: "Kerala, India", desc: "Coir-based grow bags for organic farming & hydroponic horticulture applications.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_pb5ldcpb5ldcpb5l.png" }
];

const COCONUT_PRODUCTS = [
  { id: "n1", name: "COCONUT OIL", origin: "Kerala, India", desc: "Pure cold-pressed virgin coconut oil for cooking, cosmetics & Ayurveda.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_athbetathbetathb.png" },
  { id: "n2", name: "DESICCATED COCONUT", origin: "Kerala, India", desc: "Finely shredded & dried coconut meat for confectionery, bakery & food processing.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_tbzawxtbzawxtbza.png" },
  { id: "n3", name: "COCONUT CHARCOAL", origin: "Kerala, India", desc: "High-quality activated shell charcoal for water purification & industrial use.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_aczg7daczg7daczg.png" }
];

const RICE_PRODUCTS = [
  { id: "o1", name: "RICE", origin: "Punjab & Kerala", desc: "Premium basmati & non-basmati rice varieties for global export.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_dzhsdydzhsdydzhs.png" }
];

// Product tags/lists under each category block
const FULL_PRODUCT_TAGS = {
  spices: ["Green Cardamom", "Black Pepper", "White Pepper", "Cinnamon", "Cassia", "Cloves", "Turmeric", "Red Chilli", "Cumin Seeds", "Coriander Seeds", "Fenugreek", "Mustard Seeds", "Star Anise", "Nutmeg", "Mace", "Ginger", "Fennel Seeds", "Bay Leaf"],
  coir: ["Coco Peat Blocks", "Coco Peat Discs", "Coir Mat (Plain)", "Coir Mat (Tufted)", "Coir Rope", "Coir Fibre (Brown)", "Coir Fibre (White)", "Geo-Textile Mesh", "Coir Grow Bags", "Coir Logs", "Coir Twine", "Brushes & Brooms"],
  coconut: ["Virgin Coconut Oil", "Refined Coconut Oil", "Desiccated Coconut", "Coconut Milk Powder", "Coconut Shell Charcoal", "Activated Carbon", "Coconut Shell Powder", "Coconut Water"],
  others: ["Basmati Rice", "Non-Basmati Rice"]
};

const CATEGORIES = [
  { id: "spices", label: "Spices", accent: "#c9a84c", bg: "#2d4a1e", tagline: "Premium Indian Spices", icon: "🌶" },
  { id: "coir", label: "Coir Products", accent: "#5aab6e", bg: "#1a4a2e", tagline: "Natural Coir Products", icon: "🌿" },
  { id: "coconut", label: "Coconut", accent: "#b58a30", bg: "#3a2e10", tagline: "Coconut Products", icon: "🥥" },
  { id: "others", label: "Agro Products", accent: "#9b7cb8", bg: "#2a1a40", tagline: "Other Agro Products", icon: "✦" }
];

export default function Products({ activeCategory, setActiveCategory }) {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const currentCategoryObj = CATEGORIES.find((cat) => cat.id === activeCategory) ?? CATEGORIES[0];
  const listTags = FULL_PRODUCT_TAGS[activeCategory] || [];

  function getProductsForCategory(catId) {
    switch (catId) {
      case "spices": return SPICES_PRODUCTS;
      case "coir": return COIR_PRODUCTS;
      case "coconut": return COCONUT_PRODUCTS;
      case "others": return RICE_PRODUCTS;
      default: return SPICES_PRODUCTS;
    }
  }

  const filteredProducts = getProductsForCategory(activeCategory);

  function handleProductCardClick(productId) {
    setSelectedProductId(selectedProductId === productId ? null : productId);
  }

  return (
    <section id="products-section" className="products-section">
      <div className="products-inner-container">
        {/* Title Block */}
        <div className="products-title-block">
          <div className="title-ornament-row">
            <div className="ornament-line" style={{ background: currentCategoryObj.accent }} />
            <span className="ornament-tag" style={{ color:'darkgoldenrod' }}>
              Our Products
            </span>
            <div className="ornament-line" style={{ background: currentCategoryObj.accent }} />
          </div>
          <h2 className="products-section-heading">{currentCategoryObj.tagline}</h2>
          <p className="products-section-sub">
            Click a category below to explore our full product range
          </p>
        </div>

        {/* Category Tabs */}
        <div className="products-tabs-row">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedProductId(null);
                }}
                className={`product-tab-btn ${isActive ? 'active' : ''}`}
                style={{
                  backgroundColor: isActive ? cat.bg : '#ffffff',
                  color: isActive ? '#ffffff' : '#444444',
                  borderColor: isActive ? cat.accent : '#e0d8cc',
                  boxShadow: isActive ? '0 4px 16px rgba(0,0,0,0.18)' : '0 1px 4px rgba(0,0,0,0.06)'
                }}
              >
                <span style={{ color: cat.id === 'spices' ? '#ff4444' : 'inherit' }}>{cat.icon}</span>
                {cat.label}
                {isActive && (
                  <span className="active-dot" style={{ background: cat.accent }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((prod) => {
            const isExpanded = selectedProductId === prod.id;
            return (
              <div
                key={prod.id}
                className="product-card group"
                onClick={() => handleProductCardClick(prod.id)}
              >
                {/* Round Image Container */}
                <div
                  className="product-img-wrapper"
                  style={{
                    border: isExpanded ? `3px solid ${currentCategoryObj.accent}` : "2px solid #e0d8cc",
                    boxShadow: isExpanded
                      ? `0 6px 24px rgba(0,0,0,0.18), 0 0 0 4px ${currentCategoryObj.accent}22`
                      : "0 3px 14px rgba(0,0,0,0.10)"
                  }}
                >
                  <img src={prod.img} alt={prod.name} className="product-card-img" />
                  <div className="product-card-hover-overlay">
                    <span className="hover-details-text">DETAILS</span>
                  </div>
                </div>

                {/* Name & Button */}
                <div className="product-card-name">{prod.name}</div>
                <button
                  className="product-card-details-btn"
                  style={{ background: currentCategoryObj.bg }}
                >
                  VIEW DETAILS
                </button>

                {/* Accordion Expansion Detail */}
                {isExpanded && (
                  <div
                    className="product-detail-accordion"
                    style={{
                      borderColor: `${currentCategoryObj.accent}44`,
                      boxShadow: "0 4px 18px rgba(0,0,0,0.10)"
                    }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
                  >
                    <div className="product-origin" style={{ color: currentCategoryObj.accent }}>
                      📍 {prod.origin}
                    </div>
                    <div className="product-desc-text">
                      {prod.desc}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Categories Tags Row */}
        {listTags.length > 0 && (
          <div
            className="products-tags-block"
            style={{
              borderColor: `${currentCategoryObj.accent}33`,
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)"
            }}
          >
            <div className="tags-block-header">
              <div className="header-line" style={{ background: currentCategoryObj.accent }} />
              <span className="header-text" style={{ color: currentCategoryObj.accent }}>
                All {currentCategoryObj.label} We Export
              </span>
              <div className="header-line-flex" style={{ background: `${currentCategoryObj.accent}33` }} />
            </div>
            <div className="tags-flex-container">
              {listTags.map((tag) => (
                <span
                  key={tag}
                  className="product-tag-pill"
                  style={{
                    backgroundColor: `${currentCategoryObj.accent}12`,
                    border: `1px solid ${currentCategoryObj.accent}44`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
