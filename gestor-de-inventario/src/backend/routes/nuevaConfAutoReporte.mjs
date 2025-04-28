import { Router } from "express";

import pool from "../db/connection.mjs";

const router = Router();

router.post("/confautoreportes/agregarconf", async (req, res) => {
    const {
        nombre,
        operacion,
        fecha_inicial,
        fecha_final,
        periodicidad_dias,
        activo,
        formatos_salida,
        destinatarios,
        creado_en,
        actualizado_en,
    } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO reportes_config_analiticos (nombre,operacion,fecha_inicial,fecha_final,periodicidad_dias,activo,formatos_salida,destinatarios,creado_en,actualizado_en) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
            [
                nombre,
                operacion,
                fecha_inicial,
                fecha_final,
                periodicidad_dias,
                activo,
                formatos_salida,
                destinatarios,
                creado_en,
                actualizado_en,
            ]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(
            "Error al intentar insertar la configuracion de reportes analiticos automaticos",
            error
        );
        res.status(500).json({
            error: "Error al intentar insertar la configuracion de reportes analiticos automaticos",
        });
    }
});

export default router;
