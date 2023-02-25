let valor
console.log(valor) // undefined pois nao foi inicializada apenas declarada
//console.log(valor2) // vai dar erro dizer que a variavel nao foi declarada

valor = null // null nao tem nenhuma valor, e nao tem nenhuma referencia de memoria, ausencia de valor, e limpa se uma variavel tiver o valor a ser passada por referencia
console.log(valor)
valor = 2
console.log(valor.toString()) //

const produto = {}
console.log(produto.preco) // preco n esta defenido dentro do produto
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar fazer isto deixar a linguagem decidir o que e undefined ou n
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco) // !! -> tranformar em boolean 
console.log(produto)