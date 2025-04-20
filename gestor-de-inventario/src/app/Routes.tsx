import { createBrowserRouter } from "react-router-dom";

import InicioPage from "../features/dashboard/pages/InicioPage";
import GeneracionAutomaticaMainPage from "../features/generacionAutomatica/pages/GeneracionAutomaticaMainPage";
import GeneracionAutomaticaReportesPage from "../features/generacionAutomatica/pages/GeneracionAutomaticaReportesPage";
import NotificaionesPage from "../features/notificaciones/pages/NotificacionesPage";
import OrdenesDeCompraPage from "../features/ordenesCompra/pages/OrdenesDeCompraPage";

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

