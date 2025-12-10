export function escenariosDepotivosLayer() {
    return L.tileLayer.wms("http://localhost:8080/geoserver/sigweb/wms", {
        layers: "sigweb:escenarios_depotivos_y_culturales",
        format: "image/png",
        transparent: true,
        version: '1.1.0'
    });
}