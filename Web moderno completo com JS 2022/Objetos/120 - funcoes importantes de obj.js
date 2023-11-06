const pessoa = {
    nome: 'joao',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // mostras a chave dos obj
console.log(Object.values(pessoa)) // mostra os valores dos obj
console.log(Object.entries(pessoa)) // cria um array por cada chave valor do obj

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave} ${valor}`)
});

Object.defineProperty(pessoa, 'dataNaschimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNaschimento)
console.log(Object.keys(pessoa))

const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)
//apesar de ja ter o a no obj dest o que fica e o do ultimo obj a ser concatenado

Object.freeze(obj) //o frezze nao deixar q o obj sofra alteracoes
obj.c = 1234
console.log(obj)
