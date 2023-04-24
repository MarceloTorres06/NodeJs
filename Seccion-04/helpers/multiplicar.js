const fs = require('fs');

const crearArchivo = async (base =  5, listar = false) =>{

        let salida = '========================\n' +
                     '      TABLA DEL ' + base + '\n' +
                     '========================\n';

        for (let i=1; i<=10; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if(listar){
            console.log(salida);
        }

        try{
            fs.writeFileSync(`tabla-${base}.txt`,salida);
        }
        catch{
            return `no se pudo crear el archivo tabla-${base}.txt`;
        }

        return `tabla-${base}.txt`;
}

module.exports = {
    crearArchivo : crearArchivo
}