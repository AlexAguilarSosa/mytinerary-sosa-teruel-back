const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_DATABASE, {
        useUnifiedTopology: true, //habilita a mongoose a controlar ld db de mongo
        useNewUrlParser: true //utiliza el analizador de errores de mongoose en lugar del de mongo
    }
    //primer parametro: link de conexion
    //segundo parametro: obejto con dos propiedades true
    )
    .then(() => console.log('conected to database succesfully')) //luego de que se cumple la promesa, aviso al desarrollador que esta conectado
    .catch(error=>console.log(error)) //si no se pudo conectar, consologueo el error

    //una vez configurada la conexion, requiero esta configuracion en app.js