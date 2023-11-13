// como esta a ir buscar um export de um obj e o node faz cast se ja tiver sido criado uma vez,
// ele retorna sempre a mesma instancia, dai o B ficar com o mesmo valor do A mesmo sem ser usado

const contadorA = require('./156-instanciaUnica')
const contadorB = require('./156-instanciaUnica')

// export de uma funcao factory cada vez que se da export cria uma nova instancia
const contadorC = require('./156-instanciaNova')()
const contadorD = require('./156-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
console.log(contadorC.valor)