import { useState } from "react";
import AsideMenu from "./components/ui/AsideMenu/AsideMenu";
import InicioPage from "./components/ui/pages/InicioPage/InicioPage";
import GeneracionAutomaticaPage from "./components/ui/pages/PreferenciasPages/GeneracionAuomatica/GeneracionAutomaticaPage";

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState("Inicio");

    const renderPage = () => {
        console.log(currentPage);
        switch (currentPage) {
            case "Inicio":
                return <InicioPage></InicioPage>;
            case "GeneracionAutomatica":
                return <GeneracionAutomaticaPage></GeneracionAutomaticaPage>;

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
