console.log("____________________adicinonar item a um array com function e ver valores de posiçoes____________________")
const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

console.log("____________________adicionar items ao array e ver 1 a 1____________________")
const array = []
for(j=0; j < 10; j++){
    array.push(j)
}
for(j=0; j < 10; j++){
    console.log(array[j])
}

