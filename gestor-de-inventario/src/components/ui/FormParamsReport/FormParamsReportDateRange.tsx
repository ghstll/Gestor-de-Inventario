function FormParamsReportDateRange(){
    return(
        <div className="flex gap-5">
           <div className="flex items-center justify-center gap-5">
                <h1 className="font-semibold">Fecha Inicial</h1>
                <input type="date"  className=" border rounded-md p-1 border-gray-700"/>
           </div>
           <h1>-----</h1>
           <div className="flex items-center justify-center gap-5">
                <h1 className="font-semibold">Fecha Final</h1>
                <input type="date" className=" border rounded-md p-1 border-gray-700" />
           </div>
        </div>
    )
}

export default FormParamsReportDateRange