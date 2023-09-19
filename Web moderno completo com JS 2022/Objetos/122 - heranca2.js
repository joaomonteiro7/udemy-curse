/* Cadei de prototipos (prototype chain) */
const avo = {
    attr1: 'A'
}
const pai={
    __proto__:avo, /* heranca pudendo aceder ao attr1 de avo */
    attr2: 'B'
}
const filho={
    __proto__:pai, /* heranca pudendo aceder ao attr1 de pai */
    attr3: 'C'
}

console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr2)
console.log(filho.attr3)

const carro={
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){ /* visto estar dentro de uma funcao o this e para saber q a variavel esta no objeto */
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}
const ferrari ={
    modelo: 'f40',
    velMax: 200
}

const volvo={
    modelo:'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())