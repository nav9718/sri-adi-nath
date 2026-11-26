import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "../data/products";

export default function TopBar() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Shri Adinath Pipes, I would like information on your irrigation pipes and fittings."
  )}`;

  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-group">
          <a href={COMPANY_INFO.phoneHref} className="top-bar-item">
            <Phone size={13} aria-hidden="true" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
          <a href={`mailto:${COMPANY_INFO.email}`} className="top-bar-item">
            <Mail size={13} aria-hidden="true" />
            <span>{COMPANY_INFO.email}</span>
          </a>
          <span className="top-bar-item">
            <MapPin size={13} aria-hidden="true" />
            <span>{COMPANY_INFO.locationSummary}</span>
          </span>
        </div>

        <div className="top-bar-group">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="top-bar-item"
          >
            <MessageSquare size={13} aria-hidden="true" />
            <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}