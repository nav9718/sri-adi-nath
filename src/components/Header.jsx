import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, FileText } from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "../data/products";
import TopBar from "./TopBar";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenus = () => {
    setMobileOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <>
      <TopBar />
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand-mark" onClick={closeMenus}>
            <div className="brand-badge" aria-hidden="true">
              <span>AP</span>
            </div>
            <div>
              <span className="brand-title">{COMPANY_INFO.brandName}</span>
              <span className="brand-subtitle">{COMPANY_INFO.tagline}</span>
            </div>
          </Link>

          <nav
            aria-label="Primary Navigation"
            className={`main-nav ${mobileOpen ? "open" : ""}`}
          >
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  onClick={closeMenus}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={closeMenus}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                >
                  About Us
                </NavLink>
              </li>

              <li
                className={`nav-item ${productsDropdownOpen ? "dropdown-open" : ""}`}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <NavLink
                    to="/products"
                    onClick={closeMenus}
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  >
                    Products
                  </NavLink>
                  <button
                    type="button"
                    aria-label="Toggle Products Menu"
                    aria-expanded={productsDropdownOpen}
                    onClick={() => setProductsDropdownOpen((prev) => !prev)}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "6px 2px",
                      cursor: "pointer",
                      color: "var(--navy)",
                      display: "inline-flex",
                    }}
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>

                <div className="dropdown-panel" role="menu">
                  {PRODUCTS_DATA.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/products/${item.slug}`}
                      onClick={closeMenus}
                      className="dropdown-link"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/infrastructure"
                  onClick={closeMenus}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                >
                  Infrastructure &amp; QA
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/gallery"
                  onClick={closeMenus}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                >
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  onClick={closeMenus}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="btn btn-green btn-sm btn-header-quote"
              onClick={() => {
                closeMenus();
                navigate("/contact#enquiry-form");
              }}
            >
              <FileText size={14} aria-hidden="true" />
              <span>Request a Quote</span>
            </button>

            <button
              type="button"
              className="mobile-toggle"
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}