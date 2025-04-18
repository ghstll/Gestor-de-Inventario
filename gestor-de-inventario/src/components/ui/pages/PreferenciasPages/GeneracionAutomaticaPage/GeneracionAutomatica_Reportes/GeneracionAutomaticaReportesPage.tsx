import csv_icon from "../../../../../../assets/format/csv_icon.png"
import excel_icon from "../../../../../../assets/format/excel_icon.png"
import pdf_icon from "../../../../../../assets/format/pdf_icon.png"
import dataAutoReports from "../../../../../../data/json_files/conf_auto_reportes.json"
import AsideMenu from "../../../../AsideMenu/AsideMenu"




export default function GeneracionAutomaticaReportesPage(){
    console.log("hola")




    return(
        <div>
            <AsideMenu></AsideMenu>
            <div className="border border-black w-[70%] overflow-auto rounded-lg p-5">
                <section className="flex items-center justify-between">
                    <div className="p-5 flex items-center gap-4">
                        <button onClick={() => {
                        }} className="font-bold text-lg ml-10">
                            Ajustes de automatizacion
                        </button>
                        <h1>&rarr;</h1>
                        <h1 className="font-bold text-lg">Reportes</h1>
                    </div>
                </section>
                <hr />
                <section className="w-full">
                    {
                        dataAutoReports.map((report) => {
                            return (
                                <article  className="border border-black rounded-lg p-5 mt-5 flex justify-between items-center">
                                    <div>
                                        <div className="flex gap-2">
                                            <h1 className="font-bold">Tipo de reporte : </h1>
                                            <h1 className="font-thin italic">{report.tipoReporte}</h1>
                                        </div>
                                        <div className="flex gap-2">
                                            <h1 className="font-bold">Periodicidad : </h1>
                                            <h1 className="font-thin italic">{report.periodicidad} dias</h1>
                                        </div>
                                        <div className="flex gap-2">
                                            <h1 className="font-bold">Ultima generacion : </h1>
                                            <h1 className="font-thin italic">{report.ultimaGeneracion}</h1>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h1 className="font-bold">
                                                Formatos :
                                            </h1>
                                            <div className="flex gap-3">
                                                {
                                                    report.formato.map((formato)=>{
                                                        if(formato == "PDF"){
                                                            return(
                                                                <img src={pdf_icon} alt="PDF File" title="PDF File" width={23} height={23} />
                                                            )
                                                        }
                                                        if(formato == "Excel"){
                                                            return(
                                                                <img src={excel_icon} alt="Excel File" title="Excel File" width={23} height={23} />
                                                            )
                                                        }
                                                        if(formato == "CSV"){
                                                            return(
                                                                <img src={csv_icon} alt="CSV File"  title="CSV File" width={23} height={23}/>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="border border-black  rounded-lg p-2">Configurar</button>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
                </div>
        </div>
    )   
}