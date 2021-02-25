const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, "pone tu nombre, que flasheas misterio"]
    },
    correo: {
        type: String,
        required: [true, "Seguro que tenes algo con estrellita@ que no queres ponerlo"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Te pido por favor la contra..."]
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ["ADMIN_ROLE", "USER_ROLE"]
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },

});

module.exports = model("Usuario", UsuarioSchema);