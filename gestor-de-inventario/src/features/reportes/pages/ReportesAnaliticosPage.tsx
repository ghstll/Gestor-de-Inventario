import ultimosReportesAnaliticos from '../../../data/json_files/ultimosReportesAnaliticos.json';
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";
import UltimosReportesGenerados from "../../../shared/components/UI/UltimosReportesGenerados";



export default function ReportesAnaliticosPage(){

    // const [ultimosReportesGeneradosData , setUltimsoReportesGeneradosData] = useState([])


    // async function fetchUltimosReportesData(){

    //     try {
    //         const response = await fetch("http://localhost:3001/api/ultimosreportes/Analiticos")
    //         const data = await response.json()
    //         setUltimsoReportesGeneradosData(data)
    //     } catch (error) {
    //         console.log("Error al obtener los logs de los reportes analiticos : " ,error)
    //     }
    
    // }fetchUltimosReportesData()
    

    return(
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="overflow-auto h-full w-full flex gap-4 flex-col  p-4 sbg-white text-black duration-700">
                {
                    ultimosReportesAnaliticos.map((reporte)=>{
                        return (
                            <UltimosReportesGenerados ultimoReporte={reporte}></UltimosReportesGenerados>

                        )
                    })
                }
            </main>
        </div>
    )
}