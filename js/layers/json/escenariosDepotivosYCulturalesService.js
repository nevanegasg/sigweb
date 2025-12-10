import { deportivoCulturalLayer} from "../../../data/Json/deportivoCultural.js";

export class escenariosDepotivosYCulturalesService{

    constructor() {
        this.data = deportivoCulturalLayer;
    }

    getAll() {
        return this.data;
    }

    getLayer(options = {}) {

        const defaultIcon = L.icon({
            iconUrl: "../img/iconos/Deportivo.png",  
            iconSize: [28, 28],
            iconAnchor: [14, 28],
            popupAnchor: [0, -28]
        });

        return L.geoJSON(this.data, {
            pointToLayer: (feature, latlng) => {
                return L.marker(latlng, {
                    icon: options.icon || defaultIcon
                });
            },

            onEachFeature: (feature, layer) => {
                const p = feature.properties;

                layer.bindPopup(`
                    <b>${p.NOMBRE_DEL}</b><br>
                
                   
                    
                `);
            }
        });
    }
}
