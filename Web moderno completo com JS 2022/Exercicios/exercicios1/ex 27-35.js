console.log("__________________ex27____________________")
function alturas(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    let j = 0
    // crianca 1 maior q a 2
    if(altura1 > altura2){
        // se a taxa crescimente da crianca 2 for maior q a 1, a crianca 2 ira passar a altura da crianca 1
        if(taxaCrescimento2 > taxaCrescimento1){
            while(altura2 < altura1){
                altura2 += taxaCrescimento2
                altura1 += taxaCrescimento1
                j++
            }
        console.log(`a crianca 2 ira passar a altura da crianca 1 em ${j} anos`)
        }
    }
    // crianca 2 maior q a 1
    else if(altura2 > altura1){
        // se a taxa crescimente da crianca 1 for maior q a 2, a crianca 1 ira passar a altura da crianca 2
        if(taxaCrescimento1 > taxaCrescimento2){
            while (altura1 < altura2) {
                altura1 += taxaCrescimento1
                altura2 += taxaCrescimento2
                j++
            }
        console.log(`a crianca 1 ira passar a altura da crianca 2 em ${j} anos`)
        }
    }
    else{
        console.log(`as duas criancas tem a mm altura`)
    }
}

alturas(45, 0.6, 50, 0.5)

console.log("__________________ex28____________________")

function numbersIn() {
    let pares = 0, impares = 0
    vetor = [1,2,3,4,5,6,7,8,9,10]
    for(let i in vetor ){
        if(i%2 == 0){
            pares++
        }
        else{
            impares++
        }
    }
    console.log(`pares:${pares}, impares ${impares}`)
}

numbersIn()

console.log("__________________ex29____________________")
// for...of e bom para percurrer arrays, strings, etc.. enquanto o for...in e bom para percorrer obj
function numbersBetween(num1, num2) {
    let dentro=0, fora=0
    let numbers = [1,2,3,6,8,9,0,13,15,16,20,21,25,40]
    for(let number of numbers){
        if(number >= num1 && number <= num2){
            dentro++
        }
        else{
            fora++
        }
    }
    return {dentro, fora}
}

result = numbersBetween(10,20)
console.log(`entre 10 e 20 tem ${result.dentro} dentro e ${result.fora} fora`)

console.log("__________________ex30____________________")
function higherLower() {
    let higher=0, lower=100
    let array = [1,2,3,124,14,12,32,0,100,321,5,322]

    for(number of array){
        if(number > higher){
            higher = number;
        }
        if(number < lower){
            lower = number
        }
    }
    console.log(`o maior numero do array e ${higher} e o menor ${lower}`)
}
higherLower()

console.log("__________________ex31____________________")
function negativeNumbers() {
    let array = [1,2,3,4,0,-1,-5,-10,-111]
    let negative=0

    for(number of array){
        if(number < 0){
            negative++
        }
    }
    return `temos um total de números negativos no array: ${negative}`
}

console.log(negativeNumbers())

console.log("__________________ex32____________________")
function media() {
    let media = 0
    let array = [1,3,5,7,9,10]

    for(number of array){
        media += number
    }
    media = media / array.length
    console.log(media.toFixed(2))
}

media()

console.log("__________________ex33____________________")
let arrayInt = [1,2,3,4]
let arrayString = ['a', 'b', 'c', 'd']
let arrayDouble = [1.1, 2.1, 3.1, 4.1]

// maneira do curso
function array(...args) {
    concat = []
    for(let i=0; i<args.length; i++){
        concat = concat.concat(args[i])
    }
    return concat
}
console.log(array(arrayInt, arrayString))
console.log(array(arrayString, arrayDouble))

// maneira do joao
/*
function array2(...args) {
    for(let i=0; i<args.length-1; i++){
        console.log(args[i].concat(args[i+1]))
    }
}
array2(arrayInt, arrayString)
array2(arrayString, arrayDouble)
*/

console.log("__________________ex34____________________")
function equalString(string1, string2) {
    let stringLength=0
    if(string1.length = string2.length){
        for(let i=0; i<string1.length;i++){
            if (string1[i] == string2[i]){
                stringLength++
            }
        }
        const result = (stringLength == string1.length && stringLength == string2.length )
        ? `A string ${string1} e a string ${string2} sao iguais`
        : `A string ${string1} e a string ${string2} nao sao iguais`
        return result
    }
    else{
        return `A string ${string1} e a string ${string2} nao sao iguais`
    }
}

console.log(equalString('abcee','abcee'))

console.log("__________________ex35____________________")
let arrayPilha = [1,2,3,4,5]
let arrayAdiciona = [6,7,8,9,10]
// maneira do curso
function arrayAdd(arrayPilha, arrayAdiciona) {
    for(let i=0; i<arrayAdiciona.length; i++){
        arrayPilha.push(arrayAdiciona[i])
    }
    console.log(`adicionado ${arrayAdiciona}`)
    console.log(`resultado ${arrayPilha}`)
}
arrayAdd(arrayPilha, arrayAdiciona)


// maneira do joao
function arrayAdd2(arrayPilha, arrayAdiciona){
    arrayPilha.concat(arrayAdiciona)
    console.log(`Adicionado ${arrayAdiciona}`)
    console.log(`Resultado ${arrayPilha}`)
    return arrayPilha
}
//arrayAdd2(arrayPilha, arrayAdiciona)
const damn = arrayAdd2(arrayPilha, arrayAdiciona)
console.log(damn)
