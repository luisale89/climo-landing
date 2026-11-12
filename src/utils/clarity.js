// Remplace 'TU_PROJECT_ID' por el ID de tu proyecto en Microsoft Clarity
const CLARITY_PROJECT_ID = "TU_PROJECT_ID";

export const initClarity = () => {
  // Evitar ejecuciones duplicadas o cargas en entorno de desarrollo local
  if (
    typeof window === "undefined" ||
    window.clarity ||
    process.env.NODE_ENV === "development"
  ) {
    return;
  }

  // Carga diferida mediante RequestIdleCallback o setTimeout
  const loadScript = () => {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
  };

  // Esperar a que el navegador esté inactivo para no interferir con la hidratación del DOM
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadScript);
  } else {
    setTimeout(loadScript, 2000);
  }
};

// Etiquetar eventos clave en las grabaciones
export const setClarityEvent = (eventName) => {
  if (window.clarity) {
    window.clarity("event", eventName);
  }
};

// Asignar parámetros personalizados a la sesión (ej. volumen de flota consultado)
export const setClarityCustomTag = (key, value) => {
  if (window.clarity) {
    window.clarity("set", key, String(value));
  }
};
