const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Qué se pone Batman hoy?',
        choices: [
            {
                value: 1,
                name: "1. lugar al que va Batman"
            },
            {
                value: 2,
                name: "2. Bitacora de Bruce Wayne"
            },
            {
                value: 0,
                name: "0. hora de irse a mimir"
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log(colors.brightBlue('**********'));
    console.log(colors.brightWhite(' mascotas'));
    console.log(colors.brightBlue('**********\n'));

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message:`Presiona ${colors.bgBrightBlue('ENTER')} pa continuar\n`

        }
    ];

    await inquirer.prompt(question);

}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return `${colors.brightRed('HACE LAS COSAS BIEN POR FAVOR')}`;
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async (lugares = []) => {
    const choices = lugares.map((lugar, i )=> {
        const idx = `${i +1}.`;

        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0. Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Pone un lugar si te pinta ',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;

}

const checklist = async (tareas = []) => {
    const choices = tareas.map((tarea, i )=> {
        const idx = `${i +1}.`;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Elegi lo que tu corazon quiera',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu, 
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    checklist
}