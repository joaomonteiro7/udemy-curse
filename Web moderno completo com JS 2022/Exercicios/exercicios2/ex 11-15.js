console.log("__________________ex11____________________")
const removeProperty = (obj, propertyName) =>{
    delete obj[propertyName]
    return obj
}
console.log(removeProperty({id: 1, nome: 'caneta', preco: 1.25, descricao: `bic`}, `nome`))

console.log("__________________ex12____________________")
const array1 = [1, 'a', 'b', 2]
const filterNumbers = (array1) =>{
    const newArray = []
    for(let i=0; i<array1.length; i++){
        if(typeof array1[i] == 'number'){
            newArray.push(array1[i])
        }
    }
    return newArray
}
console.log(filterNumbers(array1))

console.log("__________________ex13____________________")
const objToArray = (obj) =>{
    return Object.entries(obj)
}
console.log(objToArray({a:1, b:2, c:3}))

console.log("__________________ex14____________________")
const array2 = [10, 70, 22, 43]
const arrayEvenNumbers = (array2) => {
    const newArray = []
    for(let i=0; i<array2.length; i+=2){
        if(array2[i] % 2 === 0)
            newArray.push(array2[i])
    }
    return newArray
}
console.log(arrayEvenNumbers(array2))

console.log("__________________ex15____________________")
