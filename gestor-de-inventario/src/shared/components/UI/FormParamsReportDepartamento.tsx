import { useEffect, useState } from "react";
import { getDepartamentosIdNombre } from "../../../backend/functions/utils/departamentos";

interface DepartamentosIdNombre{
    id : string
    nombre : string
}
export default function FormParamsReportDepartamento() {

    const [departamentos,setDepartamentos] = useState<DepartamentosIdNombre[]>([])
    useEffect(() =>{
        const fetchDepartamentos = async () =>{
            setDepartamentos(await getDepartamentosIdNombre())
        };fetchDepartamentos()
    },[])
    return (
        <div className="flex gap-5 items-center text-white">
            <h1 className="font-semibold">Departamento</h1>
            <select
                name="select_departamento"
                id="select_departamento"
                className="border w-4/6 border-white rounded-md p-1 bg-transparent"
            >
                {
                    departamentos.map((departamento)=>{
                        return(
                            <option value={departamento.id}>{departamento.nombre}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}
