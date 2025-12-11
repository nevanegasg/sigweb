export function initTipoDeActividadPopup(tipoActividadLayer, map) {

    const wmsUrl = "http://localhost:8080/geoserver/sigweb/wms";

    map.on("click", function (e) {

        // Solo ejecutar si la capa está activa
        if (!map.hasLayer(tipoActividadLayer)) return;

        const point = map.latLngToContainerPoint(e.latlng, map.getZoom());
        const size = map.getSize();

        const params = {
            request: "GetFeatureInfo",
            service: "WMS",
            version: "1.1.0",
            srs: "EPSG:4326",
            bbox: map.getBounds().toBBoxString(),
            width: size.x,
            height: size.y,
            layers: "sigweb:actividad_tipo",
            query_layers: "sigweb:actividad_tipo",
            info_format: "application/json",
            x: Math.floor(point.x),
            y: Math.floor(point.y)
        };

        const url = wmsUrl + L.Util.getParamString(params, wmsUrl, true);

        fetch(url)
            .then(r => r.json())
            .then(data => {

                if (!data.features || data.features.length === 0) return;

                const props = data.features[0].properties;

                const html = `
                    <b>Tipo de Actividad:</b> ${props.tipo || "N/A"}<br>                  
                `;

                L.popup()
                    .setLatLng(e.latlng)
                    .setContent(html)
                    .openOn(map);
            });
    });
}

export function initConstruccionesPopup(construccionesLayer, map) {

    const wmsUrl = "http://localhost:8080/geoserver/sigweb/wms";

    map.on("click", function (e) {

        //  Condición clave
        if (!map.hasLayer(construccionesLayer)) return;

        const point = map.latLngToContainerPoint(e.latlng, map.getZoom());
        const size = map.getSize();

        const params = {
            request: "GetFeatureInfo",
            service: "WMS",
            version: "1.1.0",
            srs: "EPSG:4326",
            styles: "",
            bbox: map.getBounds().toBBoxString(),
            width: size.x,
            height: size.y,
            layers: "sigweb:construcciones",
            query_layers: "sigweb:construcciones",
            info_format: "application/json",
            x: Math.floor(point.x),
            y: Math.floor(point.y)
        };

        const url = wmsUrl + L.Util.getParamString(params, wmsUrl, true);

        fetch(url)
            .then(r => r.json())
            .then(data => {

                if (!data.features || data.features.length === 0) return;

                const props = data.features[0].properties;

                const html = `
                    <b>Construcción</b><br>
                    <b>Código:</b> ${props.codigo ?? "N/A"}<br>
                    <b>Tipo:</b> ${props.tipo_const ?? "N/A"}<br>
                    <b>Dominio:</b> ${props.tipo_domin ?? "N/A"}<br>
                    <b>Pisos:</b> ${props.numero_pis ?? "N/A"}<br>
                    <b>Mezanines:</b> ${props.numero_mez ?? "N/A"}<br>
                `;

                L.popup()
                    .setLatLng(e.latlng)
                    .setContent(html)
                    .openOn(map);
            });
    });
}

export function initBarriosPopup(barriosLayer, map) {

    const wmsUrl = "http://localhost:8080/geoserver/sigweb/wms";

    map.on("click", function (e) {

        // No ejecutar si la capa no está encendida
        if (!map.hasLayer(barriosLayer)) return;

        const point = map.latLngToContainerPoint(e.latlng, map.getZoom());
        const size = map.getSize();

        const params = {
            request: "GetFeatureInfo",
            service: "WMS",
            version: "1.1.0",
            srs: "EPSG:4326",
            bbox: map.getBounds().toBBoxString(),
            width: size.x,
            height: size.y,
            layers: "sigweb:barrios",
            query_layers: "sigweb:barrios",
            info_format: "application/json",
            x: Math.floor(point.x),
            y: Math.floor(point.y)
        };

        const url = wmsUrl + L.Util.getParamString(params, wmsUrl, true);

        fetch(url)
            .then(r => r.json())
            .then(data => {

                if (!data.features || data.features.length === 0) return;

                const props = data.features[0].properties;

                const html = `
                    <b>Barrio:</b> ${props.name ?? "Sin nombre"}
                `;

                L.popup()
                    .setLatLng(e.latlng)
                    .setContent(html)
                    .openOn(map);
            });
    });
}