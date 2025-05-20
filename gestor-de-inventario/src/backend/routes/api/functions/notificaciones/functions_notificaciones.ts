export async function getAllNotificaciones(){
    try {
        const response = await fetch("http://localhost:3001/api/notificaciones")
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error al intentar obtener las notificaciones : ",error)
        return []
    }
}