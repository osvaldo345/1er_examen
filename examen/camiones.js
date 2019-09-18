class Camion {
    constructor() {
        this._nombre = 0;
        this._bases = 5;
        this._longuitud = 0;
        this._latitud = 0;

    }
    get nombre(){
        return this._nombre;
    }
    get base(){
        return this._base;
    }
    get longuitud(){
        return this._longuitud;
    }
    get latitud(){
        return this._latitud;
    }
    set base(){
        return this._base;
    }
}

class Tiempo{
    constructor (base, poscion){
        this.tiempo = 0;
        this.base = base;
        this.longuitud = longuitud;
        this.latitud = latitud;

    }
}


class Base{
    constructor() {
        this.base = base;
    }
}


class Salidas{
    constructor(hora_inicio, hora_fin){
        super(nombre,base, tiempo);
        this.hora_inicio = hora_inicio;
        this.hora_fin = hora_fin;
    }
}