import { useEffect, useState } from "react";
import { getProveedoresIdNombre } from "../../../backend/routes/api/functions/utils/proveedores";
interface ProveedoresIdNombre{
    id : string
    nombre : string
}
export default function ProveedoresSelect() {
    const [proveedores,setProveedores] = useState<ProveedoresIdNombre[]>([])
    useEffect(() =>{
        const fetchData = async () =>{
            setProveedores(await getProveedoresIdNombre())
        };fetchData()
    },[])
    return (
        <div className="flex gap-5 items-center text-white">
            <h1 className="font-semibold">Proveedor</h1>
            <select name="select_proveedores" id="select_proveedores" className="bg-[#3e4051] rounded-md w-full">
                {
                    proveedores.map((proveedor) =>{
                        return(
                            <option value={proveedor.id}>{proveedor.nombre}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}
