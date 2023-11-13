const fs = require('fs');

const produto = {
    nome: 'Camisa Polo', 
    preco: 79.9,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    if (err) throw err;
     console.log('Arquivo criado com sucesso!')
}) // passar de obj para formato json