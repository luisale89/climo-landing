import React from "react";
import "../styles/problems.css";
import { Zap, ShieldCheck, Clock, Users } from "lucide-react";

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
            Las empresas enfrentan fugas constantes de capital por esquemas de
            operación y mantenimiento obsoletos.
          </p>
        </div>

        {/* Grid de 4 Tarjetas */}
        <div className="cards-grid">
          <div className="info-card">
            <div className="card-icon icon-blue">
              <Zap />
            </div>
            <h3>Enfriamiento Ineficiente</h3>
            <p>
              Equipos operando a máxima capacidad en zonas sin presencia de
              usuarios o en horas de baja afluencia, acelerando el desgaste
              mecánico.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon icon-teal">
              <Clock />
            </div>
            <h3>Mantenimientos por Calendario</h3>
            <p>
              Pago de tarifas periódicas fijas sin importar si el equipo acumuló
              horas de uso o si realmente requiere intervención técnica.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon icon-purple">
              <Users />
            </div>
            <h3>Personal Técnico Ocioso</h3>
            <p>
              Técnicos fijos con amplias ventanas de inactividad técnica durante
              jornadas de operación normal.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon icon-red">
              <ShieldCheck />
            </div>
            <h3>Caja Negra Operativa</h3>
            <p>
              Falta de visibilidad sobre el estado mecánico real hasta que
              ocurre una falla repentina que compromete la operación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
