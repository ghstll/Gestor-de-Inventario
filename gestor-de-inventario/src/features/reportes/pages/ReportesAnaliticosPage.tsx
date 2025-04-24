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


export default function ReportesAnaliticosPage(){

    const columnns = ["Folio de la Nota", "Fecha de la Nota","Proveedor","Nombre","Subtotal","IVA","IEPS","Total Devolucion"]



    const [fechaIncial, setFechaInicial] = useState<string | null>(null)
    
    const [fechaFinal, setFechaFinal] = useState<string | null>(null)

    const [operacion, setOperacion] = useState<string | null>("Ordenes de compra")

    return(
        <div className="flex box-border h-screen bg-gray-200">
            <AsideMenu></AsideMenu>
            <main className="overflow-auto h-full w-full flex gap-4 flex-col  p-4 sbg-white text-black duration-700">
                <section className='h-[40%] flex gap-2'>
                    <div className='w-[60%] h-full'>
                        <ParametrosReporteContainer>
                            <ParametrosReporteOperaciones setOperacion={setOperacion}></ParametrosReporteOperaciones>
                            <ParametrosReporteFechaRango setFechaFinal={setFechaFinal} setFechaInicial={setFechaInicial}></ParametrosReporteFechaRango>
                            <div className='flex gap-3'>
                                <ButtonParametrosReportes text="Imprimir" onClick={()=>{}}></ButtonParametrosReportes>
                                <ButtonParametrosReportes text="Exportar Excel" onClick={()=>{}}></ButtonParametrosReportes>
                            </div>
                        </ParametrosReporteContainer>
                    </div>
                    <div className='w-[40%] h-full'>
                        <UltimosReportesGeneradosContainer>
                            {
                                ultimosReportesAnaliticos.map((reporte)=>{
                                    return(
                                        <UltimosReportesGeneradosCard ultimoReporte={reporte}></UltimosReportesGeneradosCard>
                                    )
                                })
                            }
                        </UltimosReportesGeneradosContainer>
                    </div>
                </section>
                <section className="h-full w-full  flex justify-center">
                    <div className='border border-black p-4 rounded-md bg-white overflow-auto scrollbarclass flex flex-col items-center gap-2 w-[85%]'>
                        <h1 className='font-semibold'>Vista previa del reporte</h1>
                        <ReporteAnalitico>
                            <ReportesHeader operacion={operacion} fechaInicio={fechaIncial} fechaFin={fechaFinal}></ReportesHeader>
                            <ReportesGrid columns={columnns} resultados={ReportesAnaliticosJSON}></ReportesGrid>
                        </ReporteAnalitico>
                    </div>
                </section>
                
            </main>
        </div>
    )
}