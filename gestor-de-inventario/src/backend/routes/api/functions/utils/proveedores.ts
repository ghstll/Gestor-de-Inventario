interface getProveedoresIdNombre{
    id : string
    nombre : string
}

export async function getProveedoresIdNombre() : Promise<getProveedoresIdNombre[]>{
    try {
        const result = await fetch("http://localhost:3001/api/proveedores/proveedores_id_nombre")
        const data : getProveedoresIdNombre[] = await result.json()
        return data
    } catch (error) {
        console.log("Error al obtener el ID y Nombre de todos los proveedores : ",error)
        return []
    }
}