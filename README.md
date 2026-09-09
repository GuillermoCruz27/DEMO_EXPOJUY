# Prototipo Digital ExpoJuy 2026

Desarrollado por el equipo **Los Troyanos**.

## 📌 Sobre el proyecto

Este repositorio contiene el desarrollo del prototipo web interactivo para **ExpoJuy 2026**, la feria de innovación, tecnología y producción más importante del Norte Argentino.

El objetivo del prototipo es brindar una plataforma digital moderna, intuitiva y accesible que conecte a visitantes, expositores y organizaciones. La interfaz fue maquetada respetando estrictamente el "Kit de Diseño" oficial (logotipos, tipografía **Ambit** y paleta cromática institucional).

### Características y Funcionalidades Principales:
- **Buscador y Directorio de Expositores:** Filtrado dinámico por rubro (Minería, Agroindustria, Tecnología, etc.).
- **Agenda Interactiva:** Cronograma de actividades, charlas y rondas de negocios dividido por días y tracks.
- **Mapa del Predio:** Visualización de pabellones y stands.
- **Simulación de Asistente Virtual:** Módulo conversacional de ayuda integrado.
- **Formulario de Contacto Interactivo:** Con validación visual de éxito.
- **Diseño Mobile-First & Accesible:** Interfaz adaptable a todo tipo de dispositivos móviles y amigable con lectores de pantalla (teclas de salto, foco visible, contraste).

## 🛠️ Stack Tecnológico

En esta fase de prototipado se utilizó un stack **100% nativo y estático** para garantizar máxima velocidad y nula dependencia de librerías externas:
- **HTML5** (Semántico)
- **CSS3** (Variables nativas, CSS Grid y Flexbox)
- **Vanilla JavaScript** (Manipulación del DOM para filtros y modales sin frameworks adicionales)

*(Nota: De acuerdo a la Memoria Descriptiva, para el desarrollo de la aplicación final se prevé una evolución hacia una arquitectura basada en React/Next.js).*

## 🚀 Instrucciones de uso y visualización

Al estar desarrollado de forma completamente nativa, no necesitas instalar dependencias, Node.js ni bases de datos para probarlo. 

Tienes dos formas de visualizar correctamente el proyecto:

### Opción 1: Visualización directa (Más rápida)
1. Descarga o clona este repositorio en tu computadora.
2. Ve a la carpeta raíz del proyecto.
3. Haz doble clic sobre el archivo **`index.html`**. El sitio se abrirá automáticamente en tu navegador web predeterminado (Chrome, Firefox, Edge, Safari, etc.) y podrás navegar por todas las páginas.

### Opción 2: Uso de un servidor local (Recomendado)
Para evitar cualquier restricción de seguridad estricta del navegador (como políticas CORS con los archivos locales), puedes levantar un pequeño servidor web:

- **Con Visual Studio Code:** Instala la extensión *"Live Server"*. Haz clic derecho sobre `index.html` y selecciona *"Open with Live Server"*.
- **Con Python:** Abre tu terminal en la carpeta del proyecto y ejecuta:
  ```bash
  python3 -m http.server 8000
  ```
  Luego, abre tu navegador e ingresa a `http://localhost:8000`.

## 📁 Estructura del repositorio

- `index.html`, `agenda.html`, `contacto.html`, etc. → Páginas principales del sitio.
- `/css/style.css` → Hoja de estilos global.
- `/js/main.js` → Lógica de interactividad (filtros, modales, menús).
- `/assets/` → Recursos estáticos oficiales (imágenes, logotipos y fuentes).
- `/ui-reference/` → Código de referencia en Next.js (maquetas iniciales).
- `Memoria_Descriptiva.md` → Documento técnico y conceptual del proyecto.