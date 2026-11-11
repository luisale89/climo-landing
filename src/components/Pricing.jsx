import React from "react";
import { Wrench, Cpu } from "lucide-react";
import "../styles/pricing.css";

export default function Pricing() {
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
            <div className="card-icon icon-blue">
              <Wrench size={24} className="icon-navy" />
            </div>
            <span className="pricing-chip">
              IMPLEMENTACIÓN INICIAL (SETUP FEE)
            </span>
            <div className="price-amount">
              Desde $120 <small>USD / unidad (Pago único)</small>
            </div>
            <p>
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
            <p>
              Tarifa estándar de plataforma.{" "}
              <strong>Descuentos por volumen:</strong> Para flotas de gran
              escala, la cuota mensual se optimiza hasta un{" "}
              <strong>50% por unidad</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
