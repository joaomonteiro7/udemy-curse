const randomNumber = (min, max) => {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    const random = parseInt(Math.random() * (max - min + 1)) + min;
    resolve(random);
  });
};

async function getNumber(min, max) {
  const number = await randomNumber(min, max);
  console.log(number);
}

getNumber(5, 7);

randomNumber(1, 5).then((number) => {
  console.log(`o numero que saiu é: ${number}`);
});
