import React from "react";
import {
  Cpu,
  Zap,
  Thermometer,
  Users,
  AirVent,
  Wrench,
  Power,
  Bell,
  Activity,
  ArrowsUpFromLine,
  TrendingUp,
  Heart,
  ChartBellCurve,
} from "lucide-react";
import "../styles/solution.css";

{
  /* <div className="problems-header">
  <span className="problems-badge">INEFICIENCIAS OPERATIVAS</span>
  <h2 className="section-title">
    El costo invisible de gestionar la climatización "a ciegas"
  </h2>
  <p className="problems-subtitle">
    Las empresas enfrentan fugas constantes de capital por esquemas de operación
    y mantenimiento obsoletos.
  </p>
</div>; */
}

export default function Solution() {
  return (
    <section id="tecnologia" className="section-padding">
      <div className="container">
        <div className="solution-header">
          <span className="solution-badge">SOLUCIÓN CLIMO IOT</span>
          <h2 className="section-title">
            Aplicamos Inteligencia Operativa ajustada a la demanda real
          </h2>
          <p className="solution-subtitle">
            Nuestra plataforma combina sensores térmicos, eléctricos y de
            ocupación ambiental para optimizar automáticamente el funcionamiento
            de la flotay coordinar las tareas técnicas.
          </p>
        </div>
      </div>
      <div className="container solution-block-3">
        <div className="architecture-card-full">
          {/* Cabecera del Bloque 3 */}
          <div className="arch-full-header">
            <div className="header-title-area">
              <div className="header-icon-box">
                <Cpu size={22} />
              </div>
              <h2>Arquitectura de Operación Inteligente</h2>
            </div>
          </div>

          <p className="arch-full-desc">
            Flujo de telemetría continuo desde la captación en campo hasta el
            despacho técnico optimizado:
          </p>

          {/* 3 Tarjetas de Flujo */}
          <div className="arch-steps-grid">
            {/* Paso 1 */}
            <div className="arch-step-card">
              <div className="step-badge-top teal-bg">
                1. CAPTURA NO INVASIVA
              </div>
              <ChartBellCurve size={20} className="step-top-icon teal-icon" />
              <h3>Medición Continua de Variables</h3>
              <p>
                Instalación rápida sin romper garantías ni alterar
                infraestructura existente. Uso de sensores no invasivos para no
                alterar la operación de los equipos.
              </p>

              <ul className="step-list">
                <li>
                  <Zap size={14} className="icon-amber" />
                  <span>Corriente Eléctrica (CT)</span>
                </li>
                <li>
                  <Thermometer size={14} className="icon-red" />
                  <span>Salto térmico / Temp. Succión</span>
                </li>
                <li>
                  <Users size={14} className="icon-blue" />
                  <span>Ocupación / Temp. Ambiente</span>
                </li>
              </ul>
            </div>

            {/* Paso 2 */}
            <div className="arch-step-card featured-step">
              <div className="step-badge-top solid-teal">
                2. NÚCLEO DE CONTROL
              </div>
              <AirVent size={20} className="step-top-icon" />
              <h3>Ajuste Dinámico de Potencia</h3>
              <p>
                Regulación automática de potencia de enfriamiento y consigna sin
                afectar el confort.
              </p>

              <div className="step-widget-box">
                <div className="widget-label">
                  <span>Carga Térmica Actual:</span>
                  <strong>72%</strong>
                </div>
                <div className="widget-bar">
                  <div className="widget-fill" style={{ width: "72%" }} />
                </div>
                <ul className="step-list">
                  <li>
                    <Power size={14} className="icon-red" />
                    <span>Encendido Automático</span>
                  </li>
                  <li>
                    <ArrowsUpFromLine size={14} />
                    <span>Sincronización entre unidades</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="arch-step-card">
              <div className="step-badge-top purple-bg">
                3. ANÁLISIS DE DATOS & DESPACHO
              </div>
              <Bell size={20} className="step-top-icon purple-icon" />
              <h3>Análisis de Rendimiento y Notificaciones</h3>
              <p>
                Calculo y detección de <strong>desviaciones</strong> de
                rendimiento y notificación directa a contratistas o cuadrillas
                técnicas.
              </p>

              <ul className="step-list">
                <li>
                  <TrendingUp size={14} />
                  <span>Tendencia de rendimiento</span>
                </li>
                <li>
                  <Heart size={14} className="icon-red" />
                  <span>Cálculo de Eficiencia y Salud operativa</span>
                </li>
                <li>
                  <Wrench size={14} className="step-icon" />
                  <span>Mantenimiento por Condición</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
