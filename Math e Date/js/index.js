/*
    METODO MATH
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
    
    METODO DATE
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/


//Explorando um pouco do MATH

//potencia de 5 elevado a 3
console.log("potencia de 5 elevado a 3")
console.log(Math.pow(5, 3))
console.log("-----------------------------")

//Constante PI do metodo MATH
console.log("Constante PI do metodo MATH")
console.log(Math.PI)
console.log("-----------------------------")

//Raiz quadrada de 64
console.log("Raiz quadrada de 64")
console.log(Math.sqrt(64))
console.log("-----------------------------")



//Explorando um pouco do DATE

//Date trabalha com milisegundos
//Parametros: Date(ano, mes, dia, hora, minutos, segundos) e por ai vai!
let diaAleatorioJaneiro = new Date(2019, 00, 29)
console.log(diaAleatorioJaneiro)
//O DATE CONSIDERA JANEIRO COMO MES 0

let diaAleatorioDezembro = new Date(2019, 11, 29)
console.log(diaAleatorioDezembro)
//Se janeiro = 0, então dezembro = 11


let hoje = Date.now()
console.log(hoje)
// Retorna quantos milisegundos
// se passaram desde uma data base
// no caso data base = 01/01/1970 (Um de Janeiro de 1970)