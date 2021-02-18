const Tarea = require("./tarea");
const colors = require('colors');


class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea (id = "") {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea (desc = "") {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        this.listadoArr.forEach( (tarea, i) => {
            const idx = colors.bgYellow(`${i + 1}`);
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? colors.green('Completoooo')
                            : colors.brightRed('Pendiente perri, metele pata con eso');

            console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas(completadas = true){
        let contador = 0;
        
        this.listadoArr.forEach( (tarea, ) => {
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? colors.green('Completoooo')
                            : colors.brightRed('Pendiente perri, metele pata con eso');
            if(completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString()}. ${desc} :: ${colors.green(completadoEn)}`);
                }
            } else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString()}. ${desc} :: ${estado}`);
                }
            }
        });
    }

    toggleCompletadas (ids = []) {
        ids.forEach ( id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;