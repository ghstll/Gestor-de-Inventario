import csv_icon from "../../../shared/assets/icons/format/csv_icon.png"
import excel_icon from "../../../shared/assets/icons/format/excel_icon.png"
import pdf_icon from "../../../shared/assets/icons/format/pdf_icon.png"

export default function GeneracionAutomaticaReportesCard({tipoReporte,periodicidad,ultimaGeneracion,proximaGeneracion,formatos,openModal, idCard } : {tipoReporte : string, periodicidad : number,ultimaGeneracion : string, proximaGeneracion : string, formatos : string[] , openModal : () => void , idCard : number}){
    


    
    return(
        <article  className="border border-black rounded-lg p-5 mt-5 flex justify-between items-center cursor-pointer hover:bg-gray-100 duration-300" onClick={openModal} id={idCard.toString()}>
        <div>
            <div className="flex gap-2">
                <h1 className="font-bold">Tipo de reporte : </h1>
                <h1 className="font-thin italic">{tipoReporte}</h1>
            </div>
            <div className="flex gap-2">
                <h1 className="font-bold">Periodicidad : </h1>
                <h1 className="font-thin italic">{periodicidad} dias</h1>
            </div>
            <div className="flex gap-2">
                <h1 className="font-bold">Ultima generacion : </h1>
                <h1 className="font-thin italic">{ultimaGeneracion}</h1>
            </div>
            <div className="flex gap-2">
                <h1 className="font-bold">Proxima generacion : </h1>
                <h1 className="font-thin italic">{proximaGeneracion}</h1>
            </div>
            <div className="flex items-center gap-2">
                <h1 className="font-bold">Formatos :</h1>
                <div className="flex gap-3">
                    {
                        formatos.map((formato)=>{
                            if(formato == "PDF"){
                                return(<img src={pdf_icon} alt="PDF File" title="PDF File" width={23} height={23} />)
                            }
                            if(formato == "Excel"){
                                return(<img src={excel_icon} alt="Excel File" title="Excel File" width={23} height={23} />)
                            }
                            if(formato == "CSV"){
                                return(<img src={csv_icon} alt="CSV File"  title="CSV File" width={23} height={23}/>)
                            }
                        })
                    }
                </div>
            </div>
        </div>
        <div>
            <button className="border border-black  rounded-lg p-2" onClick={openModal}>Configurar</button>
        </div>
    </article>
    )
}