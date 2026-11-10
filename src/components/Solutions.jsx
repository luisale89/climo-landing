import React from "react";
import "../styles/solutions.css";
import { Lightbulb, ShieldCheck, Clock, Users } from "lucide-react";

export default function Solution() {
  return (
    <section id="tecnologia" className="section-padding container">
      <div className="solution-layout">
        {/* Columna Izquierda: Copy principal y características */}
        <div className="solution-content">
          <span className="solution-badge">SOLUCIÓN CLIMO IOT</span>
          <h2 className="section-title">
            Inteligencia Operativa ajustada a la demanda real
          </h2>
          <p className="solution-subtitle">
            Nuestra plataforma combina sensores térmicos, eléctricos y de
            ocupación ambiental para optimizar automáticamente el funcionamiento
            de la flota y coordinar las tareas técnicas.
          </p>

          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-icon icon-blue">
                <Users />
              </div>
              <div>
                <h3>Control de Climatización por Ocupación Real</h3>
                <p>
                  Garantice la temperatura de confort justa solo cuando la
                  afluencia de usuarios y la carga del área lo ameriten.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon icon-purple">
                <Lightbulb />
              </div>
              <div>
                <h3>Mantenimiento Basado en Condición</h3>
                <p>
                  Migre de calendarios ciegos a intervenciones guiadas por
                  variables de desgaste físico y rendimiento real del activo.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon icon-teal">
                <ShieldCheck />
              </div>
              <div>
                <h3>Extensión del Ciclo de Vida Útil</h3>
                <p>
                  Al eliminar el sobre-trabajo de compresores en áreas
                  desocupadas, prolonga la longevidad de su equipamiento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Arquitectura de Operación Inteligente */}
        <div className="solution-visual">
          <div className="architecture-card">
            <div className="architecture-header">
              <span className="feature-icon icon-purple">
                <Lightbulb />
              </span>
              <h3>Arquitectura de Operación Inteligente</h3>
            </div>

            <div className="arch-steps-grid">
              <div className="arch-step-box">
                <span className="step-tag">1. SENSORES IOT NO INVASIVOS</span>
                <h4>Medición continua de temperatura, ocupación y amperaje</h4>
                <p>
                  Instalación rápida sin romper garantías ni alterar la
                  infraestructura existente.
                </p>
              </div>

              <div className="arch-step-box">
                <span className="step-tag teal-tag">
                  2. ALGORITMOS DE MODULACIÓN
                </span>
                <h4>Ajuste dinámico según carga real</h4>
                <p>
                  Regulación automática de potencia y consigna sin afectar el
                  confort del ambiente.
                </p>
              </div>

              <div className="arch-step-box">
                <span className="step-tag purple-tag">
                  3. ACCIÓN & DESPACHO TÉCNICO
                </span>
                <h4>Mantenimiento bajo demanda puntual</h4>
                <p>
                  Notificación directa a sus contratistas o cuadrillas propias
                  ante desvíos operativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
