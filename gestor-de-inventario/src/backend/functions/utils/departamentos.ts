interface departamento{
    id : number
    nombre : string
    descripcion : string
    tipo_departamento : string
    fecha_creacion : string
    activo : boolean
}

interface DepartamentosIdNombre{
    id : string
    nombre : string
}

export async function getDepartamentos() : Promise<departamento[]>{
    try {
        const result = await fetch("http://localhost:3001/api/departamentos")
        const data = await result.json()
        return(data)
    } catch (error) {
        console.error("Error en la funcion getDepartamentos() : ",error)
        return([])
    }
}
export async function getDepartamentosIdNombre() : Promise<DepartamentosIdNombre[]>{
    try {
        const result = await fetch('http://localhost:3001/api/departamentos/departamentos_id_nombre')
        const data : DepartamentosIdNombre[] = await result.json()
        return (data)
    } catch (error) {
        console.error("Error en la funcion getDepartamentosIdNombre() : ",error)
        return([])
    }
}



