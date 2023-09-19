const produtos=[
    {nome:'Notebook',preco:2499,fragil: true},
    {nome:'iPad Pro', preco : 4199 , fragil:true},
    {nome:'Copo vidro', preco : 12.49 , fragil:true},
    {nome:'Copo plastico', preco : 18.99 , fragil:false},
]

console.log(produtos.filter(function(produto){
    return false
}))

console.log(produtos.filter(function(produto){
    return produto.preco >500 && produto.fragil == true;
}))

const caro = function(produto){
    return produto.preco > 500
}

const fragil = function(produto){
    return produto.fragil
}
const result = produtos.filter(caro).filter(fragil)
console.log(result)