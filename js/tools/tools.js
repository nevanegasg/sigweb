import "https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.js";

export function initTools(map) {

    // CAPAS PARA DIBUJOS
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
        draw: {
            polygon: true,
            polyline: true,
            rectangle: false,
            circle: false,
            marker: true
        },
        edit: {
            featureGroup: drawnItems
        }
    });

    // Activar medición de distancia
    document.getElementById("btn_measure_distance").onclick = () => {
        new L.Draw.Polyline(map).enable();
    };

    // Activar medición de área
    document.getElementById("btn_measure_area").onclick = () => {
        new L.Draw.Polygon(map).enable();
    };

    // Evento: cuando se dibuja algo → mostrar medida
    map.on(L.Draw.Event.CREATED, function (e) {
        const layer = e.layer;

        if (layer instanceof L.Polyline) {
            const distancia = L.GeometryUtil.length(layer);
            layer.bindPopup("Distancia: " + distancia.toFixed(2) + " m");
        }

        if (layer instanceof L.Polygon) {
            const area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
            layer.bindPopup("Área: " + (area / 10000).toFixed(2) + " ha");
        }

        drawnItems.addLayer(layer);
    });

    // Limpiar mediciones
    document.getElementById("btn_clear_measure").onclick = () => {
        drawnItems.clearLayers();
    };

    // Obtener coordenadas al clic
    document.getElementById("btn_coords").onclick = () => {
        map.once("click", e => {
            alert(`Lat: ${e.latlng.lat}\nLon: ${e.latlng.lng}`);
        });
    };

    // Dibujos manuales
    document.getElementById("btn_draw_point").onclick = () => {
        new L.Draw.Marker(map).enable();
    };

    document.getElementById("btn_draw_line").onclick = () => {
        new L.Draw.Polyline(map).enable();
    };

    document.getElementById("btn_draw_polygon").onclick = () => {
        new L.Draw.Polygon(map).enable();
    };

    // Limpiar dibujos
    document.getElementById("btn_clear_draw").onclick = () => {
        drawnItems.clearLayers();
    };

    // Identificar entidades (clic)
    document.getElementById("btn_identify").onclick = () => {
        map.once("click", e => {
            alert(`Coordenadas del clic:\nLat: ${e.latlng.lat}\nLon: ${e.latlng.lng}`);
        });
    };
}
