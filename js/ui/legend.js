export function addLegend(map, layers) {

    const baseLayers = {};
    if (map._baseLayers?.osm) baseLayers["Callejero (OSM)"] = map._baseLayers.osm;
    if (map._baseLayers?.satelite) baseLayers["Satélite (ESRI)"] = map._baseLayers.satelite;

    const overlays = {};

    // --------------------------
    // Declaración de capas
    // --------------------------
    if (layers.perimetro) overlays["Perímetro"] = layers.perimetro;
    if (layers.construcciones) overlays["Construcciones"] = layers.construcciones;

    if (layers.deportivos) overlays["Escenarios Deportivos y Culturales (WMS)"] = layers.deportivos;
    if (layers.instituciones) overlays["Instituciones Educativas (WMS)"] = layers.instituciones;

    if (layers.deportivosLocal) 
        overlays["Escenarios Deportivos y Culturales (JSON)"] = layers.deportivosLocal;

    if (layers.institucionesLocal) 
        overlays["Instituciones Educativas (JSON)"] = layers.institucionesLocal;

    if (layers.manzanas) overlays["Manzanas"] = layers.manzanas;
    if (layers.propiedadHorizontal) overlays["Propiedad Horizontal"] = layers.propiedadHorizontal;
    if (layers.barrios) overlays["Barrios"] = layers.barrios;
    if (layers.tipoDeActividad) overlays["Tipo de Actividad"] = layers.tipoDeActividad;
    if (layers.cartoBaseIgac) overlays["CartoBase IGAC"] = layers.cartoBaseIgac;


    // --------------------------
    // SOLO activar Perímetro y Tipo de Actividad
    // Apagar todo lo demás
    // --------------------------

    // Capas activas
    if (layers.perimetro) layers.perimetro.addTo(map);
    if (layers.tipoDeActividad) layers.tipoDeActividad.addTo(map);

    // Capas desactivadas
    Object.values(overlays).forEach(layer => {
        if (layer !== layers.perimetro && layer !== layers.tipoDeActividad) {
            map.removeLayer(layer);
        }
    });

    // Control de capas
    L.control.layers(baseLayers, overlays, { collapsed: true }).addTo(map);
}
