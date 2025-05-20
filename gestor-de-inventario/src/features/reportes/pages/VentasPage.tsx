// Hooks
import { useEffect, useState } from "react"
//Otros componentes 
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu"
import GraficaArea from "../../../shared/components/UI/GraficaArea"


// Componentes - Parametros
import { getHistoricoVentas } from "../../../backend/routes/api/functions/reportes/ventas"
import BotonesFormatos from "../../../shared/components/UI/BotonesFormatos"
import ParametrosReporteContainer from "../../../shared/components/UI/parametrosReporte/ParametrosReporteContainer"
import ParametrosReporteVentaOperacion from "../../../shared/components/UI/parametrosReporte/ParametrosReporteVentaOperacion"
import ParametrosReporteFechaRango from "../../../shared/components/UI/parametrosReporte/ReporteFechaRangoSelect"

// Componentes - Resultados

// Funciones

import { getCantidadLogsReportesVentasPorFecha } from "../../../backend/routes/api/functions/logs/reportes/logsReportesVentas"
interface Historico{
    fecha : string
    cantidad : number
}
export default function VentasPage() {
    type Operacion = 
        | "Venta por forma de pago"
        | "Venta por otros ingresos"
        | "Venta por Departamento"
        | "Venta mensual por Departamento"
        | "Costo de venta"
    // state Hooks
    const [operacionVenta,setOperacionVenta] = useState<Operacion | null>(null)
    const [fechaInicial,setFechaInicial] = useState<string | null>(null)
    const [fechaFinal,setFechaFinal] = useState<string | null>(null)
    const [dataHistorico , setDataHistorico] = useState<Historico[]>([])

    const [dataResultados ,setDataResultados] = useState<any[]>([])

    const URLS_API : {[key in Operacion] : string} = {
        "Venta por forma de pago": "http://localhost:3001/api/ventas/venta_forma_pago",
        "Venta por otros ingresos": "http://localhost:3001/api/venta_forma_pago",
        "Venta por Departamento": "http://localhost:3001/api/venta_departamento",
        "Venta mensual por Departamento": "http://localhost:3001/api/ventas/venta_mensual_departamento",
        "Costo de venta": "http://localhost:3001/api/ventas/costo_venta",
    };
    const [historialVentas,setHistorialVentas] = useState<any[]>([])
    const handleParametros = async() =>{
        try {
            const URL_FETCH = `${URLS_API[operacionVenta as Operacion]}/${fechaInicial}/${fechaFinal}`
            const response = await fetch(URL_FETCH)
            const data = await response.json()
            setDataResultados(data)
        } catch (error) {
            
        }
    }   
    const loadData = async ()=>{
        setHistorialVentas(await getCantidadLogsReportesVentasPorFecha())
        setDataHistorico(await getHistoricoVentas())
    }
    useEffect(()=>{
        loadData()
    },[])
    useEffect(()=>{
        if(operacionVenta && fechaFinal && fechaInicial){
            handleParametros()
        }
    },[operacionVenta,fechaFinal,fechaInicial])
    return (
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="overflow-auto h-full w-full flex gap-4 flex-col p-4 sbg-white bg-[#141519] text-black duration-700 scrollbarclass">
                <section className='flex gap-4 h-fit'>
                    <div className='h-full w-full flex flex-col gap-4 '>
                        <ParametrosReporteContainer>
                            <ParametrosReporteVentaOperacion  setOperacionVenta={setOperacionVenta}></ParametrosReporteVentaOperacion>
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
                    <GraficaArea title="Flujo Historico de Ventas" data={dataHistorico} xKey='fecha' yKey='cantidad' color='#8bde54'></GraficaArea>
                </section>  
                <section>
                    {/* <ResultadosContainer>
                            {
                                dataResultadoParametros.length > 0 ? 
                                    dataResultadoParametros.map((item , index)=>{
                                        return(
                                            <ResultadoRow data={item} index={index}></ResultadoRow>
                                        )
                                    })
                                : <h1 className='text-white text-center font-bold'>No hay resultados</h1>
                            }
                    </ResultadosContainer> */}
                </section>
            </main>
        </div>
    )
}