// Iteration #1
require("../db");
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drone.create(drones)
  .then((reponse) => {
    console.log("Seeds sent! ", reponse);
    return mongoose.disconnect();
  })
  .then(() => {
    console.log("disconnect");
  })
  .catch((error) => {
    console.log(error);
  });
