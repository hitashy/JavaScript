class Cliente extends Persona{
    static contadorCliente = 0;

    constructor (fechaRegistro){
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }
    
    get fechaRegistro(){
        return thi
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ' ' + this._idCliente + ' '+ this._fechaRegistro;
        }
}