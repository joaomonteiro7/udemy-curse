function inteiroRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op 

do{
    op = inteiroRandom(-1, 10)
    console.log(`Opcao escolhida foi ${op}`)
}while((op != -1))