import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Cpu,
  Layers,
  Send,
  Loader2,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { trackEvent } from "../utils/analytics";
import "../styles/contact-form.css";

const INITIAL_FORM_STATE = {
  nombre: "",
  email: "",
  telefono: "",
  equipos: "5 - 10 equipos HVAC/Refrigeración",
  modelo: "Coordinación de Mis Contratistas",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [botcheck, setBotcheck] = useState(false); // Honeypot anti-spam nativo de Web3Forms
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleModeloSelect = (value) => {
    setFormData((prev) => ({ ...prev, modelo: value }));
  };

  const validateCorporateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Por favor, ingrese un formato de correo válido.";
    }
    return null;
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData(INITIAL_FORM_STATE);
    setErrorMessage("");
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", {
      event_category: "Lead Generation",
      event_label: "Boton WhatsApp Formulario",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    // Si el campo oculto anti-spam fue marcado por un bot, abortamos silenciosamente
    if (botcheck) return;

    const emailError = validateCorporateEmail(formData.email);
    if (emailError) {
      setErrorMessage(emailError);
      return;
    }

    setLoading(true);

    try {
      // Construimos el payload para Web3Forms combinando la clave de acceso y el state
      const payload = {
        access_key:
          import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
          "TU_ACCESS_KEY_DE_WEB3FORMS",
        subject: `Nuevo Lead Piloto CLIMO - ${formData.nombre}`,
        from_name: "Landing Page CLIMO IoT",
        replyto: formData.email,
        ...formData,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        // Evento de Conversión Principal en GA4 / GTM
        trackEvent("lead_form_submitted", {
          empresa_email: formData.email,
          equipos_piloto: formData.equipos,
          modelo_preferido: formData.modelo,
        });

        setSuccess(true);
      } else {
        setErrorMessage(
          result.message ||
            "No se pudo procesar su solicitud. Por favor, intente nuevamente.",
        );
      }
    } catch (error) {
      setErrorMessage(
        "Error de conexión al enviar la solicitud. Verifique su internet o contáctenos por WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  }

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
              Conecte sus primeros equipos y compruebe las{" "}
              <strong>ventajas operativas CLIMO</strong> en su propia
              infraestructura.
            </p>
          </div>

          {/* Vista de Éxito */}
          {success ? (
            <div className="contact-success-box">
              <CheckCircle2 size={48} className="success-icon" />
              <h3>¡Solicitud Recibida con Éxito!</h3>
              <p>
                Un especialista técnico se pondrá en contacto al correo{" "}
                <strong>{formData.email}</strong> para coordinar la evaluación y
                despliegue del piloto.
              </p>
              <button
                type="button"
                className="btn-reset-form"
                onClick={handleReset}
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            /* Formulario Principal */
            <form onSubmit={handleSubmit} className="contact-form-grid">
              {/* Campo Honeypot invisible para evitar spam sin usar CAPTCHAs intrusivos */}
              <input
                type="checkbox"
                name="botcheck"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              {errorMessage && (
                <div className="form-error-banner full-width" role="alert">
                  <span>{errorMessage}</span>
                </div>
              )}

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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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

              {/* Campo 5: Modelo de Interés */}
              <div className="form-group full-width">
                <label>
                  <Layers size={16} className="label-icon" />
                  <span>MODELO DE INTERÉS</span>
                </label>
                <div className="model-radio-grid">
                  <div
                    className={`radio-card ${
                      formData.modelo === "Coordinación de Mis Contratistas"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      !loading &&
                      handleModeloSelect("Coordinación de Mis Contratistas")
                    }
                  >
                    <span className="radio-label">
                      Coordinación de Mis Contratistas
                    </span>
                    <div className="radio-circle">
                      {formData.modelo ===
                        "Coordinación de Mis Contratistas" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`radio-card ${
                      formData.modelo === "Gestión Integral Llave en Mano"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      !loading &&
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

              {/* Botones de Acción */}
              <div className="form-group full-width">
                <button
                  type="submit"
                  className="btn-submit-cta"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="spinner-icon animate-spin"
                      />
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Solicitar Evaluación y Piloto sin Costo</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
