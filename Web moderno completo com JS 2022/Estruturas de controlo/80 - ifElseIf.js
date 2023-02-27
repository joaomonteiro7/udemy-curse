Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const resultado = (nota) =>{
    if(nota.entre(9,10))
    {
        console.log('Quadro honra')
    }
    else if(nota.entre(5, 8))
    {
        console.log('Recuperacao')
    }
    else if(nota.entre(0, 4.99)){
        console.log('Reprovado')
    }
    else
    {
        console.log('Nota invalida')
    }
}

resultado(9)
resultado(7)
resultado(4)
resultado(11)