interface ventas_comparacion{
    nombre_mes :string
    anio_1 : number
    anio_2 : number
}

interface venta{
    id_venta : string
    fecha : string
    tipo_operacion : string
    metodo_pago : string
    total : number
    observaciones : string
}
interface VentasUltimos7dias{
    fecha : string 
    cantidad : number
}
interface Historico{
    fecha : string
    cantidad : number
}
// Esta funcion tomara dos años y te regresara una tabla con la cantidad de ventas realizadas por meses de esos dos años
export async function getVentasFiltradasPorAnios(primerAnio : string,segundoAnio : string) : Promise<ventas_comparacion[]> {
    try {
        const response = await fetch(`http://localhost:3001/api/ventas/filtrar/anios/${primerAnio}/${segundoAnio}`)
        const data : ventas_comparacion[]= await response.json()
        const fixedData : ventas_comparacion[] = data.map((row) =>({
            nombre_mes : row.nombre_mes,
            anio_1 : Number(row.anio_1),
            anio_2 : Number(row.anio_2)
        }))
        return fixedData
    } catch (error) {
        console.error("Error al hacer Fetch a para obtener las ventas filtradas por año : ",error)
        return []
    }
}
export async function getVentasUltimos7dias() : Promise<VentasUltimos7dias[]>{
    try {
        const result = await fetch("http://localhost:3001/api/ventas/ultimosregistros/semana")
        const data : VentasUltimos7dias[] = await result.json()
        return data
    } catch (error) {
        console.log("Error al intentar obtener las Recepciones de los ultimos 7 dias: ",error)
        return []
    }

}

export async function getHistoricoVentas() : Promise<Historico[]> {
    try {
        const response = await fetch('http://localhost:3001/api/ventas/historico')
        const data : Historico[] = await response.json()
        return data
    } catch (error) {
        console.error("Error al obtener el historico de ventas : ",error )
        return []
    }
}
export async function getAllVentas() : Promise<venta[]> {
    try {
        const response = await fetch(`http://localhost:3001/api/ventas`)
        const data : venta[] = await response.json()
        return data
    } catch (error) {
        console.error("Error al obtener todas las ventas")
        return []
    }
}