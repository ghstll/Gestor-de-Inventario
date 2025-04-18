import { useNavigate } from "react-router"
import OrdenDeCompraIcon from "../../../../../../assets/GeneracionAutomatica/OrdenesDeCompraIcon.svg"
import ReportIcon from "../../../../../../assets/GeneracionAutomatica/ReportIcon.svg"
import GeneracionAutomaticaBtn from "../../GeneracionAutomaticaPage/GeneracionAutomaticaBtn"

export default function GeneracionAutomaticaMainPage(){

    const nav = useNavigate()

    return(
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
    )
}