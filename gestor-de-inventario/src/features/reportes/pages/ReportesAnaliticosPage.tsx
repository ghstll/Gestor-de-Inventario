import { useState } from 'react';
import ReportesAnaliticosJSON from '../../../data/json_files/test/ReportesAnaliticos.json';
import ultimosReportesAnaliticos from '../../../data/json_files/ultimosReportesAnaliticos.json';
import ReporteAnalitico from '../../../reports/reportes/ReporteAnalitico';
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";
import ButtonParametrosReportes from '../../../shared/components/UI/buttons/ButtonParametrosReporte';
import ParametrosReporteContainer from '../../../shared/components/UI/parametrosReporte/ParametrosReporteContainer';
import ParametrosReporteFechaRango from '../../../shared/components/UI/parametrosReporte/ParametrosReporteFechaRango';
import ParametrosReporteOperaciones from '../../../shared/components/UI/parametrosReporte/ParametrosReporteOperaciones';
import UltimosReportesGeneradosCard from '../../../shared/components/UI/ultimosReportesGenerados/UltimosReportesGeneradosCard';
import UltimosReportesGeneradosContainer from '../../../shared/components/UI/ultimosReportesGenerados/UltimosReportesGeneradosContainer';
import ReportesGrid from '../../../shared/components/reportes/ReportesGrid';
import ReportesHeader from '../../../shared/components/reportes/ReportesHeader';



import '../../../shared/scrollbarcss.css';

// Este componente representa la página principal de "Reportes Analíticos".
export default function ReportesAnaliticosPage() {
    
    const formateDate = (date : string | null) =>{
        if(date){

            const dateDigits = date.split("-")
            const day = dateDigits[2]
            const month = dateDigits[1]
            const year = dateDigits[0]
            return day+"-"+month+"-"+year
        }
        return null
    }   



    // Definición de las columnas que se mostrarán en el grid del reporte.
    const columnns = ["Folio de la Nota", "Fecha de la Nota", "Proveedor", "Nombre", "Subtotal", "IVA", "IEPS", "Total Devolucion"];

    // Estado para almacenar la fecha inicial seleccionada por el usuario.
    const [fechaInicial, setFechaInicial] = useState<string | null>(null);

    // Estado para almacenar la fecha final seleccionada por el usuario.
    const [fechaFinal, setFechaFinal] = useState<string | null>(null);

    console.log(fechaInicial)

    // Estado para almacenar la operación seleccionada por el usuario (por defecto: "Ordenes de compra").
    const [operacion, setOperacion] = useState<string | null>("Ordenes de compra");
    return (
        // Contenedor principal de la página con estilos de diseño flexbox.
        <div className="flex box-border h-screen bg-gray-200">
            {/* Menú lateral de navegación */}
            <AsideMenu></AsideMenu>

            {/* Contenido principal de la página */}
            <main className="overflow-auto h-full w-full flex gap-4 flex-col p-4 sbg-white text-black duration-700">
                
                {/* Sección superior: Parámetros del reporte y últimos reportes generados */}
                <section className='h-[40%] flex gap-2'>
                    
                    {/* Contenedor de los parámetros del reporte */}
                    <div className='w-[60%] h-full'>
                        <ParametrosReporteContainer>
                            {/* Componente para seleccionar la operación */}
                            <ParametrosReporteOperaciones setOperacion={setOperacion}></ParametrosReporteOperaciones>
                            
                            {/* Componente para seleccionar el rango de fechas */}
                            <ParametrosReporteFechaRango setFechaFinal={setFechaFinal} setFechaInicial={setFechaInicial}></ParametrosReporteFechaRango>
                            
                            {/* Botones para imprimir o exportar el reporte */}
                            <div className='flex gap-3'>
                                <ButtonParametrosReportes text="Imprimir" onClick={() => {}}></ButtonParametrosReportes>
                                <ButtonParametrosReportes text="Exportar Excel" onClick={() => {}}></ButtonParametrosReportes>
                            </div>
                        </ParametrosReporteContainer>
                    </div>

                    {/* Contenedor de los últimos reportes generados */}
                    <div className='w-[40%] h-full'>
                        <UltimosReportesGeneradosContainer> 
                            {
                                // Mapeo de los últimos reportes generados para mostrarlos como tarjetas.
                                ultimosReportesAnaliticos.map((reporte) => {
                                    return (
                                        <UltimosReportesGeneradosCard ultimoReporte={reporte}></UltimosReportesGeneradosCard>
                                    );
                                })
                            }
                        </UltimosReportesGeneradosContainer>
                    </div>
                </section>

                {/* Sección inferior: Vista previa del reporte */}
                <section className="h-full w-full flex justify-center">
                    <div className='border border-black p-4 rounded-md bg-white overflow-auto scrollbarclass flex flex-col items-center gap-2 w-[85%]'>
                        {/* Título de la vista previa */}
                        <h1 className='font-semibold'>Vista previa del reporte</h1>
                        
                        {/* Contenedor del reporte analítico */}
                        <ReporteAnalitico>
                            {/* Encabezado del reporte con los parámetros seleccionados */}
                            <ReportesHeader operacion={operacion} fechaInicio={formateDate(fechaInicial)} fechaFin={formateDate(fechaFinal)}></ReportesHeader>
                            
                            {/* Grid que muestra los datos del reporte */}
                            <ReportesGrid columns={columnns} resultados={ReportesAnaliticosJSON}></ReportesGrid>
                        </ReporteAnalitico>
                    </div>
                </section>
            </main>
        </div>
    );
}