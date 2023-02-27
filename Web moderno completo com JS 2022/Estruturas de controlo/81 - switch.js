const resultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro honra')
            break
        case 8:
        case 7:
        case 6:
            console.log('Recuperacao')
            break
        case 5:
        case 4:
        case 3:
            console.log('Exame')
            break
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }
}

resultado(9)
resultado(7)
resultado(4)
resultado(1)