
console.log("__________________ex26____________________")
/* possibility 1 */
function nums(arrayNums, numDigitos) {
    newArray = []
    arrayNums.forEach(num => {
        string = `${num}`
        if(string.length == numDigitos)
            newArray.push(num)
    });
    return newArray
}

console.log(nums([1,2,10,100,99,9,123], 1))

/* possibility 2 */

function nums2(arrayNums, numDigitos) {
    return arrayNums.filter(function(num){
        return String(num).length == numDigitos
    })
}
console.log(nums2([1,2,3,4], 2))

console.log("__________________ex27____________________")

console.log("__________________ex28____________________")
function melhorMedia(obj) {
    let indiceMelhorMedia = 0
    let melhorMedia = 0
    let medias = []

    const valores = Object.values(obj)
    valores.forEach(element => {
        const somaNotas = element.reduce(function(acumulador, atual){
            return acumulador + atual
        })
         medias.push(somaNotas/element.length)
    })

    for(let i = 0; i < medias.length; i++){
        if(medias[i] > melhorMedia){
            melhorMedia = medias[i]
            indiceMelhorMedia = i
        }
    }

    return {nome: Object.keys(obj)[indiceMelhorMedia], media: melhorMedia}
}
console.log(melhorMedia({joao:[1,2,3], jose:[7,8,9], ana:[4,5,6]}))