import { useNavigate } from "react-router"
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu"
import GeneracionAutomaticaTipo from "../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaTipo"

import ReportesIcon from '../../../shared/assets/icons/GeneracionAutomatica/ReportIcon.svg'


export default function GeneracionAutomaticaMainPage(){

    const nav = useNavigate()

    return(
    
    <div className="flex box-border h-screen">
        <AsideMenu></AsideMenu>
        <main className="w-full h-full flex justify-center p-1 bg-gray-200">
            <div className="border border-black w-[70%]  rounded-lg p-5 bg-white">
                <div className="p-5">
                    <h1 className="font-bold text-lg ml-10">
                        Ajustes de automatizacion
                    </h1>
                </div>
                <hr />
                <section className="w-full h-fit flex flex-col items-center mt-10 gap-5">
                    <GeneracionAutomaticaTipo onClickFunc={()=>nav("reportes")} icon={ReportesIcon} title="Reportes" description="Configurar la automatizacion para los reportes" color="#ffa9b9"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo onClickFunc={() => nav("operaciones")} icon={ReportesIcon} title="Operaciones" description="Configurar la automatizacion para las operaciones" color="#fcd5bd"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo icon={ReportesIcon} title="Ventas" description="Configurar la automatizacion para las ventas" color="#f2ffbf"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo icon={ReportesIcon} title="Kardex" description="Configurar la automatizacion para el kardex" color="#d9e99e"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo icon={ReportesIcon} title="Inventario fisico" description="Configurar la automatizacion para el inventario fisico" color="#c0d27e"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo icon={ReportesIcon} title="Polizas" description="Configurar la automatizacion para las polizas" color="#c0d27e"></GeneracionAutomaticaTipo>
                </section>
            </div>
        </main>
    </div>
    )
}