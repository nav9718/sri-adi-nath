// src/pages/Products.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import { PRODUCTS_DATA } from "../data/products";

export default function Products() {
  useEffect(() => {
    document.title = "Products | Shri Adinath Pipes";
  }, []);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Our Products</h1>
          <p>
            Irrigation pipes, agricultural piping, groundwater casing and column pipes,
            and matching fittings.
          </p>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Products</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {PRODUCTS_DATA.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}