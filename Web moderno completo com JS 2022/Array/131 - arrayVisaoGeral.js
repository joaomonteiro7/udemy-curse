// array nao e um tipo nativo no js
// em js e um obj mas funciona como array de outras linguagens

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'carlo', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined pq o indice 4 não existe dentro do vetor

aprovados[3] = 'paulo' //bom para modificar um qvalor de array
aprovados.push('abc') // bom para adicionar um novo valor ao array
console.log(aprovados.length)

aprovados[9] = 'def'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // para ordenar o array por ordem alfabetica
console.log(aprovados)

delete aprovados[1] // apagar o valor da posicao 2, nao reordena o array, apenas passa para undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1, 'elemento1', 'elemento2') // 1 valor e onde comeca e o 2 valor e ate onde vai apagar os valores, os outros ele adiciona ao array
console.log(aprovados)
aprovados.splice(1, 0, 'elemento3', 'elemento4') // a partir do valor 1 ele adiciona novos valores, o 0 e pra que ele n apague valores
console.log(aprovados)