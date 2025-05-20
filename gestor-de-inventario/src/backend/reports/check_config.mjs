import { Router } from 'express'


const router = Router()


const tablesQuerys = [
    {
        config_name : "reportes_analiticos",
        request_url : "http://localhost:3001/api/configreportes/analiticos"
    }
]


const UPDATE_URLS_ENDPOINTS = [
    {
        config_name : "reportes_analiticos",
        url : "http://localhost:3001/api/configreportes/analiticos/update/fechas"
    }
]


async function check_table_configs(data,config_name){
    const todayDate = new Date()
    todayDate.setHours(0,0,0,0)
    const endpoint = UPDATE_URLS_ENDPOINTS.find(endpoint => endpoint.config_name === config_name )
    for(const row of data){
        const fechaFinal = new Date(row.fecha_final)
        if(fechaFinal.getTime() <= todayDate.getTime()){
            console.log("Se encontro una config para actualizar , ID : ",row.id)
            const nuevaFechaInicial = new Date()
            const nuevaFechaFinal = new Date()
            nuevaFechaFinal.setDate(nuevaFechaFinal.getDate() + row.periodicidad_dias)
            try {
                const response = await fetch(endpoint.url,{
                    method : "POST",
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                        id : row.id,
                        fecha_inicial : nuevaFechaInicial.toISOString(),
                        fecha_final : nuevaFechaFinal.toISOString()
                        
                    })
                })
                if(!response.ok){
                    console.error("Error al actualizar las fechas para la config : ",row.id)

                }else{
                    console.log(`Fechas actualizadas correctamente para la config : `,row.id)
                }
            } catch (error) {
                
            }
        }
    }
}

async function check_config(){
    for(const item of tablesQuerys){
        try{
            const response = await fetch(item.request_url)
            const data = await response.json()
            await check_table_configs(data,item.config_name)
        }catch(error){
            console.log(error)  

        }
    }
}





check_config()