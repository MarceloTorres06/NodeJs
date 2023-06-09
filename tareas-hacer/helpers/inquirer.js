const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1','opt2','opt3']
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('==============================='.green);
    console.log('SELECCIONE UNA OPCION'.green);
    console.log('===============================\n'.green);

    const opt = await inquirer.prompt(preguntas)
}

module.exports = {
    inquirerMenu
}