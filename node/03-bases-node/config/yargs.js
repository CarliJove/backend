const argv = require('yargs')
    .option('n', {
        alias: 'numInicial',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero con el que vas a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'te muestra tu tablita de multiplicar, maravilloso'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default:10,
        describe: 'Es el numero al que queres llegar'
    })
    .check((argv, options) => {
        if( isNaN (argv.n)) {
            throw "Tu numero inicial (numInicial) tiene que ser eso.. UN NUMERO"
        }
        return true;
    })
    .argv;

module.exports = argv;