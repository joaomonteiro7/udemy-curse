console.log("__________________ex9____________________")

const notas = (nota) =>{
        if (nota % 5 > 2) {
            console.log(nota%5)
            console.log(5 - (nota % 5))
            return nota + (5 - (nota % 5))
        } else {
            return nota
        }
}

notas(78)

console.log("__________________ex10____________________")

const divisivelPor3 = (num) =>{
    if ((num % 3 === 0)){
        return true
    }
    else{
        return false
    }
}

console.log(divisivelPor3(12))

console.log("__________________ex13____________________")

const diaUtil = (dia)=>{
    switch (dia) {
        case 1:
            console.log('fds')
            break;
        case 2:
            console.log('util')
            break;
        case 3:
            console.log('util')
            break;                        
        case 4:
            console.log('util')
            break;
        case 5:
            console.log('util')
            break;
        case 6:
            console.log('util')
            break;
        case 7:
            console.log('fds')
            break;                                        
        default:
            console.log('dia invalido')
            break;
    }
}

diaUtil(5)

console.log("__________________ex14____________________")

const fruta = (nome) =>{
    switch (nome) {
        case 'maca':
            console.log('Não vendemos esta fruta aqui')
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break;                                        
        default:
            console.log('error 404')
            break;
    }
}
fruta('melancia')

console.log("__________________ex15____________________")

const carro = (modelo) =>{
    switch (modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break;
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break;                                    
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
            break;
    }
}
carro('sedans')