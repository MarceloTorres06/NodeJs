const { promises } = require('dns');

require('colors');

const mostrarMenu = ()=>{

    return new Promise( resolve => {
        console.clear();
        console.log('==============================='.green);
        console.log('SELECCIONE UNA OPCION'.green);
        console.log('===============================\n'.green);

        console.log(`${ '1.'.green } Crear Tarea`);
        console.log(`${ '2.'.green } Listar Tareas`);
        console.log(`${ '3.'.green } Listar Tareas completadas`);
        console.log(`${ '4.'.green } Listar Tareas Pendientes`);
        console.log(`${ '5.'.green } Completar Tarea(s)`);
        console.log(`${ '6.'.green } Borrear Tarea`);
        console.log(`${ '0.'.green } Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt)=>{
            readline.close();
            resolve(opt);
        });
    });
    
    
} 

const pausa = ()=>{
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.green}\n`, (opt)=>{
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}