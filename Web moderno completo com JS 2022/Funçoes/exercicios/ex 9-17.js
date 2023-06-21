console.log("__________________ex9____________________")

const notas = (nota) =>{
        if (nota % 5 > 2) {
            console.log(nota%5)
            console.log(5 - (nota % 5))
            return nota + (5 - (nota % 5))
        } else {
            return nota
        }
}

notas(78)