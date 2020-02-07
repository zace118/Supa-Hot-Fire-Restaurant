const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("epic! this works!");

class Reservation {
    constructor(name, email, guests) {
      this.name = name;
      this.email = email;
      this.guests = guests;
      this.table = "";
    }
    getName() {
      console.log(`Hello, my name is ${this.name}`);
      return this.name;
    }
    getEmail() {
      return this.email;
    }
    getGuests() {
      return this.guests;
    }
    getTable() {
        console.log(`  ${this.table}`);
        return this.id;
      }
  };
  module.exports = Reservation;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/restaurant", function(req, res) {
    res.sendFile(path.join(__dirname, "restaurant.html"))
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });