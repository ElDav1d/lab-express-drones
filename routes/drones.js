const { response } = require("express");
const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((response) => {
      res.render("drones/list.hbs", {
        droneList: response,
      });
    })
    .catch((err) => {
      next(err);
    });
  // ... your code here
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => {
      next(error);
      res.render("drones/create-form.hbs");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      res.render("drones/update-form.hbs", drone)

    })
    .catch((err) => {
      next(err)
    })

});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones")
    })
    .catch((err) => {
      res.render('drones/update-form');
    })

});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
