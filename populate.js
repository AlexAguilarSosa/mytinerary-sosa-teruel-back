require('dotenv').config()
const db = require('./config/database') // importamos la conexion a la base de datos
const City = require('./models/City') //importamos los modelos que necesito para las operaciones

City.create({
    city: '',
    country: '',
    photo: '',
    population: '',
    foundation: ''
})