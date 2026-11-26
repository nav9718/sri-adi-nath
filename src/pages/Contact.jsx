import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { COMPANY_INFO } from "../data/products";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const location = useLocation();
  const preselectedProduct = location.state?.preselectedProduct || "";

  useEffect(() => {
    document.title = "Contact Us | Shri Adinath Pipes";
  }, []);

  const whatsappUrl = `https://wa.me/${
    COMPANY_INFO.whatsappNumber
  }?text=${encodeURIComponent(
    "Hello Shri Adinath Pipes, I would like to connect regarding an enquiry."
  )}`;

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We would be happy to assist you with product enquiries, quotations, bulk
            orders and business partnerships.
          </p>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact Us</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="two-col-contact">
            {/* LEFT COLUMN: CONTACT INFORMATION */}
            <aside className="contact-info-box" aria-label="Corporate Contact Details">
              <h2>Corporate Office</h2>
              <p className="contact-org-name">{COMPANY_INFO.brandName}</p>

              <ul className="contact-detail-list">
                <li className="contact-detail-item">
                  <MapPin size={18} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <span className="contact-detail-label">Address</span>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <Phone size={18} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <span className="contact-detail-label">Phone</span>
                    <a href={COMPANY_INFO.phoneHref} style={{ fontWeight: 600, color: "var(--navy)" }}>
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <Mail size={18} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <span className="contact-detail-label">Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontWeight: 600, color: "var(--navy)" }}>
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <MessageSquare size={18} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <span className="contact-detail-label">WhatsApp</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 600, color: "var(--green)" }}
                    >
                      {COMPANY_INFO.whatsappDisplay}
                    </a>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <Clock size={18} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <span className="contact-detail-label">Business Hours</span>
                    <span>{COMPANY_INFO.businessHours}</span>
                  </div>
                </li>
                <li></li>
              </ul>
              
            </aside>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <ContactForm defaultProduct={preselectedProduct} />
            
          </div>

          {/* BELOW FORM: GOOGLE MAPS SECTION */}
          <div className="map-card">
            <h3>Location Map</h3>
            {COMPANY_INFO.googleMapsEmbedSrc ? (
              <iframe
                title="Shri Adinath Pipes Location Map"
                src={COMPANY_INFO.googleMapsEmbedSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
            ) : (
              <div
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--border)",
                  padding: "24px",
                  fontSize: "13.5px",
                  color: "var(--text-secondary)",
                }}
              >
                Google Maps embed will appear here once the business location and embed URL
                are added in <code>src/data/products.js</code> ({COMPANY_INFO.address}).
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}