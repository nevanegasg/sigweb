import { MAP_CONFIG } from "./config.js";

export function initMap() {
    const map = L.map("map").setView(MAP_CONFIG.center, MAP_CONFIG.zoom);

    // Inicializamos los mapas base pero NO los agregamos al mapa aún
    const baseLayers = {
        osm: L.tileLayer(
            MAP_CONFIG.baseLayers.osm.url,
            { attribution: MAP_CONFIG.baseLayers.osm.attribution }
        ),

        satelite: L.tileLayer(
            MAP_CONFIG.baseLayers.satelite.url,
            { attribution: MAP_CONFIG.baseLayers.satelite.attribution }
        )
    };

    // Guardamos los mapas base dentro del objeto mapa
    // para que addLegend() los pueda activar
    map._baseLayers = baseLayers;

    return map;
}
