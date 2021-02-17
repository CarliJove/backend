const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'que necesitas para tu animalito?',
        choices: [
            {
                value: '1',
                name: "1. Crear tarea de tu animalito"
            },
            {
                value: '2',
                name: "2. Listar tarea del animalito"
            },
            {
                value: '3',
                name: "3. Listar tarea completada del animalito"
            },
            {
                value: '4',
                name: "4. Listar tarea no completada del animalito"
            },
            {
                value: '5',
                name: "5. Completar tarea/s"
            },
            {
                value: '6',
                name: "6. Borrar tarea del animalito"
            },
            {
                value: '0',
                name: "0. A quien le importa tu mascota, dejame salir\n"
            },
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

module.exports = {
    inquirerMenu, 
    pausa,
    leerInput
}