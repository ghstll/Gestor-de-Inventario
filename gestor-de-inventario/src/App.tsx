import { useState } from "react";


import { BrowserRouter } from "react-router-dom";

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const toggleDarkMode = () => [setDarkMode(!darkMode)];

    const [currentPage, setCurrentPage] = useState("GeneracionAutomatica");





    return(
        <>
            <BrowserRouter>
            </BrowserRouter>
        </>
    )
    
}
