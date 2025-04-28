import { createBrowserRouter } from "react-router-dom";

import InicioPage from "../features/dashboard/pages/InicioPage";
import GeneracionAutomaticaMainPage from "../features/generacionAutomatica/pages/GeneracionAutomaticaMainPage";
import GeneracionAutomaticaOperaciones_TipoPage from "../features/generacionAutomatica/pages/GeneracionAutomaticaReportes/GeneracionAutomaticaOperaciones/GeneracionAutomaticaOperaciones_TipoPage";
import GeneracionAutomaticaReportes_Container from "../features/generacionAutomatica/pages/GeneracionAutomaticaReportes/GeneracionAutomaticaReportes_Container";
import GeneracionAutomaticaReportes_TipoPage from "../features/generacionAutomatica/pages/GeneracionAutomaticaReportes/GeneracionAutomaticaReportes_TipoPage";
import NotificaionesPage from "../features/notificaciones/pages/NotificacionesPage";
import OrdenesDeCompraPage from "../features/ordenesCompra/pages/OrdenesDeCompraPage";
import ReportesAnaliticosPage from "../features/reportes/pages/ReportesAnaliticosPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <InicioPage></InicioPage>,
    },
    {
        path: "/notificaciones",
        element: <NotificaionesPage></NotificaionesPage>,
    },
    {
        path: "/generacionautomatica",
        element: <GeneracionAutomaticaMainPage></GeneracionAutomaticaMainPage>,
    },
    {
        path: "/operaciones/ordenes_de_compra",
        element: <OrdenesDeCompraPage></OrdenesDeCompraPage>,
    },
    {
        path: "/reportes/analiticos",
        element: <ReportesAnaliticosPage></ReportesAnaliticosPage>,
    },
    // {
    //     path : "/testreporte",
    //     element : <ReporteAnalitico></ReporteAnalitico>
    // }
    
    {
        path: "/generacionautomatica/reportes",
        element: (
            <GeneracionAutomaticaReportes_TipoPage></GeneracionAutomaticaReportes_TipoPage>
        ),
    },
    {
        path: "/generacionautomatica/reportes/analiticos",
        element: (
            <GeneracionAutomaticaReportes_Container tipoReporte={"Analiticos"}></GeneracionAutomaticaReportes_Container>
        ),
    },
    {
        path: "/generacionautomatica/reportes/resumenes",
        element: (
            <GeneracionAutomaticaReportes_Container tipoReporte={"Resumenes"}></GeneracionAutomaticaReportes_Container>
        ),
    },
    {
        path: "/generacionautomatica/reportes/ventas",
        element: (
            <GeneracionAutomaticaReportes_Container tipoReporte={"Ventas"}></GeneracionAutomaticaReportes_Container>
        ),
    },
    {
        path: "/generacionautomatica/reportes/existencias",
        element: (
            <GeneracionAutomaticaReportes_Container tipoReporte={"Existencias"}></GeneracionAutomaticaReportes_Container>
        ),
    },
    {
        path: "/generacionautomatica/reportes/movimientos",
        element: (
            <GeneracionAutomaticaReportes_Container tipoReporte={"Movimientos"}></GeneracionAutomaticaReportes_Container>
        ),
    },
    {
        path: "/generacionautomatica/reportes/articulos",
        element: (
            <GeneracionAutomaticaReportes_Container tipoReporte={"Articulos"}></GeneracionAutomaticaReportes_Container>
        ),
    },
    {
        path: "/generacionautomatica/reportes/articulos_a_granel",
        element: (
            <GeneracionAutomaticaReportes_Container tipoReporte={"Articulos a granel"}></GeneracionAutomaticaReportes_Container>
        ),
    },  
    {
        path : "/generacionautomatica/reportes/proveedores",
        element  :<GeneracionAutomaticaReportes_Container tipoReporte={"Proveedores"}></GeneracionAutomaticaReportes_Container>

    },
    {
        path : "/generacionautomatica/reportes/cambios_de_precio",
        element  :<GeneracionAutomaticaReportes_Container tipoReporte={"Cambios de precio"}></GeneracionAutomaticaReportes_Container>

    },
    {
        path : "/generacionautomatica/operaciones",
        element : <GeneracionAutomaticaOperaciones_TipoPage></GeneracionAutomaticaOperaciones_TipoPage>
    }
    
]);
