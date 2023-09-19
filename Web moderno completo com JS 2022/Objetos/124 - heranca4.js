function MeuObj(){

}
console.log(MeuObj.prototype)

const obj1 = new MeuObj
const obj2 = new MeuObj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObj.prototype === obj1.__proto__)

MeuObj.prototype.nome = 'anonimo'
MeuObj.prototype.falar = function() {
    console.log(`bom dia meu nome e ${this.nome}`)

}

obj1.falar()
obj2.nome = 'joao'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObj.prototype
obj3.nome = 'obj3'
obj3.falar()

//resumindo
console.log((new MeuObj).__proto__ === MeuObj.prototype)
console.log(MeuObj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

