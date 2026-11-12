import React, { useState } from "react";
import { User, Mail, Phone, Cpu, Layers, Send } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import "../styles/contact-form.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    equipos: "5 - 10 equipos HVAC/Refrigeración",
    modelo: "Coordinación de Mis Contratistas",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModeloSelect = (value) => {
    setFormData((prev) => ({ ...prev, modelo: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Evento de Conversión Principal en GA4
    trackEvent("lead_form_submitted", {
      empresa_email: formData.email,
      equipos_piloto: formData.equipos,
      modelo_preferido: formData.modelo,
    });

    alert(
      "¡Solicitud enviada con éxito! Un especialista técnico se pondrá en contacto para coordinar la evaluación del piloto.",
    );
  };

  return (
    <section id="contacto" className="section-padding bg-subtle">
      <div className="container">
        <div className="contact-card">
          {/* Header */}
          <div className="contact-header">
            <span className="contact-badge">PRUEBA DE CONCEPTO PILOTO</span>
            <h2 className="section-title">
              Solicite su Demo Piloto sin compromiso
            </h2>
            <p className="contact-subtitle">
              Conecte sus primeros equipos y compruebe el ahorro operativo y el
              control por ocupación en su propia infraestructura.
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="contact-form-grid">
            {/* Campo 1: Nombre */}
            <div className="form-group">
              <label htmlFor="nombre">
                <User size={16} className="label-icon" />
                <span>NOMBRE Y APELLIDO</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Ej. Carlos Mendoza"
                value={formData.nombre}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Campo 2: Correo */}
            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} className="label-icon" />
                <span>CORREO CORPORATIVO</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="cmendoza@empresa.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Campo 3: Teléfono */}
            <div className="form-group">
              <label htmlFor="telefono">
                <Phone size={16} className="label-icon" />
                <span>TELÉFONO DE CONTACTO</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                placeholder="+58 412 1234567"
                value={formData.telefono}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Campo 4: Equipos a conectar */}
            <div className="form-group">
              <label htmlFor="equipos">
                <Cpu size={16} className="label-icon" />
                <span>EQUIPOS A CONECTAR EN PILOTO</span>
              </label>
              <select
                id="equipos"
                name="equipos"
                value={formData.equipos}
                onChange={handleChange}
                className="form-input form-select"
              >
                <option value="1 - 4 equipos HVAC/Refrigeración">
                  1 - 4 equipos HVAC/Refrigeración
                </option>
                <option value="5 - 10 equipos HVAC/Refrigeración">
                  5 - 10 equipos HVAC/Refrigeración
                </option>
                <option value="11 - 25 equipos HVAC/Refrigeración">
                  11 - 25 equipos HVAC/Refrigeración
                </option>
                <option value="Más de 25 equipos">
                  Más de 25 equipos (Flota grande)
                </option>
              </select>
            </div>

            {/* Campo 5: Modelo de Interés (Radio Selector de Ancho Completo) */}
            <div className="form-group full-width">
              <label>
                <Layers size={16} className="label-icon" />
                <span>MODELO DE INTERÉS</span>
              </label>
              <div className="model-radio-grid">
                <div
                  className={`radio-card ${formData.modelo === "Coordinación de Mis Contratistas" ? "selected" : ""}`}
                  onClick={() =>
                    handleModeloSelect("Coordinación de Mis Contratistas")
                  }
                >
                  <span className="radio-label">
                    Coordinación de Mis Contratistas
                  </span>
                  <div className="radio-circle">
                    {formData.modelo === "Coordinación de Mis Contratistas" && (
                      <div className="radio-dot" />
                    )}
                  </div>
                </div>

                <div
                  className={`radio-card ${formData.modelo === "Gestión Integral Llave en Mano" ? "selected" : ""}`}
                  onClick={() =>
                    handleModeloSelect("Gestión Integral Llave en Mano")
                  }
                >
                  <span className="radio-label">
                    Gestión Integral Llave en Mano
                  </span>
                  <div className="radio-circle">
                    {formData.modelo === "Gestión Integral Llave en Mano" && (
                      <div className="radio-dot" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Botón CTA Submit */}
            <div className="form-group full-width">
              <button type="submit" className="btn-submit-cta">
                <Send size={16} />
                Solicitar Evaluación y Piloto sin Costo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
