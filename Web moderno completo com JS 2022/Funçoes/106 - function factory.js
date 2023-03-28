const prod1 = {
    nome: "...",
    preco: 4
}

const prod2 = {
    nome: "..",
    preco: 14
}

// factory simples, pra dar return de um obj
function criarPessoa() {
    return{
        nome: "ana",
        sobrenome: "santos"
    }
}

console.log(criarPessoa())