import React from "react";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Grid Principal del Footer */}
        <div className="footer-grid">
          {/* Columna 1: Brand & Propuesta de Valor */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-logo-wrapper">
              <div className="footer-logo-title">
                CLI<span>M</span>O
              </div>
              <div className="footer-logo-subtitle">
                CLIMATIZACIÓN | MANTENIMIENTO | OPERACIÓN
              </div>
            </a>
            <p className="footer-brand-desc">
              Plataforma IoT de inteligencia operativa para optimizar el consumo
              energético y el mantenimiento predictivo de flotas HVAC y
              refrigeración comercial en Venezuela.
            </p>
            {/* Redes Sociales con SVGs Oficiales */}
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li>
                <a href="#tecnologia">Tecnología IoT</a>
              </li>
              <li>
                <a href="#modelos">Modelos de Servicio</a>
              </li>
              <li>
                <a href="#roi">Calculadora ROI</a>
              </li>
              <li>
                <a href="#precios">Estructura de Precios</a>
              </li>
              <li>
                <a href="#faq">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Soluciones por Industria */}
          <div className="footer-col">
            <h4>Sectores</h4>
            <ul className="footer-links">
              <li>
                <a href="#contacto">Retail & Cadenas de Tiendas</a>
              </li>
              <li>
                <a href="#contacto">Centros Comerciales</a>
              </li>
              <li>
                <a href="#contacto">Supermercados & Red de Frío</a>
              </li>
              <li>
                <a href="#contacto">Edificios Corporativos</a>
              </li>
              <li>
                <a href="#contacto">Hotelería & Complejos</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Directo & Soporte */}
          <div className="footer-col contact-col">
            <h4>Contacto</h4>
            <ul className="contact-info-list">
              <li>
                <MapPin size={16} className="footer-icon" />
                <span>Barquisimeto, Venezuela</span>
              </li>
              <li>
                <Phone size={16} className="footer-icon" />
                <span>+58 (424) 123-1212</span>
              </li>
              <li>
                <Mail size={16} className="footer-icon" />
                <span>contacto@climo.com.ve</span>
              </li>
            </ul>
            <div className="support-badge">
              <span className="online-dot" />
              <span>Soporte Técnico Monitoreado 24/7</span>
            </div>
          </div>
        </div>

        {/* Separador Horizontal */}
        <div className="footer-divider" />

        {/* Barra Inferior: Copyright & Legales */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} CLIMO IoT Solutions. Todos los
            derechos reservados.
          </p>
          <div className="legal-links">
            <a href="#">Términos del Servicio</a>
            <span className="dot-separator">•</span>
            <a href="#">Política de Privacidad</a>
            <span className="dot-separator">•</span>
            <a href="#">Cumplimiento GDPR & Sensores PIR</a>
          </div>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Volver arriba"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
