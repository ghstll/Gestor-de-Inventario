import { Router } from 'express'

import pool from '../../database/connection.mjs'

const router = Router()

// EndPoint para generar pdfs - analiticos

router.get('/generar-pdf/analitico',async (req,res) =>{
    try{
        const result = await pool.query('SELECT * from ventas ORDER BY fecha_generacion DESC')
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener los logs de Reportes de Ventas', error)
        res.status(500).json({error : "Error al obtener los logs de Reportes de Ventas",})
    }
})



export default router