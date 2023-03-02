let dobro = function(a){
    return 2*a
}

dobro = (a) =>{
    return 2*a
}

dobro = a => 2*a // sem corpo o return e ativo automaticamente

console.log(dobro(5))

let ola = function(){
    return 'ola'
}

ola = () => 'ola'

ola = _ => 'ola'

console.log(ola())