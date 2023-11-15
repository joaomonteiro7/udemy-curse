const os = require('os')
const anon = process.argv.indexOf('-a') !== -1
console.log(anon)
if(anon){
    process.stdout.write('fala anon')
    process.exit()
}
else{
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data=>{
        const nome = data.toString().replace(`${os.EOL}`, '')
        process.stdout.write(`Fala ${nome}!! ${os.EOL}`)
        process.exit()
    })
}