function Pessoa(nome) {
    this.falar = () => (`meu nome e ${nome}`)
}

const p1 = new Pessoa("jao")
console.log(p1.falar())

function Persona(nome) {
    this.nome = nome
    this.falar = () => (`meu nome e ${nome}`)
}

const p2 = new Persona("jao")
console.log(p1.falar())