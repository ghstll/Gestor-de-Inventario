import { useState } from "react";


import { BrowserRouter } from "react-router-dom";

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState("GeneracionAutomatica");


    const toggleDarkMode = () => [setDarkMode(!darkMode)];



    return(
        <>
            <BrowserRouter>
            </BrowserRouter>
        </>
    )
    
}
