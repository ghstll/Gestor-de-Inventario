import { useEffect, useState } from "react"
import { getRecepcionesEsperadasEstaSemana } from "../../../../backend/routes/api/functions/Operaciones/Recepciones"
import recepcionIcon from '../../../../shared/assets/icons/asideMenu/RecepcionesIcon.svg'
import AsideMenu from "../../../../shared/components/AsideMenu/AsideMenu"
import BotonesFormatos from "../../../../shared/components/UI/BotonesFormatos"
import DepartamentosSelect from "../../../../shared/components/UI/DepartamentosSelect"
import FormParamsReportProveedor from "../../../../shared/components/UI/ProveedoresSelect"
import RangoFecha from "../../../../shared/components/UI/RangoFecha"
import RangoFolio from "../../../../shared/components/UI/RangoFolio"
import UltimosRegistrosSemana from "../../../../shared/components/UI/UltimosRegistrosSemana"
import FastInfoCard from "../../../dashboard/components/fastInfoCard"
import ContainerRecepciones from "../components/ContainerRecepciones"
interface recepcion{
    folio_recepcion : string
    fecha_esperada_entrega : string
    estado : string
    observaciones : string
    cantidad : 50
}
export default function RecepcionesPage() {


    const [recepcionesEsperadasEstaSemana,setRecepcionesEsperadasEstaSemana] = useState<recepcion[]>([])
    useEffect(() =>{
        const fetchData= async () =>{
            setRecepcionesEsperadasEstaSemana(await getRecepcionesEsperadasEstaSemana())
        }; fetchData()
    },[])

    return (
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="overflow-auto h-full w-full flex gap-4 flex-col  p-4 bg-[#141519] text-black duration-700 scrollbarclass">
                <section className="flex w-full gap-4">
                        <div className="flex flex-col bg-[#1a1b22] w-fit gap-4 p-2 rounded-md hover:brightness-150 duration-500 justify-center">
                            <RangoFolio></RangoFolio>
                            <RangoFecha></RangoFecha>
                            <FormParamsReportProveedor></FormParamsReportProveedor>
                            <DepartamentosSelect></DepartamentosSelect>
                            {/* <Estado estados={estados}></Estado> */}
                            <BotonesFormatos></BotonesFormatos>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <FastInfoCard title="Recepciones del dia" description="Recepciones registradas hoy" iconsvg={recepcionIcon} percent={20} positive={true} value="12"></FastInfoCard>
                            <FastInfoCard 
                                title="Recepciones del mes" 
                                description="Total acumulado en mayo" 
                                iconsvg={recepcionIcon} 
                                percent={15} 
                                positive={true} 
                                value="238" 
                                />
                            <FastInfoCard 
                                title="Productos recibidos hoy" 
                                description="Unidades totales recibidas en almacen" 
                                iconsvg={recepcionIcon} 
                                percent={60.2} 
                                positive={true} 
                                value="1240" 
                            />

                        </div>
                </section>
                <section className="grid grid-cols-3 grid-flow-row gap-4">
                    {/* <ContainerRecepciones title="Recepciones pendientes" data={recepcionesEsperadasEstaSemana}></ContainerRecepciones> */}
                    {/* <ContainerRecepciones title="Ultimas 30 recepciones"></ContainerRecepciones> */}
                    <ContainerRecepciones title="Recepciones programadas para esta semana" data={recepcionesEsperadasEstaSemana}></ContainerRecepciones>
                    <UltimosRegistrosSemana tipo="Recepciones"></UltimosRegistrosSemana>
                    <UltimosRegistrosSemana tipo="Recepciones"></UltimosRegistrosSemana>
                </section>
            </main>
        </div>
    )
}