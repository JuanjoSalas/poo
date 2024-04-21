class persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
    return `me llamo ${this.nombre} tengo ${this.edad} años y soy ${this.genero}`;
    }
}

const pepe = new persona("pepe",35,"hombre")
console.log(pepe.obtDetalles());

class estudiante extends persona {
    constructor (nombre, edad, genero,curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        return `me llamo ${this.nombre} tengo ${this.edad} años, soy ${this.genero} y voy a ${this.curso} , grupo ${this.grupo}`;
    }
}

const paco = new estudiante("paco",16,"hombre",4,"B")
console.log(paco.registrar());

class profesor extends persona {
    constructor (nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
    }
    asignar() {
        return `me llamo ${this.nombre} tengo ${this.edad} años, soy ${this.genero} y doy clases de ${this.asignatura} , de nivel ${this.nivel}`;
    }
}

const yolanda = new profesor("yolanda",32,"mujer","matematicas","avanzado")
console.log(yolanda.asignar());