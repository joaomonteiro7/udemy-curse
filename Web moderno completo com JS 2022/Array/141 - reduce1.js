// recebe os dois primeiros elementos do array e passa pra proxima funcao o resultado desses 2 elementos mais o elemento atual

const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 2.3, bolsista: true},
    {nome: 'pedro', nota: 9.5, bolsista: false},
    {nome: 'ana', nota: 5.3, bolsista: false}
]

const result = alunos.map(a=> a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(result.toFixed(2))