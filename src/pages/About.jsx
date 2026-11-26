import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Shri Adinath Pipes";
  }, []);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Corporate profile, manufacturing focus, and regional commitment of Shri
            Adinath Pipes across North India.
          </p>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>

      <section className="section">
        <div className="container two-col-grid">
          <div>
            <span className="section-tag">COMPANY OVERVIEW & BACKGROUND</span>
            <h2 className="section-heading">Shri Adinath Pipes</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 0 }}>
              Shri Adinath Pipes operates as a manufacturer and supplier focused on
              irrigation pipes, agricultural pipes, water management solutions, and pipe
              fittings. We serve agricultural buyers, distributors, contractors, and
              water projects primarily across{" "}
              <strong>Punjab, Haryana, Rajasthan, Himachal Pradesh, and North India</strong>.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              [Insert Verified Company Founding / Incorporation Details & Background — do
              not add unverified historical claims or unverified years of operation.]
            </p>
          </div>

          <div className="media-frame">
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ6CK1zJiLxYRd0PGcJ6Wqmqfcwk2K4yxabFHPZwapGX3XpIMMd4AufDWCTzGKu2aEwfWBqnywDdZRlhgQ"
              alt="Stacks of industrial pipes organized for dispatch"
              loading="lazy"
            />
            <div className="media-caption">
              Pipe inventory and supply readiness — Shri Adinath Pipes
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container info-grid-2">
          <div className="info-card">
            <h3>Vision</h3>
            <p>
              To be a trusted regional piping partner supporting dependable water
              conveyance and sustainable agricultural productivity across North India.
            </p>
          </div>

          <div className="info-card">
            <h3>Mission</h3>
            <p>
              To manufacture and supply consistent pipes and fittings with clear product
              communication, attentive customer service, and dependable dispatch support.
            </p>
          </div>

          <div className="info-card">
            <h3>Business Philosophy & Product Expertise</h3>
            <p>
              We focus on practical utility—matching pipe categories such as HDPE, PVC,
              UPVC, agricultural irrigation, drip, casing, column pipes, and fittings to
              real field and water transport requirements.
            </p>
          </div>

          <div className="info-card">
            <h3>Quality Commitment & Operations</h3>
            <p>
              Every batch is approached with structured inspection and handling care.{" "}
              [Insert Verified Certifications, Capacity Figures, or Plant Details Once
              Confirmed.]
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}