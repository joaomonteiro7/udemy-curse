console.log("__________________ex1____________________")
const contas = (a, b) =>{
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}
contas(5,2)

console.log("__________________ex2____________________")
const tipoTrinagulo = (a, b, c) =>{
    if((a+b > c) && (a+c > b) && (b+c > a)){
        if(a == b && a == c){
            console.log("Triangulo equilatero")
        }
        else if(a == b || a == c || b == c){
            console.log("Triangulo isosceles")
        }
        else if(a != b && a != c && b != c){
            console.log("Triangulo escaleno")
        }
    }else{
        console.log("n e um triangulo")
    }
}

tipoTrinagulo(5,2,6)

console.log("__________________ex3____________________")
const potencia = (base, expoente) =>{
    return base ** expoente
}
console.log(potencia(2, 3))

console.log("__________________ex4____________________")
const resto = (dividendo, divisor) =>{
    console.log(dividendo / divisor)
    console.log(`resto divisao: ${dividendo % divisor}`)
}

resto(7, 2)

console.log("__________________ex5____________________")
const numbers = (num) =>{
    return num.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })
}

const numbers2 = (num) =>{
    return num.toFixed(2)
}
console.log(numbers( 0.30000000000000004))
console.log(numbers2( 0.30000000000000004))

console.log("__________________ex6____________________")
const juroSimples = (capitalInicial, taxaJuros, tempoApp) =>{
    return capitalInicial * taxaJuros * tempoApp 
}
console.log(juroSimples())

console.log("__________________ex7____________________")
const bhaskara = () =>{

}

console.log("__________________ex8____________________")
const pontosJogos = [10, 20, 20, 8, 25, 3, 0, 30, 1]

const melhorPiorJogo = (pontosJogo) =>{
    melhorPontuacao=0
    recordBatidos = 0
    piorPontuacao = 30
    numPiorJogo = 0
    for(let i=1; i<pontosJogo.length; i++){
        if(pontosJogo[i] > melhorPontuacao){
            melhorPontuacao = pontosJogo[i]
            recordBatidos++
        }
        else if(pontosJogo[i] < piorPontuacao){
            piorPontuacao = pontosJogo[i]
            numPiorJogo = i + 1
        }
    }
    return [recordBatidos, numPiorJogo]
}

console.log(melhorPiorJogo([10, 20, 20, 8, 25, 3, 0, 30, 1]))