import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './Hero.css';

// ==========================================
// IMAGE ASSET CONSTANTS (Easy to update)
// ==========================================
const HERO_IMAGES = {
  globalLogistics: "/heroimg.jpg",
  spicesHeritage: "https://6a2a7ecd88751837051fd5d5.imgix.net/spices.png",
  coirBackwaters: "/coir1.jpg"
};

// Compass/Navigation decorative SVG element in corners of the slides
export function CompassDecoration({ flip = false }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="absolute pointer-events-none compass-decoration"
      style={{
        opacity: 0.22,
        transform: flip ? "scaleX(-1)" : "none",
        top: 0,
        [flip ? "right" : "left"]: 0,
        zIndex: 2
      }}
    >
      <path d="M0 0 Q60 0 60 60 Q60 0 120 0" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M0 0 Q0 60 60 60" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
      <circle cx="0" cy="0" r="80" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="60" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="40" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="20" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
      {[0, 15, 30, 45, 60, 75, 90].map((angle) => (
        <line
          key={angle}
          x1="0"
          y1="0"
          x2={80 * Math.cos((angle * Math.PI) / 180)}
          y2={80 * Math.sin((angle * Math.PI) / 180)}
          stroke="#C9A84C"
          strokeWidth="0.4"
        />
      ))}
      <path d="M5 0 C5 5 0 5 0 10 C0 5 -5 5 -5 0" fill="#C9A84C" opacity="0.6" transform="translate(0,0) rotate(-45)" />
    </svg>
  );
}

