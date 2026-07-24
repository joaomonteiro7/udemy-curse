/* setTimeout(() => {
  console.log("2sec");

  setTimeout(() => {
    console.log("3sec");

    setTimeout(() => {
      console.log("4sec");
    }, 4000);
  }, 3000);
}, 2000); */

const getUser = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        name: "joao",
        age: 25,
      };
      resolve(user);
    }, tempo);
  });
};

/* esperarPor().then((texto) => {
  console.log(texto);
}); */

async function userInfo() {
  const user = await getUser();
  console.log(user.name, user.age);
}

userInfo();
