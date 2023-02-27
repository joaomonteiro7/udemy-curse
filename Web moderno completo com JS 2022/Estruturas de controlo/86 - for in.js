const notas = [4, 5.6, 8.9, 10]
for(i in notas){
    i = notas[i]
    console.log(i)
}

const pessoa = {
    nome: 'Joao',
    sobrenome: 'Monteiro',
    idade: 21,
    peso: 50
}

for(atributo in pessoa){
    console.log(`${atributo } = ${pessoa[atributo]}`)
}