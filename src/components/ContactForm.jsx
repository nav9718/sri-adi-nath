import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "../data/products";

const INITIAL_FORM = {
  fullName: "",
  companyName: "",
  mobile: "",
  email: "",
  cityState: "",
  productInterested: "",
  quantityRequired: "",
  message: "",
  websiteTrap: "", // Honeypot anti-spam field
  spamAnswer: "",
};

export default function ContactForm({ defaultProduct = "" }) {
  const [form, setForm] = useState({
    ...INITIAL_FORM,
    productInterested: defaultProduct,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [statusBanner, setStatusBanner] = useState(null);

  useEffect(() => {
    if (defaultProduct) {
      setForm((prev) => ({ ...prev, productInterested: defaultProduct }));
    }
  }, [defaultProduct]);

  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }
    const cleanPhone = form.mobile.replace(/[^\d+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      nextErrors.mobile = "Please enter a valid mobile number (at least 10 digits).";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please enter your enquiry or requirement details.";
    }
    if (form.spamAnswer.trim() !== "7") {
      nextErrors.spamAnswer = "Please answer the verification check (4 + 3 = 7).";
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusBanner(null);

    // Honeypot check for automated bots
    if (form.websiteTrap) {
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusBanner({
        type: "error",
        text: "Please review the highlighted fields before submitting.",
      });
      return;
    }

    setSubmitting(true);

    try {
      if (COMPANY_INFO.enquiryApiEndpoint) {
        const res = await fetch(COMPANY_INFO.enquiryApiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: form.fullName.trim(),
            companyName: form.companyName.trim(),
            mobile: form.mobile.trim(),
            email: form.email.trim(),
            cityState: form.cityState.trim(),
            productInterested: form.productInterested,
            quantityRequired: form.quantityRequired.trim(),
            message: form.message.trim(),
          }),
        });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        setStatusBanner({
          type: "success",
          text: "Your enquiry has been submitted. Our team will review your requirements and follow up.",
        });
        setForm({ ...INITIAL_FORM, productInterested: defaultProduct });
      } else {
        // Integration-ready state: no backend URL configured yet
        setStatusBanner({
          type: "error",
          text:
            "Form validation passed, but no backend API endpoint is connected yet (set COMPANY_INFO.enquiryApiEndpoint). Please call or WhatsApp Shri Adinath Pipes directly using the contact details on the left.",
        });
      }
    } catch {
      setStatusBanner({
        type: "error",
        text:
          "Unable to send enquiry automatically right now. Please reach out directly via phone, email, or WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="enquiry-form" className="contact-form-panel">
      <h2>Send Us an Enquiry</h2>
      <p style={{ margin: 0, fontSize: "13.5px", color: "var(--text-secondary)" }}>
        Share your pipe category, dimensions, or bulk requirement for Punjab, Haryana,
        Rajasthan, Himachal Pradesh, or North India.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot trap */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="websiteTrap">Website</label>
          <input
            id="websiteTrap"
            type="text"
            name="websiteTrap"
            tabIndex={-1}
            autoComplete="off"
            value={form.websiteTrap}
            onChange={handleChange}
          />
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="fullName">Full Name*</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className={`form-control ${errors.fullName ? "has-error" : ""}`}
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
            {errors.fullName && <span className="field-error">{errors.fullName}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="form-control"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Farm / Enterprise / Dealership name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="mobile">Mobile Number*</label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              className={`form-control ${errors.mobile ? "has-error" : ""}`}
              value={form.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              required
            />
            {errors.mobile && <span className="field-error">{errors.mobile}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control ${errors.email ? "has-error" : ""}`}
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="cityState">City / State</label>
            <input
              id="cityState"
              name="cityState"
              type="text"
              className="form-control"
              value={form.cityState}
              onChange={handleChange}
              placeholder="e.g., Ludhiana, Punjab / Hisar, Haryana"
            />
          </div>

          <div className="form-field">
            <label htmlFor="productInterested">Product Interested In</label>
            <select
              id="productInterested"
              name="productInterested"
              className="form-control"
              value={form.productInterested}
              onChange={handleChange}
            >
              <option value="">-- Select Pipe / Fitting Category --</option>
              {PRODUCTS_DATA.map((prod) => (
                <option key={prod.slug} value={prod.name}>
                  {prod.name}
                </option>
              ))}
              <option value="Multiple Categories / Bulk Order">
                Multiple Categories / Bulk Order
              </option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="quantityRequired">Quantity Required</label>
            <input
              id="quantityRequired"
              name="quantityRequired"
              type="text"
              className="form-control"
              value={form.quantityRequired}
              onChange={handleChange}
              placeholder="e.g., Meters, coils, or truckload"
            />
          </div>

          <div className="form-field">
            <label htmlFor="spamAnswer">Spam Check: What is 4 + 3?*</label>
            <input
              id="spamAnswer"
              name="spamAnswer"
              type="text"
              inputMode="numeric"
              className={`form-control ${errors.spamAnswer ? "has-error" : ""}`}
              value={form.spamAnswer}
              onChange={handleChange}
              placeholder="Enter 7"
              required
            />
            {errors.spamAnswer && (
              <span className="field-error">{errors.spamAnswer}</span>
            )}
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`form-control ${errors.message ? "has-error" : ""}`}
              value={form.message}
              onChange={handleChange}
              placeholder="Specify sizes, pressure class, delivery location, or business enquiry details..."
              required
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>
        </div>

        <div style={{ marginTop: "18px" }}>
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-green"
          >
            <Send size={15} aria-hidden="true" />
            <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
          </button>
        </div>

        {statusBanner && (
          <div
            role="status"
            className={`alert-box ${
              statusBanner.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              {statusBanner.type === "success" ? (
                <CheckCircle2 size={17} style={{ flexShrink: 0, marginTop: 1 }} />
              ) : (
                <AlertCircle size={17} style={{ flexShrink: 0, marginTop: 1 }} />
              )}
              <span>{statusBanner.text}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}