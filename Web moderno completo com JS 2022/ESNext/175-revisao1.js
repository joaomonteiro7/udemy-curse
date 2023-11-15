// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b)

// template string
let nomee = "John"
console.log(`${nomee} yikes`)

// destructuring
const [l, e, ...tras] = 'Cod3r'
console.log([l,e,tras])

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: 'joao', idade: 20}
console.log(idade, nome)

