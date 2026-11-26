import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "../data/products";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}`;

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Column 1: Brand & Overview */}
        <div>
          <div className="brand-mark" style={{ marginBottom: "14px" }}>
            <div className="brand-badge" style={{ background: "#fff", color: "#0f294a" }}>
              <span>AP</span>
            </div>
            <div>
              <span className="brand-title" style={{ color: "#ffffff" }}>
                {COMPANY_INFO.brandName}
              </span>
              <span className="brand-subtitle" style={{ color: "#9ed19b" }}>
                {COMPANY_INFO.locationSummary}
              </span>
            </div>
          </div>
          <p style={{ margin: "0 0 12px", color: "#cbd5e1", lineHeight: 1.55 }}>
            Manufacturer and supplier of irrigation pipes, agricultural piping, water
            management systems, and fittings serving farmers, dealers, and projects
            across North India.
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
            Social Channels: [Insert Official LinkedIn / Facebook / YouTube Links]
          </p>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/infrastructure">Infrastructure</Link>
            </li>
            <li>
              <Link to="/quality-assurance">Quality Assurance</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Product Categories */}
        <div>
          <h3 className="footer-heading">Product Categories</h3>
          <ul className="footer-links">
            {PRODUCTS_DATA.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div>
          <h3 className="footer-heading">Contact Information</h3>
          <ul className="footer-links">
            <li>
              <a href={COMPANY_INFO.phoneHref} className="top-bar-item">
                <Phone size={14} aria-hidden="true" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY_INFO.email}`} className="top-bar-item">
                <Mail size={14} aria-hidden="true" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="top-bar-item"
              >
                <MessageSquare size={14} aria-hidden="true" />
                <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
              </a>
            </li>
            <li className="top-bar-item" style={{ alignItems: "flex-start" }}>
              <MapPin size={14} style={{ marginTop: 3, flexShrink: 0 }} aria-hidden="true" />
              <span>{COMPANY_INFO.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.brandName}. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}