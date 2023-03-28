const notas = [7.7, 5.3, 8.2, 6.1, 9.0, 2.1]
// sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter((nota) => {
    return nota < 7
})

console.log(notasBaixas2)