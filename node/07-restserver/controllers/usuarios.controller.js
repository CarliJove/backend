const {response, request} = require ('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const usuariosGet = (req = request, res = response) => {
    const {loqueteguste} = req.query;
    
    res.json({
        ok:true,
        msg: 'get API controlador - veo que estas visitando al perro mas lindo de la galaxia',
        loqueteguste
    });
}

const usuariosPut = (req, res = response) => {
    
    const {id} = req.params.id;

    res.json({
        ok:true,
        msg: 'put API - veo que estas visitando al perro mas lindo de la galaxia',
        id
    });
}

const usuariosPost = async (req, res = response) => {
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});  

    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        return res.status(400).json({
            msg: "mmmm ese correo ya esta registrado"
        });
    }

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    
    res.json({
        ok:true,
        msg: 'post API - veo que estas visitando al perro mas lindo de la galaxia',
        usuario
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'delete API - veo que estas visitando al perro mas lindo de la galaxia'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'patch API - veo que estas visitando al perro mas lindo de la galaxia'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}