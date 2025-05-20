import { Router } from "express";

import pool from "../../database/connection.mjs";

const router = Router();

// Retorna el id y nombre de los proveedores

router.get("/proveedores/proveedores_id_nombre", async (req, res) => {
    try {
        const result  = await pool.query("SELECT id,nombre FROM proveedores")
        res.json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error al intentar obtener los proveedores",
        });
    }   
});

export default router;
