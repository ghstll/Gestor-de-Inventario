import { useState } from "react"
import { useNavigate } from "react-router"
import dataAutoReports from "../../../../../../data/json_files/conf_auto_reportes.json"
import AsideMenu from "../../../../AsideMenu/AsideMenu"
import GeneracionAutomaticaReportesCard from "../../../../PreferenciasComps/GeneracionAutomatica/GeneracionAutomaticaReportes/GeneracionAutomaticaReportesCard"
import GeneracionAutomaticaReportesModal from "../../../../PreferenciasComps/GeneracionAutomatica/GeneracionAutomaticaReportes/GeneracionAutomaticaReportesModal"



export default function GeneracionAutomaticaReportesPage(){

    const [isOpenModal,setIsOpenModal] = useState(false)
    const [idSelectedReport, setIdSelectedReport] = useState<number>(0)
    const nav = useNavigate()
    return(
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="w-full h-full flex justify-center p-1">   {/* Contenedor que divide el menu lateral y el contenido principal 
                                                                                de la pagina Generacion Automatica de Reportes */}
                <div className="border border-black w-[70%] overflow-y-auto rounded-lg p-5 mt-4 mb-4">
                    <section className="flex items-center justify-between">
                        <div className="p-5 flex items-center gap-4">
                            <button onClick={() => nav("/generacionautomatica")} className="font-bold text-lg ml-10">
                                Ajustes de automatizacion
                            </button>
                            <h1>&rarr;</h1>
                            <h1 className="font-bold text-lg">Reportes</h1>
                        </div>
                    </section>
                    <hr />
                    <section className="w-full">
                        {
                            dataAutoReports.map((report) => { {/* Por cada registro en el archivo conf_auto_reportes.json, retornaremos un elemento <GeneracionAutomaticaReportesCard>
                                                                El cual nos tendra la informacion principal de la configuracion de la generacion automatica
                                                                de ese reporte */}
                                return (
                                   <GeneracionAutomaticaReportesCard 
                                        openModal = {() => {
                                            setIdSelectedReport(report.id)
                                            setIsOpenModal(true)
                                        }}
                                        tipoReporte={report.tipoReporte}
                                        periodicidad={report.periodicidad}
                                        ultimaGeneracion={report.ultimaGeneracion}
                                        proximaGeneracion={report.proximaGeneracion}
                                        formatos = {report.formato}
                                        idCard={report.id}
                                    >
                                   </GeneracionAutomaticaReportesCard>
                                )
                            })
                        }
                    </section>
                    </div>
            </main>
            <GeneracionAutomaticaReportesModal idReportConf={idSelectedReport} isOpen= {isOpenModal} onClose = {() => setIsOpenModal(false)}></GeneracionAutomaticaReportesModal>
        </div>
    )   
}