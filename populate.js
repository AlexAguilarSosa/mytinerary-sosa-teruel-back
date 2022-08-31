require('dotenv').config()
const DataBase = require('./config/database') // importamos la conexion a la base de datos
const City = require('./models/City') //importamos los modelos que necesito para las operaciones

City.create({
    city: "Mendoza",
    country: "Argentina",
    photo: "http://localhost:4000",
    population: "1000000",
    foundation: "1850",
    currency: "ARS",
    highseason: "March-August"
})