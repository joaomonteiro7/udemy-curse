// funcao sem return 
function imprimirSoma(num1, num2){
    console.log(num1 + num2)
}
imprimirSoma(5, 2)
imprimirSoma(3)
imprimirSoma()

//funçao com return
function soma(a, b=2){
    return a + b
}
console.log(soma(2,6))
console.log(soma(3))
let somatorio = soma(10)
console.log(somatorio)

