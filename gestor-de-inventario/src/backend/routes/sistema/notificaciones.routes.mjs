import { Router } from 'express'

import pool from '../../database/connection.mjs'

const router = Router()


router.get('/notificaciones',async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM notificaciones ORDER BY fecha DESC')
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener las notificaciones ', error)
        res.status(500).json({error : "Error al intentar obtener las notificaciones",})
    }
})

export default router