import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
// import { trackEvent } from '../utils/analytics';
import "../styles/faq.css";

const faqData = [
  {
    question:
      "¿Cómo funcionan exactamente los sensores de ocupación y carga térmica sin invadir la privacidad?",
    answer:
      "Utilizamos sensores de presencia infrarroja (PIR) y arreglos térmicos de baja resolución que detectan patrones de movimiento y radiación térmica sin capturar imágenes, rostros ni video. Garantizan 100% de cumplimiento con normativas de privacidad mientras envían métricas en tiempo real a CLIMO.",
  },
  {
    question:
      "¿Cómo evita CLIMO que el aire se apague cuando hay pocos clientes y afecte la experiencia?",
    answer:
      "El sistema no apaga los equipos de golpe; modula dinámicamente las consignas de temperatura y potencia basándose en la densidad térmica real y umbrales mínimos de confort configurados, manteniendo un microclima agradable sin desperdiciar energía en zonas vacías.",
  },
  {
    question:
      "¿Cómo se integra CLIMO con nuestros contratistas de mantenimiento o técnicos fijos actuales?",
    answer:
      "CLIMO actúa como el cerebro supervisor de su red. Cuando un equipo excede parámetros de desgaste o requiere atención, la plataforma emite un reporte técnico detallado y directo al proveedor o cuadrilla asignada, optimizando sus rutas y reduciendo visitas en vano.",
  },
  {
    question:
      "¿Qué pasa si ya tenemos contratos anuales preventivos firmados con terceros?",
    answer:
      "Es el escenario ideal para el modelo de 'Coordinación Inteligente'. No necesita cancelar sus contratos; CLIMO se integra como la capa analítica para asegurar que sus proveedores acudan estrictamente cuando el equipo lo necesite por condición real, ahorrando costos de visitas innecesarias.",
  },
  {
    question:
      "¿La instalación del hardware IoT requiere suspender las operaciones comerciales?",
    answer:
      "No. La instalación es completamente no invasiva y se realiza en ventanas de mantenimiento fuera de horario comercial o en lapsos breves por equipo (menos de 45 minutos), sin alterar tableros principales ni romper garantías de fábrica.",
  },
  {
    question:
      "¿Qué sucede si la conexión a internet de la tienda se interrumpe?",
    answer:
      "Nuestros nodos de telemetría poseen almacenamiento y procesamiento local (edge computing). Si la red cae, el sistema autónomo sigue regulando los equipos de manera local y sincroniza los datos históricos con la nube tan pronto se restablece la conexión.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0); // Primera abierta por defecto como en la imagen

  const handleToggle = (index, questionText) => {
    const nextIndex = activeIndex === index ? null : index;
    setActiveIndex(nextIndex);

    // Disparar evento de analítica si se abre el acordeón
    if (nextIndex !== null) {
      trackEvent("faq_accordion_opened", {
        faq_index: index,
        faq_question: questionText,
      });
    }
  };

  return (
    <section id="faq" className="section-padding container">
      {/* Encabezado */}
      <div className="container">
        <div className="faq-header">
          <span className="faq-badge">PREGUNTAS FRECUENTES</span>
          <h2 className="section-title">Dudas Técnicas & de Instalación</h2>
          <p className="faq-subtitle">
            Respuestas para Directores de Operaciones y Gerentes de
            Mantenimiento Comercial.
          </p>
        </div>

        {/* Lista de Acordeones */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className={`faq-card ${isOpen ? "active" : ""}`}>
                <button
                  className="faq-question-bar"
                  onClick={() => handleToggle(index, item.question)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-left">
                    <HelpCircle size={20} className="faq-question-icon" />
                    <span>{item.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={18} className="faq-arrow" />
                  ) : (
                    <ChevronDown size={18} className="faq-arrow" />
                  )}
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
