import React from "react";
import { Check } from "lucide-react";
import "../styles/service-models.css";

export default function ServiceModels() {
  const handleSelectModel = (modelName) => {
    trackEvent("service_model_selected", { modelo_seleccionado: modelName });
  };

  return (
    <section id="modelos" className="section-padding container">
      {/* Encabezado de Sección */}
      <div className="models-header">
        <span className="models-badge">FLEXIBILIDAD DE IMPLEMENTACIÓN</span>
        <h2 className="section-title">
          Dos Modelos de Servicio Adaptados a su Estructura
        </h2>
        <p className="models-subtitle">
          Elija mantener sus proveedores actuales con nuestra capa de
          inteligencia o delegar la gestión integral.
        </p>
      </div>

      {/* Grid de Modelos */}
      <div className="models-grid">
        {/* Tarjeta 1: Coordinación Inteligente */}
        <div className="model-card">
          <span className="model-chip chip-blue">CAPA DE INTELIGENCIA IOT</span>
          <h3>Coordinación Inteligente</h3>
          <p className="model-description">
            <strong>
              Potenciamos a sus contratistas o personal técnico interno.
            </strong>{" "}
            CLIMO actúa como el cerebro operativo, monitoreando la ocupación y
            salud de los equipos para coordinar el despacho de su equipo actual
            solo cuando se requiera.
          </p>

          <ul className="model-list">
            <li>
              <Check size={18} className="check-icon" />
              <span>Conserva sus contratistas de mantenimiento actuales</span>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <span>Elimina horas ociosas y visitas improductivas</span>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <span>Control de climatización por afluencia real</span>
            </li>
          </ul>

          <button
            className="btn-model btn-outline"
            onClick={() => handleSelectModel("Coordinación Inteligente")}
          >
            Elegir Coordinación Inteligente
          </button>
        </div>

        {/* Tarjeta 2: Gestión Integral de Flota (Destacada) */}
        <div className="model-card featured">
          <div className="floating-badge">FULL-SERVICE RECOMENDADO</div>
          <span className="model-chip chip-teal">
            GESTIÓN INTEGRAL OPERATIVA
          </span>
          <h3>Gestión Integral de Flota</h3>
          <p className="model-description">
            <strong>Nos hacemos cargo de todo.</strong> Asumimos la operación
            completa: instalamos la telemetría, controlamos los equipos según la
            ocupación y ejecutamos los mantenimientos preventivos y correctivos
            bajo demanda.
          </p>

          <ul className="model-list">
            <li>
              <Check size={18} className="check-icon" />
              <span>Un solo proveedor responsable con ANS garantizado</span>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <span>Técnicos certificados CLIMO desplegados bajo demanda</span>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <span>Tranquilidad total para la gerencia operativa</span>
            </li>
          </ul>

          <button
            className="btn-model btn-filled"
            onClick={() => handleSelectModel("Gestión Integral de Flota")}
          >
            Elegir Gestión Integral
          </button>
        </div>
      </div>
    </section>
  );
}
