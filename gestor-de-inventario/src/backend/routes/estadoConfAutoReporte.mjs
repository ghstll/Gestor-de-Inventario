import { Router } from 'express'

import pool from '../db/connection.mjs'

const router = Router()


router.post('/confautoreportes/estadoconf',async (req,res) =>{
    const {
        activo,
        id
    } = req.body
    try{
        const result = await pool.query('UPDATE reportes_config_analiticos SET activo = $1 WHERE id = $2',
            [activo,
            id]
        )
        res.json({ message: 'Estado de la Configuración cambiado correctamente', data: result.rows });
    }catch(error){
        console.error('Error al cambiar el Estado de la configuracion: ', error)
        res.status(500).json({
            error: 'Error al cambiar el Estado de la configuración de reporte automática',
            details: error.message, // Detalles del mensaje de error
            stack: error.stack,      // Pila de errores (stack trace) para depuración más detallada
            code: error.code,       // Código de error (si está disponible)
            severity: error.severity // Severidad del error (si está disponible)
        });
    }
})

export default router