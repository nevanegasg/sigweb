import { initMap } from './map/init.js';
import { loadLayers } from './layers/index.js';
import { addLegend } from "./ui/legend.js";
import { addMiniMap} from "./ui/miniMap.js"
import { initSidebar } from './ui/sidebar.js';
import { initSearchManzana } from "./search/searchManzana.js";
import { initConstruccionesSearch } from "./search/construccionesSearch.js";
import { initBarrioFilter } from "./filters/barrioFilter.js"
import { initTools } from "./tools/tools.js";
import { initTipoActividadFilter } from "./filters/tipoActividadFilter.js";
import { initTipoDeActividadPopup, initConstruccionesPopup, initBarriosPopup } from "./ui/poput.js";

// 1. Inicializar el mapa
const map = initMap();

// 2. Cargar todas las capas del proyecto
const layers = loadLayers(map);

// 3. Agregar la leyenda con controles ON/OFF
addLegend(map, layers);

// 4. Minimapa
addMiniMap(map);

// 5. Sidebar y herramientas
initSidebar(map, layers);
initSearchManzana(map);
initConstruccionesSearch(map);
initBarrioFilter(map);
initTipoActividadFilter(map);
initTools(map);

// 6. Inicializar POPUPS usando las capas REALES
initTipoDeActividadPopup(layers.tipoDeActividad, map);
initConstruccionesPopup(layers.construcciones, map);
initBarriosPopup(layers.barrios, map);