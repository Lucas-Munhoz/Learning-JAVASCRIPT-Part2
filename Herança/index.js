//Herança
//É um recurso do paradigma Orientado a Objetos
//Permite que classes herdem características de outras classes

//É uma técnica de reuso de código
//As duas classes devem ter uma relação de "é um tipo de"
    //Por exemplo: Todo capitão É UM TIPO DE pessoa
    //poderia ter uma classe Captain herdando de Person

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

//Agora criaremos classes que herdaram TUDO de Spaceship

//Isto indica que esta class está herdando de Spaceship
//                    |                |
class BattleSpaceship extends Spaceship{
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}
//Isso indica que esta class está herdando de Spaceship
//                       |                |
class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de descoberta")
    }
}

//Como ambas herdaram Spaceship, é necessário passar
//os parâmetros necessários para Spaceship funcionar corretamente
let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 15, 350)

console.log(darwin)
console.log(fenix)

//SOBRE MÉTODOS
    //Ao chamarmos um método, o código irá 
    //procura-lo na class que passamos para ele,
    //porem se não encontrar nesta class.
    //Ele irá procurar na "class mãe"
//----------------------------------------------

darwin.speedUp(210) //Apresentará alert de velocidade maxima atingida
fenix.speedUp(300)

darwin.stop()
fenix.stop()

//Por padrão todas as class's do JS herdam da class padrão Object
