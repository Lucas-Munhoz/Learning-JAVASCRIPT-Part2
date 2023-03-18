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

    reload(){
        this.shotsLeft = 5
    }
}

//ACONTECE O ERRO!

let naveMuitoLoka = new SpaceshipWeapon(10)
try {
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
} catch(e) { //pegando o erro, faz essa fita ai dentro do bloco do catch
    console.log(e.message) //catch acontece SÓ QUANDO TEM ERRO
    naveMuitoLoka.reload()
} finally { //acontece tendo ou não o erro
    console.log("Arma deu bons tiros!")
}

console.log(naveMuitoLoka)
console.log("================================================")

//  --NÃO--  ACONTECE O ERRO

try {
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
    naveMuitoLoka.shoot()
} catch(e) { //NÃO acontece pq NAO TEM ERRO
    console.log(e.message)
    naveMuitoLoka.reload()
} finally { //acontece mesmo nao tendo erro
    console.log("Arma deu bons tiros!")
}

console.log(naveMuitoLoka)