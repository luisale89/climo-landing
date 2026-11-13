import React, { useEffect } from "react";
import { X } from "lucide-react";
import "../styles/legal-modal.css";
import { LEGAL_CONTENT } from "../data/legalContent";

export default function LegalModal({ activeDoc, onClose }) {
  useEffect(() => {
    if (!activeDoc) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDoc, onClose]);

  if (!activeDoc || !LEGAL_CONTENT[activeDoc]) return null;

  const {
    title,
    icon: IconComponent,
    updated,
    sections,
  } = LEGAL_CONTENT[activeDoc];

  return (
    <div
      className="legal-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Cabecera fija */}
        <div className="legal-modal-header">
          <div className="legal-modal-title-group">
            <div className="legal-modal-icon">
              <IconComponent size={20} />
            </div>
            <div>
              <h3 id="legal-modal-title">{title}</h3>
              <span className="legal-modal-date">
                Última actualización: {updated}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="legal-modal-close"
            onClick={onClose}
            aria-label="Cerrar ventana legal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cuerpo con scroll interno */}
        <div className="legal-modal-body">
          {sections.map((sec, index) => (
            <div key={index} className="legal-section-item">
              <h4>{sec.heading}</h4>
              <p>{sec.content}</p>
            </div>
          ))}
        </div>

        {/* Pie del modal */}
        <div className="legal-modal-footer">
          <button type="button" className="btn-legal-accept" onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
