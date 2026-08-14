const express = require("express");
const app = express();
const boddyParser = require("body-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, resp) => {
  console.log(req.body);
  console.log(req.query);
  resp.send("congrats");
});

app.post("/usuarios/:id", (req, resp) => {
  console.log(req.params.id);
  console.log(req.body);
  resp.send("alterado");
});

app.listen(3003);
