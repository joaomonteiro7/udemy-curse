// nao aceita repetição e nem tem indice

const nums = new Set();
nums.add(1);
nums.add(2);
nums.add(3);
nums.add(1); // não será adicionado, pois já existe
console.log(nums);
console.log(nums.size);
console.log(nums.has(2));
nums.delete(2);
console.log(nums.has(2));

const letras = [`a`, `b`, `c`, `a`];
const letrasSet = new Set(letras);
console.log(letrasSet);
