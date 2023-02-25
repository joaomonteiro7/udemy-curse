const saudacao = 'opa'
// saudacao -> nome/chave
// 'opa' -> é o valor

function exec(){
    const saudacao = 'fala'
    return saudacao
}

//objetos sao grupos de pares nome/valor
const cliente = {
    nome: 'joao',
    idade: 21,
    peso: 90,
    endereco: {
        rua: 'rua cool',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.nome)
console.log(cliente.endereco.rua)