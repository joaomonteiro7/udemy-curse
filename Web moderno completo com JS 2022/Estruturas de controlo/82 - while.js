function inteiroRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = 0

while(op != -1){
    op = inteiroRandom(-1, 10)
    console.log(`Opcao escolhida foi ${op}`)
}
