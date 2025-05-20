import { useEffect, useState } from 'react';
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";

import BotonesFormatos from '../../../shared/components/UI/BotonesFormatos';
import GraficaArea from '../../../shared/components/UI/GraficaArea';
import '../../../shared/scrollbarcss.css';


import { getCantidadLogsReportesAnaliticosPorFecha } from '../../../backend/routes/api/functions/logs/reportes/Analiticos';
import { getCantidadOperacionesRegistros } from '../../../backend/routes/api/functions/utils/getCantidadOperacionesRegistros';




import InfoRapidaCard from '../../../shared/components/UI/InfoRapidaCard';


import devolucionesIcon from '../../../shared/assets/icons/asideMenu/DevolucionesIcon.svg';
import mermasIcon from '../../../shared/assets/icons/asideMenu/MermasIcon.svg';
import ordenesCompraIcon from '../../../shared/assets/icons/asideMenu/OrdenesDeCompraIcon.svg';
import recepcionesIcon from '../../../shared/assets/icons/asideMenu/RecepcionesIcon.svg';
import siniestrosIcon from '../../../shared/assets/icons/asideMenu/SiniestrosIcon.svg';
import transferenciasIcon from '../../../shared/assets/icons/asideMenu/TransferenciasIcon.svg';
import ResultadoRow from '../../../shared/components/UI/ResultadoRow';
import ResultadosContainer from '../../../shared/components/UI/ResultadosContainer';
import ReporteFechaRangoSelect from '../../../shared/components/UI/parametrosReporte/ReporteFechaRangoSelect';
import ReporteOperacionesSelect from '../../../shared/components/UI/parametrosReporte/ReporteOperacionesSelect';

interface historialReportesAnaliticosLogs{
    fecha : string
    cantidad : number
}

interface historialOperacionesStruct{
    Operacion : string
    operacion_detalles : registroFecha[]
}

interface registroFecha{
    Date : string
    Value : number
}

