import React, { useState } from "react";
import { Sliders, Wrench, Zap, Info, ArrowRight, Tag } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import "../styles/roi_calculator.css";

const TARIFA_BASE_SAAS = 12;

export default function RoiCalculator() {
  const [sedes, setSedes] = useState(5);
  const [equiposPorSede, setEquiposPorSede] = useState(4);
  const [mantenimiento, setMantenimiento] = useState(40);
  const [energia, setEnergia] = useState(200);

  // Cálculos dinámicos de flota
  const totalEquipos = sedes * equiposPorSede;
  const ahorroMantenimientoMes = totalEquipos * mantenimiento * 0.25;
  const ahorroEnergiaMes = totalEquipos * energia * 0.1;
  const ahorroMesTotal = ahorroMantenimientoMes + ahorroEnergiaMes;
  const ahorroBrutoAno = ahorroMesTotal * 12;

  // Escalones fijos de tarifa SaaS por volumen de flota
  const obtenerTramoSaas = (equipos) => {
    if (equipos <= 10) return { tarifa: 12, rango: "1 - 10 equipos" };
    if (equipos <= 30) return { tarifa: 9, rango: "11 - 30 equipos" };
    if (equipos <= 90) return { tarifa: 8, rango: "31 - 90 equipos" };
    if (equipos <= 199) return { tarifa: 7, rango: "91 - 200 equipos" };
    return { tarifa: 6, rango: "200+ equipos" };
  };

  const { tarifa: tarifaSaas, rango: rangoVolumen } =
    obtenerTramoSaas(totalEquipos);
  const descuentoVolumenPct = Math.round(
    ((TARIFA_BASE_SAAS - tarifaSaas) / TARIFA_BASE_SAAS) * 100,
  );
  const ahorroMensualSaaS = (TARIFA_BASE_SAAS - tarifaSaas) * totalEquipos;

  const setupFeeInicial = totalEquipos * 120;
  const costoSaasMes = totalEquipos * tarifaSaas;
  const costoSaasAnual = costoSaasMes * 12;

  const ahorroNetoAno1 = ahorroBrutoAno - (setupFeeInicial + costoSaasAnual);

  // Cálculo de Payback protegido contra flujo neto mensual <= 0
  const flujoNetoMensual = ahorroMesTotal - costoSaasMes;
  const paybackMeses =
    flujoNetoMensual > 0
      ? (setupFeeInicial / flujoNetoMensual).toFixed(1)
      : null;

  const handleSliderChange = (setter, value) => {
    setter(value);
  };

  const handleMouseUp = (value, paramName) => {
    trackEvent("roi_calculator_interacted", {
      parametro: paramName,
      nuevo_valor: value,
      flota_total: totalEquipos,
      tarifa_saas_unitaria: tarifaSaas,
      descuento_volumen_pct: descuentoVolumenPct,
      ahorro_mtto_mes: ahorroMantenimientoMes,
      ahorro_energia_mes: ahorroEnergiaMes,
    });
  };

  return (
    <section id="roi" className="section-padding bg-subtle">
      <div className="container">
        {/* Encabezado */}
        <div className="roi-header">
          <span className="roi-badge">ESTIMACIÓN FINANCIERA</span>
          <h2 className="section-title">
            Calculadora de Retorno de Inversión (ROI)
          </h2>
          <p className="roi-subtitle">
            Ajuste los valores de su flota para proyectar los ahorros al
            integrar la solución CLIMO.
          </p>
        </div>

        {/* Tarjeta Contenedora Principal */}
        <div className="roi-main-card">
          <div className="roi-grid">
            {/* Columna Izquierda: Parámetros de su Red */}
            <div className="roi-column left-col">
              <div className="column-title">
                <Sliders size={20} className="icon-teal" />
                <h3>Parámetros de su Red</h3>
              </div>

              {/* Slider 1: Número de Sedes */}
              <div className="slider-group">
                <div className="slider-label">
                  <span>Número de Sedes / Tiendas:</span>
                  <div className="value-box">{sedes} sedes</div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={sedes}
                  onChange={(e) =>
                    handleSliderChange(setSedes, Number(e.target.value))
                  }
                  onMouseUp={(e) =>
                    handleMouseUp(Number(e.target.value), "sedes")
                  }
                  onTouchEnd={(e) =>
                    handleMouseUp(Number(e.target.value), "sedes")
                  }
                  className="custom-slider teal-slider"
                />
              </div>

              {/* Slider 2: Equipos por Sede */}
              <div className="slider-group">
                <div className="slider-label">
                  <span>Equipos HVAC por sede:</span>
                  <div className="value-box">{equiposPorSede} equipos</div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={equiposPorSede}
                  onChange={(e) =>
                    handleSliderChange(
                      setEquiposPorSede,
                      Number(e.target.value),
                    )
                  }
                  onMouseUp={(e) =>
                    handleMouseUp(Number(e.target.value), "equipos_por_sede")
                  }
                  onTouchEnd={(e) =>
                    handleMouseUp(Number(e.target.value), "equipos_por_sede")
                  }
                  className="custom-slider teal-slider"
                />
              </div>

              {/* Resumen de Flota + Tarifa y Descuento Aplicado */}
              <div className="flota-summary-card">
                <div className="flota-summary-top">
                  <span>
                    Flota total: <strong>{totalEquipos} equipos</strong>
                  </span>
                  <span className="tier-pill">Tramo: {rangoVolumen}</span>
                </div>

                <div className="flota-summary-pricing">
                  <div className="saas-rate-display">
                    <span>Cuota SaaS aplicada:</span>
                    {descuentoVolumenPct > 0 && (
                      <span className="old-rate">${TARIFA_BASE_SAAS}</span>
                    )}
                    <strong>${tarifaSaas} USD/mes</strong>
                    <small>p/equipo</small>
                  </div>

                  {descuentoVolumenPct > 0 ? (
                    <span className="discount-badge">
                      <Tag size={13} />
                      <span>
                        -{descuentoVolumenPct}% por volumen (Ahorras $
                        {ahorroMensualSaaS}/mes)
                      </span>
                    </span>
                  ) : (
                    <span className="base-rate-note">
                      Tarifa estándar (descuentos desde 11 equipos)
                    </span>
                  )}
                </div>
              </div>

              {/* Slider 3: Gasto Mantenimiento */}
              <div className="slider-group">
                <div className="slider-label title-with-icon">
                  <div className="label-with-icon">
                    <Wrench size={16} className="icon-teal" />
                    <span>Gasto Mensual Mantenimiento p/equipo:</span>
                  </div>
                  <div className="value-box">${mantenimiento} USD</div>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={mantenimiento}
                  onChange={(e) =>
                    handleSliderChange(setMantenimiento, Number(e.target.value))
                  }
                  onMouseUp={(e) =>
                    handleMouseUp(Number(e.target.value), "mantenimiento")
                  }
                  onTouchEnd={(e) =>
                    handleMouseUp(Number(e.target.value), "mantenimiento")
                  }
                  className="custom-slider teal-slider"
                />
                <div className="slider-meta">
                  <span>Impacto estimado: 25% ahorro por mantenimiento</span>
                </div>
              </div>

              {/* Slider 4: Gasto Energético */}
              <div className="slider-group">
                <div className="slider-label title-with-icon">
                  <div className="label-with-icon">
                    <Zap size={16} className="icon-purple" />
                    <span>Gasto Mensual Energético p/equipo:</span>
                  </div>
                  <div className="value-box">${energia} USD</div>
                </div>
                <input
                  type="range"
                  min="90"
                  max="600"
                  step="10"
                  value={energia}
                  onChange={(e) =>
                    handleSliderChange(setEnergia, Number(e.target.value))
                  }
                  onMouseUp={(e) =>
                    handleMouseUp(Number(e.target.value), "energia")
                  }
                  onTouchEnd={(e) =>
                    handleMouseUp(Number(e.target.value), "energia")
                  }
                  className="custom-slider purple-slider"
                />
                <div className="slider-meta">
                  <span>Impacto estimado: 10% ahorro por optimización</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Proyección de Ahorro Neto */}
            <div className="roi-column right-col">
              <div className="column-title flex-between">
                <h3>Proyección de Ahorro Neto</h3>
                <span className="resumen-tag">Resumen de Flota</span>
              </div>

              {/* Sub-tarjetas de ahorro mensual */}
              <div className="ahorros-mini-grid">
                <div className="mini-card">
                  <small>Ahorro Mantenimiento (25%)</small>
                  <div className="mini-amount">
                    ${Math.round(ahorroMantenimientoMes)} <span>/mes</span>
                  </div>
                  <span className="mini-subtext">Por servicio condicional</span>
                </div>
                <div className="mini-card">
                  <small>Ahorro Energético (10%)</small>
                  <div className="mini-amount purple-text">
                    ${Math.round(ahorroEnergiaMes)} <span>/mes</span>
                  </div>
                  <span className="mini-subtext">Por control optimizado</span>
                </div>
              </div>

              {/* Tarjeta Principal Ahorro Bruto (Gradiente) */}
              <div className="hero-saving-card">
                <span className="hero-card-tag">
                  AHORRO BRUTO GENERADO FLOTA
                </span>
                <div className="hero-card-amount">
                  ${ahorroBrutoAno.toLocaleString("en-US")}{" "}
                  <small>USD / año</small>
                </div>
                <div className="hero-card-footer">
                  <span>
                    Ahorro Neto Año 1 (Descontando instalación y SaaS):
                  </span>
                  <strong>
                    ${Math.round(ahorroNetoAno1).toLocaleString("en-US")} USD
                  </strong>
                </div>
              </div>

              {/* Tiempo de Retorno */}
              <div className="payback-box">
                <div>
                  <h4>Tiempo de Retorno de Inversión (Payback):</h4>
                  <p>Recuperación del costo de instalación inicial</p>
                </div>
                <div className="payback-value">
                  {paybackMeses ? (
                    <>
                      ~{paybackMeses} <span>meses</span>
                    </>
                  ) : (
                    <span>Evaluar caso</span>
                  )}
                </div>
              </div>

              {/* Botón CTA */}
              <a href="#contacto" className="btn-cta">
                <span>Validar estas cifras en una Demo Piloto</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
        {/* Nota Aclaratoria */}
        <div className="info-box">
          <Info size={28} className="info-icon" />
          <p>
            El cálculo incluye implementación ($120/eq) y tarifa SaaS escalonada
            por volumen desde $12/mes (1–9 eq) hasta $6/mes (200+ eq).{" "}
          </p>
          <p>
            <strong>
              Con su flota actual aplica un {descuentoVolumenPct}% de descuento
              mensual.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
