import app from './app.js'
import {PORT , DB_DATABASE} from './config.js'
import {sequelize} from './database/database.js'
import './models/Project.js'
import './models/Task.js'

async function server() {
    try {
        await sequelize.sync({force : false})
        app.listen(PORT)
        console.log('DB conectada -> ',DB_DATABASE ,'| servidor corriendo en el puerto ', PORT)
    } catch (error) {
        console.error('Error al connectar a la base de datos')
    }
}

server()