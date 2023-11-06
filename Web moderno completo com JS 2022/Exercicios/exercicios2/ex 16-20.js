console.log("__________________ex15____________________")
/* possibility 1 */
const nums = [10,10,10]

const arraysum1 = function(array) {
    let result = array.reduce(function(acumulador, atual){
        return acumulador + atual
    })
    return result
}
console.log(arraysum1(nums))

/* possibility 2 */
const arraysum2 = (array)=>{
    let sum = 0
    for(let i=0; i<array.length; i++){
    sum += array[i]
    }
    return sum
}
console.log(arraysum2(nums))

console.log("__________________ex16____________________")
/* posibility 1 */
const despesas = function(array){
    let totalDespesas = array.map(a=>a.preco).reduce(function(total, valor){
        return total + valor
    })
    return totalDespesas
}
console.log(despesas([{nome: 'a', categoria:'b', preco: 10},{nome: 'c', categoria:'d', preco: 30}]))

/* possibiliyty 2 */
const despesas2 = function(array){
    let total=0
    for(let preco of array){
        total+= preco.preco
    }
    return total
}
console.log(despesas2([{nome: 'a', categoria:'b', preco: 10},{nome: 'c', categoria:'d', preco: 30}]))

console.log("__________________ex17____________________")
function media(array){
    let media = array.reduce((total, valor) => total+=valor)
    return media/array.length
}
console.log(media([0,10]))

console.log("__________________ex18____________________")
/* possibility 1 */
function areaTringualo(base, altura) {
    let area = (base*altura)/2
    return area.toFixed(2)
}
console.log(areaTringualo(7,9))

/* possibility 2 */
function areaTringualo2(...params) {
    let area = 1
    for(let i = 0; i<params.length; i++){
        area *= params[i]  
    }
    return (area/params.length).toFixed(2)
} 
console.log(areaTringualo2(7,9))

console.log("__________________ex19____________________")
/* posibility 1 */
function menorNum(array) {
    let menor = 100
    for(let num of array){
        num < menor ? menor = num : menor = menor
    }
    return menor
}
console.log(menorNum([1,5,-35,45]))

/* posibility 2 */
function menorNum2(array) {
    return array.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
console.log(menorNum2([1,5,-35,45]))

console.log("__________________ex20____________________")
function numSorte(num) {
    const random = Math.floor(Math.random()*10)+1
    return string = num == random ? `congrats! o num sort foi ${random}` : `unlucky! o num sort foi ${random}`
}
console.log(numSorte(5))