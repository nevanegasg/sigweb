export function construccionesLayer() {
    return L.tileLayer.wms("http://localhost:8080/geoserver/sigweb/wms", {
        layers: "sigweb:construcciones",
        format: "image/png",
        transparent: true,
        version: '1.1.0'
    });
}