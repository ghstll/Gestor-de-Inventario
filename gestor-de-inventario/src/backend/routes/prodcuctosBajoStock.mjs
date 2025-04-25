import { Router } from 'express'

import pool from '../db/connection.mjs'

const router = Router()


router.get('/productosbajostock',async (req,res) =>{
    try{
        const result = await pool.query('SELECT nombre,cantidad FROM productos ORDER BY cantidad LIMIT 20')
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener productos con bajo stock : ', error)
        res.status(500).json({error : "Error al obtener los productos con bajo stock"})
    }
})

export default router