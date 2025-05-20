import { Router } from 'express'
import pool from '../../database/connection.mjs'
const router = Router()
// EndPoint para obtener todos los logs de Reportes de Ventas generados

router.get('/ventas',async (req,res) =>{
    try{
        const result = await pool.query('SELECT * from ventas ORDER BY fecha DESC')
        res.json(result.rows)
    }catch(error){
        console.error('Error al obtener los logs de Reportes de Ventas', error)
        res.status(500).json({error : "Error al obtener los logs de Reportes de Ventas",})
    }
})
// EndPoint para obtener el log por ID de Reportes de Ventas generados
router.get('/ventas/id/:id',async (req,res) =>{
    const {id} = req.params
    try{
        const result = await pool.query('SELECT * from ventas WHERE id =  $1',[id])
        res.json(result.rows)
    }catch(error){
        console.error(`Error al obtener el log de Reportes de Ventas de ID [${id}]`, error)
        res.status(500).json({error : `Error al obtener el log de Reportes de Ventas de ID [${id}]`,})
    }
})
// EndPoint para obtener la cantidad de Resumenes generados en todas las Fechas
router.get('/logs/ventas/cantidades_por_fechas',async (req,res) =>{
    try{
        const result = await pool.query(`SELECT 
                                            TO_CHAR(fecha_generacion::date, 'YYYY-MM-DD') AS fecha,
                                            COUNT(*) AS cantidad
                                        FROM logs_reportes_ventas
                                        GROUP BY fecha
                                        ORDER BY fecha ASC;
        `)
        const parsedRows = result.rows.map(row =>({
            ...row,
            cantidad : Number(row.cantidad)
        }))
        res.json(parsedRows)
    }catch(error){
        console.error(`Error al obtener la cantidad de reportes generados en todas las fechas`, error)
        res.status(500).json({error : `Error al obtener la cantidad de reportes generados en todas las fechas`  })
    }
})
// EndPoint para obtener la cantidad de Resumenes generados en todas las Fechas
router.get('/logs/ventas/cantidades_por_fechas',async (req,res) =>{
    try{
        const result = await pool.query(`SELECT 
                                            TO_CHAR(fecha_generacion::date, 'YYYY-MM-DD') AS fecha,
                                            COUNT(*) AS cantidad
                                        FROM logs_reportes_ventas
                                        GROUP BY fecha
                                        ORDER BY fecha ASC;
        `)
        const parsedRows = result.rows.map(row =>({
            ...row,
            cantidad : Number(row.cantidad)
        }))
        res.json(parsedRows)
    }catch(error){
        console.error(`Error al obtener la cantidad de reportes generados en todas las fechas`, error)
        res.status(500).json({error : `Error al obtener la cantidad de reportes generados en todas las fechas`  })
    }
})
router.get('/ventas/filtrar/anios/:primerAnio/:segundoAnio',async(req,res)=>{
    try {
        const {primerAnio,segundoAnio} = req.params
        const results = await pool.query(`SELECT 
                                            INITCAP(TO_CHAR(fecha,'TMMonth')) AS nombre_mes,
                                            COUNT(*) FILTER (WHERE extract(year from fecha) = $1) AS anio_1,
                                            COUNT(*) FILTER (WHERE extract(year from fecha) = $2) AS anio_2
                                            FROM ventas
                                            WHERE extract(year from fecha) IN ($1, $2)
                                            GROUP BY INITCAP(TO_CHAR(fecha,'TMMonth'))
                                            ORDER BY MIN(EXTRACT(MONTH FROM fecha));
                                            `,[primerAnio,segundoAnio])
        res.json(results.rows)
    } catch (error) {
        res.status(500).json({error : 'Error al tratar de obtener los registros de ventas filtrados por años'})
    }
})
router.get('/ventas/historico', async(req,res) =>{
    try {
        const result = await pool.query(`SELECT TO_CHAR(fecha,'DD-MM-YYYY') AS fecha, COUNT(*) AS cantidad from ventas GROUP BY fecha ORDER BY fecha DESC`)
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({error : "Error al tratar de obtener el historico de Ventas"})
    }
})

export default router