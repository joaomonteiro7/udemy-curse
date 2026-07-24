const fs = require("fs"); // file sistem

const folderContent = (filePath) => {
  //const filePath = __dirname + "/192-lerArquivos.json";
  return new Promise((resolve) => {
    // assincrono
    fs.readFile(filePath, "utf-8", (err, fileContent) => {
      resolve(fileContent);
    });
  });
};

/* folderContent(__dirname + "/192-lerArquivos.json").then((content) => {
  console.log(content);
}); */

async function getContent(path) {
  const fileContent = await folderContent(path);
  console.log(fileContent);
}

const path = __dirname + "/192-lerArquivos.json";
getContent(path);
JSON.parse();
