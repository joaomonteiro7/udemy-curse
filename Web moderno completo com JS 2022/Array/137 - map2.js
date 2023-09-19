const carrinho = [
    `{"nome": "borracha", "preco": 3.45}`,
    `{"nome": "caderno", "preco": 13.90}`,
    `{"nome": "kit de lapis", "preco": 41.22}`,
    `{"nome": "caneta", "preco": 7.5}`
]
console.log(carrinho)
// return de um array com apenas os precos
let result = carrinho.map(function(value){
    let produto = JSON.parse(value)
    console.log(produto )
    return produto.preco
})
console.log(result)