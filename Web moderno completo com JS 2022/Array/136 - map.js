const nums = [1,2,3,4,5]

// for com proposito
let result = nums.map(function(valor){
    return valor * 2; // retorna o dobro de cada numero na lista
})
console.log(result)

const soma10 = e=> e+10
const triple = e=> e*3
const paraDinheiro = e=> `${parseFloat(e).toFixed(2)}`

result = nums.map(soma10).map(triple).map(paraDinheiro)
console.log(result)