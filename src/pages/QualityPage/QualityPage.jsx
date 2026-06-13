import React from 'react';
import { ArrowLeft, ShieldCheck, Check } from 'lucide-react';
import './QualityPage.css';

// Quality specifications list matching the Figma configuration
const QUALITY_STANDARDS = [
  {
    id: "spices",
    icon: "🌶",
    label: "Spices",
    accent: "#c9a84c",
    bg: "#2d4a1e",
    intro: "Our spices are sourced directly from certified farms across Kerala, Tamil Nadu, and Andhra Pradesh. Each batch is sun-dried or machine-dried under controlled conditions, then cleaned, graded, and tested before packing.",
    standards: ["FSSAI Licensed", "APEDA Registered", "Spices Board Certified", "ISO 22000:2018", "Moisture content < 12%", "Aflatoxin-free testing"],
    products: [
      { name: "Green Cardamom", quality: "Bold AGEB, AGE, Extra Bold grades; moisture ≤ 12%; free from extraneous matter. Stored in airtight containers to preserve volatile oil (≥ 3%)." },
      { name: "Black Pepper", quality: "FAQ & SQ grades; bulk density ≥ 550 g/L; piperine content ≥ 4%; machine-cleaned and steam-sterilised for microbial safety." },
      { name: "Cinnamon", quality: "True Ceylon or Cassia type; quills with < 1% broken pieces; moisture ≤ 13%; cinnamaldehyde content tested and certified." },
      { name: "Cloves", quality: "Hand-picked dried buds; eugenol content ≥ 72%; moisture ≤ 12%; free from stems and broken buds." },
      { name: "Turmeric", quality: "Alleppey and Erode varieties; curcumin ≥ 3.5%; moisture ≤ 10%; free from artificial colour and adulterants." },
      { name: "Red Chilli", quality: "S4, S5 Special grades; ASTA colour value ≥ 100; capsaicin tested; aflatoxin B1 < 2 ppb." }
    ]
  },
  {
    id: "coir",
    icon: "🌿",
    label: "Coir Products",
    accent: "#5aab6e",
    bg: "#1a4a2e",
    intro: "Our coir products are manufactured in Alappuzha, Kerala — the coir capital of the world. All products are made from 100% natural coconut husk with no harmful chemicals, and are biodegradable and eco-certified.",
    standards: ["Coir Board of India Certified", "ISO 9001:2015 QMS", "Phytosanitary Certificate", "EC compliance for geo-textiles", "EU import standards compliant"],
    products: [
      { name: "Coco Peat", quality: "EC < 0.5 mS/cm (buffered); pH 5.5–6.5; water holding capacity ≥ 600%; supplied in 650g bricks, 5kg blocks, or loose." },
      { name: "Coir Mat", quality: "Weight 700–1400 gsm; pile height 10–20 mm; colourfast; tested for tensile strength and UV stability." },
      { name: "Coir Rope", quality: "Twisted 3-strand construction; breaking load tested per diameter; salt-water and weather resistant." },
      { name: "Coir Fibre", quality: "Brown fibre length 100–250 mm; moisture ≤ 17%; free from sand and shell fragments; bristle and mattress grades available." },
      { name: "Geo-Textile", quality: "Woven and non-woven types; tensile strength ≥ 10 kN/m; hydraulic permeability tested; UV degradation rate certified." }
    ]
  },
  {
    id: "coconut",
    icon: "🥥",
    label: "Coconut Products",
    accent: "#b58a30",
    bg: "#3a2e10",
    intro: "Kerala's coconut belt produces some of the world's finest coconut-derived products. Our virgin coconut oil is cold-pressed within hours of dehusking to preserve nutrients and flavour.",
    standards: ["FSSAI Licensed", "APEDA Registered", "AGMARK Certified", "Kosher & Halal on request", "ISO 22000:2018"],
    products: [
      { name: "Virgin Coconut Oil", quality: "Cold-pressed, unrefined; moisture ≤ 0.1%; FFA < 0.1%; lauric acid ≥ 48%; peroxide value < 3 meq/kg; crystal-clear appearance." },
      { name: "Desiccated Coconut", quality: "Fine, medium, or coarse grades; moisture ≤ 3%; FFA < 0.1%; free from rancidity; packed in multilayer moisture-barrier bags." },
      { name: "Coconut Shell Charcoal", quality: "Fixed carbon ≥ 75%; ash content < 5%; moisture ≤ 5%; customised mesh sizes for activated carbon production." }
    ]
  },
  {
    id: "others",
    icon: "✦",
    label: "Agro Products",
    accent: "#9b7cb8",
    bg: "#2a1a40",
    intro: "We also export select premium agro products sourced from certified farms across India, meeting all international phytosanitary and food-safety requirements.",
    standards: ["FSSAI Licensed", "APEDA Registered", "Phytosanitary Certificate", "Export Inspection Council (EIC) Certified"],
    products: [
      { name: "Basmati Rice", quality: "Grain length ≥ 7.2 mm; elongation ratio ≥ 1.7; moisture ≤ 12.5%; broken grains < 5%; aromatic, aged 12–24 months." },
      { name: "Cashew Kernels", quality: "W180–W450 grades; whole white kernels; moisture ≤ 5%; free from insect damage; packed in vacuum-sealed tins or pouches." }
    ]
  }
];