export default function Hero({
  setActivePage,
  setActiveCategory,
  scrollTo,
  setActiveNav
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(0);
  
  const handleHeroClick = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX;
    const swipeThreshold = 50; // Minimum swipe distance

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left - go to next slide
        handleNext();
      } else {
        // Swiped right - go to previous slide
        handlePrev();
      }
    }
  };

  const slides = [
    {
      id: "global",
      tag: "Trusted Across Nations",
      heading1: "GLOBAL EXPORT",
      heading2: "NETWORK",
      sub: "From India to the world — by air & sea.\nReliable, certified, on-time delivery.",
      btnLabel: "GET A QUOTE",
      bgUrl: HERO_IMAGES.globalLogistics,
      overlayImg: "",
      overlay: "linear-gradient(to right, rgba(10,20,40,0.82) 38%, rgba(5,10,25,0.22) 100%)",
      accent: "#7ab4d8",
      scrollTarget: "contact-section"
    },
    {
      id: "spices",
      tag: "From the Land of Spices",
      heading1: "PREMIUM INDIAN",
      heading2: "SPICES",
      sub: "Sourced from the finest farms of India,\ndelivered to the world.",
      btnLabel: "EXPLORE SPICES",
      bgUrl: HERO_IMAGES.spicesHeritage,
      overlay: "linear-gradient(to right, rgba(245, 234, 216, 0.28) 24%, rgba(233, 213, 182, 0.22) 56%, rgba(210, 186, 151, 0.10) 100%)",
      accent: "#c9a84c",
      scrollTarget: "products-section"
    },
    {
      id: "coir",
      tag: "From the Backwaters of Kerala",
      heading1: "NATURAL COIR",
      heading2: "PRODUCTS",
      sub: "Eco-friendly coir fibre, mats & coco peat\nfrom the coconut heartland of India.",
      btnLabel: "EXPLORE COIR",
      bgUrl: HERO_IMAGES.coirBackwaters,
      overlay: "linear-gradient(to right, rgba(10,20,5,0.85) 40%, rgba(5,10,2.5,0.22) 100%)",
      accent: "#5aab6e",
      scrollTarget: "products-section"
    }
  ];

  function changeSlide(index) {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 350);
  }

  const handleNext = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleButtonClick = (slide) => {
    if (slide.id === "global") {
      if (setActivePage) setActivePage("export");
      if (setActiveNav) setActiveNav("");
    } else if (slide.id === "spices") {
      if (setActiveCategory) setActiveCategory("spices");
      if (setActiveNav) setActiveNav("Products");
      if (setActivePage) setActivePage("home");
      if (scrollTo) {
        scrollTo("products-section");
      } else {
        document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (slide.id === "coir") {
      if (setActiveCategory) setActiveCategory("coir");
      if (setActiveNav) setActiveNav("Products");
      if (setActivePage) setActivePage("home");
      if (scrollTo) {
        scrollTo("products-section");
      } else {
        document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 8000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentSlide]);

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="hero-section select-none"
      onMouseEnter={handleHeroClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <img
          key={slide.id}
          src={slide.bgUrl}
          alt={slide.id}
          className={`hero-bg-img ${idx === currentSlide && !isAnimating ? 'visible' : ''}`}
          style={{ zIndex: 0 }}
        />
      ))}

      {/* Slide Gradients */}
      <div
        className="hero-overlay"
        style={{ background: activeSlide.overlay, zIndex: 1 }}
      />

      {/* Decorative compass shapes */}
      <CompassDecoration />
      <CompassDecoration flip />

      {/* SVG Trade Routes Animation on Global Slide */}
      {activeSlide.id === "global" && !isAnimating && (
        <div className="hero-svg-routes" style={{ zIndex: 2, opacity: 0.3 }}>
          <svg viewBox="0 0 900 460" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {[
              { d: "M 510 230 Q 380 110 155 170", delay: "0s" },
              { d: "M 510 230 Q 460 120 310 90", delay: "0.5s" },
              { d: "M 510 230 Q 570 150 710 110", delay: "1s" },
              { d: "M 510 230 Q 620 280 800 260", delay: "1.5s" },
              { d: "M 510 230 Q 490 370 400 420", delay: "2s" }
            ].map((route, idx) => (
              <g key={idx}>
                <path
                  d={route.d}
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeDasharray="8 5"
                  opacity="0.7"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-60"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={route.delay}
                  />
                </path>
                <circle r="4" fill="white" opacity="0.9">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin={route.delay}
                    path={route.d}
                  />
                </circle>
              </g>
            ))}
            {/* Kerala origin node */}
            <circle cx="510" cy="230" r="7" fill="#c9a84c" opacity="0.9">
              <animate
                attributeName="r"
                values="7;12;7"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}

      {/* Main Content Area */}
      <div className="hero-content-container" style={{ zIndex: 3 }}>
        <div
          className="hero-text-content"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(12px)" : "translateY(0)"
          }}
        >
          <div className="hero-tagline-row">
            <div className="hero-tagline-line" style={{ background: activeSlide.accent }} />
            <span className="hero-tagline-text" style={{ color: activeSlide.accent }}>
              {activeSlide.tag}
            </span>
            <div className="hero-tagline-line" style={{ background: activeSlide.accent }} />
          </div>

          <h1 className={`hero-title-main hero-title-cinzel`} style={{ color: activeSlide.id === 'spices' ? '#1f3f24' : 'var(--text-white)' }}>
            {activeSlide.heading1}
          </h1>
          <h1 className={`hero-title-accent hero-title-cinzel`} style={{ color: activeSlide.accent }}>
            {activeSlide.heading2}
          </h1>

          <p className="hero-subtext">
            {activeSlide.sub.split('\n').map((line, b) => (
              <span key={b}>
                {line}
                {b === 0 && <br />}
              </span>
            ))}
          </p>

          <div className="hero-ornament">
            <div className="hero-ornament-line" style={{ background: activeSlide.accent }} />
            <div className="hero-ornament-dot" style={{ background: activeSlide.accent }} />
            <div className="hero-ornament-line" style={{ background: activeSlide.accent }} />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleButtonClick(activeSlide);
            }}
            className="hero-action-btn"
            style={{
              background: activeSlide.id === "coir" ? "#1a4a2e" : activeSlide.id === "global" ? "#0a2040" : "#2d4a1e",
              border: `1.5px solid ${activeSlide.accent}`
            }}
          >
            {activeSlide.btnLabel}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Nav Dot Indicators */}
      <div className="hero-dots-container" style={{ zIndex: 10 }}>
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-dot-indicator ${idx === currentSlide ? 'active' : ''}`}
            style={{
              background: idx === currentSlide ? activeSlide.accent : "rgba(255, 255, 255, 0.38)"
            }}
          />
        ))}
      </div>

      {/* Side Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="hero-arrow-btn left"
        style={{ zIndex: 10 }}
      >
        <ChevronLeft size={20} className="arrow-svg" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="hero-arrow-btn right"
        style={{ zIndex: 10 }}
      >
        <ChevronRight size={20} className="arrow-svg" />
      </button>

      {/* Side Image Thumbnails */}
      <div className="hero-thumbnails-container" style={{ zIndex: 10 }}>
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-thumb-indicator ${idx === currentSlide ? 'active' : ''}`}
            style={{
              outline: idx === currentSlide ? `2px solid ${activeSlide.accent}` : "2px solid transparent"
            }}
          >
            <img src={slide.bgUrl} alt={slide.id} className="thumb-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
