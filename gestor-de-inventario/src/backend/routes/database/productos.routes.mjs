import { Router } from "express";

import pool from "../../database/connection.mjs";

const router = Router();

router.get("/productos", async (req, res) => {
    try {
        const result = await pool.query("SELECT * from productos")
        res.json(result.rows)
    } catch (error) {
        console.error("Hubo un error al intentar obtener todos los productos : ",error)
        res.status(500).json({error : "Error al tratar de obtener todos los productos"})
    }   
});

router.get("/productos/id/:id", async (req, res) => {
    const {id} = req.params
    try {
        const result = await pool.query("SELECT * from productos WHERE id = $1",[id])
        res.json(result.rows)
    } catch (error) {
        console.error(`Hubo un error al intentar obtener el producto con ID [${id}] : `,error)
        res.status(500).json({error : `Hubo un error al intentar obtener el producto con ID [${id}] : `})
    }           
});

// ENDPOINT PARA OBTENER LOS PRODUCTOS CON BAJO STOCK AGRUPADOS POR DEPARTAMENTOS
router.get("/productos/bajostock/group_by_departamento",async(req,res) =>{
    try {       
        const results = await pool.query(`SELECT d.nombre AS departamento , json_agg(json_build_object('nombre',p.nombre,'cantidad',p.cantidad)) AS productos 
                                        FROM productos p 
                                        JOIN departamentos d ON p.id_departamento = d.id 
                                        WHERE p.cantidad <= p.cantidad_critica 
                                        GROUP BY d.nombre;`)
        res.json(results.rows)
    } catch (error) {
        console.error("Hubo un error al intentar obtener los productos con bajo stock agrupados por departamentos : ",error)
        res.status(500).json({error : "Hubo un error al intentar obtener los productos con bajo stock agrupados por departamentos"})
    }
})

export default router;
