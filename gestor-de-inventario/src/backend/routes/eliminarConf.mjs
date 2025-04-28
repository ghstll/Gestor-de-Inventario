import { Router } from 'express'

import pool from '../db/connection.mjs'

const router = Router()


router.delete('/confautoreportes/eliminarconf',async (req,res) =>{
    const {
        id
    } = req.body
    try{
        const result = await pool.query('DELETE FROM reportes_config_analiticos WHERE id = $1',
            [id]
        )
        res.json({ message: 'Configuración eliminada correctamente', data: result.rows });
    }catch(error){
        console.error('Error al eliminar la configuracion: ', error)
        res.status(500).json({
            error: 'Error al desactivar la configuración de reporte automática',
            details: error.message, // Detalles del mensaje de error
            stack: error.stack,      // Pila de errores (stack trace) para depuración más detallada
            code: error.code,       // Código de error (si está disponible)
            severity: error.severity // Severidad del error (si está disponible)
        });
    }
})

export default router