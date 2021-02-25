const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar.campos'); 

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', [
        check('nombre', "pone tu nombre, si?").not().isEmpty(),
        check('password', "mandale seis caracteres").isLength({min: 6}),
        check('correo', "no funciona asi").isEmail(),
        check('rol', 'Algo valido te pido, no mucho mas').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        validarCampos
], usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);
  

module.exports = router;