Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0; i<this.length; i++){
        if (callback(this[i], i, this)){
             newArray.push(this[i])
        }
    }
    return newArray
}

const produtos=[
    {nome:'Notebook',preco:2499,fragil: true},
    {nome:'iPad Pro', preco : 4199 , fragil:true},
    {nome:'Copo vidro', preco : 12.49 , fragil:true},
    {nome:'Copo plastico', preco : 18.99 , fragil:false},
]

const caro = function(produto){
    return produto.preco > 500
}

const fragil = function(produto){
    return produto.fragil
}
const result = produtos.filter2(caro).filter2(fragil)
console.log(result)