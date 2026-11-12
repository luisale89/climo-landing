// Función para rastrear eventos de Google Analytics

// ** Esta función se puede importar y utilizar en cualquier componente de React
// ** para enviar eventos personalizados a Google Analytics

export const trackEvent = (eventName, eventParams = {}) => {
  // Si estamos en desarrollo (localhost), solo mostramos el log para depurar
  if (!import.meta.env.PROD) {
    console.log(`[DEV - GTM Simulado]: ${eventName}`, eventParams);
    return;
  }
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
    console.log(`[Analytics Event]: ${eventName}`, eventParams); // Útil para depurar en consola
  } else {
    console.warn(
      `[Analytics Warning]: gtag no disponible para el evento ${eventName}`,
    );
  }
};
