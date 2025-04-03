import { useState } from "react"
import AsideMenu from "./components/ui/AsideMenu/AsideMenu"
import OrdenesDeCompraPage from "./components/ui/OperacionesPages/OrdenesDeCompra/OrdenesDeCompraPage"
export default function App(){

    const [darkMode,setDarkMode] = useState<boolean>(false)

    const toggleDarkMode = ()=>[
        setDarkMode(!darkMode)
    ]

    return(
        <div className="flex box-border h-screen">
            <AsideMenu toggleDarkMode={toggleDarkMode} darkMode = {darkMode}>
            
            </AsideMenu>
            <OrdenesDeCompraPage darkMode = {darkMode} >

            </OrdenesDeCompraPage>
        </div>
    )
}



             