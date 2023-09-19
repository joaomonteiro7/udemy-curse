const escola = 'estg'

console.log(escola.charAt(0)) // vai ver a letra na posicao 4
console.log(escola.charCodeAt(3)); // valor na tabela ascii
console.log(escola.indexOf('s')) // retorna o indice da posicao;
console.log(escola.substring(1)); // a partir do indice 1 pra frente
console.log(escola.substring(0,3)); // do indice 0 ate ao 2 n inclui o 3
console.log('escola '.concat(escola) + '!!'); //fazer concactenaçao de strings 
console.log(escola.replace('e', 'b')); // o 1º valor tem de estrar na string e e substituido plo 2º valor
console.log('ana, maria, pedro'.split(',')); // da string passa pra um array