export default function QualityPage({ setActivePage }) {
  return (
    <div className="quality-page">
      {/* Top Banner Banner */}
      <div className="quality-hero-banner">
        <div className="quality-hero-content">
          <button onClick={() => setActivePage("home")} className="quality-back-btn">
            <ArrowLeft size={16} />
            Back to Home
          </button>
          
          <div className="quality-hero-tagline">
            <ShieldCheck size={20} className="quality-icon" />
            <span className="tagline-text">Quality Assurance</span>
          </div>
          <h1 className="quality-hero-heading">Quality & Certifications</h1>
          <p className="quality-hero-sub">
            Every product we export meets stringent international quality standards. 
            Below you'll find detailed quality specifications for each product category.
          </p>
        </div>
      </div>

      {/* Main Specifications List */}
      <div className="quality-page-body">
        {QUALITY_STANDARDS.map((category) => (
          <section className="quality-category-card" key={category.id}>
            {/* Header area */}
            <div className="category-card-header" style={{ background: category.bg }}>
              <span className="category-icon">{category.icon}</span>
              <div className="category-titles">
                <h2 className="category-label">{category.label}</h2>
                <p className="category-specs-label" style={{ color: category.accent }}>
                  Quality Specifications & Standards
                </p>
              </div>
            </div>

            {/* Content area */}
            <div className="category-card-body">
              <p className="category-intro-text">
                {category.intro}
              </p>

              {/* Compliance standards grid */}
              <div className="compliance-row">
                <div className="compliance-label-row">
                  <ShieldCheck size={16} className="compliance-icon" style={{ color: category.accent }} />
                  <span className="compliance-label" style={{ color: category.accent }}>
                    Compliance Standards
                  </span>
                </div>
                <div className="standards-flex">
                  {category.standards.map((std) => (
                    <span
                      key={std}
                      className="standard-pill"
                      style={{
                        backgroundColor: `${category.accent}12`,
                        border: `1px solid ${category.accent}44`
                      }}
                    >
                      <Check size={12} className="check-icon" style={{ color: category.accent }} />
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Products quality breakdown */}
              <div className="category-products-list">
                {category.products.map((prod, idx) => (
                  <div
                    key={prod.name}
                    className="product-quality-item"
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#faf6f0" : "#ffffff"
                    }}
                  >
                    <div className="quality-product-header">
                      <div className="product-dot" style={{ background: category.accent }} />
                      <span className="quality-product-name">{prod.name}</span>
                    </div>
                    <p className="quality-product-desc">{prod.quality}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
