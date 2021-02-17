const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( numInicial = 5, listar = false, hasta =10) => {
    
    try {
        let salida= "";

        for (let i = 1; i <= hasta; i++) {
            salida +=`${numInicial} x ${i} = ${numInicial * i}\n`;
        }

        if (listar) {
            console.log(colors.brightCyan(salida));
        }

        fs.writeFileSync(`./salida/tabla-${numInicial}.txt`, salida); 
           
        return `tabla de ${numInicial}.txt`;
    } catch (err){
        return err;
    }
}



module.exports= {
    crearArchivo
}

