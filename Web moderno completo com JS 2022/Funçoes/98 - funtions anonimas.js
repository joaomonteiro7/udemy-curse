const soma = function (x, y) {
  return x + y;
};

const imprimir = function (a, b, operecao = soma) {
  console.log(operecao(a, b));
};

imprimir(3, 4);
imprimir(3, 4, soma);
imprimir(3, 4, function (x, y) {
  return x - y;
});
imprimir(3, 4, (x, y) => {
  return x * y;
});
const pessoa = {
  falar: function () {
    console.log("ola");
  },
};
pessoa.falar();
