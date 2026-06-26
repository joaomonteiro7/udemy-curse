function euro(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `${valor.toFixed(2)}€`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}

console.log(euro(12, 124, "add"));

const preco = 29.9;
const precoParcela = 11;
console.log(`1x de ${preco} ou 3x de ${precoParcela}.`);

// tagged template - mais complexo, manipulando os valores
