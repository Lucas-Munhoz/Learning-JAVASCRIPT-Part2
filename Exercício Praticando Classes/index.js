class SpacialStationVacancy {
    constructor(spaceship){
        this.spaceship = spaceship
        this.hitched = false
        this.doorsOpen = false
    }

    hitchSpaceship() {
        this.hitched = true
        this.doorsOpen = true
        alert("Nave engatada com sucesso!\nPortas de entrada: " + this.doorsOpen)
    }
}

//TESTE------------------
//let batata = new SpacialStationVacancy([{name:"bat", crewQuantity: "20"}])
//console.log(batata.spaceships[0])
//-----------------------

function menu(){
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){
        chosenOption = prompt("BOAS VINDAS A ESTAÇÃO\n\n1 - Realizar Engate\n2 - Imprimir Naves\n3 - SAIR")
    }
    return chosenOption
}

function registerNewSpaceship(){
    let spaceshipName = prompt("Digite o nome da nave")
    let spaceshipCrewQuantity = prompt("Digite a quantidade de tripulantes da nave")
    let spaceship = []
    spaceship.push([{name: spaceshipName, crewQuantity: spaceshipCrewQuantity}]) //APARENTEMENTE NÃO ESTÁ FUNCIONANDO, OS ITENS ESTÃO SUBSTITUINDO E NÃO SENDO ADICIONADOS
    let newSpaceship = new SpacialStationVacancy(spaceship)

    alert("Nave registrada com suceso!")
    return newSpaceship
}

//MAIN CODE

let chosenOption
let newSpaceship

while(chosenOption != "3"){
    chosenOption = menu()
    switch(chosenOption){
        case "1":
            newSpaceship = registerNewSpaceship()
            newSpaceship.hitchSpaceship()
            break
        case "2":
            alert("NAVES:\n\n" + newSpaceship.spaceship)
            console.log(newSpaceship.spaceship)
            break
        case "3":
            alert("Tchau, obrigado por visitar nossa estação, volte sempre!")
    }
}