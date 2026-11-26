// src/pages/ProductDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "../data/products";
import ContactForm from "../components/ContactForm";

export default function ProductDetails() {
  const { slug } = useParams();
  const product =
    PRODUCTS_DATA.find((item) => item.slug === slug) || PRODUCTS_DATA[0];

  useEffect(() => {
    document.title = `${product.name} | Shri Adinath Pipes`;
  }, [product]);

  const whatsappProductUrl = `https://wa.me/${
    COMPANY_INFO.whatsappNumber
  }?text=${encodeURIComponent(
    `Hello Shri Adinath Pipes, I would like a quote and details for: ${product.name}`
  )}`;

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>{product.name}</h1>
          <p>{product.shortDescription}</p>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <section className="section">
        <div className="container two-col-grid">
          <div className="media-frame">
            <img src={product.imageUrl} alt={product.imageAlt} />
            <div className="media-caption">{product.name} — {product.code}</div>
          </div>

          <div>
            <span className="section-tag">PRODUCT OVERVIEW</span>
            <h2 className="section-heading">{product.name}</h2>
            <p style={{ color: "var(--text-secondary)" }}>{product.overview}</p>
            <p style={{ fontSize: "13.5px" }}>
              <strong>Material Info:</strong> {product.material}
            </p>
            <p style={{ fontSize: "13.5px" }}>
              <strong>Available Sizes:</strong> {product.availableSizes}
            </p>
            <p style={{ fontSize: "13.5px" }}>
              <strong>Applications:</strong> {product.applications}
            </p>

            <div style={{ marginTop: "18px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href={whatsappProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green"
              >
                <MessageSquare size={15} aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>
              <a href="#product-enquiry" className="btn btn-primary">
                Request Specification / Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col-grid">
          <div className="info-card">
            <h3>Features & Benefits</h3>
            <ul style={{ margin: "10px 0 0", paddingLeft: "18px", color: "var(--text-secondary)" }}>
              {product.features.map((f) => (
                <li key={f} style={{ marginBottom: "6px" }}>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>Product Advantages</h3>
            <ul style={{ margin: "10px 0 0", paddingLeft: "18px", color: "var(--text-secondary)" }}>
              {product.advantages.map((a) => (
                <li key={a} style={{ marginBottom: "6px" }}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container" style={{ marginTop: "28px" }}>
          <div className="info-card">
            <h3 style={{ marginTop: 0 }}>Technical Specifications (Editable Data)</h3>
            <table className="spec-table">
              <tbody>
                {product.specs.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="product-enquiry" className="section">
        <div className="container" style={{ maxWidth: "780px" }}>
          <ContactForm defaultProduct={product.name} />
        </div>
      </section>
    </>
  );
}