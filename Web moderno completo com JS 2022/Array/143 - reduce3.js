Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valor ? 0 : 1
    let acumulador = valorInicial[0] || this[0]
    for(let i=indiceInicial; i<this.length; i++){
        acumulador=callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4]
console.log(nums.reduce2(soma))