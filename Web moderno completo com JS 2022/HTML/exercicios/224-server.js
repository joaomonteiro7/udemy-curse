const express = require("express");
const app = express();
const boddyParser = require("body-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, resp) => {
  console.log(req.body);
  resp.send("congrats");
});

app.listen(3003);
