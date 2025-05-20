export default async function getHistorialCantidadOperacionesPorFecha(){ //Esta funcion obtendra la cantidad de veces que se realizo una operacion por fechas (Por todas las operaciones)
    try {
        const response = await fetch("http://localhost:3001/api/operaciones_cantidades_fecha")
        const data = await response.json()
        return(data)
    } catch (error) {
        console.log("No se pudo obtener las cantidades por fecha de las Operaciones")
    }
}