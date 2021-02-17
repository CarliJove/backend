const {crearArchivo} = require('./helpers/multiplicar');
const argv = require ('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.n, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.brightMagenta(nombreArchivo), "creado"))
    .catch(err => console.log(err));