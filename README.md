# GeoUrbis: Visor Geográfico Interactivo para la Gestión y Análisis Urbano en Mosquera, Cundinamarca

## 1. Descripción General del Proyecto

**GeoUrbis** es un visor geográfico interactivo diseñado para facilitar la visualización, consulta y análisis de información urbana del municipio de Mosquera, Cundinamarca. Su propósito es presentar datos espaciales relevantes de manera accesible y comprensible para ciudadanos y profesionales, promoviendo la toma de decisiones informadas sobre desarrollo urbano y uso del suelo.

El sistema integra datos espaciales almacenados en **PostgreSQL/PostGIS**, publicados por **GeoServer** mediante servicios estándar OGC (WMS/WFS), y consumidos por una aplicación web desarrollada con **Leaflet**. GeoUrbis provee herramientas de búsqueda, filtrado, medidas y dibujo, así como un panel lateral que facilita la interacción con múltiples capas temáticas.

---

## 2. Objetivos del Proyecto

### Objetivo General
Desarrollar un visor geográfico interactivo que permita la consulta y análisis de información urbana del municipio de Mosquera, facilitando la visualización y el acceso a datos espaciales para distintos tipos de usuarios.

### Objetivos Específicos
- Integrar datos espaciales almacenados en PostGIS y publicados mediante GeoServer.
- Implementar funcionalidades de búsqueda y filtrado por atributos (ej. búsqueda de manzanas y construcciones por código).
- Añadir herramientas de medición (distancia y área) y dibujo sobre el mapa para un análisis exploratorio.
- Diseñar una interfaz intuitiva y responsiva que apoye la consulta por ciudadanos y profesionales.
- Documentar el proyecto y dejar instrucciones claras para su despliegue.

---

## 3. Audiencia Objetivo

GeoUrbis está pensado para:
- Ciudadanos que desean consultar información territorial sobre Mosquera.
- Planificadores urbanos, arquitectos e ingenieros involucrados en proyectos municipales.
- Profesionales y estudiantes de SIG que requieran un entorno práctico para visualizar datos.
- Funcionarios públicos que necesiten una herramienta ligera para análisis y toma de decisiones.
- Investigadores interesados en datos urbanos locales.

---

## 4. Capturas de Pantalla

*(Inserta aquí capturas reales en la carpeta `screenshots/` o sube las imágenes al repositorio.)*

Ejemplos de Markdown para insertar imágenes:

```md
![Vista principal de GeoUrbis](./screenshots/geourbis_main.png)
![Panel lateral y herramientas](./screenshots/geourbis_sidebar.png)
```

---

## 5. Enlace a la Aplicación

Si el visor está desplegado en un servidor, incluye la URL aquí:

**Enlace a la aplicación (si está disponible):** `https://tuservidor/geourbis`  

Si actualmente no está en línea, puedes indicar cómo desplegarlo localmente (ver sección “Despliegue local”).

---

## 6. Funcionalidades Principales

GeoUrbis integra las siguientes funcionalidades destacadas:

- **Visualización de Capas Temáticas:** Manzanas, construcciones, barrios, equipamientos, instituciones educativas, perímetros y otras capas relevantes. Las capas se consumen vía WMS/WFS desde GeoServer.
- **Búsqueda por Código:** Buscar manzanas o construcciones mediante su código único (consulta WFS con `CQL_FILTER`).
- **Filtrado Dinámico:** Filtros por barrio o tipo de actividad que permiten explorar subconjuntos de datos.
- **Popups Informativos:** Ventanas emergentes muestran atributos relevantes al hacer click sobre una entidad.
- **Medición y Dibujo:** Herramientas para medir distancias y áreas, y dibujar geometrías temporales en el mapa (Leaflet Draw).
- **MiniMapa y Leyenda:** Mini mapa de contexto y leyenda interactiva con control ON/OFF para capas principales.
- **Panel Lateral (Sidebar):** Organización de herramientas, búsquedas y filtros en una interfaz lateral accesible.

---

## 7. Fuentes de Datos

- **Base de datos:** PostgreSQL con extensión PostGIS; contiene las tablas espaciales con geometrías y atributos del municipio.
- **Servidor de publicación:** GeoServer, que expone servicios WMS y WFS para las capas almacenadas en PostGIS.
- **Capas base externas:** Servicios WMS oficiales del IGAC (cartografía base, vías, drenajes) para referencia cartográfica.

---

## 8. Arquitectura y Flujo de Datos

1. **Datos originales** → cargados y mantenidos en PostgreSQL/PostGIS.
2. **GeoServer** → publica capas como WMS/WFS; aplica estilos SLD para simbolización.
3. **Frontend (Leaflet)** → consume WMS para visualización raster y WFS (GeoJSON) para búsquedas y filtros.
4. **Interacción del usuario** → acciones (búsqueda, clic, dibujo) desencadenan peticiones fetch() al servidor GeoServer o manipulación local de capas.

