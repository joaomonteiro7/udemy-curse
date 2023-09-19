const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`) // o indice começa em zero e vai até o tamanho do array 
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exebirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exebirAprovados)
