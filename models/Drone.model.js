// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    propellers: {
      type: Number,
      required: true,
    },
    maxSpeed: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Drone = model("Drone", droneSchema);
module.exports = Drone;
