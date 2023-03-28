class Pessoa{
    constructor(nome){ // para inicializar variaveis passadas por parametro
        this.nome = nome;
    }

    falar(){
        console.log(`meu nome e ${this.nome}`)
    }
}

// o facto de usar o this conforme quem chame a funçao o valor do this pode variar

const p1 = new Pessoa("joao")
p1.falar()

const pessoa = nome =>{
    return{
        falar: ()=> console.log(`meu nome e ${nome}`)
    }
}
const p2 = pessoa("joao")
p2.falar()