import { perimetroLayer } from "./wms/perimetro.js";
import { construccionesLayer } from "./wms/construcciones.js";
import { escenariosDepotivosLayer } from "./wms/escenariosDepotivosYCulturales.js";
import { institucionesEducativasLayer } from "./wms/institucionesEducativas.js";
import { manzanasLayer } from "./wms/manzanas.js";
import { propiedadHorizontalLayer } from "./wms/propiedadHorizontal.js";
import { barriosLayer } from "./wms/barrios.js";
import { tipoDeActividadLayer } from "./wms/tipoDeActividad.js";
import { cartografiaBaseIgacLayer } from "./wms/cartografiaBaseIgac.js";

import { InstitucionesService } from "./json/InstitucionesService.js";
import { escenariosDepotivosYCulturalesService } from "./json/escenariosDepotivosYCulturalesService.js";

export function loadLayers(map) {

    // --- Capas WMS (GEOSERVER) ---
    const perimetro = perimetroLayer();
    const construcciones = construccionesLayer();
    const manzanas = manzanasLayer();
    const propiedadHorizontal = propiedadHorizontalLayer();
    const barrios = barriosLayer();
    const tipoDeActividad = tipoDeActividadLayer();

    // Capa IGAC (Vías + Drenajes dentro de un solo layer)
    const cartoBaseIgac = cartografiaBaseIgacLayer();

    // --- Capas desde JSON (SERVICIOS LOCALES) ---
    const institucionesLocal = new InstitucionesService().getLayer();
    const deportivosLocal = new escenariosDepotivosYCulturalesService().getLayer();

    // --- Agregar capas visibles por defecto ---
    perimetro.addTo(map);
    construcciones.addTo(map);
    manzanas.addTo(map);
    propiedadHorizontal.addTo(map);
    barrios.addTo(map);
    tipoDeActividad.addTo(map);

    institucionesLocal.addTo(map);
    deportivosLocal.addTo(map);

    cartoBaseIgac.addTo(map);

    // --- Retornar capas para el control de capas ---
    return {
        perimetro,
        construcciones,
        manzanas,
        propiedadHorizontal,
        barrios,
        tipoDeActividad,
        institucionesLocal,
        deportivosLocal,
        cartoBaseIgac
    };
}
