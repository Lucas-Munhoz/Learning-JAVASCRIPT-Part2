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

//Para usarmos o CONSTRUCTOR ou qualquer outro MÉTODO da class mãe,
//podemos utilizar a palavra SUPER

//Caso queira chamar o CONSTRUCTOR é só passar o SUPER
//Agora se quiser chamar outro método, é assim que faz:
//super.nomeDoMétodo()


class TransportSpaceship extends Spaceship(){
    constructor(name, maxCrew, maxRecomendedVelocity, maxLoadWeight){
        super(name, maxCrew, maxRecomendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration){
        acceleration /= 2
        alert("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)//utilizando o speedUp da class SPACESHIP
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)