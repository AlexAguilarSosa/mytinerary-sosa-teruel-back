require('dotenv').config()
const DataBase = require('./config/database') // importamos la conexion a la base de datos
const City = require('./models/City') //importamos los modelos que necesito para las operaciones

City.create({
    city: "Mendoza",
    country: "Argentina",
    photo: "/img/mendoza.jpg",
    population: "1075737",
    foundation: "1561",
    currency: "ARS",
    highseason: "December-March/May-August"
})