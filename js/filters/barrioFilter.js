export async function initBarrioFilter(map) { 

    const urlBarrios =
        "http://localhost:8080/geoserver/sigweb/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sigweb:barrios&propertyName=name&outputFormat=application/json";

    const select = document.getElementById("filtro_barrio");

    const capaResultado = L.geoJSON(null, {
        style: { color: "blue", weight: 2 }
    }).addTo(map);

    // ========= OBTENER LISTA DE BARRIOS ===========
    try {
        const response = await fetch(urlBarrios);
        const json = await response.json();

        console.log("Barrios recibidos:", json);

        const barrios = [...new Set(json.features.map(f => f.properties.name))].sort();

        barrios.forEach(barrio => {
            if (barrio) {
                const option = document.createElement("option");
                option.value = barrio;
                option.textContent = barrio;
                select.appendChild(option);
            }
        });

    } catch (err) {
        console.error("Error cargando barrios:", err);
    }

    // ========= APLICAR FILTRO =============
    document.getElementById("btn_filtrar_barrio").addEventListener("click", async () => {

        const barrio = select.value;
        if (!barrio) {
            alert("Selecciona un barrio.");
            return;
        }

        const urlFiltro =
            `http://localhost:8080/geoserver/sigweb/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sigweb:barrios&outputFormat=application/json&CQL_FILTER=name='${barrio}'`;

        try {
            const response = await fetch(urlFiltro);
            const json = await response.json();

            capaResultado.clearLayers();

            if (!json.features || json.features.length === 0) {
                alert("No se encontraron polígonos del barrio seleccionado.");
                return;
            }

            capaResultado.addData(json);
            map.fitBounds(capaResultado.getBounds());

        } catch (err) {
            console.error("Error filtrando barrio:", err);
        }
    });

    // ========= LIMPIAR ======================
    document.getElementById("btn_limpiar_barrio").addEventListener("click", () => {
        capaResultado.clearLayers();
        select.value = "";
    });
}
