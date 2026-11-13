import { Shield, FileText, Lock } from "lucide-react";

export const LEGAL_CONTENT = {
  privacidad: {
    title: "Política de Privacidad y Protección de Datos",
    icon: Shield,
    updated: "Noviembre 2026",
    sections: [
      {
        heading: "1. Datos que Recopilamos",
        content:
          "Recopilamos tres categorías de información: (a) Datos de contacto y comerciales proporcionados voluntariamente en formularios (nombre, correo corporativo, teléfono, empresa, cargo y tamaño de flota); (b) Datos técnicos de navegación mediante cookies esenciales y analíticas; y (c) Datos de telemetría operativa en la App (lecturas de temperatura, corriente eléctrica, presión, estados de operación e identificadores de nodos de hardware).",
      },
      {
        heading: "2. Finalidad del Tratamiento",
        content:
          "Utilizamos la información para responder solicitudes de demostración y soporte técnico; prestar y mantener los servicios de monitoreo continuo y alertas tempranas; realizar análisis estadísticos agregados y anonimizados para optimizar modelos de diagnóstico termodinámico; y enviar comunicaciones técnicas relevantes.",
      },
      {
        heading: "3. Protección y Almacenamiento de Datos",
        content:
          "Implementamos cifrado en tránsito (TLS/HTTPS) y en reposo, controles de acceso basados en roles y políticas de segregación de datos. CLIMO no vende, alquila ni comercializa bases de datos de clientes o telemetría a terceros.",
      },
      {
        heading: "4. Derechos del Titular",
        content:
          "Los usuarios pueden solicitar en cualquier momento el acceso, rectificación, actualización o eliminación de sus datos personales enviando una solicitud al correo oficial de soporte o privacidad indicado en nuestra plataforma.",
      },
    ],
  },
  terminos: {
    title: "Términos y Condiciones de Uso",
    subtitle: "Uso del sitio web informativo y APP de CLIMO",
    icon: FileText,
    updated: "Noviembre 2026",
    sections: [
      {
        heading: "1. Naturaleza Informativa y Alcance",
        content:
          "El contenido publicado en esta landing page tiene fines exclusivamente informativos y comerciales sobre nuestras soluciones de monitoreo IoT, telemetría y analítica predictiva para sistemas de climatización (HVAC) y refrigeración comercial. La información técnica, métricas de ahorro energético estimadas o casos de éxito mostrados son referenciales y no constituyen una oferta contractual vinculante hasta la firma de una propuesta comercial o acuerdo de nivel de servicio (SLA).",
      },
      {
        heading: "2. Propiedad Intelectual",
        content:
          "Todo el contenido presente en este sitio —incluyendo logotipos, marcas comerciales, arquitectura de software, interfaces gráficas, textos, diagramas técnicos, algoritmos propietarios y diseño visual— es propiedad exclusiva de CLIMO o de sus licenciantes, y está protegido por las leyes de propiedad intelectual vigentes. Queda estrictamente prohibida su reproducción, distribución, ingeniería inversa o uso comercial sin autorización previa por escrito.",
      },
      {
        heading: "3. Uso Permitido",
        content:
          "El usuario se compromete a utilizar este sitio web de manera lícita, sin intentar vulnerar su seguridad, extraer datos mediante scraping automatizado, sobrecargar su infraestructura o introducir código malicioso.",
      },
      {
        heading: "4. Enlaces a Terceros y Limitación de Garantías",
        content:
          'El sitio web se ofrece "tal cual" (as is). No garantizamos que el acceso sea ininterrumpido o libre de errores técnicos ocasionales. CLIMO no se hace responsable por el contenido o las políticas de sitios web de terceros enlazados desde nuestra página.',
      },
      {
        heading: "5. Objeto del Servicio",
        content:
          "CLIMO proporciona una plataforma SaaS (Software as a Service) que recolecta, procesa y visualiza datos provenientes de nodos de telemetría instalados en equipos HVAC y de refrigeración, generando indicadores de salud operativa, historial de variables y notificaciones de anomalías.",
      },
      {
        heading: "6. Registro y Seguridad de la Cuenta",
        content:
          "El Usuario declara contar con autorización de su empresa para registrar cuentas y vincular activos operativos. Las credenciales de acceso son personales e intransferibles. El Cliente es responsable de toda actividad realizada bajo su cuenta y debe notificar de inmediato cualquier acceso no autorizado.",
      },
      {
        heading: "7. Propiedad de los Datos y Licencia de Software",
        content:
          "El Cliente conserva la titularidad sobre los datos operativos y registros históricos generados por sus equipos. CLIMO otorga una licencia limitada, no exclusiva, revocable e intransferible para utilizar la plataforma durante la vigencia de su suscripción, y queda autorizado a emplear datos anonimizados y desvinculados de identidad corporativa para calibrar algoritmos de detección de fallas.",
      },
      {
        heading:
          "8. Naturaleza Preventiva y Limitación de Responsabilidad Técnica",
        content:
          "CLIMO es una herramienta de monitoreo, diagnóstico e información preventiva y NO sustituye el mantenimiento físico preventivo o correctivo ni las inspecciones presenciales de personal técnico certificado. CLIMO no fabrica ni controla mecánicamente los compresores, ventiladores o acometidas monitoreadas, por lo que no será responsable por daños mecánicos, cortes eléctricos, fallas de conectividad en sitio ni pérdidas económicas o deterioro de inventario refrigerado.",
      },
      {
        heading: "9. Hardware, Conectividad y Disponibilidad",
        content:
          "Cuando el servicio incluya nodos de telemetría en comodato o arrendamiento, el Cliente se compromete a no manipular ni abrir los dispositivos instalados. La transmisión en tiempo real depende de la energía y conectividad en sitio; ante desconexiones temporales, los nodos almacenarán datos en búfer local según su capacidad técnica hasta restablecer la sincronización.",
      },
      {
        heading: "10. Suspensión y Terminación",
        content:
          "CLIMO podrá suspender temporalmente el acceso a la plataforma ante incumplimientos graves de estos términos, uso indebido de la API/plataforma o falta de pago de los planes contratados, previo aviso al Cliente.",
      },
    ],
  },
  cookies: {
    title: "Política de Cookies y Telemetría Web",
    icon: Lock,
    updated: "Noviembre 2026",
    sections: [
      {
        heading: "1. ¿Qué son las cookies?",
        content:
          "Son pequeños archivos de almacenamiento local que el navegador guarda para recordar preferencias de sesión y medir el rendimiento técnico de la página.",
      },
      {
        heading: "2. Cookies Analíticas y de Medición",
        content:
          "Utilizamos Google Tag Manager, Google Analytics 4 y Microsoft Clarity para analizar de forma agregada cómo interactúan los visitantes con nuestras secciones y herramientas, permitiéndonos optimizar la experiencia de usuario.",
      },
      {
        heading: "3. Control del Usuario",
        content:
          "Puede bloquear o eliminar las cookies en cualquier momento desde la configuración de privacidad de su navegador web sin que ello impida navegar por la información principal del sitio.",
      },
    ],
  },
};
