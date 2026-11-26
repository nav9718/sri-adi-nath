// src/pages/Gallery.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_DATA } from "../data/products";
import CTASection from "../components/CTASection";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Shri Adinath Pipes";
  }, []);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Product &amp; Application Gallery</h1>
          <p>
            Visual reference of irrigation pipes, field applications, and industrial
            piping categories.
          </p>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Gallery</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: 0, marginBottom: "22px" }}>
            Note: Representative photography shown pending verified site and facility photo
            uploads.
          </p>
          <div className="products-grid">
            {PRODUCTS_DATA.map((item) => (
              <div key={item.slug} className="media-frame">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  style={{ height: "190px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="media-caption">
                  <strong>{item.name}</strong> — {item.applications}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}