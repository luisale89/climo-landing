import React, { useState, useEffect } from "react";
import { ArrowRight, Activity, LogIn } from "lucide-react";
// import { trackEvent } from '../utils/analytics';
import "../styles/navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Oculta/Muestra la barra superior y ajusta sombra al scrolear más de 30px
      setIsScrolled(window.scrollY > 0 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);

    const sectionIds = [
      "tecnologia",
      "modelos",
      "precios",
      "roi",
      "faq",
      "contacto",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    // trackEvent("navbar_link_clicked", { target_section: sectionId });
  };

  const handleLoginClick = () => {
    // trackEvent("login_button_clicked");
    // Aquí puedes redirigir a tu app de plataforma (ej. window.location.href = 'https://app.climo.io')
  };

  return (
    <header className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
      {/* 🚀 Top Bar Secundaria (Desaparece al scrolear) */}
      <div className="top-utility-bar">
        <div className="container top-bar-container">
          <div className="app-status-indicator">
            <span className="status-pulse-dot" />
            <Activity size={14} className="status-icon" />
            <span>
              App Climo: <strong>ONLINE</strong>
            </span>
          </div>

          <div className="top-bar-actions">
            <button onClick={handleLoginClick} className="top-login-btn">
              <LogIn size={14} />
              <span>Iniciar Sesión en la App</span>
            </button>
          </div>
        </div>
      </div>

      {/* 🧭 Navbar Principal */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo Corporativo */}
          <a href="#" className="nav-logo-wrapper">
            <div className="nav-logo-title">
              CLI<span>M</span>O
            </div>
            <div className="nav-logo-subtitle">CLIMATIZACIÓN INTELIGENTE</div>
          </a>

          {/* Enlaces de Navegación */}
          <div className="nav-links">
            <a
              href="#tecnologia"
              className={`nav-link ${activeSection === "tecnologia" ? "active" : ""}`}
              onClick={() => handleNavClick("tecnologia")}
            >
              Tecnología IoT
            </a>
            <a
              href="#modelos"
              className={`nav-link ${activeSection === "modelos" ? "active" : ""}`}
              onClick={() => handleNavClick("modelos")}
            >
              Modelos de Servicio
            </a>
            <a
              href="#roi"
              className={`nav-link ${activeSection === "roi" ? "active" : ""}`}
              onClick={() => handleNavClick("roi")}
            >
              Calculadora ROI
            </a>
            <a
              href="#precios"
              className={`nav-link ${activeSection === "precios" ? "active" : ""}`}
              onClick={() => handleNavClick("precios")}
            >
              Precios
            </a>
            <a
              href="#faq"
              className={`nav-link ${activeSection === "faq" ? "active" : ""}`}
              onClick={() => handleNavClick("faq")}
            >
              FAQ
            </a>
          </div>

          {/* Botón CTA Principal */}
          <a
            href="#contacto"
            className="nav-btn-cta"
            onClick={() => handleNavClick("contacto")}
          >
            <span>Solicitar Demo</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
