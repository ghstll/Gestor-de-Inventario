import { Router } from "express";

import pool from "../../database/connection.mjs";

const router = Router();

router.get("/departamentos", async (req, res) => {
    try {
        const result  = await pool.query("SELECT * FROM departamentos")
        res.json(result.rows)
    } catch (error) {
        console.error(
            "Error al intentar obtener los departamentos",
            error
        );
        res.status(500).json({
            error: "Error al intentar obtener los departamentos",
        });
    }   
});

router.get("/departamentos/departamentos_id_nombre", async (req, res) => {
    try {
        const result  = await pool.query("SELECT id,nombre FROM departamentos")
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar obtener los ID y Nombres de los departamentos",
        });
    }   
});


export default router;
