export async function getAllEventsOrdenesCompra(){
    try {
        const response = await fetch("http://localhost:3001/api/eventos/ordenes_compra")
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error al hacer fetch a los eventos de ordenes de compra: ",error)
        return []
    }
}

