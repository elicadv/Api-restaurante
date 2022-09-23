import express from 'express'
import hotelRestaurante from './controller/restaurante_controller.js'


const app = express()
const port = 3009

app.use(express.json())

hotelRestaurante(app)

app.listen (port, () => {
    console.log(`http://localhost:${port}/`)
})

export default app