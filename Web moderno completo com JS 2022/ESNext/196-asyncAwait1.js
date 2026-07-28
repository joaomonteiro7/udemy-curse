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

async function userInfo() {
  const user = await getUser(2000);
  console.log(user);
  const user2 = await getUser(2000);
  console.log(user2);
}

userInfo();
