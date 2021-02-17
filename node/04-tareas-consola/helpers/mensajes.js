const colors = require('colors');
const { resolve } = require('path');

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log(colors.brightBlue('**********'));
        console.log(colors.brightWhite(' mascotas'));
        console.log(colors.brightBlue('**********\n'));
    
        console.log(`${ colors.brightCyan('1.')} Crear animalito`);
        console.log(`${ colors.brightCyan('2.')} Listar tarea del animalito`);
        console.log(`${ colors.brightCyan('3.')} Listar tarea completada del animalito`);
        console.log(`${ colors.brightCyan('4.')} Listar tarea no completada del animalito`);
        console.log(`${ colors.brightCyan('5.')} Completar tarea/s`);
        console.log(`${ colors.brightCyan('6.')} Borrar tarea del animalito`);
        console.log(`${ colors.brightCyan('0.')} A quien le importa tu mascota, dejame salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('A ver tu opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })    
}

const pausa = () => {
    return new Promise ( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresiona ${colors.bgBrightBlue('ENTER')} pa continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}