console.log(Math.ceil(6.1))

const objeto = {
    nome: 'bola'
}

console.log(objeto.nome)

function Obj(age, name){
    this.idade = age
    this.nome = name
}

const obj2 = new Obj(15, 'joao')
console.log(obj2)
const obj3 = new Obj(20, 'ze')
console.log(obj3)