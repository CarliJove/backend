const dotenv = require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const colors = require('colors');
const Busquedas = require("./models/busquedas");

const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();
    
        switch (opt) {
            case 1:
                //mensaje
                const aBuscar = await leerInput("A donde decis que va Batman hoy: ");
                
                //buscar lugares
                const lugares = await busquedas.ciudad(aBuscar);
                
                // seleccionar lugar
                const id = await listarLugares(lugares);
                if (id === '0') continue;

                const lugarSel = lugares.find (l => l.id === id);

            busquedas.agregarHistorial(lugarSel.nombre);
                //datos clima de ese lugar
                const clima = await busquedas.climaLugar(lugarSel.latitud, lugarSel.longitud);
                //mostrar resultados
                console.clear();
                console.log(colors.yellow('\nInfo de la city\n'))
                console.log("Ciudad: ", lugarSel.nombre);
                console.log("Latitud: ", lugarSel.latitud);
                console.log("Longitud:", lugarSel.longitud);
                console.log("Temperatura: ", clima.temp);
                console.log("La minima: ", clima.min);
                console.log("La maxima: ", clima.max);
                console.log("It feels like: ", clima.desc);

                break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}`;
                    console.log(`${idx} ${lugar}`);
                })
                break;
        }

        if(opt !== 0) await pausa();

    } while (opt !== 0)
}

main();
