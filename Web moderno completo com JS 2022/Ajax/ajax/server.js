const bodyParser = require("body-parser"); /* o que vai interpretar os dados e deixa los prontos a ser usados  */
const express = require("express");
const app = express();

/* middleware funcao executada quando uma requisicao chega, pode ser aplicado a algum padrao de url ou a todos */

app.use(
  express.static("."),
); /* o server.js ira servir os ficheiros estaticos */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, resp) => {
  upload(req, resp, (err) => {
    if (err) {
      return resp.end("erro");
    }
    resp.end("concluido");
  });
});

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 10,
  });
});

app.get("/parOuImpar", (req, res) => {
  /* 
  req.body
  req.query
  req.params
  */
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? "par" : "impar",
  });
});

app.listen(8080, () => console.log("exec"));
