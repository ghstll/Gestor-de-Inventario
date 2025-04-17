import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import InicioPage from "../components/ui/pages/InicioPage/InicioPage";

export const router = createBrowserRouter([
    {
        path : "/",
        element: <App></App>,
        children : [
            {path : "" , element : <InicioPage></InicioPage>}
        ]
    }
])