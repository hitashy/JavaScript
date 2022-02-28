'use strict';
let resultado = '-1';

try{
    // x = 10;
    if (isNaN(resultado)) throw 'No es un Numero';
    else if(resultado === '') throw 'Es una cadena vacia';
    else if(resultado >= 0) throw 'Valor Positivo';
    else if(resultado <= 0) throw 'Valor Negativo';
}
catch(error){
    console.log(error);
    /* console.log(error.name);
    console.log(error.message); */
}
finally{
    console.log('termina revisión de erorres')
}


/* 'use strict';

try{
    let x = 10; 
    // miFuncion();
    throw 'mi error'
}
catch(error){
    console.log(error);
}
finally{
    console.log('termina la revision de errores')
}
console.log('continuamos...'); */