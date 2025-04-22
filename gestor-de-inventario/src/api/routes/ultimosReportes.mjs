import { Router } from 'express'

import pool from '../db/connection.mjs'

const router = Router()


router.get('/ultimosreportes/:tipoReporte',async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM logs_reportes WHERE tipo_de_reporte = $1' , [req.params['tipoReporte']])
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener los ultimos reportes generados del tipo : ', req.params['tipoReporte'], error)
        res.status(500).json({error : "Error al intentar obtener los logs de los reportes",})
    }
})

export default router