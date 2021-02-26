const Role = require('../models/role');
const Usuario = require('../models/usuario');


const roleValido = async (rol = "") => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol) {
         throw new Error(`el rol ${rol} no esta registrado en la DB, como tu sabes que mas no esta registrado en tu vida`)
    }
}

const emailExiste = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        throw new Error (`mmmm ese correo (${correo}) ya esta registrado`);
    }
}

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error (`mmmm ese id (${id}) no esta`);
    }
}

module.exports = {
    roleValido,
    emailExiste,
    existeUsuarioPorId
}