// Este componente representa la página principal de "Reportes Analíticos".
export default function ReportesAnaliticosPage() {

    type Operacion = "Ordenes de compra" | "Recepciones" | "Devoluciones" | "Mermas" | "Siniestros" | "Transferencias";

    // Estado para almacenar la fecha inicial seleccionada por el usuario.
    const [fechaInicial, setFechaInicial] = useState<string | null>(null);
    // Estado para almacenar la fecha final seleccionada por el usuario.
    const [fechaFinal, setFechaFinal] = useState<string | null>(null);
    // Estado para almacenar la operación seleccionada por el usuario (por defecto: "Ordenes de compra").
    const [operacion, setOperacion] = useState<Operacion | null>("Ordenes de compra");  
    const [dataResultadoReporte,setDataResultadoReporte] = useState<any[]>([])
    const URLS_API : {[key in Operacion] : string} = {
        "Ordenes de compra": "http://localhost:3001/api/ordenescompra/rango",
        Recepciones: "http://localhost:3001/api/recepciones",
        Devoluciones: "http://localhost:3001/api/devoluciones",
        Mermas: "http://localhost:3001/api/mermas",
        Siniestros: "http://localhost:3001/api/siniestros",
        Transferencias: "http://localhost:3001/api/transferencias"
    };
    const [historialReportesAnaliticos,setHistorialReportesAnaliticos] = useState<any[]>([])
    const [cantidadOperacionesRegistros,setCantidadOperacionesRegistros] = useState<any[]>([])

    // Funcion para cargar la informacion que se visualiza en las Graficas y componentes cuando se renderiza la pagina
    const loadData = async () =>{
        setHistorialReportesAnaliticos(await getCantidadLogsReportesAnaliticosPorFecha())
        setCantidadOperacionesRegistros(await getCantidadOperacionesRegistros())
    }
    useEffect(()=>{
        loadData()
    },[])
    //  Funcion que se ejecuta cada que hay algun cambio en los parametros, hara fetch con la informacion si todos los parametros estan llenos
    const handleParametros = async () =>{
            try {
                const URL_FETCH = `${URLS_API[operacion as Operacion]}/${fechaInicial}/${fechaFinal}`;
                const response = await fetch(URL_FETCH)
                const data = await response.json()
                setDataResultadoReporte(data)
                console.log(data)
            } catch (error) {
                setDataResultadoReporte([])
                console.log(`Hubo un error al intentar obtener la informacion de ${operacion} con rango de fecha ${fechaInicial}  -> ${fechaFinal}`)
            }
    }

    // useEffect que mirara cada cambio en las variables operacion,fechainicial y fechafinal, si hay algun cambio en alguna de estas se ejecutara la funcion 
        // handleParametros()

    useEffect(()=>{
        if(operacion && fechaInicial && fechaFinal){
            handleParametros()
        }
    },[operacion,fechaInicial,fechaFinal])
    // Array que guarda los SVG de los iconos
    const icons = [
        devolucionesIcon,
        ordenesCompraIcon,
        mermasIcon,
        recepcionesIcon,
        siniestrosIcon,
        transferenciasIcon
    ]

    const maxValue = cantidadOperacionesRegistros.reduce((max,operacion) =>{
        return operacion.cantidad > max ? operacion.cantidad : max;   
    },0)
    const coloresLlamativos = [
        "#FF5733",  // Rojo brillante
        "#33A1FF",  // Azul brillante
        "#FF33A1",  // Rosa fuerte
        "#FFC300",  // Amarillo brillan     te
        "#9C27B0",  // Púrpura intenso
        "#FF9800",  // Naranja vibrante
        "#00E5FF",  // Cian brillante
        "#FF1493",  // Rosa fuerte (Deep Pink)
        "#00FF00",  // Verde fosforescente
        "#FFD700",  // Dorado
        "#8B00FF",  // Violeta
        "#FF4500",  // Naranja rojizo
        "#FF6347",  // Tomate
        "#32CD32",  // Verde lima
    ];
    return (
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="w-screen h-screen flex flex-col bg-[#141519] p-3 gap-6 overflow-y-auto scrollbarclass">
                <section className='flex gap-4'>
                    <div className='w-full flex flex-1 flex-col gap-4 bg-[#1a1b22] items-center justify-center ps-5 pe-5'>
                        <ReporteOperacionesSelect setOperacion={setOperacion}></ReporteOperacionesSelect>
                        <ReporteFechaRangoSelect setFechaFinal={setFechaFinal} setFechaInicial={setFechaInicial}></ReporteFechaRangoSelect>
                        <div className='flex gap-3'>
                            <BotonesFormatos></BotonesFormatos>
                        </div>
                    </div>
                     <div className='flex flex-1 flex-col p-3 rounded-md h-fit cursor-pointer bg-[#1a1b22]'>
                            <h1 className='text-white font-bold text-center'>Cantidad de Operaciones Realizadas</h1>
                            {
                                cantidadOperacionesRegistros.map((item,index)=>{
                                    return(
                                        <InfoRapidaCard icon={icons[index]} title={item.operacion} bgcolor={coloresLlamativos[index]} cantidad={item.cantidad} maxValue={maxValue}></InfoRapidaCard>
                                    )
                                })
                            }
                        </div>  
                </section>  
                <section>
                    <ResultadosContainer>
                            {
                                dataResultadoReporte.length > 0 ? 
                                    dataResultadoReporte.map((item , index)=>{
                                        return(
                                            <ResultadoRow data={item} index={index}></ResultadoRow>
                                        )
                                    })
                                : <h1 className='text-white text-center font-bold'>No hay resultados</h1>
                            }
                    </ResultadosContainer>
                </section>
                <section>
                    <GraficaArea title="Flujo de Reportes Analiticos" data={historialReportesAnaliticos} xKey='fecha' yKey='cantidad' color='#7155bd'></GraficaArea>
                </section>
            </main>
        </div>      
    );
}
