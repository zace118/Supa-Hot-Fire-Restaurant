const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("epic! this works!");




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });