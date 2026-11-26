import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleEnquire = () => {
    navigate("/contact#enquiry-form", {
      state: { preselectedProduct: product.name },
    });
  };

  return (
    <article className="product-card">
      <div>
        <div className="product-img-box">
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            loading="lazy"
          />
        </div>
        <div className="product-card-body">
          <span className="product-code">{product.code}</span>
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-desc">{product.shortDescription}</p>
          <p className="product-card-apps">
            <strong>Applications:</strong> {product.applications}
          </p>
          <div className="product-card-actions">
            <Link to={`/products/${product.slug}`} className="btn btn-outline-navy btn-sm">
              View Details
            </Link>
            <button
              type="button"
              onClick={handleEnquire}
              className="btn btn-primary btn-sm"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}