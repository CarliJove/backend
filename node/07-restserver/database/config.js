const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("FUNCIONAAAAA");
    } catch (error) {
        console.log(error);
        throw new Error('Error, esto no quiere levantar, peor que vos cuando te suena la alarma el lunes');
    }
}

module.exports = {
    dbConnection
}