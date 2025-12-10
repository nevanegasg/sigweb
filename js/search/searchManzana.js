export function initSearchManzana(map) {

    const urlBase = "http://localhost:8080/geoserver/sigweb/ows";

    // Capa que muestra el resultado
    const resultado = L.geoJSON(null, {
        style: {
            color: "red",
            weight: 3,
            fillOpacity: 0
        }
    }).addTo(map);

    const input = document.getElementById("search_manzana");

    // Detectar la tecla ENTER
    input.addEventListener("keydown", async (e) => {

        if (e.key !== "Enter") return; // Solo actúa con ENTER

        const codigo = input.value.trim();
        if (codigo.length === 0) {
            resultado.clearLayers();
            return;
        }

        // Filtro exacto
        const cql = `codigo='${codigo}'`;

        const url = `${urlBase}?service=WFS&version=1.0.0&request=GetFeature&typeName=sigweb:manzanas&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cql)}`;

        try {
            const response = await fetch(url);
            const geojson = await response.json();

            resultado.clearLayers();

            // Validación de resultados
            if (!geojson.features || geojson.features.length === 0) {
                alert("No se encontró ninguna manzana con ese código.");
                return;
            }

            const feature = geojson.features[0];

            // Agregar sólo el feature, no el FeatureCollection
            resultado.addData(feature);

            // Zoom correcto para MultiPolygon
            const bounds = L.geoJSON(feature).getBounds();
            map.fitBounds(bounds);

            // Obtener atributos reales
            const props = feature.properties;

            const popupContent = `
                <b>Manzana encontrada</b><br>
                <b>Código:</b> ${props.codigo}<br>
                <b>Barrio:</b> ${props.barrio_cod}<br>
                <b>Área:</b> ${Number(props.shape__are).toFixed(2)} m²<br>
                <b>Perímetro:</b> ${Number(props.shape__len).toFixed(2)} m
            `;

            resultado.bindPopup(popupContent).openPopup();

        } catch (error) {
            console.error("Error en la búsqueda:", error);
            alert("Hubo un error consultando GeoServer.");
        }

    });
}
