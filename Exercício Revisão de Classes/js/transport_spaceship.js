class TransportSpaceship extends Spaceship{
    constructor(name, crewQuantity, spaceshipType, spaceshipSeats){
        super(name, crewQuantity, spaceshipType)
        this.spaceshipSeats = spaceshipSeats
    }

    speedUp(acceleration){
        super.speedUp(acceleration)
    }
}