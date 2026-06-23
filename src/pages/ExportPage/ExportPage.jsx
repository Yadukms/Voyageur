import React, { useState } from 'react';
import { ArrowLeft, ClipboardList, Package, Globe, CheckCircle, FileText, Calendar, AlertCircle, ChevronDown } from 'lucide-react';
import './ExportPage.css';

// Product catalog matching specifications

const QUOTE_CATALOG = {
  spices: {
    label: "Spices",
    accent: "#c9a84c",
    bg: "#2d4a1e",
    icon: "🌶",
    items: ["Green Cardamom", "Black Pepper", "White Pepper", "Cinnamon", "Cassia", "Cloves", "Turmeric", "Red Chilli", "Cumin Seeds", "Coriander Seeds", "Fenugreek", "Mustard Seeds", "Star Anise", "Nutmeg", "Mace", "Ginger", "Fennel Seeds", "Bay Leaf"]
  },
  coir: {
    label: "Coir Products",
    accent: "#5aab6e",
    bg: "#1a4a2e",
    icon: "🌿",
    items: ["Coco Peat Blocks", "Coco Peat Discs", "Coir Mat (Plain)", "Coir Mat (Tufted)", "Coir Rope", "Coir Fibre (Brown)", "Coir Fibre (White)", "Coir Geo-Textile", "Coir Grow Bags", "Coir Logs", "Coir Twine", "Brushes & Brooms"]
  },
  coconut: {
    label: "Coconut Products",
    accent: "#b58a30",
    bg: "#3a2e10",
    icon: "🥥",
    items: ["Virgin Coconut Oil", "Refined Coconut Oil", "Desiccated Coconut", "Coconut Milk Powder", "Coconut Shell Charcoal", "Activated Carbon", "Coconut Shell Powder", "Coconut Water"]
  },
  others: {
    label: "Agro Products",
    accent: "#9b7cb8",
    bg: "#2a1a40",
    icon: "✦",
    items: ["Basmati Rice", "Non-Basmati Rice"]
  }
};

const PACKAGING_PREFERENCES = [
  "Bulk (Jute Bags)",
  "Retail Pouches (50g–500g)",
  "Vacuum Sealed Packs",
  "Custom Branded Packaging"
];

const COUNTRIES = [
  "United States", "United Kingdom", "Germany", "France", "UAE", "Saudi Arabia",
  "Australia", "Canada", "Japan", "Singapore", "Netherlands", "Malaysia", "Other"
];

