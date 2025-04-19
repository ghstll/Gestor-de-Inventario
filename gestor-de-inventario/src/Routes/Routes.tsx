import { createBrowserRouter } from "react-router-dom";

import InicioPage from "../components/ui/pages/InicioPage/InicioPage";
import OrdenesDeCompraPage from "../components/ui/pages/OperacionesPages/OrdenesDeCompra/OrdenesDeCompraPage";
import GeneracionAutomaticaMainPage from "../components/ui/pages/PreferenciasPages/GeneracionAutomaticaPage/GeneracionAutomatica_Main/GeneracionAutomaticaMainPage";
import GeneracionAutomaticaReportesPage from "../components/ui/pages/PreferenciasPages/GeneracionAutomaticaPage/GeneracionAutomatica_Reportes/GeneracionAutomaticaReportesPage";
import NotificaionesPage from "../components/ui/pages/Sistema/NotificacionesPage/NotificacionesPage";

export const router = createBrowserRouter([
    {
        path : "/",
        element: <InicioPage></InicioPage>,
    },
    {
        path : "/notificaciones",
        element : <NotificaionesPage></NotificaionesPage>
    },
    {
        path : "/generacionautomatica",
        element  : <GeneracionAutomaticaMainPage></GeneracionAutomaticaMainPage>,
        
    },
    {
        path : "/generacionautomatica/reportes",
        element : <GeneracionAutomaticaReportesPage></GeneracionAutomaticaReportesPage>
    },
    {
        path : "/operaciones/ordenes_de_compra",
        element : <OrdenesDeCompraPage></OrdenesDeCompraPage>
    }
    
    
])

