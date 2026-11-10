import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--climo-navy)",
        color: "#fff",
        padding: "3rem 0 1.5rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <h3 style={{ color: "#fff", margin: 0 }}>CLIMO</h3>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}>
            CLIMATIZACIÓN | MANTENIMIENTO | OPERACIÓN
          </p>
        </div>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
          © {new Date().getFullYear()} CLIMO. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
