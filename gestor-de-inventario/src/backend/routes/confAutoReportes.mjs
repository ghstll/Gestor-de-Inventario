import { Router } from 'express'

import pool from '../db/connection.mjs'

const router = Router()


router.get('/confautoreportes/analiticos',async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM reportes_config_analiticos ORDER BY creado_en DESC')
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener la configuracion de reportes analiticos automaticos', error)
        res.status(500).json({error : "Error al intentar obtener la configuracion de reportes analiticos automaticos",})
    }
})

export default router