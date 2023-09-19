let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

function minhaFuncao(nome, idade, ...outrasInformacoes) {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Outras informações: ${outrasInformacoes}`);
  }
  
  minhaFuncao("Alice", 30, "Endereço: 123 Rua Principal", "Telefone: (555) 555-5555");