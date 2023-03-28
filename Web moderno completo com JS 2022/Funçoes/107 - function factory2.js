function criarProd(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProd("pc", 2000.30))
console.log(criarProd("tablet", 1238,99))