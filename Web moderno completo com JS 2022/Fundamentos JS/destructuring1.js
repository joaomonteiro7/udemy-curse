const pessoa = {
    nome: 'ana',
    idade: 5,
    endereço: {
        morada: 'rua abc',
        numero: 2
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumurada = true} = pessoa
console.log(sobrenome, bemHumurada)

const {endereco:{morada, numero, codigoPostal}} = pessoa
console.log(morada, numero, codigoPostal)