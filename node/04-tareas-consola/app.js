const colors = require('colors');

const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        checklist } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const Tarea = require('./models/tarea');
console.clear();

const main = async () => {

    let opt = "";
    const tareas = new Tareas ();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
       opt = await inquirerMenu();

       switch (opt) {
           case '1':
               const desc = await leerInput('comprale algo piola, no seas rata! ahora si, pone aca lo que necesitas: ');
               tareas.crearTarea(desc);
               break;
       
           case '2':
               tareas.listadoCompleto();
               break;

            case '3':
                tareas.listarPendientesCompletadas(true);
                break;

            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '5':
                const ids = await checklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
                
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !==0) {
                    const ok = await confirmar('En serio ya terminaste esto? no chantees eh, te estoy vigilando');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log(`Asi que lo hiciste... se fue para siempre. ${colors.brightRed("PARA SIEMPREEEEE")}`);                                                                             
                    }
                }
                break;
       }
       
       guardarDB(tareas.listadoArr);

       await pausa();
    
    } while (opt !== "0");
    
}

main();