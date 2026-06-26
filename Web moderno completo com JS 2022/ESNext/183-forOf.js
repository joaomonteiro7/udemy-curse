for (let letras of "coder") {
  console.log(letras);
}

const assuntos = ["map", "set", "promise"];

for (let i in assuntos) {
  console.log(i);
}

for (let assunto of assuntos) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ["map", { abordado: true }],
  ["set", { abordado: true }],
  ["promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch);
  console.log(vl);
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
}
