import { Router } from 'express'
import pool from '../../database/connection.mjs'

const router = Router()



// Obtener todas las ordenes de compra

router.get('/ordenescompra', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                oc.id,
                oc.proveedor_id,
                p.nombre AS proveedor_nombre,
                oc.fecha_creacion,
                oc.estado,
                oc.observaciones,
                oc.productos_ids,
                oc.subtotal,
                oc.iva,
                oc.ieps,
                oc.total
            FROM ordenes_compra oc
            JOIN proveedores p ON oc.proveedor_id = p.id
        `)

        res.json(result.rows)
    } catch (error) {
        console.error('Error al obtener las órdenes de compra:', error)
        res.status(500).json({ error: "Error al obtener las órdenes de compra" })
    }
})

    // Obtener la cantidad de Ordenes de compras de todas las fechas
    router.get("/ordenescompra/cantidad_por_fechas", async (req, res) => {
        try {
            const result = await pool.query(`SELECT fecha_creacion::date AS "Fecha",COUNT(*) AS "Cantidad"
                                                FROM ordenes_compra GROUP BY fecha_creacion::date
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
            console.error("Error al obtener la cantidad de Ordenes de Compra por fechas:  ", error)
            res.status(500).json({ error: "Error al obtener la cantidad de Ordenes de Compra por fechas" })
        }
    })

    

    // Obtener Ordenes de Compra por ID
    router.get('/ordenescompra/detalles/:id', async (req, res) => {
        const { id } = req.params
        try {   
            const result = await pool.query(`
                SELECT 
                    oc.id,
                    oc.proveedor_id,
                    p.nombre AS proveedor_nombre,
                    oc.fecha_creacion,
                    oc.estado,
                    oc.observaciones,
                    oc.productos_ids,
                    oc.subtotal,    
                    oc.iva,
                    oc.ieps,
                    oc.total
                FROM ordenes_compra oc
                JOIN proveedores p ON oc.proveedor_id = p.id
                WHERE oc.id = $1
            `, [id])
            if (result.rows.length === 0) {
                return res.status(404).json({ error: "Orden de compra no encontrada" })
            }
            res.json(result.rows)
        } catch (error) {
            console.error(`Error al obtener la orden de compra de ID : ${id} ->`, error)
            res.status(500).json({ error: `Error al obtener la orden de compra ed ID : ${id} ->` })
        }
    })


    router.get('/ordenescompra/rango/:fecha_inicial/:fecha_final', async (req, res) => {
        const { fecha_inicial, fecha_final } = req.params
        try {
            const result = await pool.query(`
                SELECT 
                    oc.id AS "ID",
                    oc.proveedor_id AS "ID Proveedor",
                    p.nombre AS "Nombre de Proveedor",
                    oc.fecha_creacion AS "Fecha de Creacion",
                    oc.estado AS "Estado",
                    oc.subtotal AS "Subtotal",
                    oc.iva AS "IVA",
                    oc.ieps AS "IEPS",
                    oc.total AS "Total"
                FROM ordenes_compra oc
                JOIN proveedores p ON oc.proveedor_id = p.id
                WHERE oc.fecha_creacion >= $1 AND oc.fecha_creacion < ($2::date + INTERVAL '1 day')
            `, [fecha_inicial, fecha_final])

            // Formatear la fecha para que sea más legible
            const formattedRows = result.rows.map(row => ({
                ...row,
                "Fecha de Creacion": new Date(row["Fecha de Creacion"]).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })
            })) 

            res.json(formattedRows)
        } catch (error) {
            console.error('Error al obtener las órdenes de compra:', error)
            res.status(500).json({ error: "Error al obtener las órdenes de compra" })
        }
    })
router.get('/ordenescompra/cantidad/anio/:anio',async (req,res) =>{
    const {anio} = req.params
    try {
        const result = await pool.query(`
                                            SELECT INITCAP(TO_CHAR(fecha_creacion,'TMMonth')) AS nombre_mes,
                                            CAST(COUNT(*) FILTER (WHERE extract(year from fecha_creacion) = $1) AS INT ) AS Ordenes
                                            FROM ordenes_compra
                                            WHERE extract(year from fecha_creacion) = $1
                                            GROUP BY INITCAP(TO_CHAR(fecha_creacion,'TMMonth'))
                                            ORDER BY MIN(EXTRACT(MONTH FROM fecha_creacion));`,[anio])
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.json({error : "Ocurrio un error al obtener la cantidad de Ordenes de Compra realizadas en el año : ",anio})
    }
})
export default router