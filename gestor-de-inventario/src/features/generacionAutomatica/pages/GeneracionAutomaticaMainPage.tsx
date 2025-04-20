import { useNavigate } from "react-router"
import OrdenDeCompraIcon from "../../../shared/assets/icons/asideMenu/OrdenesDeCompraIcon.svg"
import ReportIcon from "../../../shared/assets/icons/GeneracionAutomatica/ReportIcon.svg"
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu"
import GeneracionAutomaticaBtn from "../../generacionAutomatica/components/GeneracionAutomaticaBtn"
export default function GeneracionAutomaticaMainPage(){

    const nav = useNavigate()

    return(
    
    <div className="flex box-border h-screen">
        <AsideMenu></AsideMenu>
        <main className="w-full h-full flex justify-center p-1">
            <div className="border border-black w-[70%]  rounded-lg p-5">
                <div className="p-5">
                    <h1 className="font-bold text-lg ml-10">
                        Ajustes de automatizacion
                    </h1>
                </div>
                <hr />
                <section className="w-full h-fit flex flex-col items-center mt-10 gap-5">
                    <GeneracionAutomaticaBtn   title="Reportes" description="Configura la automatizacion de reportes"  onClickFunc={() => nav('reportes')} icon = {ReportIcon} ></GeneracionAutomaticaBtn>
                    <GeneracionAutomaticaBtn title="Ordenes de compra" description="Configura la automatizacion de las ordenes de compra" onClickFunc={() => nav('/reporte')} icon = {OrdenDeCompraIcon}></GeneracionAutomaticaBtn>
                </section>
            </div>
        </main>
    </div>
    )
}