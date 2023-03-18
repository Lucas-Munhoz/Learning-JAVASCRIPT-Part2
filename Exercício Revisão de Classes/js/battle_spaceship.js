class BattleSpaceship extends Spaceship{
    constructor(name, crewQuantity, spaceshipType, spaceshipGuns){
        super(name, crewQuantity, spaceshipType)
        this.spaceshipGuns = spaceshipGuns
    }

    speedUp(acceleration){
        super.speedUp(acceleration)
    }
}