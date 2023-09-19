const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // retira o ultimo elemento
console.log(pilotos)

pilotos.push('verstappen') // adiciona um elemento a ultima posicao
console.log(pilotos)

pilotos.shift() // retira o elemnto da primeira posicao
console.log(pilotos)

pilotos.unshift('hamilton') // adiciona um elemento na primeira posicao
console.log(pilotos)

// splice ppode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'botas', 'massa') // antes do indice 2 ira adicionar os valores escritos 
console.log(pilotos)

//remover
pilotos.splice(3,1)//remove uma unica posicao ou seja o indice 3
console.log(pilotos)

const algunsPilotos =  pilotos.slice(2) // novo array, a partir do indice 2 inclusive, e ate ao ultimo valor e cria um array com esses valores
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // 1 valor e o indice que iremos comecar a passar os valores para o novo array, 2 valor ate onde ele vai copiar os valores, o 2 n e incluso
console.log(algunsPilotos2)
