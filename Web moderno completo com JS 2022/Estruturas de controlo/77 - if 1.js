function boaNoticia(nota){
    if(nota >=7){
        console.log('Aprovado ' + nota)
    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function verdadeFalo(valor){ 
    if(valor){ //se o valor for true
        console.log('E verdade...' + valor)
    }
}

verdadeFalo()
verdadeFalo(5)
verdadeFalo(null)
verdadeFalo('ola')