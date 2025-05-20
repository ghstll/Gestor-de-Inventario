


import { Router } from 'express'
import pool from '../../database/connection.mjs'

const router = Router()



// Obtiene la cantidad de registros que hay por cada Operacion ---> Ordenes de Compra,Devoluciones,Siniestros,Mermas,Trasnferencias,Recepciones

router.get('/operaciones_cantidades_fecha', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                "Operacion", 
                jsonb_agg(
                jsonb_build_object('Fecha', "Fecha", 'Cantidad', "Cantidad")
                ORDER BY "Fecha" ASC
                ) AS operacion_detalles
            FROM (
                SELECT 'Ordenes de Compra' AS "Operacion", fecha_creacion AS "Fecha", COUNT(*) AS "Cantidad" FROM ordenes_compra GROUP BY fecha_creacion
                UNION ALL
                SELECT 'Devoluciones' AS "Operacion", fecha_devolucion AS "Fecha", COUNT(*) AS "Cantidad" FROM devoluciones GROUP BY fecha_devolucion
                UNION ALL
                SELECT 'Mermas' AS "Operacion", fecha AS "Fecha", COUNT(*) AS "Cantidad" FROM mermas GROUP BY fecha
                UNION ALL
                SELECT 'Siniestros' AS "Operacion", fecha AS "Fecha", COUNT(*) AS "Cantidad" FROM siniestros GROUP BY fecha
                UNION ALL
                SELECT 'Recepciones' AS "Operacion", fecha AS "Fecha", COUNT(*) AS "Cantidad" FROM recepciones GROUP BY fecha
            ) AS operaciones
            GROUP BY "Operacion";
            `)





        const formatedRows = result.rows.map((row) => ({
            ...row,
            operacion_detalles: row.operacion_detalles.map(detalle => ({
                ...detalle,
                Fecha: new Date(detalle.Fecha).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })
            }))
        }))
        res.json(formatedRows)
    } catch (error) {
        console.error('Error al obtener la cantidad de registro de todas las Operaciones por cada fecha:', error)
        res.status(500).json({ error: "Error al obtener la cantidad de registro de todas las Operaciones por cada fecha" })
    }
})

export default router