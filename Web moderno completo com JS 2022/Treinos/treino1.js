const name = 'joao'
const age = 19

template = `whatsup boyyys!!
Im ${name} i have ${age} years old`

console.log(template)

const string = 'joao marcelo, bastos monteiro'

console.log(string.split(','))
console.log(string.replace('s', 'b')) // procura o primeiro valor igual e substitui
console.log('maiusculas ->' + string.toUpperCase()) //passa tudo para maiusculas
console.log('indice do ultimo o ->' + string.lastIndexOf('o'))


let x = 25
console.log('raiz quadrada de 25 ->' + Math.sqrt(x))

x = 2
console.log('2 elevado a 2 ->' + Math.pow(x,2)) //x elevado a 2

console.log('damn' * 2)
console.log('20' / 2)
console.log('10.20' / 2)
console.log('10,2' / 2)
console.log('2' + 5)