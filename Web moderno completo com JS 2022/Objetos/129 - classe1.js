class Lancamento{
    constructor(nome = 'generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsulidado = 0
        this.lancamentos.forEach(l => {
            valorConsulidado += l.valor
        })
        return valorConsulidado
    }
}

const salario = new Lancamento('salario', 45000)
const contaLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())