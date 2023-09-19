const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: true},
    {nome: 'maria', nota: 2.3, bolsista: false},
    {nome: 'pedro', nota: 9.5, bolsista: false},
    {nome: 'ana', nota: 5.3, bolsista: false}
]

// imperativa
let total1 = 0
for (let i=0; i<alunos.length; i++){
    total1+= alunos[i].nota
}

console.log(total1.toFixed(2)/alunos.length)

// declarativa
const getNota = alunos => alunos.nota
const soma =(total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2.toFixed(2) / alunos.length)

