const valores = [7.7, 8.9, 6.4, 9.2]

console.log("____________________for para listar items array____________________")
valores[4] = 10
for(i=0; i<valores.length; i++){
    console.log(valores[i])
}

console.log("____________________adicionar coisas ao array____________________")
valores.push({id: 3}, false, null, 'teste') // adicionar coisas no array
console.log(valores)

console.log("____________________retirar items de um array____________________")
console.log(valores.pop()) // retira o ultimo valor do array
delete(valores[0]) // eleminar valores do array
console.log(valores)

console.log("____________________saber o tipo da varriavel do array____________________")
console.log(typeof valores) // mostra o tipo do array
