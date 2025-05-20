// React Hooks
import { useEffect, useState } from "react"
// Componentes -> asidemenu
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu"
//Funciones para realizar fetch



// Componentes -> parametros
import BotonesFormatos from "../../../shared/components/UI/BotonesFormatos"
import ParametrosReporteContainer from "../../../shared/components/UI/parametrosReporte/ParametrosReporteContainer"
import ParametrosReporteFechaRango from "../../../shared/components/UI/parametrosReporte/ReporteFechaRangoSelect"
import ParametrosReporteOperaciones from "../../../shared/components/UI/parametrosReporte/ReporteOperacionesSelect"
//
// Otros componentes
import GraficaArea from "../../../shared/components/UI/GraficaArea"
// Funciones importadas
import { getCantidadLogsResumenesPorFecha } from "../../../backend/routes/api/functions/logs/reportes/Resumenes"
import ResultadoRow from "../../../shared/components/UI/ResultadoRow"
import ResultadosContainer from "../../../shared/components/UI/ResultadosContainer"


export default function ResumenesPage() {

    type Operacion = "Ordenes de compra" | "Recepciones" | "Devoluciones" | "Mermas" | "Siniestros" | "Transferencias";


    //state Hooks

    const [operacion, setOperacion] = useState<Operacion | null>("Ordenes de compra");  
    const [fechaInicial, setFechaInicial] = useState<string | null>(null);
    const [fechaFinal, setFechaFinal] = useState<string | null>(null);

    const [historialResumenes,setHistorialResumenes] = useState<any[]>([])

    const [dataResultadoParametros,setDataResultadoParametros] = useState<any[]>([])
    
    // Object para guardar las URLS de la API 
    const URLS_API : {[key in Operacion] : string} = {
        "Ordenes de compra": "http://localhost:3001/api/ordenescompra/rango",
        Recepciones: "http://localhost:3001/api/recepciones",
        Devoluciones: "http://localhost:3001/api/devoluciones",
        Mermas: "http://localhost:3001/api/mermas",
        Siniestros: "http://localhost:3001/api/siniestros",
        Transferencias: "http://localhost:3001/api/transferencias",
    };


    const handleParametros = async () =>{
            try {
                const URL_FETCH = `${URLS_API[operacion as Operacion]}/${fechaInicial}/${fechaFinal}`;
                const response = await fetch(URL_FETCH)
                const data = await response.json()
                setDataResultadoParametros(data)
                console.log(data)
            } catch (error) {
                setDataResultadoParametros([])
                console.log(`Hubo un error al intentar obtener la informacion de ${operacion} con rango de fecha ${fechaInicial}  -> ${fechaFinal}`)
            }
    }

    // Functions
    const loadData = async () =>{
        const resumenesHistorial = await getCantidadLogsResumenesPorFecha()
        setHistorialResumenes(resumenesHistorial)

    }

    // Effect Hooks

    useEffect(()=>{
        loadData()
    },[])
    
    

    
    useEffect(()=>{
        if(operacion && fechaInicial && fechaFinal){
            handleParametros()
        }
    },[operacion,fechaInicial,fechaFinal])




    return (
        <div className="flex box-border h-screen bg-black">
                    <AsideMenu notificacionesNuevas={2}></AsideMenu>
                    <main className="overflow-auto h-full w-full flex gap-4 flex-col p-4 sbg-white text-black duration-700 scrollbarclass">
                        <section className='flex gap-4 h-fit'>
                            <div className='h-full w-full flex flex-col gap-4 '>
                                <ParametrosReporteContainer>
                                    <ParametrosReporteOperaciones setOperacion={setOperacion}></ParametrosReporteOperaciones>
                                    <ParametrosReporteFechaRango setFechaFinal={setFechaFinal} setFechaInicial={setFechaInicial}></ParametrosReporteFechaRango>
                                    <div className='flex gap-3'>
                                        <BotonesFormatos></BotonesFormatos>
                                    </div>
                                </ParametrosReporteContainer>
                                {/* <div className='border border-white flex flex-col p-3 rounded-md h-full cursor-pointer bg-[#181818]'>
                                    <h1 className='text-white font-bold text-center'>Cantidad de Operaciones Realizadas</h1>
                                    {
                                        cantidadOperacionesRegistros.map((item,index)=>{
                                            return(
                                                <InfoRapidaCard icon={icons[index]} title={item.operacion} bgcolor={coloresLlamativos[index]} cantidad={item.cantidad} maxValue={maxValue}></InfoRapidaCard>
                                            )
                                        })
                                    }
                                </div> */}
                            </div>
                        </section>  
                        <section>
                            <GraficaArea title="Flujo de Resumenes" data={historialResumenes} xKey='fecha' yKey='cantidad' color='#e86a10'></GraficaArea>
                        </section>
                        <section>
                            <ResultadosContainer>
                                    {
                                        dataResultadoParametros.length > 0 ? 
                                            dataResultadoParametros.map((item , index)=>{
                                                return(
                                                    <ResultadoRow data={item} index={index}></ResultadoRow>
                                                )
                                            })
                                        : <h1 className='text-white text-center font-bold'>No hay resultados</h1>
                                    }
                            </ResultadosContainer>
                        </section>
                    </main>
                </div>  
    )
}