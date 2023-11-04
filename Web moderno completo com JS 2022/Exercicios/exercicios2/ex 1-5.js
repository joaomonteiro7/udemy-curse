console.log("__________________ex1____________________")
function boasVindas(nome) {
    return `Ola, ${nome}!`
}

console.log(boasVindas(`joao`))

console.log("__________________ex2____________________")
//const idadeDias = idade => idade * 365
const idadeDias = (idade) =>{
    return idade * 365
}

console.log(idadeDias(25))

console.log("__________________ex3____________________")
const salario = function(horasTrab, valorHora){
    let result = horasTrab*valorHora;
    return `Salario igual a ${result} euros`
}

console.log(salario(150, 40.5))

console.log("__________________ex4____________________")
const nomeMes = (numMes) =>{
    switch (numMes) {
        case 1:
            return `Janeiro`
            break;
        case 2:
            return `Fevereiro`
            break;
        default:
            return `Mes invalido`
            break;
    }
}

console.log(nomeMes(9))

console.log("__________________ex5____________________")
const maiorIgual = (num1, num2) =>{
    if(isNaN(num1) || isNaN(num2)){
        let result = (num1 > num2 || num1 == num2)
        ? true
        : false
        return result  
    }
    return false
}

console.log(maiorIgual(5, 1))
