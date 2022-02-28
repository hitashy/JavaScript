/* let miFuncion = function (){
    console.log('Saludos desde mi función');
}
miFuncion();

let miFuncionFlecha = () =>{
    console.log('Saludos desde mi función flecha');
}

miFuncionFlecha(); */

const saludar = () => 'Saludos desde la funcion flecha';

console.log (saludar());

const regresaObjeto = () => ({nombre: 'Juan', Apellido: 'Lara'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('funcion con parametros');


const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `resultado: ${resultado}`;
}

console.log(funcionConVariosParametros(3,5));