export default function ExportPage({ setActivePage }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    packaging: "",
    deliveryDate: "",
    notes: "",
    selectedItems: {} // Key: product name, Value: quantity string
  });
  // Validate Step 3 (Destination & Date)
  function validateStep3() {
    const errors = {};
    if (!formData.country) errors.country = "Destination country is required";
    if (!formData.deliveryDate) errors.deliveryDate = "Required by date is mandatory";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (step === 3) {
      if (!validateStep3()) return;
      setIsSending(true);
      setErrorMessage("");

      try {
        // Replace with your live Render backend URL when deployed, or use environment variable
        const API_URL = "http://localhost:5000/api/enquiry";

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            weightUnit: weightUnit
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setIsSubmitted(true);
        } else {
          setErrorMessage(result.message || "Failed to submit enquiry. Please try again.");
        }
      } catch (error) {
        console.error("Submission Error:", error);
        setErrorMessage("Server error: Could not reach the email service.");
      } finally {
        setIsSending(false);
      }
    }
  }


  function handleFieldChange(key, val) {
    let sanitizedVal = val;
    if (key === "phone") {
      // Allow only numbers, spaces, and basic phone symbols (+, -, (, ))
      sanitizedVal = val.replace(/[^\d\s()\-+]/g, "");
    }
    setFormData((prev) => ({ ...prev, [key]: sanitizedVal }));
    // Clear field-specific error when typed
    setFormErrors((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  }

  // Toggle selection of a product
  function toggleProductItem(itemName) {
    setFormData((prev) => {
      const copy = { ...prev.selectedItems };
      if (itemName in copy) {
        delete copy[itemName];
      } else {
        copy[itemName] = ""; // default empty quantity
      }
      return { ...prev, selectedItems: copy };
    });

    // Clear quantity errors for this product if deselected
    setFormErrors((prev) => {
      const copy = { ...prev };
      delete copy[`qty_${itemName}`];
      return copy;
    });
  }

  // Handle quantity change for selected product
  function handleQuantityChange(itemName, quantityVal) {
    setFormData((prev) => ({
      ...prev,
      selectedItems: { ...prev.selectedItems, [itemName]: quantityVal }
    }));

    if (quantityVal) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[`qty_${itemName}`];
        return copy;
      });
    }
  }

  // Validate Step 1 (Company Details)
  function validateStep1() {
    const errors = {};
    if (!formData.companyName.trim()) errors.companyName = "Company name is required";
    if (!formData.contactName.trim()) errors.contactName = "Contact person name is required";

    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  // Validate Step 2 (Products & Quantities)
  function validateStep2() {
    const selectedCount = Object.keys(formData.selectedItems).length;
    let hasError = false;
    const errors = {};

    if (selectedCount === 0) {
      setErrorMessage("Please select at least one product before proceeding.");
      hasError = true;
    } else {
      Object.entries(formData.selectedItems).forEach(([item, qty]) => {
        if (!qty || parseFloat(qty) <= 0) {
          errors[`qty_${item}`] = `Please enter quantity for ${item}`;
        }
      });
      if (Object.keys(errors).some(k => k.startsWith('qty_'))) {
        setErrorMessage(`Please enter the required weight (in ${weightUnit.toUpperCase()}) for all selected products.`);
        hasError = true;
      } else {
        setErrorMessage("");
      }
    }

    if (!formData.packaging) {
      errors.packaging = "Packaging preference is required";
      hasError = true;
    }

    setFormErrors(errors);
    return !hasError;
  }



  const selectedProductsCount = Object.keys(formData.selectedItems).length;

  return (
    <div className="export-page">
      {isSubmitted ? (
        <div className="export-success-screen">
          <div className="success-container">
            <div className="success-icon-badge">
              <CheckCircle size={40} className="success-badge-icon" />
            </div>
            <h2 className="success-header">Export Enquiry Submitted!</h2>
            <p className="success-message">
              Thank you, <strong>{formData.contactName}</strong>. Our export team will contact you within 24 hours with a tailored quote.
            </p>

            {/* Order summary card */}
            <div className="summary-card">
              <div className="summary-title">ORDER SUMMARY</div>
              <div className="summary-specs">
                <div><strong>Company:</strong> {formData.companyName}</div>
                <div><strong>Destination:</strong> {formData.country || "—"}</div>
                <div>
                  <strong>Products ({selectedProductsCount}):</strong>{" "}
                  {Object.keys(formData.selectedItems).slice(0, 4).join(", ")}
                  {selectedProductsCount > 4 ? ` +${selectedProductsCount - 4} more` : ""}
                </div>
                <div><strong>Unit:</strong> {weightUnit.toUpperCase()}</div>
                <div><strong>Packaging:</strong> {formData.packaging || "—"}</div>
              </div>
            </div>

            <button onClick={() => setActivePage("home")} className="success-home-btn">
              BACK TO HOME
            </button>
          </div>
        </div>
      ) : (
        <div className="export-wizard-layout">
          {/* Top Green Hero */}
          <div className="export-hero-banner">
            <div className="hero-content-wrapper">
              <button onClick={() => setActivePage("home")} className="wizard-back-btn">
                <ArrowLeft size={16} />
                Back to Home
              </button>

              <div className="wizard-tagline-row">
                <FileText size={18} className="wizard-decor-icon" />
                <span className="wizard-tagline">Export Enquiry</span>
              </div>
              <h1 className="wizard-heading">Get A Quote</h1>
              <p className="wizard-subtext">
                Fill in your requirements and we'll send a competitive export quotation.
              </p>

              {/* Progress Steps Row */}
              <div className="progress-steps-row">
                {[
                  { n: 1, label: "Company Info", icon: ClipboardList },
                  { n: 2, label: "Select Products", icon: Package },
                  { n: 3, label: "Destination", icon: Globe }
                ].map(({ n, label, icon: IconComp }, idx) => (
                  <div className="progress-step-item" key={n}>
                    <button
                      type="button"
                      className={`step-circle-btn ${step >= n ? 'active' : ''}`}
                      onClick={() => step > n && setStep(n)}
                      style={{
                        background: step >= n ? "#c9a84c" : "rgba(255, 255, 255, 0.15)",
                        color: step >= n ? "white" : "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      {step > n ? <CheckCircle size={16} /> : n}
                    </button>
                    <span
                      className="step-label"
                      style={{
                        color: step === n ? "white" : "rgba(255, 255, 255, 0.5)",
                        fontWeight: step === n ? 600 : 400
                      }}
                    >
                      {label}
                    </span>
                    {idx < 2 && <ArrowLeft size={16} className="progress-chevron-right" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Wizard Core */}
          <div className="wizard-form-container">
            <form onSubmit={handleFormSubmit} className="wizard-form">
              {/* STEP 1: Company details */}
              {step === 1 && (
                <div className="wizard-step-card">
                  <h3 className="step-card-title">Company Information</h3>
                  <div className="form-grid-2">
                    {[
                      { key: "companyName", label: "Company Name *", ph: "Your Company Ltd." },
                      { key: "contactName", label: "Contact Person *", ph: "Full Name" },
                      { key: "email", label: "Email Address *", ph: "email@company.com", type: "email" },
                      { key: "phone", label: "Phone Number", ph: "+1 234 567 8900" }
                    ].map(({ key, label, ph, type }) => (
                      <div className="wizard-field-group" key={key}>
                        <label className="wizard-label">{label}</label>
                        <input
                          type={type || "text"}
                          placeholder={ph}
                          className={`wizard-input ${formErrors[key] ? 'error' : ''}`}
                          value={formData[key]}
                          onChange={(e) => handleFieldChange(key, e.target.value)}
                        />
                        {formErrors[key] && (
                          <div className="wizard-field-error">
                            <AlertCircle size={14} className="error-icon" />
                            <span>{formErrors[key]}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="step-nav-buttons justify-end">
                    <button
                      type="button"
                      onClick={() => validateStep1() && setStep(2)}
                      className="wizard-next-btn"
                    >
                      NEXT: SELECT PRODUCTS
                      <ArrowLeft size={16} className="rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Products & Quantities */}
              {step === 2 && (
                <div className="wizard-step-card">
                  <div className="step-header-flex">
                    <h3 className="step-card-title">Select Products & Quantities</h3>
                    <div className="weight-unit-selector">
                      <span className="unit-label">Unit:</span>
                      {["kg", "lb"].map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() => setWeightUnit(unit)}
                          className={`unit-pill-btn ${weightUnit === unit ? 'active' : ''}`}
                        >
                          {unit.toUpperCase()}
                        </button>
                      ))}
                      {selectedProductsCount > 0 && (
                        <span className="selected-counter-badge">
                          {selectedProductsCount} selected
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="step-instructions">
                    Click a category to expand, select products, and enter weight in {weightUnit.toUpperCase()}.
                  </p>

                  {/* General step error message */}
                  {errorMessage && (
                    <div className="wizard-general-error">
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Categories Accordions list */}
                  <div className="categories-accordions">
                    {Object.entries(QUOTE_CATALOG).map(([key, cat]) => {
                      const isOpen = activeAccordion === key;
                      const selectedInCat = cat.items.filter((item) => item in formData.selectedItems);
                      const hasQtyErrorInCat = selectedInCat.some((item) => formErrors[`qty_${item}`]);

                      return (
                        <div
                          key={key}
                          className="category-accordion-item"
                          style={{
                            borderColor: isOpen ? cat.accent : hasQtyErrorInCat ? "#e53e3e" : "#e8dfd0"
                          }}
                        >
                          <button
                            type="button"
                            className="accordion-header-btn"
                            style={{ background: isOpen ? cat.bg : "#faf6f0" }}
                            onClick={() => setActiveAccordion(isOpen ? null : key)}
                          >
                            <div className="header-left-side">
                              <span className="category-icon">{cat.icon}</span>
                              <div className="category-details">
                                <div className="category-name" style={{ color: isOpen ? 'white' : '#1a1a1a' }}>
                                  {cat.label}
                                </div>
                                <div className="category-desc" style={{ color: isOpen ? 'rgba(255,255,255,0.7)' : '#999' }}>
                                  {selectedInCat.length > 0
                                    ? `${selectedInCat.length} product(s) selected`
                                    : `${cat.items.length} products available`}
                                </div>
                              </div>
                            </div>
                            <div className="header-right-side">
                              {selectedInCat.length > 0 && (
                                <span className="category-count-badge" style={{ background: cat.accent }}>
                                  {selectedInCat.length}
                                </span>
                              )}
                              {hasQtyErrorInCat && <AlertCircle size={18} className="error-icon" />}
                              <ChevronDown
                                className={`accordion-chevron-icon ${isOpen ? 'rotated' : ''}`}
                                style={{ color: isOpen ? 'white' : '#999' }}
                              />
                            </div>
                          </button>

                          {/* Accordion list details */}
                          {isOpen && (
                            <div className="accordion-body-grid">
                              {cat.items.map((item) => {
                                const isSelected = item in formData.selectedItems;
                                const qtyErr = formErrors[`qty_${item}`];

                                return (
                                  <div
                                    key={item}
                                    className={`product-select-card ${isSelected ? 'selected' : ''} ${qtyErr ? 'qty-error' : ''}`}
                                    onClick={() => toggleProductItem(item)}
                                    style={{
                                      backgroundColor: isSelected ? `${cat.accent}12` : 'white',
                                      borderColor: qtyErr ? '#e53e3e' : isSelected ? cat.accent : '#e8dfd0'
                                    }}
                                  >
                                    <div className="select-card-left">
                                      <div
                                        className={`checkbox-indicator ${isSelected ? 'checked' : ''}`}
                                        style={{
                                          backgroundColor: isSelected ? cat.accent : 'transparent',
                                          borderColor: isSelected ? cat.accent : '#ccc'
                                        }}
                                      >
                                        {isSelected && <div className="inner-check" />}
                                      </div>
                                      <span className="product-item-label">{item}</span>
                                    </div>

                                    {/* Quantity input inside selected card */}
                                    {isSelected && (
                                      <div className="select-card-right" onClick={(e) => e.stopPropagation()}>
                                        <input
                                          type="number"
                                          placeholder="Qty"
                                          min="0.1"
                                          step="0.1"
                                          className={`product-qty-input ${qtyErr ? 'error' : ''}`}
                                          style={{ borderColor: qtyErr ? '#e53e3e' : `${cat.accent}66` }}
                                          value={formData.selectedItems[item]}
                                          onChange={(e) => handleQuantityChange(item, e.target.value)}
                                        />
                                        <span className="product-qty-unit">{weightUnit}</span>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Packaging Preference selections */}
                  <div className="packaging-selection-area">
                    <label className="wizard-label">PACKAGING PREFERENCE *</label>
                    <div className="packaging-options-grid">
                      {PACKAGING_PREFERENCES.map((pref) => (
                        <div
                          key={pref}
                          className={`packaging-option-card ${formData.packaging === pref ? 'active' : ''} ${formErrors.packaging ? 'error' : ''}`}
                          onClick={() => handleFieldChange("packaging", pref)}
                        >
                          <div className={`radio-circle ${formData.packaging === pref ? 'checked' : ''} ${formErrors.packaging ? 'error' : ''}`}>
                            {formData.packaging === pref && <div className="inner-dot" />}
                          </div>
                          <span className="radio-label">{pref}</span>
                        </div>
                      ))}
                    </div>
                    {formErrors.packaging && (
                      <div className="wizard-field-error">
                        <AlertCircle size={14} className="error-icon" />
                        <span>{formErrors.packaging}</span>
                      </div>
                    )}
                  </div>

                  <div className="step-nav-buttons">
                    <button type="button" onClick={() => setStep(1)} className="wizard-back-btn-gray">
                      ← BACK
                    </button>
                    <button
                      type="button"
                      onClick={() => validateStep2() && setStep(3)}
                      className="wizard-next-btn"
                    >
                      NEXT: DESTINATION
                      <ArrowLeft size={16} className="rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Destination & Review */}
              {step === 3 && (
                <div className="wizard-step-card">
                  <h3 className="step-card-title">Destination & Delivery</h3>
                  <div className="form-grid-2 mb-4">
                    <div className="wizard-field-group">
                      <label className="wizard-label">DESTINATION COUNTRY *</label>
                      <select
                        required
                        className={`wizard-select ${formErrors.country ? 'error' : ''}`}
                        value={formData.country}
                        onChange={(e) => handleFieldChange("country", e.target.value)}
                      >
                        <option value="">Select country…</option>
                        {COUNTRIES.map((c) => (
                          <option value={c} key={c}>{c}</option>
                        ))}
                      </select>
                      {formErrors.country && (
                        <div className="wizard-field-error">
                          <AlertCircle size={14} className="error-icon" />
                          <span>{formErrors.country}</span>
                        </div>
                      )}
                    </div>

                    <div className="wizard-field-group">
                      <label className="wizard-label">REQUIRED BY DATE *</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          className={`wizard-input date-input ${formErrors.deliveryDate ? 'error' : ''}`}
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.deliveryDate}
                          onChange={(e) => handleFieldChange("deliveryDate", e.target.value)}
                        />
                      </div>
                      {formErrors.deliveryDate && (
                        <div className="wizard-field-error">
                          <AlertCircle size={14} className="error-icon" />
                          <span>{formErrors.deliveryDate}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional notes text area */}
                  <div className="wizard-field-group mb-4">
                    <label className="wizard-label">ADDITIONAL NOTES</label>
                    <textarea
                      rows={4}
                      className="wizard-textarea"
                      value={formData.notes}
                      onChange={(e) => handleFieldChange("notes", e.target.value)}
                      placeholder="Certifications required, label specifications, port of entry…"
                    />
                  </div>

                  {/* Order Preview summary */}
                  <div className="summary-preview-card">
                    <div className="summary-preview-title">ORDER PREVIEW</div>
                    <div className="preview-grid">
                      <div><strong>Company:</strong> {formData.companyName}</div>
                      <div><strong>Contact:</strong> {formData.contactName}</div>
                      <div className="col-span-full">
                        <strong>Products ({selectedProductsCount}):</strong>{" "}
                        {Object.keys(formData.selectedItems).slice(0, 5).join(", ")}
                        {selectedProductsCount > 5 ? ` +${selectedProductsCount - 5} more` : ""}
                      </div>
                      <div><strong>Unit:</strong> {weightUnit.toUpperCase()}</div>
                      <div><strong>Packaging:</strong> {formData.packaging || "—"}</div>
                      <div><strong>Destination:</strong> {formData.country || "—"}</div>
                    </div>
                  </div>



                  {/* <div className="step-nav-buttons">
                    <button type="button" onClick={() => setStep(2)} className="wizard-back-btn-gray">
                      ← BACK
                    </button>
                    <button type="submit" className="wizard-submit-btn">
                      <CheckCircle size={16} />
                      SUBMIT ENQUIRY
                    </button>
                  </div> */}
                  <div className="step-nav-buttons">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="wizard-back-btn-gray"
                    >
                      ← BACK
                    </button>

                    <button
                      type="submit"
                      className="wizard-submit-btn"
                      disabled={isSending}
                    >
                      {isSending ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <CheckCircle size={16} />
                          SUBMIT ENQUIRY
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
