function persona (nombre, apellido, email){
    this.nombre = nombre;
    this.apellido =  apellido;
    this.email =  email;
    this.nombreCompleto = function (){
            return this.nombre + ' '+ this.apellido;
    }
}

let padre = new persona('Orlando', 'Dominguez', 'orlando.dominguez@gmail.com');
console.log(padre.nombreCompleto());