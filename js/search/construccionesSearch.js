export function initConstruccionesSearch(map) {

    console.log("Módulo de búsqueda de construcciones cargado");

    const urlBase = "http://localhost:8080/geoserver/sigweb/ows";

    const layerResultado = L.geoJSON(null, {
        style: {
            color: "#4CAF50",
            weight: 3,
            fillOpacity: 0.2
        }
    }).addTo(map);

    const input = document.getElementById("search_construccion");
    const btn = document.getElementById("btn_search_construccion");

    async function buscar() {

        const codigo = input.value.trim();
        if (!codigo) {
            alert("Ingresa un código de construcción.");
            return;
        }

        const cql = `codigo='${codigo}'`;
        const url = `${urlBase}?service=WFS&version=1.0.0&request=GetFeature&typeName=sigweb:construcciones&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cql)}`;

        try {
            const response = await fetch(url);
            const geojson = await response.json();

            layerResultado.clearLayers();

            if (!geojson.features || geojson.features.length === 0) {
                alert("No se encontró una construcción con ese código.");
                return;
            }

            const feature = geojson.features[0];

            layerResultado.addData(feature);
            map.fitBounds(L.geoJSON(feature).getBounds());

            const p = feature.properties;

            layerResultado.bindPopup(`
                <b>Construcción</b><br>
                <b>Código:</b> ${p.codigo}<br>
                <b>Tipo:</b> ${p.tipo_const}<br>
                <b>Dominio:</b> ${p.tipo_domin}<br>
                <b>Pisos:</b> ${p.numero_pis}<br>
                <b>Mezanines:</b> ${p.numero_mez}
            `).openPopup();

        } catch (err) {
            console.error("Error en búsqueda de construcción:", err);
        }
    }

    // Botón
    btn.addEventListener("click", buscar);

    // Enter
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") buscar();
    });
}


