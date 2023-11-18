import express from "express"
import cors from 'cors'

//Importamos la conexión a la base de datos
import db from "./database/db.js"

//Importamos nuestro enrutador
import seguimientosRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/seguimientos', seguimientosRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la db')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

/*app.get('/', (req, res)=> {
    res.send('Hola mundo')
})*/

app.listen(8000, ()=>{
    console.log('Server UP runing in http://localhost:8000/')
})

