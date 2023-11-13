const saudacoes = require('./160-passarParam')('ana', 'jose', 'abel')
console.log(saudacoes.filter(saudacao => saudacao.includes('ana!')))
console.log(saudacoes)