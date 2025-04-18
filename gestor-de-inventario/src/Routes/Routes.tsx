import { createBrowserRouter } from "react-router-dom";

import InicioPage from "../components/ui/pages/InicioPage/InicioPage";
import GeneracionAutomaticaMainPage from "../components/ui/pages/PreferenciasPages/GeneracionAutomaticaPage/GeneracionAutomatica_Main/GeneracionAutomaticaMainPage";
import GeneracionAutomaticaReportesPage from "../components/ui/pages/PreferenciasPages/GeneracionAutomaticaPage/GeneracionAutomatica_Reportes/GeneracionAutomaticaReportesPage";


export const router = createBrowserRouter([
    {
        path : "/",
        element: <InicioPage></InicioPage>,
    },
    {
        path : "/dashboard",
        element: <InicioPage></InicioPage>,
    },
    {
        path : "/generacionautomatica",
        element  : <GeneracionAutomaticaMainPage></GeneracionAutomaticaMainPage>,
        
    },
    {
        path : "/generacionautomatica/reportes",
        element : <GeneracionAutomaticaReportesPage></GeneracionAutomaticaReportesPage>
    }
    
])

