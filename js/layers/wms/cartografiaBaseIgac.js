export function cartografiaBaseIgacLayer() {
    return L.tileLayer.wms(
        "https://mapas2.igac.gov.co/server/services/carto/carto1000mosquera25473000/MapServer/WMSServer?",
        {
            layers: "4,10",           // Vías, Drenaje_R y Drenaje_L
            format: "image/png",
            transparent: true,
            version: "1.1.1",
            attribution: "IGAC"
        }
    );
}
