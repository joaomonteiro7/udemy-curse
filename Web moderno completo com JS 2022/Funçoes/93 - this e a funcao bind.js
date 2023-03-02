const pessoa = {
    saudacaoDia: 'bdia',
    saudacaoNoite: 'bnoite',
    falar(){
        console.log(this.saudacaoNoite)
        console.log(pessoa.saudacaoDia)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // como a funçao esta associda a uma variavel o this ja nao vai ser sobre o obj pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // para associar o this ao obj pessoa nao dando erro
falarDePessoa()