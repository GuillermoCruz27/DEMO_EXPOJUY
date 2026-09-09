# Memoria Descriptiva: Prototipo Digital ExpoJuy 2026

## 1. Concepto general del proyecto
El diseño de la plataforma web de ExpoJuy 2026 ha sido concebido para reflejar los pilares fundamentales del evento: la innovación, la tecnología, la producción y la Economía del Conocimiento. A través de una estética limpia, moderna y funcional, la plataforma actúa como el primer punto de contacto entre el evento y sus visitantes, expositores y aliados estratégicos. Se utilizaron líneas de diseño claras y una estructura que inspira confianza, progreso y conectividad global ("Conectando países, creando oportunidades"), posicionando a Jujuy como un centro neurálgico de desarrollo regional.

## 2. Objetivos perseguidos
El principal objetivo de este prototipo digital es vincular eficientemente al sector productivo. La plataforma está diseñada para ser intuitiva y resolver las necesidades de los distintos usuarios:
- Facilitar a los visitantes la planificación de su recorrido y la compra de entradas.
- Brindar a los expositores una herramienta clara para inscribirse y ganar visibilidad.
- Agilizar la conexión entre empresas mediante rondas de negocios y una agenda interactiva.
- Consolidar la imagen de ExpoJuy como un evento de vanguardia tecnológica.

## 3. Organización del contenido
La arquitectura de información se estructuró pensando en la experiencia del usuario (UX), garantizando que la información clave esté a un clic de distancia:
- **Inicio:** Panorama general del evento, métricas clave, y llamadas a la acción (CTAs) principales.
- **Sobre ExpoJuy:** Profundización en los valores del evento (Innovación, Tecnología, Producción, Desarrollo).
- **Expositores:** Directorio con buscador y filtros por rubro.
- **Agenda:** Cronograma detallado de actividades, charlas y rondas de negocios.
- **Mapa del predio:** Visualización de los pabellones para orientación en el lugar.
- **Noticias & Sponsors:** Novedades relevantes y reconocimiento a patrocinadores.
- **Contacto & Preguntas Frecuentes:** Canales de comunicación directa y resolución de dudas comunes.

## 4. Criterios de diseño
El diseño visual respeta rigurosamente el "Kit de Diseño" oficial:
- **Logotipo e Identidad:** Integración del isologotipo oficial y sus variantes en el encabezado y pie de página.
- **Paleta Cromática:** Uso exacto de los colores institucionales: Menta (#4bffd2), Azul (#635cff), Violeta (#5821ff), Lavanda (#bfa4ff) y Rojo Institucional (#c1001f). Estos colores se aplicaron estratégicamente para diferenciar jerarquías visuales, destacar CTAs y delimitar secciones.
- **Tipografía:** Implementación de la familia tipográfica oficial "Ambit" en todos sus pesos (Light, Regular, SemiBold, Bold) para garantizar legibilidad, coherencia institucional y un aspecto contemporáneo.

## 5. Tecnologías previstas para el desarrollo
Para garantizar un rendimiento óptimo, alta escalabilidad y un producto final robusto, nuestra propuesta técnica se fundamenta en la adopción del stack **MERN** (MongoDB, Express, React, Node.js). Esta arquitectura de vanguardia nos permite centralizar el ecosistema en JavaScript, agilizando tiempos de desarrollo y garantizando una experiencia de usuario (UX) impecable. A continuación, detallamos cómo cada tecnología impulsa nuestras funcionalidades clave:

- **MongoDB (Base de Datos NoSQL):** Su flexibilidad es ideal para manejar estructuras de datos dinámicas. Nos permitirá gestionar de forma eficiente el catálogo completo del **Directorio de Expositores**, almacenar perfiles, rubros, novedades y gestionar el stock de entradas en tiempo real con una latencia mínima.
- **Express.js (Framework de Backend):** Servirá como el puente ágil para nuestra API RESTful. A través de Express, procesaremos las consultas complejas como el **Buscador y los Filtros por Rubro** de manera instantánea, y gestionaremos de forma segura el **Formulario de Contacto** y las integraciones con plataformas de pago para la compra de entradas.
- **React.js (Frontend Dinámico):** La interfaz gráfica del usuario se nutre de la reactividad de este framework. React nos garantiza transiciones fluidas sin recargar la página (Single Page Application), lo cual es crítico para que la **Agenda Interactiva** y el **Mapa del Predio** respondan inmediatamente a las interacciones del visitante, ofreciendo una experiencia inmersiva y de primer nivel.
- **Node.js (Entorno de Ejecución):** El motor principal de nuestro backend, capaz de soportar miles de conexiones concurrentes. Esto es fundamental para la estabilidad del sitio durante los picos de tráfico (como el inicio de la venta de entradas o durante los días de la feria) y para dar soporte al **Asistente Virtual** en tiempo real.

Nuestra arquitectura no solo resuelve las necesidades inmediatas de la feria, sino que establece una base tecnológica sólida, segura y escalable, preparada para evolucionar y posicionar a **ExpoJuy 2026** a la par de los eventos más innovadores del mundo.

## 6. Estrategia de accesibilidad
El prototipo incorpora prácticas de accesibilidad (a11y) desde su concepción:
- **Contraste de color:** Verificación de contrastes adecuados entre los textos y fondos.
- **Semántica HTML:** Uso de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`) para facilitar la interpretación de lectores de pantalla.
- **Navegación por teclado:** Implementación de enlaces de salto (`skip-link`) y gestión visible de focus (`:focus-visible`) para usuarios que no utilizan mouse.
- **Atributos ARIA:** Inclusión de etiquetas `aria-label` y `aria-hidden` para elementos interactivos y decorativos.

## 7. Estrategia responsive
El diseño es `Mobile-First`. Se previó la adaptabilidad de la interfaz a cualquier tamaño de pantalla:
- **Menú de navegación:** Un menú colapsable tipo "hamburguesa" optimizado para dispositivos táctiles en pantallas móviles.
- **Grillas dinámicas (CSS Grid y Flexbox):** Las tarjetas de noticias, expositores y estadísticas se reacomodan de una a varias columnas dependiendo del ancho del dispositivo (móvil, tablet, escritorio).
- **Tipografía fluida:** Uso de `clamp()` y unidades relativas para que los textos escalen de forma armónica sin perder legibilidad.

## 8. Uso previsto de Inteligencia Artificial
Durante el ciclo de desarrollo de este prototipo, se utilizó **Antigravity (Gemini)** como asistente de Inteligencia Artificial para:
- **Análisis y refactorización:** Migrar y unificar la estructura de archivos HTML/CSS estáticos hacia un proyecto React (Next.js) moderno y escalable.
- **Integración de diseño:** Adaptar e inyectar de manera precisa los recursos gráficos oficiales (logotipos, fuentes Ambit) dentro del entorno de componentes.
- **Redacción de documentación:** Estructurar y redactar la presente Memoria Descriptiva para respaldar las decisiones técnicas y de diseño frente a la evaluación del proyecto.
El uso de la IA permitió acelerar los tiempos de maquetado y garantizar que el código cumpla con los altos estándares arquitectónicos requeridos.

