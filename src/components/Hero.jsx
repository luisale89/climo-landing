import React, { useState, useEffect } from "react";
import HeroTelemetryCard from "./TelemetryCard";
import "../styles/hero.css";

const CLIENT_TYPES = [
  "Tiendas de Retail",
  "Centros Comerciales",
  "Hoteles",
  "Edificios Corporativos",
  "Universidades",
  "Industrias",
  "Supermercados",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = CLIENT_TYPES[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % CLIENT_TYPES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="hero-section section-padding container">
      <div className="hero-layout">
        {/* Columna Izquierda: Copy de Ventas */}
        <div className="hero-content">
          <div className="hero-badge">
            <span>Inteligencia IoT para:</span>
            <strong className="typewriter-text">
              {displayText}
              <span className="cursor">|</span>
            </strong>
          </div>

          <h1 className="hero-title">
            Deje de pagar mantenimientos a ciegas y de enfriar espacios vacíos
          </h1>

          <p className="hero-subtitle">
            Transforme el gasto fijo de sus equipos HVAC y refrigeración en una
            inversión optimizada. Sincronice la operación con la ocupación real
            y carga térmica de sus sedes.
          </p>

          <div className="hero-cta-group">
            <a href="#contacto" className="btn-primary btn-large">
              Solicitar Demo Piloto
            </a>
            <a href="#roi-calculator" className="btn-secondary btn-large">
              Calcular ROI de mi Flota
            </a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Telemetría IoT */}
        <div className="hero-visual">
          <HeroTelemetryCard />
        </div>
      </div>
    </section>
  );
}
