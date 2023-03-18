//Em grande maioria, as classes podem ser instancias
    //grande maioria pq algumas linguagens podem impedir isso

//Instância de uma classe é o que dá a origem ao objeto
    //Quando dizemos que uma classe foi instanciada estamos dizendo
    //que um objeto foi criado a partir daquela classe

//As classes vêm com um método especial que chamamos de CONSTRUTOR
    //Utilizamos para definir valores iniciais dos atributos de um
    //objeto.
    //Este método é chamado quando criamos uma instância de uma
    //classe com a palavra NEW


class SpacialStation {
    constructor(name, platformsQuantity) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation("Observatório", 40)

console.log("observatory")
console.log(observatory)

console.log("____________________________________________")

//não necessariamente o PARÂMETRO precisa receber o mesmo nome do ATRIBUTO
//MAS O CORRETO DE ACORDO COM A CONVENSÃO É POSSUIREM O MESMO NOME

//CLASSES
class Spaceship {
    constructor(myName, type = "Descoberta") {
        this.name = myName
        this.type = type
    }
}
//-------

//OBJETOS
let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")
//-------

console.log("darwin")
console.log(darwin)
console.log("\nhelmet")
console.log(helmet)