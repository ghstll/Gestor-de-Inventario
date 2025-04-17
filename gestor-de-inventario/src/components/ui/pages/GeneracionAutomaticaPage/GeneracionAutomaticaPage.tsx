import { useState } from "react"
import GeneracionAutomaticaMainPage from "./GeneracionAutomaticaMainPage"
import GeneracionAutomaticaOrdenesPage from "./GeneracionAutomaticaOrdenesPage"
import GeneracionAutomaticaReportesPage from "./GeneracionAutomaticaReportesPage"
export default function GeneracionAutomaticaPage() {


    const [view,setView] = useState<"inicio" | "reportes" | "ordenes" >("inicio")


    const renderPage = ()=>{
        switch(view){
            case "reportes":
                return <GeneracionAutomaticaReportesPage></GeneracionAutomaticaReportesPage>
            case "ordenes" :
                return <GeneracionAutomaticaOrdenesPage></GeneracionAutomaticaOrdenesPage>
            default : 
                return <GeneracionAutomaticaMainPage setPage={setView}></GeneracionAutomaticaMainPage>
        }
    }

    
    return( <main className="h-full w-full flex p-5 justify-center overflow-auto    ">
           {renderPage()}
        </main>)
}
