import { useState } from "react";
import AsideMenu from "./components/ui/AsideMenu/AsideMenu";
import GeneracionAutomaticaPage from "./components/ui/pages/GeneracionAutomaticaPage/GeneracionAutomaticaPage";
import InicioPage from "./components/ui/pages/InicioPage/InicioPage";
import OrdenesDeCompraPage from "./components/ui/pages/OperacionesPages/OrdenesDeCompra/OrdenesDeCompraPage";
export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState("GeneracionAutomatica");

    const renderPage = () => {
        console.log(currentPage);
        switch (currentPage) {
            case "Inicio":
                return <InicioPage darkMode = {darkMode}></InicioPage>;
            case "GeneracionAutomatica":
                return <GeneracionAutomaticaPage></GeneracionAutomaticaPage>;
            case "OrdenesDeCompra" : 
                return <OrdenesDeCompraPage darkMode = {darkMode}></OrdenesDeCompraPage>
            default:
                return <h1>No encontrado</h1>;
        }
    };

    const toggleDarkMode = () => [setDarkMode(!darkMode)];




    return (
        <div className="flex box-border h-screen">
            <AsideMenu toggleDarkMode={toggleDarkMode} darkMode = {darkMode} setCurrentPage={setCurrentPage}>

            </AsideMenu>

            <>
                {renderPage()}
            </>
        </div>
    
    );
}
