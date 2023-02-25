// a uma variavel associar uma function
const imprimirSoma = function(num1, num2){

    console.log(num1 + num2)
}

imprimirSoma(2,6)

// associar uma function arrow a uma variavel
const soma = (a, b) =>{
    return a + b
}

console.log(soma(3,6))

// return implicito, funçao de apenas uma linha
const subtracao = (a, b) => a - b 

console.log(subtracao(5,2))

const imprimir = a => console.log(a)
imprimir('damn son!!')