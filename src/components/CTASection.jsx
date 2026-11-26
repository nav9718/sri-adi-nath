import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="cta-banner" aria-label="Business Enquiry">
      <div className="container cta-banner-inner">
        <div>
          <h2>Looking for Reliable Irrigation Pipe Solutions?</h2>
          <p>
            Connect with our team for product information, bulk orders and business
            enquiries.
          </p>
        </div>
        <Link to="/contact" className="btn btn-green">
          <PhoneCall size={16} aria-hidden="true" />
          <span>Contact Our Team</span>
        </Link>
      </div>
    </section>
  );
}