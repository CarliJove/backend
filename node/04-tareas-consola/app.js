const colors = require('colors');

const {guardarDB} = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const Tarea = require('./models/tarea');
console.clear();

const main = async () => {

    let opt = "";
    const tareas = new Tareas ();

    do {
       opt = await inquirerMenu();

       switch (opt) {
           case '1':
               const desc = await leerInput('comprale algo piola, no seas rata! ahora si, pone aca lo que necesitas: ');
               tareas.crearTarea(desc);
               break;
       
           case '2':
               console.log(tareas.listadoArr);
               break;
       }
       
       guardarDB(tareas.listadoArr);

       await pausa();
    
    } while (opt !== "0");
    
}

main();