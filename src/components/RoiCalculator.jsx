import React, { useState } from "react";
import { Sliders, Wrench, Zap, Info } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import "../styles/roi_calculator.css";

export default function RoiCalculator() {
  const [sedes, setSedes] = useState(5);
  const [equiposPorSede, setEquiposPorSede] = useState(4);
  const [mantenimiento, setMantenimiento] = useState(100);
  const [energia, setEnergia] = useState(250);

  // Cálculos dinámicos
  const totalEquipos = sedes * equiposPorSede;
  const ahorroMantenimientoMes = totalEquipos * mantenimiento * 0.25;
  const ahorroEnergiaMes = totalEquipos * energia * 0.1;
  const ahorroMesTotal = ahorroMantenimientoMes + ahorroEnergiaMes;
  const ahorroBrutoAno = ahorroMesTotal * 12;

  // Escenario de tarifa SaaS según volumen de flota
  const tarifaSaas = totalEquipos >= 30 ? 6 : 12;
  const setupFeeInicial = totalEquipos * 120;
  const costoSaasAnual = totalEquipos * tarifaSaas * 12;

  const ahorroNetoAno1 = ahorroBrutoAno - (setupFeeInicial + costoSaasAnual);

  // Cálculo de Payback en meses
  const paybackMeses =
    ahorroMesTotal > 0
      ? (
          setupFeeInicial /
          (ahorroMesTotal - tarifaSaas * totalEquipos)
        ).toFixed(1)
      : "0";

  const handleSliderChange = (setter, value, paramName) => {
    setter(value);
  };

  const handleMouseUp = (value, paramName) => {
    trackEvent("roi_calculator_interacted", {
      parametro: paramName,
      nuevo_valor: value,
      flota_total: totalEquipos,
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
                    handleSliderChange(
                      setSedes,
                      Number(e.target.value),
                      "sedes",
                    )
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
                  <span>Equipos HVAC/Refrigeración por sede:</span>
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
                      "equipos_por_sede",
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

              <div className="flota-summary">
                Flota total a monitorear:{" "}
                <strong>{totalEquipos} equipos</strong>
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
                  min="20"
                  max="300"
                  step="10"
                  value={mantenimiento}
                  onChange={(e) =>
                    handleSliderChange(
                      setMantenimiento,
                      Number(e.target.value),
                      "mantenimiento",
                    )
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
                    handleSliderChange(
                      setEnergia,
                      Number(e.target.value),
                      "energia",
                    )
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

              {/* Nota Aclaratoria */}
              <div className="info-box">
                <Info size={28} className="info-icon" />
                <p>
                  El cálculo utiliza el costo estándar de implementación
                  ($120/eq) y tarifa base ($12/mes). Para flotas de mayor
                  volumen, la cuota mensual se reduce hasta a{" "}
                  <strong>un 50% por equipo</strong>.
                </p>
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
                  <span className="mini-subtext">Por control de ocupación</span>
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
                  <span>Ahorro Neto Año 1 (Descontando instalación):</span>
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
                  ~{paybackMeses} <span>meses</span>
                </div>
              </div>

              {/* Botón CTA */}
              <a href="#contacto" className="btn-roi-cta">
                Validar estas cifras en una Demo Piloto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
