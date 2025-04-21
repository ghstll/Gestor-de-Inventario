import cors from 'cors'
import express from 'express'
import logsRoute from './routes/actividadReciente.mjs'
import eventosOrdenesCompra from './routes/eventosOrdenesCompra.mjs'
import productosBajoStockRoute from './routes/prodcuctosBajoStock.mjs'
const app = express()
const PORT = 3001

app.use(cors({
    origin : 'http://localhost:5173'
}))
app.use(express.json())



app.use('/api',logsRoute)

app.use('/api',productosBajoStockRoute)

app.use('/api',eventosOrdenesCompra)

app.listen(PORT, () =>{
    console.log("API listening on port : ", PORT)

    
})

