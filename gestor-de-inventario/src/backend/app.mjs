import cors from 'cors'
import express from 'express'
import logsRoute from './routes/actividadReciente.mjs'
import confAutoReportes from './routes/confAutoReportes.mjs'
import eventosOrdenesCompra from './routes/eventosOrdenesCompra.mjs'
import productosBajoStockRoute from './routes/prodcuctosBajoStock.mjs'
import ultimosReportes from './routes/ultimosReportes.mjs'
const app = express()
const PORT = 3001

app.use(cors({
    origin : 'http://localhost:5173'
}))
app.use(express.json())



app.use('/api',logsRoute)

app.use('/api',productosBajoStockRoute)

app.use('/api',eventosOrdenesCompra)

app.use('/api',ultimosReportes)

app.use('/api',confAutoReportes)



app.listen(PORT, () =>{
    console.log("Server listening on port : ", PORT)
})