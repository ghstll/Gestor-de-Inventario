import { Router } from 'express'
import pool from '../../database/connection.mjs'

const router = Router()



// Obtener todas las ordenes de compra

router.get('/devoluciones', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT * FROM devoluciones
        `)

        res.json(result.rows)
    } catch (error) {
        console.error('Error al obtener las devoluciones:', error)
        res.status(500).json({ error: "Error al obtener las devoluciones" })
    }
})



// Este EndPoint obtendra la cantidad de devoluciones que se crearon en cada fecha (Toma en cuenta todo el historial de la tabla Devoluciones)

router.get("/devoluciones/cantidad_por_fechas", async (req, res) => {
    try {
        const result = await pool.query(`SELECT fecha_creacion::date AS "Fecha",COUNT(*) AS "Cantidad"
                                            FROM devoluciones GROUP BY fecha_creacion::date
                                            ORDER BY "Fecha" DESC
                `)
        const formatedRows = result.rows.map((row) =>({
            ...row,
            "Fecha" : new Date(row["Fecha"]).toLocaleDateString('es-MX', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            })
        }))
        res.json(formatedRows)
    } catch (error) {
        console.error("Error al obtener la cantidad de Devoluciones por fechas:  ", error)
        res.status(500).json({ error: "Error al obtener la cantidad de Devoluciones por fechas" })
    }
})



// Obtener Ordenes de Compra por ID
router.get('/devoluciones/:id', async (req, res) => {
    const { id } = req.params
    if (!id) {  
        return res.status(400).json({ error: "Falta el ID en el body" })
    }
    try {   
        const result = await pool.query(`
            SELECT * FROM devoluciones WHERE id = $1
        `, [id])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Devolucion no encontrada" })
        }
        res.json(result.rows[0])
    } catch (error) {
        console.error(`Error al obtener la devolucion de ID -> ${id}  : `, error)
        res.status(500).json({ error: `Error al obtener la devolucion de ID : ${id}` })
    }
})
export default router