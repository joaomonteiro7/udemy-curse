// notacao literal
const obj1={
}

// obj em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome // variavel publica
    this.getPrecoDesconto = ()=>{
        return preco*(1-desc)
    }
}

const p1 = new Produto ('caneta', 7.99, 0.15)
const p2 = new Produto ('pc', 2998.12, 0.25)

console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())

// funcao factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// obj.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// um funcao famosa q return obj
const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON)
console.log(fromJSON.info)