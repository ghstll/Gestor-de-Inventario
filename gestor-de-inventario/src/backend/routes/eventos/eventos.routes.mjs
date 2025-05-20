import { Router } from 'express'
import pool from '../../database/connection.mjs'

const router = Router()



// Obtener los eventos de Ordenes de Compra

router.get('/eventos/ordenes_compra', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT * FROM eventos_orden_compra
        `)
        const formatedResults = result.rows.map((row)=> ({
            
            ...row,
            "fecha_evento" : new Date(row["fecha_evento"]).toLocaleDateString('es-MX',{
                year : 'numeric',
                month : '2-digit',
                day : '2-digit'
            })
        }
            
        ))
        res.json(formatedResults)
    } catch (error) {
        console.error('Error al obtener los eventos de órdenes de compra:', error)
        res.status(500).json({ error: "Error al obtener los eventos de órdenes de compra" })
    }
})

export default router
