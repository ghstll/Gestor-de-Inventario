import reportesConfData from "../../../data/json_files/conf_auto_reportes.json";




const tiposReportesData = [
              "Analiticos",
              "Resumenes",
              "Ventas",
              "Existencias",
              "Movimientos",
              "Articulos",
              "Articulos a granel",
              "Proveedores",
              "Cambios de precio"
]

export default function GeneracionAutomaticaReportesModal({isOpen, idReportConf, onClose} : {isOpen : boolean , idReportConf : number, onClose : () => void}){
        if(!isOpen){
        return null;
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md relative" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-semibold">Configurar generacion automatica</h1>
                  <form action="" className="flex flex-col gap-4 w-full">
                      <div className="flex gap-2 items-center">
                          <legend className="font-semibold">Tipo de reporte</legend>
                          <select name="reportes" id="hr-select" className="border border-black rounded-md">
                              <option value="">Escoge el tipo de reporte</option>
                              <hr />
                              {
                                  tiposReportesData.map((obj) =>{
                                    if(obj == reportesConfData[idReportConf-1].tipoReporte){
                                      return <option value={obj} selected>{obj}</option>
                                    }else{
                                      return <option value={obj}>{obj}</option>
                                    }
                                  })
                              }
                          </select>
                      </div>
                      <div className="flex gap-2 items-center">
                        <legend className="font-semibold">Periodicidad (Dias)</legend>
                        <input type="number" defaultValue={reportesConfData[idReportConf-1].periodicidad} className="border border-black rounded-md" />
                      </div>
                      <fieldset>
                        <legend className="font-semibold">Formatos</legend>
                        <div className="flex gap-3">
                          <div className="flex gap-3">
                            <input type="checkbox" id="formato-pdf" name="formatos" value={"PDF"}  defaultChecked= {reportesConfData[idReportConf-1].formato.includes("PDF")}/> {/*defaultChecked evalua si la configuracion de la 
                                                                                                                                                                                    configuracion automatica de ese reporte incluye
                                                                                                                                                                                    el formato PDF,Excel,CSV, devolvera un booleano 
                                                                                                                                                                                    false o true dependiendo del resultado*/}
                            <label htmlFor="" id="formato-pdf">PDF</label>
                          </div>
                          <div className="flex gap-3" >
                            <input type="checkbox" id="formato-excel" name="formatos" value={"Excel"}  defaultChecked= {reportesConfData[idReportConf-1].formato.includes("Excel")}/>
                            <label htmlFor="" id="formato-excel">Excel</label>
                          </div>
                          <div className="flex gap-3">
                            <input type="checkbox" id="formato-csv" name="formatos" value={"CSV"}  defaultChecked= {reportesConfData[idReportConf-1].formato.includes("CSV")}/>
                            <label htmlFor="" id="formato-csv">CSV</label>
                          </div>
                        </div>
                      </fieldset>
                  </form>
                </div>
            </div>
      </div>
    )
}