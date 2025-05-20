import { Router } from 'express'

import pool from '../../../database/connection.mjs'

const router = Router()


router.post('/configreportes/analiticos/update/fechas',async (req,res) =>{


    const {id,fecha_inicial,fecha_final} = req.body
    if(!id || !fecha_inicial || !fecha_final){
        return res.status(400).json({error : "El body debe contener 'id', 'fecha_inicial','fecha_final'"})
    }

    try{
        const result = await pool.query(
            'UPDATE reportes_config_analiticos SET fecha_inicial = $1, fecha_final = $2 WHERE id = $3',
            [fecha_inicial, fecha_final, id] // Pasar los valores al query
        );        
        res.json({message : "Fechas de la configuracion actualizadas correctamente"})
    }catch(error){
        console.error('Error al actualizar las fechas de la configuracion : ', error)
        res.status(500).json({error : "Error al actualizar las fechas de la configuracion"})
    }
})

export default router