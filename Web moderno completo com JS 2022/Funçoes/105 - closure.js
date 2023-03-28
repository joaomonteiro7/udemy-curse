// closure e o escopo criada quando uma function e declarada
// esse escopo vai permitir que a funçao acesse e manipule variaveis externas a function

// contexto lexico em acao

const x = "global"
function fora() {
    const x = "local"
    function dentro() {
        return x
    }
    return dentro
}

const mine = fora()
console.log(mine)