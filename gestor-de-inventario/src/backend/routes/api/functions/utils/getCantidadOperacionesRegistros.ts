export async function getCantidadOperacionesRegistros(){
   try {
        const response = await fetch("http://localhost:3001/api/operaciones_cantidades")
        const data = await response.json()
        return(data)
   } catch (error) {
        console.error("No se pudo obtener la cantidad de registros de las Operaciones")
   }
}