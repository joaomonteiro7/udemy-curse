const moduloA = require('../../150 - moduloA')
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http') /* procura diretamente os modulos instalados na pasta node_modules */
http.createServer((req, res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)