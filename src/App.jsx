import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Infrastructure from "./pages/Infrastructure";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function LegalPage({ title, summary }) {
  useEffect(() => {
    document.title = `${title} | Shri Adinath Pipes`;
  }, [title]);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          <p style={{ color: "var(--text-secondary)" }}>
            [Insert formal {title} text for Shri Adinath Pipes prior to production
            deployment.]
          </p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/quality-assurance" element={<Infrastructure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy-policy"
            element={
              <LegalPage
                title="Privacy Policy"
                summary="How enquiry information submitted on this website is handled."
              />
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <LegalPage
                title="Terms and Conditions"
                summary="Terms governing website use and commercial enquiries."
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}