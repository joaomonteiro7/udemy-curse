// pessoa -> 123 -> {...}
// apenas a variavel pessoa e const o obj nao e const dai pudermos mudar os atributos apesar de ser const
const pessoa = {   
    nome: 'nome'
}
pessoa.nome = 'nome'

// pessoa -> 456 -> {...}
// pessoa = {nome: 'nome'} 

Object.freeze(pessoa)

// nao deixa mais 'mexer no obj'
// ja n ira dar para mudar/mexer os atributos
// alem de a vairavel pessoa ser const agr o obj tmb e uma const
pessoa.nome = 'jose'
console.log(pessoa.nome)

const pessoaConstant = Object.freeze({nome: 'joao'})
console.log(pessoaConstant)