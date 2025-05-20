interface CantidadDeOrdenesDeCompraPorAñoStructure{
    nombre_mes : string
    ordenes : number
}
export async function getCantidadOrdenesDeCompraPorAño(anio : string) : Promise<CantidadDeOrdenesDeCompraPorAñoStructure[]>{
    try {
        const result = await fetch(`http://localhost:3001/api/ordenescompra/cantidad/anio/${anio}`)
        const data : CantidadDeOrdenesDeCompraPorAñoStructure[]= await result.json()
        return data
    } catch (error) {
        console.log(`Error al hacer Fetch para obtener la cantidad de Ordenes de Compra del año : ${anio},`,error)
        return []
    }
}   