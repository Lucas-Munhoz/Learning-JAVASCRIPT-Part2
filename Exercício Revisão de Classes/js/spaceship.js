class Spaceship{
    constructor(name, crewQuantity, spaceshipType) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.spaceshipType = spaceshipType
        this.currentVelocity = 0
    }

    static get decelerationRate(){
        return 0.17
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}