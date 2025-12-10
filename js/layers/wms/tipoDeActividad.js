export function tipoDeActividadLayer() {
    return L.tileLayer.wms("http://localhost:8080/geoserver/sigweb/wms", {
        layers: "sigweb:actividad_tipo",
        format: "image/png",
        transparent: true,
        version: '1.1.0'
    });
}