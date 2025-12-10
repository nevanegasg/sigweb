export function perimetroLayer() {
    return L.tileLayer.wms("http://localhost:8080/geoserver/sigweb/wms", {
        layers: "sigweb:perimetro_mosquera",
        format: "image/png",
        transparent: true,
        version: '1.1.0'
    });
}