---

## 9. Librerías y Servicios Utilizados

### Frontend
- **Leaflet** — biblioteca principal de mapas (visualización, interacción).
- **Leaflet Draw** — herramientas de dibujo y medición.
- **Leaflet Sidebar** — panel lateral para herramientas y filtros.
- **Leaflet MiniMap** — mini mapa de contexto.
- **Font Awesome** — iconografía en la interfaz.
- **Otras utilidades JS** (e.g., L.GeometryUtil).

### Backend SIG
- **PostgreSQL** — sistema gestor de base de datos relacional.
- **PostGIS** — extensión espacial para PostgreSQL.
- **GeoServer** — servidor de mapas para publicar WMS/WFS y gestionar SLD.

### Servicios OGC
- **WMS (Web Map Service)** — para renderización de mapas.
- **WFS (Web Feature Service)** — para obtener entidades vectoriales (GeoJSON) y realizar consultas dinámicas.

---

## 10. Elección de la Biblioteca de Mapas (Choice of Mapping Library)

En GeoUrbis se eligió **Leaflet** como biblioteca de mapas por las siguientes razones:

- **Ligereza y rendimiento:** Leaflet es una de las bibliotecas más ligeras disponibles, favoreciendo tiempos de carga rápidos.
- **Simplicidad de uso:** API clara y documentación extensa; acelera el desarrollo y prototipado.
- **Ecosistema de plugins:** existen múltiples plugins listos para usar (Draw, Sidebar, MiniMap), lo que reduce trabajo de implementación.
- **Compatibilidad con GeoServer:** consumo directo de WMS/WFS sin configuraciones complejas.
- **Adecuado al alcance:** para un visorde consulta urbana (no necesariamente renderizado vectorial complejo) Leaflet ofrece el equilibrio óptimo entre funcionalidad y complejidad.

**Comparación breve:**
- *OpenLayers* ofrece mayor potencia para operaciones complejas y manejo nativo de proyecciones y fuentes, pero añade mayor complejidad y tamaño.
- *MapLibre* (o Mapbox GL JS) es excelente para mapas vectoriales y renderizado por GPU, pero requiere infraestructura adicional de vector tiles o un flujo distinto de datos.

---

## 11. Despliegue Local (Quick Start)

### Requisitos previos
- PostgreSQL + PostGIS instalados y con las capas cargadas.
- GeoServer configurado y publicando las capas (WMS/WFS).
- Servidor web estático o entorno de desarrollo (ej. `live-server`, `http-server`, o similar).

### Pasos rápidos
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/geourbis.git
   cd geourbis
   ```
2. Configurar conexiones a GeoServer en los archivos JS (endpoints WMS/WFS).
3. Servir el directorio `public/` o `dist/` con un servidor estático:
   ```bash
   npx http-server ./ -p 8081
   ```
4. Abrir `http://localhost:8081` en el navegador.

---

## 12. Estructura Recomendada del Repositorio

```
geourbis/
├─ public/
│  ├─ index.html
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  ├─ main.js
│  │  ├─ map/
│  │  ├─ layers/
│  │  └─ ui/
│  └─ screenshots/
├─ data/               # (opcional) shapefiles o archivos de referencia
├─ scripts/
│  └─ import_to_postgis.sql
├─ README.md
└─ LICENSE
```

---

## 13. Agradecimientos y Herramientas Asistidas por IA

Agradecimientos a la comunidad geoespacial por las librerías open source: **Leaflet**, **GeoServer**, **PostGIS** y a los proveedores de datos cartográficos oficiales (IGAC).

### Declaración sobre uso de IA
Durante la elaboración de la documentación y apoyo conceptual, se utilizó asistencia de herramientas de IA (por ejemplo, ChatGPT de OpenAI) para generar y pulir textos de la documentación. Cualquier parte del contenido generada con asistencia de IA ha sido revisada y adaptada manualmente por el equipo desarrollador.

---

## 14. Contacto

Para preguntas, sugerencias o reportes de errores:
- **Autor / Equipo:** Equipo GeoUrbis
- **Correo:** tu.email@dominio.com
- **Repositorio:** https://github.com/tuusuario/geourbis

---

## 15. Licencia

Indica aquí la licencia del proyecto (por ejemplo MIT, GPLv3, etc.). Ejemplo:

```
MIT License
Copyright (c) 2025 GeoUrbis
```

---

## Notas finales

Este README es una base completa y puede adaptarse o extenderse con:
- Procedimientos detallados de importación de datos a PostGIS.
- Scripts de despliegue automatizado (Docker, Docker Compose).
- Documentación técnica de cada módulo JS.
- Casos de uso y ejemplos reproducibles.

