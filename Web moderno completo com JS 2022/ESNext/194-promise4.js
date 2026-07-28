const randomNumber = (min, max, tempo = 2000) => {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1)) + min;
      resolve(random);
    }, tempo);
  });
};

function gerarNumeros() {
  return Promise.all([
    randomNumber(1, 60, 1000),
    randomNumber(1, 60, 500),
    randomNumber(1, 60, 800),
    randomNumber(1, 60, 1500),
    randomNumber(1, 60, 1000),
  ]);
}

gerarNumeros().then((numeros) => {
  console.log(numeros);
});
