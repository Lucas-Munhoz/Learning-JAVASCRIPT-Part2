//Métodos são funções que adicionamos dentro de OBJETOS

class Spaceship {
    constructor(name) {//o proprio constructor já é um método
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity += acceleration
    }
}

let artemis = new Spaceship("Helmet")
console.log(artemis)

artemis.speedUp(25)
console.log(artemis)

