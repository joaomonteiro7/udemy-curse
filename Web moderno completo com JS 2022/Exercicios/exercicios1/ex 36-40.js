/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

console.log("__________________ex36____________________")
function fun1(array, num) {
    let array2 = []
    for(let i=0; i<array.length;i++){
        array2.push(array[i]*num)
    }
    return array2
}

console.log(fun1([1,2,3,4], 3))
const array = fun1([1,2,3,4], 3)

function fun2(array, num){
    array2 = []
    for(let i=0; i<array.length; i++){
        if(array[i] > 5){
            array2.push(array[i] * num)
        }
    }
    return array2
}
console.log(fun2(array, 3))

/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/
console.log("__________________ex37____________________")
function progressaoAritmetica(primeiroTermo, razao, numTermo) {
    for(let i=0; i<numTermo; i++){
        console.log(primeiroTermo)
        primeiroTermo+=razao
    }
}
progressaoAritmetica(-8,-9,10);
console.log("------------------------------------")
function progressaoGeometrica(primeiroTermo, razao, numTermo) {
    for(let i=0; i<numTermo; i++){
        console.log(primeiroTermo)
        primeiroTermo*=razao
        
    }
}
progressaoGeometrica(2, -3, 5);

console.log("__________________ex38____________________")
/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

// dentro do JS posso fazer a chamada da funcaoA dentro dela mesmo
// e a chamada recursiva
function impares(inicio=0, fim=100) {
    if(inicio > fim){
        impares(fim, inicio)
        /*let a = inicio
        inicio = fim
        fim = a*/
    }

    for(let i=inicio; i<fim; i++){
        if(i%2 == 1){
            console.log(i)
        }
    }
}
impares(10,1)

console.log("__________________ex39____________________")
/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function trocaArray(array1, array2) {
    for(let i=0; i<array1.length; i++){
        array1[i] = array1[i] + array2[i]
        array2[i] = array1[i] - array2[i]  
        array1[i] = array1[i] - array2[i]
    }
    console.log(array1)
    console.log(array2)
}
trocaArray([1,2,3], [4,5,6])

/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/
console.log("__________________ex40____________________")
function notas(arrayNotas) {
    for(let i=0; i<arrayNotas.length; i++){
        if(arrayNotas[i] >= 0.0 && arrayNotas[i] <= 4.9){
            arrayNotas[i] += `-D`
        }
        if(arrayNotas[i] >= 5.0 && arrayNotas[i] <= 6.9){
            arrayNotas[i] += `-C`
        }
        if(arrayNotas[i] >= 7.0 && arrayNotas[i] <= 8.9){
            arrayNotas[i] += `-B`
        }
        if(arrayNotas[i] >= 9.0 && arrayNotas[i] <= 10.0){
            arrayNotas[i] += `-A`
        }
    }
    console.log(`Nota: ${arrayNotas}`)
}
notas([1, 4.9, 5.0, 6.9, 7.0, 8.9, 9.0, 10.0])