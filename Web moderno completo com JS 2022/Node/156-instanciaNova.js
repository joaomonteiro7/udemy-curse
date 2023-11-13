//uma factory returno um novo obj
module.exports =  () => {
    return{
        valor:1,
        inc(){
            this.valor++
        }
        }
}