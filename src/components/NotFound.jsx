import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import "../styles/not-found.css";

export default function NotFound() {
  useEffect(() => {
    // Registramos en GTM que el usuario cayó en un 404
    trackEvent("page_not_found", {
      path: window.location.pathname,
    });
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-icon-box">
          <AlertTriangle size={32} />
        </div>
        <span className="not-found-code">Error 404</span>
        <h1 className="not-found-title">Página no encontrada</h1>
        <p className="not-found-desc">
          Lo sentimos, la ruta que intenta consultar no existe o ha sido movida.
          Regrese al inicio para continuar explorando la plataforma IoT de
          CLIMO.
        </p>
        <Link to="/" className="btn-return-home">
          <Home size={18} />
          <span>Volver al Inicio</span>
        </Link>
      </div>
    </div>
  );
}
