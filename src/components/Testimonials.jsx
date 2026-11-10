import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/testimonials.css";

const clientLogos = [
  { name: "Sambilito Petare", logo: "Sambilito" },
  { name: "Jump Líder", logo: "JUMP Líder" },
  { name: "Casapro Araure", logo: "Casapro" },
  { name: "Buenaventura JUMP", logo: "Buenaventura" },
  { name: "SNO Barquisimeto", logo: "SNO Barquisimeto" },
  { name: "Catia Comercial", logo: "Catia Retail" },
];

const testimonialsData = [
  {
    quote:
      "Implementar la capa de coordinación inteligente con CLIMO nos permitió reducir un 24% el consumo eléctrico en nuestras sucursales de Caracas sin afectar el confort térmico de los visitantes.",
    name: "Carlos Mendoza",
    role: "Director de Operaciones, Retail Group",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Pasar de mantenimientos fijos a un esquema por condición real mediante telemetría IoT nos salvó de fallas críticas en los compresores durante la temporada de mayor afluencia comercial.",
    name: "Mariana Figuera",
    role: "Gerente de Mantenimiento de Flota",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "La visibilidad en tiempo real sobre la salud mecánica de los equipos de refrigeración nos dio total control operativo y redujo drásticamente las llamadas de emergencia nocturnas.",
    name: "Roberto Silva",
    role: "Jefe de Infraestructura & Frío Industrial",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "El soporte técnico 24/7 combinado con la modulación automática por ocupación nos ha generado un ahorro sostenido sin tener que renovar todos los equipos HVAC de la sede.",
    name: "Elena Rostro",
    role: "Administradora General de Centro Comercial",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Cantidad de testimonios por página

  // Cálculo de índices para paginación
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = testimonialsData.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="container">
        {/* Encabezado */}
        <div className="testimonials-header">
          <span className="testimonials-badge">CASOS DE ÉXITO & CONFIANZA</span>
          <h2 className="section-title">Avalado por Operadores y Gerentes</h2>
          <p className="testimonials-subtitle">
            Conozca cómo flotas comerciales en Venezuela optimizan su
            infraestructura térmica junto a CLIMO.
          </p>
        </div>

        {/* 1. Carrusel Continuo de Logos de Clientes */}
        <div className="logos-ticker-container">
          <span className="ticker-label">EMPRESAS QUE YA CONFIAN EN CLIMO</span>
          <div className="ticker-track">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="client-logo-card">
                <span>{client.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Tarjetas de Testimonios Paginadas */}
        <div className="testimonials-grid">
          {currentTestimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-top">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <Quote size={32} className="quote-icon" />
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Barra de Controles de Paginación */}
        {totalPages > 1 && (
          <div className="pagination-controls">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="pagination-dots">
              {[...Array(totalPages)].map((_, idx) => {
                const pageNumber = idx + 1;
                return (
                  <button
                    key={pageNumber}
                    className={`pagination-dot ${currentPage === pageNumber ? "active" : ""}`}
                    onClick={() => handlePageChange(pageNumber)}
                    aria-label={`Ir a la página ${pageNumber}`}
                  />
                );
              })}
            </div>

            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Página siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
