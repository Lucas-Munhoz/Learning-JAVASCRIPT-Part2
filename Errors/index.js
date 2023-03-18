//ERROR's PARAM A EXECUÇÃO DO CODIGO, OU SEJA
// A LINHA 27 NÃO SERÁ EXECUTADA

class SpaceshipWeapon{
    constructor(identifier){
        this.identifier = identifier;
        this.shotsLeft = 5;
    }

    shoot(){
        if(this.shotsLeft > 0){
            console.log("Bang!");
            this.shotsLeft -=1;
        }else {
            throw new Error("Arma " + this.identifier + " sem munição")
        }
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon.shotsLeft)
fenixWeapon.shoot() // ULTIMA COISA A SER EXECUTADA, PQ AQUI A shotsLeft PASSA A SER 0
fenixWeapon.shoot()
console.log(fenixWeapon.shotsLeft)