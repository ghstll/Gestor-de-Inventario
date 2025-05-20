interface recepcion{
    folio_recepcion : string
    fecha_esperada_entrega : string
    estado : string
    observaciones : string
    cantidad : 50
}

interface RecepcionesCantidadUltimos7dias{
    fecha : string 
    cantidad : number
}
export async function getRecepcionesEsperadasEstaSemana() : Promise<recepcion[]>{
    try {
        const result = await fetch("http://localhost:3001/api/recepciones/esperadas_esta_semana")
        const data : recepcion[]= await result.json()
        return data
    } catch (error) {
        console.log("Error al obtener las Recepciones esperadas esta semana :",error)
        return []
    }
}
export async function getRecepcionesUltimos7dias() : Promise<RecepcionesCantidadUltimos7dias[]>{
    try {
        const result = await fetch("http://localhost:3001/api/recepciones/ultimosregistros/semana")
        const data : RecepcionesCantidadUltimos7dias[] = await result.json()
        return data
    } catch (error) {
        console.log("Error al intentar obtener las Recepciones de los ultimos 7 dias: ",error)
        return []
    }

}