import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import InicioPage from "../components/ui/pages/InicioPage/InicioPage";


 const [darkMode, setDarkMode] = useState<boolean>(false);
    const toggleDarkMode = () => [setDarkMode(!darkMode)];


export const router = createBrowserRouter([
    {
        path : "/",
        element: <App></App>,
        children : [
            {path : "" , element : <InicioPage darkMode = {darkMode}></InicioPage>}
        ]
    }
])