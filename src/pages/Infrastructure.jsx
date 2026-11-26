// src/pages/Infrastructure.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";

export default function Infrastructure() {
  useEffect(() => {
    document.title = "Infrastructure & Quality | Shri Adinath Pipes";
  }, []);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Infrastructure &amp; Quality Assurance</h1>
          <p>
            Production workflows, quality inspection checkpoints, and regional logistics
            across North India.
          </p>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Infrastructure &amp; Quality Assurance</span>
        </div>
      </div>

      <section className="section">
        <div className="container info-grid-3">
          <div className="info-card">
            <h3>Manufacturing &amp; Extrusion</h3>
            <p>
              Structured extrusion and forming workflows designed for uniform wall
              thickness and consistent pipe geometry. [Insert Verified Plant Details.]
            </p>
          </div>
          <div className="info-card">
            <h3>Quality Inspection &amp; Testing</h3>
            <p>
              Dimensional checks, visual inspection, and batch verification prior to
              dispatch. [Insert Verified Testing / Certification Details.]
            </p>
          </div>
          <div className="info-card">
            <h3>Storage &amp; Regional Dispatch</h3>
            <p>
              Organized yard storage and road transport coordination across Punjab,
              Haryana, Rajasthan, Himachal Pradesh, and North India.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}