// object.preventExtensions n permite q adicione novos atributos ao obj, mas pode se eliminar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção' // não é possível adicionar mais
})

console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar'
delete produto.tag
console.log(produto)

//obj.seal n apaga atributos nem adiciona so alterar
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 28
console.log(pessoa)

// obj.freeeze = selado + valores constantes, n da pra excluir, adicionar ou modificar os atributos
