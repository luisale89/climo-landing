import React from "react";
import "../styles/telemetry-card.css";

export default function HeroTelemetryCard() {
  return (
    <div className="telemetry-card">
      {/* Header de la tarjeta con estado de conexión */}
      <div className="telemetry-header">
        <div className="telemetry-node-info">
          <span className="status-dot online"></span>
          <span className="node-id">Nodo IoT #042 — Tienda Principal</span>
        </div>
        <span className="telemetry-live-badge">EN VIVO</span>
      </div>

      {/* Grid con métricas de sensores en tiempo real */}
      <div className="telemetry-grid">
        <div className="telemetry-metric-box">
          <small className="metric-label">Temp. Ambiente</small>
          <div className="metric-value">22.4 °C</div>
          <span className="metric-sub">Set-point: 23.0 °C</span>
        </div>

        <div className="telemetry-metric-box">
          <small className="metric-label">Carga / Ocupación</small>
          <div className="metric-value text-teal">Alta (82%)</div>
          <span className="metric-sub">Matriz Térmica Activa</span>
        </div>

        <div className="telemetry-metric-box">
          <small className="metric-label">Compresor HVAC</small>
          <div className="metric-value text-navy">Modulando (65%)</div>
          <span className="metric-sub">Consumo: 3.2 kW</span>
        </div>

        <div className="telemetry-metric-box">
          <small className="metric-label">Estado de Salud</small>
          <div className="metric-value text-purple">Óptimo (100%)</div>
          <span className="metric-sub">Mantenimiento: Ok</span>
        </div>
      </div>

      {/* Footer de la tarjeta con ahorro acumulado */}
      <div className="telemetry-footer">
        <div className="saving-indicator">
          <span>Ahorro energético proyectado hoy:</span>
          <strong>+18.4%</strong>
        </div>
      </div>
    </div>
  );
}
