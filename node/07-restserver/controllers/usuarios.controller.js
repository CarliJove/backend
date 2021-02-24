const {response, request} = require ('express');

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

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    
    res.json({
        ok:true,
        msg: 'post API - veo que estas visitando al perro mas lindo de la galaxia',
        nombre,
        edad
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