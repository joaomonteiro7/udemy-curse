// middleware pattern - chain of responsability

const passo1 = (ctx, nxt) =>{
    ctx.valor1 = 'mid1'
    nxt()
}

const passo2 = (ctx, nxt) =>{
    ctx.valor2 = 'mid2'
    nxt()
}

const passo3 = (ctx) =>{
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middlewares) =>{
    const execPasso = indice =>{
        if(middlewares && indice < middlewares.length) // se existir middlewares, e o indice for menor q o tamanho do array de middlewares
            middlewares[indice](ctx,() => {execPasso(indice+1)}) // como sao function dentro do array os () tem de vir depois de indicado o indice, para saber que e uma function que vamos chamar
    }
    execPasso(0)
}
const ctx= {}

exec(ctx, passo1, passo2, passo3)
console.log(ctx)