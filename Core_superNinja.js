class Ninja {
    constructor (nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(nombre) {
        console.log("Nombre: " + nombre);

    }
    showStates(nombre, salud) {
        console.log("Nombre: " +nombre , "; Fuerza: " + this.fuerza,  "; Velocidad: " + this.velocidad,  "; Salud: " + salud);
    }
    drinkSake() {
        this.salud += 10;
        console.log("Salud: " + this.salud);
    }
}
class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this. sabiduria = 10;
    }
    speakWisdom() {
        let message = "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.";
        console.log(message);
    }
}
    const objNinja = new Ninja("Shihiro", 5);
    const objSensei = new Sensei("Roshi");

    objNinja.sayName(objNinja.nombre);
    objNinja.showStates(objNinja.nombre, objNinja.salud);
    objNinja.drinkSake();

    objSensei.speakWisdom();
    objSensei.drinkSake();
    objSensei.showStates(objSensei.nombre, objSensei.salud);


    
