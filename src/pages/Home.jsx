import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Truck,
  Layers,
  Award,
  HeadphonesIcon,
  Clock,
  Sprout,
  Droplets,
  Waves,
  Gauge,
  Factory,
  Building2,
} from "lucide-react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import { PRODUCTS_DATA } from "../data/products";

const WHY_CHOOSE_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Products",
    desc: "Produced with attention to wall uniformity, raw material discipline, and application fit.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    desc: "Structured dispatch support for agricultural seasons, dealers, and project sites across North India.",
  },
  {
    icon: Layers,
    title: "Durable Piping Solutions",
    desc: "Built to handle field conditions, water conveyance pressure, and regular farm operation.",
  },
  {
    icon: Award,
    title: "Competitive Commercial Offerings",
    desc: "Transparent trade and project pricing aligned with order volume and specification needs.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    desc: "Responsive assistance for pipe selection, sizing guidance, and post-enquiry coordination.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Coordinated logistics planning to keep farm irrigation and site schedules moving.",
  },
];

const INFRA_PILLARS = [
  {
    title: "Manufacturing Infrastructure",
    desc: "Dedicated extrusion and processing lines configured for consistent pipe profiles.",
  },
  {
    title: "Production Processes",
    desc: "Controlled thermal and sizing stages aimed at repeatable dimensional accuracy.",
  },
  {
    title: "Quality Inspection",
    desc: "In-process checks on dimensions, surface finish, and visual integrity prior to dispatch.",
  },
  {
    title: "Product Testing",
    desc: "Batch verification workflows aligned with applicable product and application standards.",
  },
  {
    title: "Storage & Distribution",
    desc: "Organized yard stacking and dispatch coordination serving Punjab, Haryana, Rajasthan, HP, and North India.",
  },
];

const APPLICATIONS_LIST = [
  { icon: Sprout, label: "Agriculture" },
  { icon: Droplets, label: "Irrigation" },
  { icon: Waves, label: "Water Transportation" },
  { icon: Gauge, label: "Groundwater Extraction" },
  { icon: Factory, label: "Industrial Water Management" },
  { icon: Building2, label: "Infrastructure Development" },
];

export default function Home() {
  useEffect(() => {
    document.title = "Shri Adinath Pipes | Irrigation & Agricultural Pipe Manufacturer";
  }, []);

  return (
    <>
      <Hero />

      {/* Company Introduction */}
      <section className="section" aria-labelledby="intro-heading">
        <div className="container two-col-grid">
          <div>
            <span className="section-tag">COMPANY OVERVIEW</span>
            <h2 id="intro-heading" className="section-heading">
              Engineering Reliable Water Management Solutions
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 0 }}>
              <strong>Shri Adinath Pipes</strong> is a manufacturer and supplier of
              irrigation pipes, agricultural pipes, water management piping, and fittings
              serving farms, dealers, and water projects across{" "}
              <strong>Punjab, Haryana, Rajasthan, Himachal Pradesh, and North India</strong>.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              Our product lineup spans HDPE pipes, PVC pipes, UPVC pipes, agricultural
              irrigation pipes, drip irrigation pipes, casing pipes, column pipes, and
              matching fittings—supported by a customer-focused team committed to steady
              supply and dependable product quality.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link to="/about" className="btn btn-primary btn-sm">
                Learn More About Us
              </Link>
              <Link to="/infrastructure" className="btn btn-outline-navy btn-sm">
                View Infrastructure
              </Link>
            </div>
          </div>

          <div className="media-frame">
            <img
              src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTWf_8Cqi-GnN9S6HmTdl9YE4r_vx5GoD_V1trv0bIdA4xrO0T4crb2k4goZgDaMHZ2pmoAzthzUcWAbcI"
              alt="Industrial pipe production line inside manufacturing facility"
              loading="lazy"
            />
            <div className="media-caption">
              Industrial pipe production line — Shri Adinath Pipes
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section section-alt" aria-labelledby="products-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">PRODUCT LINEUP</span>
            <h2 id="products-heading" className="section-heading">
              Product Categories
            </h2>
            <p className="section-lead">
              Explore our core pipe and fitting categories. Technical specifications are
              structured as editable placeholders until verified data sheets are entered.
            </p>
          </div>

          <div className="products-grid">
            {PRODUCTS_DATA.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR STRENGTHS</span>
            <h2 id="why-heading" className="section-heading">
              Why Choose Shri Adinath Pipes
            </h2>
            <p className="section-lead">
              Practical manufacturing discipline and responsive service built for agricultural
              and water distribution needs.
            </p>
          </div>

          <div className="info-grid-3">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="info-card">
                  <div className="icon-square">
                    <IconComponent size={18} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure & Quality */}
      <section className="section section-alt" aria-labelledby="infra-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OPERATIONS & STANDARDS</span>
            <h2 id="infra-heading" className="section-heading">
              Infrastructure and Quality
            </h2>
            <p className="section-lead">
              Structured production, inspection, and dispatch workflows. Facility photographs
              shown on the site reflect representative industry visuals until verified plant
              photos are added.
            </p>
          </div>

          <div className="info-grid-3">
            {INFRA_PILLARS.map((pillar) => (
              <div key={pillar.title} className="info-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section" aria-labelledby="apps-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SECTORS SERVED</span>
            <h2 id="apps-heading" className="section-heading">
              Applications
            </h2>
            <p className="section-lead">
              Piping solutions supporting diverse water handling and infrastructure requirements.
            </p>
          </div>

          <div className="info-grid-3">
            {APPLICATIONS_LIST.map((app) => {
              const AppIcon = app.icon;
              return (
                <div
                  key={app.label}
                  className="info-card"
                  style={{ display: "flex", alignItems: "center", gap: "12px", borderTopWidth: "2px" }}
                >
                  <div className="icon-square" style={{ flexShrink: 0 }}>
                    <AppIcon size={18} aria-hidden="true" />
                  </div>
                  <strong style={{ color: "var(--navy)", fontSize: "15px" }}>
                    {app.label}
                  </strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}