const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/*const chineses = f=>f.pais==='China'
const mulher = f=>f.genero==='F'
const menorSalario = (func, funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual
}*/

axios.get(url).then(response =>{
    const funcionarios = response.data
    //const func = funcionarios.filter(chineses).filter(mulher).reduce(menorSalario)
    const func2 = funcionarios
    .filter(f => f.pais == 'China')
    .filter(f => f.genero == 'F')
    .reduce(function(func, funcActual){
        return func.salario < funcActual.salario ? func : funcActual
    })
    console.log(func2)
})