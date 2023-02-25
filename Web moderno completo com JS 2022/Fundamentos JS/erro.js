function tratarErro(erro){
    throw new Error('...')
}

function imrpimirNome(obj){
    try{ // se o codigo correr bm executa
        console.log(obj.name.toUpperCase()+ '!!!');
    }
    catch(e){
        tratarErro(e)
    }
    finally{ //sempre executado
        console.log('final')
    }
}

const obj = {
    nome: 'joao'
}

imrpimirNome(obj)