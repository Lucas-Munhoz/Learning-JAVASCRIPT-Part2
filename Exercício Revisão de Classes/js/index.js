function registerSpaceship(){
    let name = prompt("Digite o nome da nave:")
    let crewQuantity = prompt("Digite a quantidade de tripulantes da sua nave:")
    let spaceshipType = prompt("Escolha o tipo da sua nave:\n1 - Batalha\n2 - Transporte")
    while(!["1","2"].includes(spaceshipType)) {
        if(spaceshipType == "1"){
            spaceshipType = "Batalha"
            let spaceshipGuns = prompt("Digite a quantidade de armas que sua nave possui")
            spaceship = new BattleSpaceship(name, crewQuantity, spaceshipType, spaceshipGuns)
        }else if(spaceshipType == "2"){
            spaceshipType = "Transporte"
            let spaceshipSeats = prompt("Digite a quantidade de acentos que sua nave possui")
            spaceship = new TransportSpaceship(name, crewQuantity, spaceshipType, spaceshipSeats)
        }
    }
    console.log(spaceship)
    return spaceship
}

function showMenu(){
    let chosenOption

    do{
        chosenOption = prompt("Escolha uma das opções\n1 - Acelerar a nave\n2 - Trocar a nave\n3 - Imprimir e sair")

        switch (chosenOption) {
            case "1":
                let acceleration = prompt("Digite a velocidade que deseja acelerar a nave:")
                spaceship.speedUp(acceleration)
                console.log(spaceship)
                break;

            case "2":
                spaceship = registerSpaceship()
                break

            case "3":
                if(spaceship.spaceshipType == "Batalha"){
                    alert(
                        "DADOS DA NAVE\n\n" +
                        "Nome da nave: " + spaceship.name +
                        "\nQuantidade de tripulantes: " + spaceship.crewQuantity +
                        "\nTipo da nave: " + spaceship.spaceshipType +
                        "\nQuantidade de armas: " + spaceship.spaceshipGuns +
                        "\nVelocidade atual: " + spaceship.currentVelocity + "km/s"
                    )
                }else if(spaceship.spaceshipType == "Transporte"){
                    alert(
                        "DADOS DA NAVE\n\n" +
                        "Nome da nave: " + spaceship.name +
                        "\nQuantidade de tripulantes: " + spaceship.crewQuantity +
                        "\nTipo da nave: " + spaceship.spaceshipType +
                        "\nQuantidade de assentos: " + spaceship.spaceshipSeats +
                        "\nVelocidade atual: " + spaceship.currentVelocity + "km/s"
                    )
                }
                console.log(spaceship)
                break
        }
    } while(chosenOption != 3)
}

//MAIN CODE
let spaceship

spaceship = registerSpaceship()
showMenu()