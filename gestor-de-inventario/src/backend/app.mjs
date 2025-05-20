import cors from 'cors'
import express from 'express'
import operaciones_cantidades from './routes/utils/operaciones_cantidades.mjs'


// RUTAS PARA LAS OPERACIONES 
import devolucionesRoutes from './routes/operaciones/devoluciones.routes.mjs'
import mermasRoutes from './routes/operaciones/mermas.routes.mjs'
import ordenescompraRoutes from './routes/operaciones/ordenescompra.routes.mjs'
import recepcionesRoutes from './routes/operaciones/recepciones.routes.mjs'
import siniestrosRoutes from './routes/operaciones/siniestros.routes.mjs'
import transferenciasRoutes from './routes/operaciones/transferencias.routes.mjs'


// ROUTES PARA LOS REPORTES
import reportes_ventas from './routes/reportes/ventas.routes.mjs'

// ROUTES -- SISTEMA
import notificaciones from './routes/sistema/notificaciones.routes.mjs'

//ROUTES PARA LOS LOGS DE REPORTES (ANALITICOS , RESUMENES,VENTAS)
import reportesAnaliticosLogs from './routes/logs/reportes_analiticos_logs.routes.mjs'
import reportes_ventas_logs from './routes/logs/reportes_ventas_logs.routes.mjs'
import resumenes_logs from './routes/logs/resumenes_logs.routes.mjs'


// ROUTES -- > EVENTOS

import eventosRoutes from './routes/eventos/eventos.routes.mjs'

//ROUTES UTILS 
import operacionesCantidadesFecha from './routes/utils/operaciones_cantidades_fecha.mjs'


// ROUTES -- > DATABASE 
import departamentosRoutes from './routes/database/departamentos.routes.mjs'
import productosRoutes from './routes/database/productos.routes.mjs'
import proveedoresRoutes from './routes/database/proveedores.routes.mjs'


const app = express()
const PORT = 3001

app.use(cors({
    origin : 'http://localhost:5173'
}))
app.use(express.json())




app.use('/api',operaciones_cantidades)

// ROUTES PARA LOGS
app.use('/api',resumenes_logs)
app.use('/api',reportes_ventas_logs)
app.use('/api',reportesAnaliticosLogs)

// SISTEMA
app.use('/api',notificaciones)

// EVENTOS ROUTER 

app.use('/api',eventosRoutes)


// Rutas para las operaciones
app.use('/api', devolucionesRoutes)
app.use('/api', mermasRoutes)
app.use('/api', ordenescompraRoutes)
app.use('/api', recepcionesRoutes)
app.use('/api', siniestrosRoutes)
app.use('/api', transferenciasRoutes)

//ROUTES PARA REPORTES
app.use('/api',reportes_ventas)


//Rutas UTILS
app.use('/api',operacionesCantidadesFecha)

// RUTAS DATABASE
app.use('/api',productosRoutes)
app.use('/api',departamentosRoutes)
app.use('/api',proveedoresRoutes)
// verificador()
app.listen(PORT, () =>{
    console.log("Server listening on port : ", PORT)
})