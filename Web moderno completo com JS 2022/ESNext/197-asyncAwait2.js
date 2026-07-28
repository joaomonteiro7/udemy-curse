const randomNumber = (min, max, sameNumb) => {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const random = parseInt(Math.random() * (max - min + 1)) + min;
    if (sameNumb.includes(random)) {
      reject("already registed");
    } else {
      resolve(random);
    }
  });
};

async function generateNumbers(qntNumbers) {
  try {
    const numbers = [];
    for (let _ of Array(qntNumbers).fill()) {
      number = await randomNumber(10, 50, numbers);
      numbers.push(number);
    }
    return numbers;
  } catch (error) {
    throw "chatooo";
  }
}

generateNumbers(9)
  .then((value) => {
    console.log(value);
  })
  .catch(console.log);
