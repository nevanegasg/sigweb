export async function initTipoActividadFilter(map) {

    // URL correcta: actividad_tipo
    const urlActividades =
        "http://localhost:8080/geoserver/sigweb/ows?" +
        "service=WFS&version=1.0.0&request=GetFeature&" +
        "typeName=sigweb:actividad_tipo&" +
        "propertyName=tipo_codigo,tipo&" +
        "outputFormat=application/json";

    const select = document.getElementById("filtro_actividad");

    const capaResultado = L.geoJSON(null, {
        style: { color: "red", weight: 2 }
    }).addTo(map);

    // ============================================
    // CARGAR LISTA DE TIPOS (MOSTRAR TEXTO)
    // ============================================
    try {
        const response = await fetch(urlActividades);
        const json = await response.json();

        console.log("Tipos recibidos:", json);

        // Construir lista única por texto (tipo)
        const tipos = [...new Map(json.features.map(f =>
            [f.properties.tipo_codigo, f.properties.tipo]
        )).entries()];

        // tipos = [ [codigo, tipoTexto], ... ]

        tipos.forEach(([codigo, tipoTexto]) => {
            if (codigo != null && tipoTexto) {
                const option = document.createElement("option");
                option.value = codigo;       // Lo que se filtra
                option.textContent = tipoTexto;  // Lo que ve el usuario
                select.appendChild(option);
            }
        });

    } catch (err) {
        console.error("Error cargando tipos:", err);
    }

    // ============================================
    // APLICAR FILTRO
    // ============================================
    document.getElementById("btn_filtrar_actividad").addEventListener("click", async () => {

        const codigo = select.value;
        if (!codigo) {
            alert("Selecciona un tipo de actividad.");
            return;
        }

        const urlFiltro =
            `http://localhost:8080/geoserver/sigweb/ows?` +
            `service=WFS&version=1.0.0&request=GetFeature&` +
            `typeName=sigweb:actividad_tipo&` +
            `outputFormat=application/json&` +
            `CQL_FILTER=tipo_codigo=${codigo}`;

        try {
            const response = await fetch(urlFiltro);
            const text = await response.text();
            console.log("Respuesta cruda:", text);

            const json = JSON.parse(text);

            capaResultado.clearLayers();
            capaResultado.addData(json);

            if (capaResultado.getLayers().length > 0) {
                map.fitBounds(capaResultado.getBounds());
            }

        } catch (err) {
            console.error("Error filtrando actividad:", err);
        }
    });

    // ============================================
    // LIMPIAR
    // ============================================
    document.getElementById("btn_limpiar_actividad").addEventListener("click", () => {
        capaResultado.clearLayers();
        select.value = "";
    });
}
