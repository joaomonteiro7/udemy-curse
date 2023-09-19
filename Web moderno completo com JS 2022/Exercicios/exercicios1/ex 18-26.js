console.log("__________________ex19____________________")

const comida = (codigo, quantidade) =>{
    switch (codigo) {
        case 100:
            valor = quantidade * 3.00
            console.log(`${quantidade} cachorro quente fica a ${valor.toFixed(2)}`)
            break;
        case 200:
            valor = quantidade * 4.00
            console.log(`${quantidade} hamburguer simples fica a ${valor.toFixed(2)}`)
            break;
        case 300: 
            valor = quantidade * 5.50
            console.log(`${quantidade} cheeseburguer fica a ${valor.toFixed(2)}`)
            break;                                   
        default:
            console.log('Nao temos esse produto')
            break;
    }
}
comida(100, 2)

console.log("__________________ex20____________________")

let levantar = 18
let numerario = levantar
let contador100=0, contador50=0, contador10=0, contador5=0, contador1=0
while(levantar != 0){

    if(levantar >= 100){
        contador100++
        levantar -= 100
    }
    if(levantar >= 50){
        contador50++
        levantar -= 50
    }
    if(levantar >= 10){
        contador10++
        levantar -= 10
    }
    if(levantar >= 5){
        contador5++
        levantar -= 5
    }
    if(levantar >= 1){
        contador1++
        levantar -= 1
    }
}

console.log(apresentar(contador100, contador50, contador10, contador5, contador1, numerario))

function apresentar(contador100, contador50, contador10, contador5, contador1, numerario) {
    let texto = `para levantar ${numerario} sao precisas `
    if(contador100 > 0){
        texto += `${contador100} notas de 100 `
    }
    if(contador50 > 0){
        texto += `${contador50} notas de 50 `
    }
    if(contador10 > 0){
        texto += `${contador10} notas de 10 `
    }
    if(contador5 > 0){
        texto += `${contador5} notas de 5 `
    }
    if(contador1 > 0){
        texto += `${contador1} notas de 1 `
    }
    return texto
}

console.log("__________________ex22____________________")
function aPagar(mes, valor) {
    let pagar = 0
    switch (mes) {
        case 1:
            pagar = valor
            break;
        case 2:
            pagar = valor + (valor * 0.05)
            break;
        case 3:
            pagar = valor + (valor * 0.1)
            break;
        case 4:
            pagar = valor + (valor * 0.15)
            break;
        default:
            console.log('mes invalido')
            break;
    }
    console.log(pagar)
    if(pagar != 0){
        return pagar
    }
}

aPagar(4,5)

console.log("__________________ex23____________________")
function lancarNota(codAluno, nota1, nota2, nota3) {
    let media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10

    if(media >= 5){
        console.log(`${codAluno} - nota1=${nota1}, nota2=${nota2}, nota3=${nota3}, media ponderada=${media}, APROVADO`)
    }
    else{
        console.log(`${codAluno} - nota1=${nota1}, nota2=${nota2}, nota3=${nota3}, media ponderada=${media}, REPROVADO`)
    }
}

lancarNota(123,9,3,2)

console.log("__________________ex24____________________")
let i=0
while(i != 11){
    console.log(`hello world`)
    i++
}

console.log("__________________ex25____________________")
for(let i=1; i<=50; i++){
    console.log(i)
}

console.log("__________________ex26____________________")
function pares(num) {
    for(let i = 1; i <= num; i++){
        if((i % 2 == 0)){
            console.log(i)
        }
    }
}

pares(100)