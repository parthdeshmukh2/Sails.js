const express = require("express");
const app = express();

const pug = require("pug");

app.set("view engine", "pug");

const compiledFunction = pug.compileFile("index1.pug");

app.get("/", (req, res) => {
  res.send(compiledFunction({ name: "Parth" }));
});

app.listen(8080, async () => {
  try {
    console.log("connected");
  } catch (error) {
    console.log(err);
  }
});
