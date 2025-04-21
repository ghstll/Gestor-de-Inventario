import { Router } from 'express'

import pool from '../db/connection.mjs'

const router = Router()


router.get('/eventos/ordenesCompra',async (req,res) =>{
    try{
        const result = await pool.query("SELECT fecha, json_agg(row_to_json(e)) AS eventos FROM (SELECT fecha, titulo, descripcion, proveedor, nota, tipo, creado_en FROM eventos WHERE area = 'Ordenes de compra') e GROUP BY fecha ORDER BY fecha;")
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener los eventos relacionados a las Ordenes de compra : ', error)
        res.status(500).json({error : "Error al obtener los eventos relacionados a las Ordenes de compra"})
    }
})

export default router