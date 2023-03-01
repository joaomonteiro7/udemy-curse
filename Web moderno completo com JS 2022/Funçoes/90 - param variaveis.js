function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.4, 2.5))
console.log(soma(4,6))
console.log(soma(1,6,8,9))
console.log(soma(1.4, 2, 'teste'))
console.log (soma('ola', 'mundo'))