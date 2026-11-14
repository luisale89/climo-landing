import React from "react";
import "../styles/problems.css";
import { Zap, ShieldQuestionMark, CalendarSync, Users } from "lucide-react";

export default function Problems() {
  return (
    <section className="section-padding bg-subtle">
      <div className="container">
        {/* Badge superior y Títulos */}
        <div className="problems-header">
          <span className="problems-badge">INEFICIENCIAS OPERATIVAS</span>
          <h2 className="section-title">
            El costo invisible de gestionar la climatización "a ciegas"
          </h2>
          <p className="problems-subtitle">
            Las empresas con múltiples sedes pierden capital a diario debido a
            esquemas de climatización desconectados, correctivos tardíos y nula
            visibilidad operativa
          </p>
        </div>

        {/* Grid de 4 Tarjetas */}
        <div className="cards-grid">
          <div className="info-card">
            <div className="card-icon icon-blue">
              <Zap />
            </div>
            <h3>Alto Consumo Energético</h3>
            <p>
              Equipos operando al 100% en áreas desatendidas o fuera de horario
              comercial, disparando la factura eléctrica y acelerando el
              desgaste mecánico sin aportar valor al negocio.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon icon-teal">
              <CalendarSync />
            </div>
            <h3>Mantenimiento a Ciegas</h3>
            <p>
              Intervenciones y contratos fijos dictados por fechas en el
              calendario, ignorando las horas de uso real del compresor y
              gastando recursos en equipos que no lo necesitaban.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon icon-purple">
              <Users />
            </div>
            <h3>Gestión Local Fragmentada</h3>
            <p>
              Dependencia de ajustes manuales y criterios improvisados del
              personal en cada sucursal, generando temperaturas inconsistentes,
              malestar en clientes/empleados y nulo control corporativo.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon icon-red">
              <ShieldQuestionMark />
            </div>
            <h3>Correctivos de Alto Costo</h3>
            <p>
              Ausencia de telemetría y alertas tempranas; te enteras de una
              falla crítica únicamente cuando el equipo colapsa, paralizando la
              operación y forzando costosos repuestos de emergencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
