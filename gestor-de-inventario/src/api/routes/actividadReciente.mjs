import { Router } from 'express'

import pool from '../db/connection.mjs'

const router = Router()


router.get('/actividadreciente',async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM logs limit 10')
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener logs : ', error)
        res.status(500).json({error : "Error al obtener logs"})
    }
})

export default router