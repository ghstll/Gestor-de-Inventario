import { Router } from 'express'
import pool from '../../database/connection.mjs'

const router = Router()



// Obtener todas las ordenes de compra


router.get('/recepciones/pendientes',async (req,res) =>{
    try {
        const result = await pool.query(`SELECT * from recepciones`)
    } catch (error) {
    }
} )

router.get('/recepciones', async (req, res) => {

    try {
        const result = await pool.query(`
            SELECT * FROM recepciones
        `)
        res.json(result.rows)
    } catch (error) {
        console.error('Error al obtener las recepciones:', error)
        res.status(500).json({ error: "Error al obtener las recepciones" })
    }
})
router.get('/recepciones/esperadas_esta_semana',async (req,res) =>{
    try{
        const result = await pool.query(`SELECT 
                                            re.id as folio_recepcion,
                                            re.fecha_esperada_entrega,
                                            re.estado,
                                            oc.observaciones,
                                            oc.cantidad 
                                            FROM recepciones re 
                                            JOIN ordenes_compra oc 
                                            ON re.orden_compra_id = oc.id 
                                            WHERE re.fecha_esperada_entrega >= date_trunc('week',now());`)
        
        const formatedData = result.rows.map((row )=> ({
            ...row,
            fecha_esperada_entrega : new Date(row.fecha_esperada_entrega).toLocaleDateString('es-MX')
        }
        ))
        res.json(formatedData)
    } catch (error) {
        res.status(500).json({error : "Error al tratar de obtener las Recepciones que se esperan para esta Semana"})        
    }
})
router.get('/recepciones/ultimosregistros/semana',async(req,res) =>{
    try {
        const result = await pool.query(`SELECT TO_CHAR(fecha_creacion,'DD-MM-YYYY') as fecha, 
                                        CAST(COUNT(*) AS int) AS cantidad 
                                        from recepciones 
                                        WHERE fecha_creacion >= CURRENT_DATE - INTERVAL '7 days' 
                                        GROUP BY fecha_creacion LIMIT 20`)
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({error : "Error al obtener las Recepciones de los ultimos 7 dias"})
    }
})
export default router
