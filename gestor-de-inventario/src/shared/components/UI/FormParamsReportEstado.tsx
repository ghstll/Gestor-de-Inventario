export default function FormParamsReportEstado(){
    return(
        <div className="flex gap-5 items-center text-white">
        <h1 className="font-semibold">Estado</h1>
        <select
            name=""
            id=""
            className="border w-4/6 border-white rounded-md p-1 bg-transparent"
        >
            <option value="Pendiente">Pendiente</option>
            <option value="Departamento 2">Estado 2</option>
            
        </select>
    </div>
    )
}