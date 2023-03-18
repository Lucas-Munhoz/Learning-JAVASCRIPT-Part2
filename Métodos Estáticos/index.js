//Métodos estáticos são chamados direto na class

//São muito úteis quando queremos ter algo que não 
//irá se alterar independente da instância do objeto


class ResourceProcessorStation {
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }// 1 mês = 720 horas
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)
console.log(totalProcessing)

//Esse de baixo retornará um erro dizendo que 
//calculateProcessInHours não é uma function

//let processor = new ResourceProcessorStation("Gaia", 2000)
//processor.calculateProcessInHours(processor.monthlyProcessing, 10)

//Maneira correta de chamar um método static para um objeto instânciado

let processor = new ResourceProcessorStation("Gaia", 2000)

let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)

console.log(totalProcessed)