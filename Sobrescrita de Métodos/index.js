class Spaceship {
    constructor(name, maxCrew, maxRecomendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecomendedVelocity = maxRecomendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecomendedVelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}

let TransportSpaceship = new TransportSpaceship("Transportadora", 4, 100)
TransportSpaceship.speedUp()

console.log(TransportSpaceship)


//Resumindo, é possivel reescrever os métodos de acordo com a class
//Ele sempre seguirá a ordem de procurar na class filha e depois na class mãe