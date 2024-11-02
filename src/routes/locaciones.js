const express = require("express");
const controllers = require("../controllers/favoritelocacionesController");

const route = express.Router();

route.post("/", controllers.saveLocation);
route.get("/", controllers.getLocations);
route.delete("/:id/:iduser", controllers.deleteLocation);
route.get("/one/:id", controllers.optenerLocation);

module.exports= route