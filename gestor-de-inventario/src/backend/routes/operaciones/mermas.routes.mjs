import { Router } from 'express'
import pool from '../../database/connection.mjs'

const router = Router()



// Este EndPoint obtendra la cantidad de Mermas que se crearon en cada fecha (Toma en cuenta todo el historial de la tabla Mermas)


router.get("/mermas/cantidad_por_fechas", async (req, res) => {
    try {
        const result = await pool.query(`SELECT fecha_creacion::date AS "Fecha",COUNT(*) AS "Cantidad"
                                            FROM mermas GROUP BY fecha_creacion::date
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
        console.error("Error al obtener la cantidad de Mermas por fechas:  ", error)
        res.status(500).json({ error: "Error al obtener la cantidad de Mermas por fechas" })
    }
})

export default router