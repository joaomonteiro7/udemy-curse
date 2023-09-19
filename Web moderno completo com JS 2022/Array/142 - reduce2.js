const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: true},
    {nome: 'maria', nota: 2.3, bolsista: false},
    {nome: 'pedro', nota: 9.5, bolsista: false},
    {nome: 'ana', nota: 5.3, bolsista: false}
]

// todos sao bolsistas?
let numAlunos = alunos.length
let alunosBolsa = 0
const bolsa = alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    console.log(atual)
    if(atual == true){
        alunosBolsa++
    }
    const result = alunosBolsa == numAlunos 
    ? `todos sao bolsistas`
    : 'nem todos sao bolsistas'
    return result
},0)

console.log(bolsa)

// algum bolsista?
const bolsistas = alunosBolsa > 0 
? `tem bolsistas`
: `nao tem nenhum bolsista`
console.log(bolsistas)