const ferrari = {
    modelo: 'f40',
    velMax: 300
}

const volvo = {
    modelo: "v50",
    velMax: 200
}


console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuObj(){}

console.log(typeof Object, typeof meuObj)
console.log(Object.prototype, meuObj.prototype)