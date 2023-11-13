const fs = require('fs') // file sistem


const caminho = __dirname + '/162-lerArquivos.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(config.db.port, config.db.host)
})

const config = require('./162-lerArquivos.json')
console.log(config.db)
console.log(config.db.host)

fs.readdir(__dirname, (err, arquivos)=>{
    console.log(`conteudo da pasta`)
    console.log(arquivos)
})

