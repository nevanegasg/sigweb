import { institucionesEducativasLayer } from "../json/Intituciones.js";

export class InstitucionesService {

    constructor() {
        this.data = institucionesEducativasLayer;
    }

    getAll() {
        return this.data;
    }

    getLayer(options = {}) {

        const defaultIcon = L.icon({
            iconUrl: "../img/iconos/Escuela.png",  
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
                    Tipo: ${p.TIPO_DE_IN}<br>
                    Dirección: ${p.DIRECCIÒN}<br>
                    Teléfono: ${p.TELEFONO ?? "N/A"}
                `);
            }
        });
    }
}
