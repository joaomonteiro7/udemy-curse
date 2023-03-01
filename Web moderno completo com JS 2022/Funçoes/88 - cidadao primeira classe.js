/* forma literal */
function fun1(){ //se nao usar return a propria funcao da return de undefined

}

/* armazenar em uma variavel */
const fun2 = function(){

}

/* armazenar em um array */
const array = [function(a, b){
    return a+b
}, fun1, fun2]

console.log(array[0](2,3))

/* armazena em um obj */
const obj = {}
obj.falar = function(){
    return 'opa'
}

console.log(obj.falar())

/* funçao como parametro */
function run(fun){
    fun()
}

function soma(c, d){
    return c+d
}

run(function(){
    console.log(soma(2,5))
})

/* funçao returnar/conter uma funçao */
function subtracao(a, b){
    return function(c){
        console.log(a - b - c)
    }
}

subtracao(5, 2)(1)