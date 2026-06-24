import React from 'react';
import { Sprout, Leaf, Globe, ShieldCheck, Truck } from 'lucide-react';
import './Features.css';

export default function Features() {
  const items = [
    { icon: Leaf, title: "100% NATURAL", desc: "Pure and natural spices" },
    { icon: Sprout, title: "FARM FRESH", desc: "Sourced directly from Indian farms" },
    { icon: Globe, title: "GLOBAL EXPORT", desc: "Delivering quality beyond borders" },
    { icon: ShieldCheck, title: "QUALITY ASSURED", desc: "International quality standards" },
    { icon: Truck, title: "ON TIME DELIVERY", desc: "Reliable & timely shipment" }
  ];

  return (
    <section className="features-section" id="features-section">
      <div className="features-container">
        {items.map(({ icon: IconComponent, title, desc }) => (
          <div className="feature-item" key={title}>
            <div className="feature-icon-wrapper">
              <IconComponent className="feature-icon" />
            </div>
            <div className="feature-text">
              <div className="feature-title">{title}</div>
              <div className="feature-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
