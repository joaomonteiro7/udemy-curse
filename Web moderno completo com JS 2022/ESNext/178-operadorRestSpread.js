// operador ... rest(juntar) / spread(espalhar)
// usar rest coo parametro de uma func

// usar spread com obj

const funcionario = { nome:'maria', salario:123.12}
const clone = {ativo:true, ...funcionario}

//console.log(clone.salario)
//console.log(clon)
console.log(clone.nome)

// usar spread com array
grupoA = ['joao', 'afonso', 'manel']
grupoFinal = ['zeca', ...grupoA, 'teste']
console.log(grupoFinal)