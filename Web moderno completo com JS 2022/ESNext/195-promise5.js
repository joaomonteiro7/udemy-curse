function workOrNo(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log("abc");
      if (Math.random() < chanceErro) {
        reject("Error");
      } else {
        resolve(valor);
      }
    } catch (error) {
      reject(error);
    }
  });
}

workOrNo(2, 0.6)
  .then((valor) => {
    console.log(valor);
  })
  .then(
    (valor) => {
      consol.log(`valor ${valor}`);
    },
    (erro) => {
      console.log(`error ${erro}`);
    },
  )
  .catch((erro) => {
    console.log(`erro ${erro}`);
  })
  .then(() => {
    console.log("fim");
  });

function name(params) {
  return new Promise((resolve, reject) => {});
}
