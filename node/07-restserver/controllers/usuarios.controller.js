const {response, request} = require ('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const usuariosGet = async (req = request, res = response) => {
    const {limite = 5, desde = 0} = req.query;
    const query = {estado: true};

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        total,
        usuarios
    });
}

const usuariosPut = async (req, res = response) => {
    
    const {id} = req.params.id;
    const {_id, password, google, correo, ...resto} = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        ok:true,
        msg: 'put API - veo que estas visitando al perro mas lindo de la galaxia',
        id
    });
}

const usuariosPost = async (req, res = response) => {
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});  


    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    
    res.json({
        ok:true,
        msg: 'post API - veo que estas visitando al perro mas lindo de la galaxia',
        usuario
    });
}

const usuariosDelete = async (req, res = response) => {
    const {id} = req.params;

    //const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate( id, {estado: false});
    res.json(usuario);
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