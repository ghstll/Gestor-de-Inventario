import { Router } from 'express'
import pool from '../../database/connection.mjs'

const router = Router()



// Obtiene la cantidad de registros que hay por cada Operacion ---> Ordenes de Compra,Devoluciones,Siniestros,Mermas,Trasnferencias,Recepciones

router.get('/operaciones_cantidades', async (req, res) => {
    try {
        const result = await pool.query(`
           SELECT 'Órdenes de Compra' AS operacion, COUNT(*) AS cantidad FROM ordenes_compra
                UNION ALL
                SELECT 'Recepciones', COUNT(*) FROM recepciones
                UNION ALL
                SELECT 'Devoluciones', COUNT(*) FROM devoluciones
                UNION ALL
                SELECT 'Mermas', COUNT(*) FROM mermas
                UNION ALL
                SELECT 'Siniestros', COUNT(*) FROM siniestros
                UNION ALL
                SELECT 'Transferencias', COUNT(*) FROM transferencias;
        `)
        res.json(result.rows)
    } catch (error) {
        console.error('Error al obtener la cantidad de registro de todas las Operaciones por fecha:', error)
        res.status(500).json({ error: "Error al obtener la cantidad de registro de todas las Operaciones por fecha" })
    }
})

export default router