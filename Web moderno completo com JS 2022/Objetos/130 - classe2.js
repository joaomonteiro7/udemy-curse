class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'prof'){
        super (sobrenome) //chama o construtor da classe pai e passa os parametros para ele
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')// chama o construtor do pai e passando como parâmetro a string Silva
    }
}

const filho = new Filho
console.log(filho)