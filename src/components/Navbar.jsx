import React, { useState, useEffect } from "react";
// import { trackEvent } from '../utils/analytics';
import "../styles/navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. Detectar si el Navbar debe tener sombra al bajar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Configurar IntersectionObserver para los enlaces activos
    const sectionIds = [
      "tecnologia",
      "modelos",
      "roi",
      "precios",
      "faq",
      "contacto",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Activa la sección cuando pasa por el tercio superior
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
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
    trackEvent("navbar_link_clicked", { target_section: sectionId });
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          CLIMO<span>.</span>
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

        {/* Botón CTA Navbar */}
        <a
          href="#contacto"
          className={`nav-btn-cta ${activeSection === "contacto" ? "active" : ""}`}
          onClick={() => handleNavClick("contacto")}
        >
          Demo Piloto
        </a>
      </div>
    </nav>
  );
}
