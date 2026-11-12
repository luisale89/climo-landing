import React, { useState, useEffect } from "react";
import HeroTelemetryCard from "./TelemetryCard";
import { Zap, ArrowRight, Sliders, CheckCircle2 } from "lucide-react";
// import { trackEvent } from "../utils/analytics";
import "../styles/hero.css";

const CLIENT_TYPES = [
  "Tiendas de Retail",
  "Centros Comerciales",
  "Hoteles",
  "Edificios Corporativos",
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

  const handleCtaClick = (actionName) => {
    // trackEvent("hero_cta_clicked", { action: actionName });
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Columna Izquierda: Copy de Ventas & Typewriter */}
        <div className="hero-content">
          <div className="hero-top-badge">
            <Zap size={15} className="badge-icon" />
            <span>Inteligencia IoT para:</span>
            <strong className="typewriter-text">
              {displayText}
              <span className="cursor">|</span>
            </strong>
          </div>

          <h1 className="hero-title">
            Deje de gastar en mantenimientos a ciegas y de climatizar{" "}
            <span className="highlight-teal">espacios</span>{" "}
            <span className="highlight-purple">vacíos.</span>
          </h1>

          <p className="hero-description">
            Transforme el gasto fijo de sus equipos de climatización y
            refrigeración en una inversión optimizada. Ajuste la operación de su
            flota a la <strong>ocupación real y carga térmica</strong>, pasando
            de mantenimientos por calendario a un esquema por condición.
          </p>

          <div className="hero-cta-group">
            <a
              href="#contacto"
              className="hero-btn-primary"
              onClick={() => handleCtaClick("Solicitar Demo Piloto")}
            >
              <span>Solicitar Demo Piloto</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#roi"
              className="hero-btn-secondary"
              onClick={() => handleCtaClick("Calcular Ahorro")}
            >
              <Sliders size={18} className="icon-teal" />
              <span>Calcular ROI de mi Flota</span>
            </a>
          </div>

          <div className="hero-features-list">
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Sin interrupción operativa</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Mantenimiento por condición real</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Monitoreo 24/7 centralizado</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Telemetría IoT modular */}
        <div className="hero-visual">
          <HeroTelemetryCard />
        </div>
      </div>
    </section>
  );
}
