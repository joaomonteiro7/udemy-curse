// coelçao dinamica chave/valor

const produto = new Object
produto.nome = "cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.nome
delete produto['marca do produto']
console.log(produto)

//obj carro
const carro ={
    modelo: 'a3',
    valor: 2500,
    //obj proprietario dentro de um obj
    proprietario:{
        nome: 'joao',
        idade: 20,
        endereco:{
            rua: 'rua x',
            porta: 12
        }
    },
    //um array de objs
    condutores:[{
        nome: 'ze',
        idade: 30
    }, {
        nome: 'manel',
        idade: 24
    }],
    valorSeguro: function(){
        // code
    }
}

carro.proprietario.endereco.porta = 100
carro['proprietario']['endereco']['rua'] = 'rua y'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.valorSeguro
console.log(carro)
console.log(carro.condutores)
