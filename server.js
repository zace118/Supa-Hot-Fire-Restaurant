const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("epic! this works!");

class Reservation {
    constructor(name, phone, email, id) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.id = id;
      this.table = "";
    }
    getName() {
      console.log(`Hello, my name is ${this.name}`);
      return this.name;
    }
    getId() {
      console.log(`  ${this.id}`);
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return this.role;
    }
  };
  module.exports = Reservation;

app.get("/", function(req, res) {
    req.sendFile(path.join(__dirname, ""))
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });