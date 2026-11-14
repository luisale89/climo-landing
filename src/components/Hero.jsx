import React, { useState, useEffect } from "react";
import HeroTelemetryCard from "./TelemetryCard";
import { Zap, ArrowRight, Sliders, CheckCircle2 } from "lucide-react";
import { trackEvent } from "../utils/analytics";
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
    trackEvent("hero_cta_clicked", { action: actionName });
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
            Su flota de climatización consume capital a ciegas.{" "}
            <span className="highlight-purple">Es hora de operarla</span>{" "}
            <span className="highlight-teal">por Datos</span>
          </h1>

          <p className="hero-description">
            Deje atrás las visitas técnicas innecesarias y el enfriamiento
            desatendido en sucursales.{" "}
            <strong>
              Gestione la carga térmica real y operación de todos sus equipos
              desde una única plataforma inteligente.
            </strong>
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
              <span>Sin intervención de la operación</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Gestión centralizada multisucursal</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Alertas tempranas de fallas</span>
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
