import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Primary Showcase">
      <img
        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRYsiYDu9v9AsQ6kcMay40c9Eb46sti_FT1ftIQMVv_GWBpXOaXJjSUueNbqUVGhWtZcuS0cfmGA35FaLM"
        alt="Agricultural field irrigation pipes and sprinkler riser distributing water across farmland"
        className="hero-bg-img"
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="container hero-content">
        <span className="hero-eyebrow">
          SHRI ADINATH PIPES • NORTH INDIA SUPPLY & MANUFACTURING
        </span>
        <h1 className="hero-title">Reliable Irrigation Solutions. Built for Generations.</h1>
        <p className="hero-subtitle">
          Delivering dependable piping solutions for modern agriculture, efficient water
          management and infrastructure development.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-green">
            <span>Explore Our Products</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/contact#enquiry-form" className="btn btn-outline-white">
            <FileText size={16} aria-hidden="true" />
            <span>Request a Quote</span>
          </Link>
        </div>
      </div>
    </section>
  );
}