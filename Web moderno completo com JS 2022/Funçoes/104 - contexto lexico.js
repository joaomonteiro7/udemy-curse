const valor = "global"

function mine() {
    console.log(valor)
}

function exec(){
    const valor = "local"
    mine()
}

exec()