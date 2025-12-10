export function addMiniMap(map) {

    // 🛰️ Capa base satelital para el minimapa
    const miniLayer = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles © Esri",
            minZoom: 0,
            maxZoom: 18
        }
    );

    const miniMap = new L.Control.MiniMap(miniLayer, {
        toggleDisplay: true,      
        minimized: false,         
        position: "bottomright",  
        width: 150,
        height: 150,
        zoomLevelOffset: -5       
    });

    miniMap.addTo(map);
}
