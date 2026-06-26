function falarDepois(seg, frase) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(frase);
    }, seg * 1000);
  });
}

falarDepois(2, "vamos la")
  .then((frase) => frase.concat(" dormir"))
  .then((fraseFinal) => console.log(fraseFinal));
