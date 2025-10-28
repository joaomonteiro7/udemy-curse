// es8: Object.values / Object.entries
const obj = {a:1, b:2, c:3}

console.log(Object.values(obj)) // os valores
console.log(Object.entries(obj)) // arrays de chave valor

//melhorias na notacao literal
const nome = 'carla'
const pessoa ={
    nome,
    ola(){
        return `Olá ${this.nome}`
    }
}

console.log(pessoa.nome, pessoa.ola())

// class internamente vira uma funcao
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'auau'
    }
}

console.log(new Cachorro().falar())
