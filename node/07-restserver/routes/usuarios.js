const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar.campos'); 

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios.controller');
const { roleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
        check('id', 'No es un ID valido, gatopan').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        check('rol').custom( roleValido),
        validarCampos
], usuariosPut);

router.post('/', [
        check('nombre', "pone tu nombre, si?").not().isEmpty(),
        check('password', "mandale seis caracteres").isLength({min: 6}),
        check('correo', "no funciona asi").isEmail(),
        check('correo').custom(emailExiste),
        check('rol', 'Algo valido te pido, no mucho mas').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom( roleValido),
        validarCampos
], usuariosPost);

router.delete('/:id', [
        check('id', 'No es un ID valido, gatopan').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);
  

module.exports = router;