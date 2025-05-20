import { useNavigate } from "react-router"
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu"
import GeneracionAutomaticaTipo from "../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaTipo"



import OperacionesIcon from '../../../shared/assets/icons/asideMenu/OrdenesDeCompraIcon.svg'
import { default as ReportesIcon } from '../../../shared/assets/icons/asideMenu/PolizaContableIcon.svg'


export default function GeneracionAutomaticaMainPage(){

    const nav = useNavigate()

    return(
    
    <div className="flex box-border h-screen">
        <AsideMenu></AsideMenu>
        <main className="w-full h-full flex justify-center p-4 bg-black">
            <div className="border border-white w-[90%]  rounded-lg p-5 bg-black text-white">
                <div className="p-5">
                    <h1 className="font-bold text-lg ml-10">
                        Ajustes de automatizacion
                    </h1>
                </div>
                <hr />
                <section className="w-full h-fit flex flex-col items-center mt-10 gap-5 text-black">
                    <GeneracionAutomaticaTipo onClickFunc={()=>nav("reportes")} icon={ReportesIcon} title="Reportes" description="Configurar la automatizacion para los reportes"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo onClickFunc={() => nav("operaciones")} icon={OperacionesIcon} title="Operaciones" description="Configurar la automatizacion para las operaciones"></GeneracionAutomaticaTipo>
                    {/* <GeneracionAutomaticaTipo icon={VentasIcon} title="Ventas" description="Configurar la automatizacion para las ventas"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo icon={KardexIcon} title="Kardex" description="Configurar la automatizacion para el kardex"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo icon={InventarioFisicoIcon} title="Inventario fisico" description="Configurar la automatizacion para el inventario fisico"></GeneracionAutomaticaTipo>
                    <GeneracionAutomaticaTipo icon={PolizasIcon} title="Polizas" description="Configurar la automatizacion para las polizas"></GeneracionAutomaticaTipo> */}
                </section>
            </div>
        </main>
    </div>
    )
}