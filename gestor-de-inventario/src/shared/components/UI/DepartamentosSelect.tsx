import { useEffect, useState } from "react";
import { getDepartamentosIdNombre } from "../../../backend/functions/utils/departamentos";

interface DepartamentosIdNombre{
    id : string
    nombre : string
}
export default function DepartamentosSelect() {

    const [departamentos,setDepartamentos] = useState<DepartamentosIdNombre[]>([])
    useEffect(() =>{
        const fetchDepartamentos = async () =>{
            const data = await getDepartamentosIdNombre()
            setDepartamentos(data)
            console.log("seteado")
        };fetchDepartamentos()
    },[])
    console.log(departamentos)
    return (
        <div className="flex gap-5 items-center text-white">
            <h1 className="font-semibold">Departamento</h1>
            <select
                name="select_departamento"
                id="select_departamento"
                className="bg-[#3e4051] rounded-md w-full">
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
