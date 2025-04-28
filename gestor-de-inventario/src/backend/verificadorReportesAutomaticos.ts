import pool from './db/connection.mjs';

interface resultColumns {
    id : Number;
    nombre : String;
    operacion : String;
    fecha_inicial : Date;
    fecha_final : Date
    periodicidad_dias : Number
    activo : Boolean
    formatos_salida : String[]
    destinatarios : String[]
    creado_en : Date
    actualizado_en: Date
}


export default  function verificador(){
    setInterval(async () =>{
        try {
            const result = await pool.query("SELECT * FROM reportes_config_analiticos")
            console.log(result.rows[0])
        } catch (error) {
            console.error("Error al obtener los datos : ",error)
        }
    },5000)
}



const verificarFechas = (obj : resultColumns) =>{
    
}