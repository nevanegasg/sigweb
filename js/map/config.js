export const MAP_CONFIG = {
    center: [4.7, -74.2],
    zoom: 14,
    baseLayers: {
        osm: {
            name: "Mapa Urbano (OSM)",
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: "&copy; OpenStreetMap contributors"
        },
        satelite: {
            name: "Satélite (ESRI)",
            url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",  
            attribution: "Tiles © Esri"
        }
    }
};
