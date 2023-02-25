// escopo 1/ escopo global
let num1 = 1
{
    // escopo 2/escopo de bloco de codigo
    let num1 = 2
    console.log('dentro', num1)
}
{
    // escopo 3
    console.log('dentro segundo', num1)
}
console.log('fora', num1)

// declarando variaveis com let, mesmo que com o mesmo nome, nao altera o valor de escopos diferentes

// nao da para declarar  duas vezes a varivel com o mesmo nome no mesmo escopo

// se estiverem declaradas 2 variaveis iguais, 1 vai buscar o valor da variavel do escopo onde estamos a aceder a ela,
// e depois se nao tiver nesse escopo, o programa vai busca o valor da variavel do escopo global

// se tirar a delcaraçao do num1 do escopo 1 dentro do escopo 3 vai dar erro e dizer que nao foi declarada
// apesar de estar declarada no escopo 2 esse valor fica apenas no escopo 2, nao passa para os outros, entao aceder no escopo 3 nao ira dar
// ira ter de declara o num1 ou no escopo 3 ou entao no escopo 1 que assim ja daria para ir buscar o valor
