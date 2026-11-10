import React from "react";
import { Users, Thermometer, ShieldCheck } from "lucide-react";
import "../styles/telemetry-card.css";

export default function TelemetryCard() {
  return (
    <div className="telemetry-card">
      {/* Cabecera de la tarjeta */}
      <div className="telemetry-header">
        <div className="telemetry-title-area">
          <span className="status-pulse-dot" />
          <h4>Sede Caracas - Unidad #4</h4>
        </div>
        <span className="live-badge">OPERATIVO</span>
      </div>

      {/* Grid superior de métricas */}
      <div className="telemetry-metrics-grid">
        <div className="metric-box">
          <div className="metric-label">
            <Users size={14} className="icon-teal" />
            <span>Ocupación Espacio</span>
          </div>
          <div className="metric-value teal-text">
            38% <small>Afluencia</small>
          </div>
          <span className="metric-sub">Consigna modulada a 23.5ºC</span>
        </div>

        <div className="metric-box">
          <div className="metric-label">
            <Thermometer size={14} className="icon-navy" />
            <span>Temp. Ambiente</span>
          </div>
          <div className="metric-value navy-text">22.8 ºC</div>
          <span className="metric-sub">Confort Óptimo</span>
        </div>
      </div>

      {/* Barra de Salud Mecánica */}
      <div className="mechanical-health-box">
        <div className="health-header">
          <span>Salud Mecánica del sistema</span>
          <strong className="health-green">98% (Óptimo)</strong>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: "98%" }} />
        </div>
        <p className="health-footer-text">
          Próxima intervención estimada:{" "}
          <strong>315 horas de uso del compresor</strong>{" "}
        </p>
      </div>

      {/* Footer de la tarjeta */}
      <div className="telemetry-card-footer">
        <ShieldCheck size={16} className="icon-teal" />
        <span>
          Control por ocupación activo:{" "}
          <strong>Eficiencia energética optimizada</strong>
        </span>
      </div>
    </div>
  );
}
