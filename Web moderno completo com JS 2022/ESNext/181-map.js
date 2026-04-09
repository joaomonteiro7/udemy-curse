const tec = new Map();
tec.set(`react`, { framework: false });
tec.set(`angular`, { framework: true });

console.log(tec.react);
console.log(tec.get(`react`).framework);

const keys = new Map([
  [function () {}, "funcao"],
  [{}, `obj`],
  [123, `num`],
]);

keys.forEach((valor, chave) => {
  console.log(valor, chave);
});

console.log(keys.has(`123`));
console.log(keys.has({}));

keys.delete(123);
console.log(keys.has(123));
console.log(keys.size);
keys.set(1, `aula`);
console.log(keys.size);
console.log(keys);
