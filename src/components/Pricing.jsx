import React from "react";
import { Wrench, Cpu, ArrowRight } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import "../styles/pricing.css";

export default function Pricing() {
  const handlePricingCtaClick = () => {
    trackEvent("pricing_cta_click", {
      event_category: "Lead Generation",
      event_label: "Boton Centrado Pricing",
    });
  };

  return (
    <section id="precios" className="section-padding bg-subtle">
      <div className="container">
        {/* Encabezado */}
        <div className="pricing-header">
          <span className="pricing-badge">ESTRUCTURA TRANSPARENTE</span>
          <h2 className="section-title">Precios Escalables por Equipo</h2>
          <p className="pricing-subtitle">
            Inversión clara sin costos ocultos. Diseñado para adaptarse al
            tamaño de su flota.
          </p>
        </div>

        {/* Grid de Precios */}
        <div className="pricing-grid">
          {/* Tarjeta 1: Setup Fee */}
          <div className="pricing-card">
            <div className="card-icon icon-teal">
              <Wrench size={24} className="icon-teal-color" />
            </div>
            <span className="pricing-chip teal-chip">
              IMPLEMENTACIÓN INICIAL (SETUP FEE)
            </span>
            <div className="price-amount">
              Desde $120 <small>USD / unidad (Pago único)</small>
            </div>
            <p className="pricing-desc">
              Provisión e instalación de sensores, telemetría y módulos de
              control según las necesidades específicas de su infraestructura.
            </p>
          </div>

          {/* Tarjeta 2: Suscripción SaaS */}
          <div className="pricing-card">
            <div className="card-icon icon-teal">
              <Cpu size={24} className="icon-teal-color" />
            </div>
            <span className="pricing-chip teal-chip">
              SUSCRIPCIÓN SAAS OPERATIVA
            </span>
            <div className="price-amount">
              $12 <small>USD / mes por unidad</small>
            </div>
            <p className="pricing-desc">Tarifa estándar de plataforma.</p>
            <p className="pricing-volume-note">
              <strong>Tarifa Escalable por volúmen:</strong> Optimice su OPEX a
              medida que suma unidades o sucursales a la plataforma, con
              esquemas preferenciales para flotas comerciales e industriales.
            </p>
          </div>
        </div>

        {/* CTA Centrado debajo de ambas tarjetas */}
        <div className="pricing-cta-wrapper">
          <a
            href="#contacto"
            className="btn-cta"
            onClick={handlePricingCtaClick}
          >
            <span>Cotizar flota o solicitar propuesta</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
